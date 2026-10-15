import {
  PYTHON_WORKER_SOURCE,
  PY_HELPERS,
  PythonRuntime,
  inferPythonEntryPoint,
} from '../pythonRunner';

type Handler = (msg: any, reply: (data: any) => void) => void;

/** A scripted stand-in for the Python worker: `handler` decides how it answers each message. */
function scriptedWorkers(handler: Handler) {
  const created: any[] = [];
  const factory = () => {
    const w: any = {
      onmessage: null,
      onerror: null,
      terminated: false,
      terminate: jest.fn(() => {
        w.terminated = true;
      }),
      postMessage: (msg: any) => {
        if (w.terminated) return;
        handler(msg, (data) => !w.terminated && w.onmessage?.({ data }));
      },
    };
    created.push(w);
    return w;
  };
  return { factory, created };
}

const happy: Handler = (msg, reply) => {
  if (msg.type === 'init') reply({ type: 'ready' });
  else if (msg.type === 'run') {
    reply({ type: 'started' });
    reply({ type: 'done', output: `ran:${msg.code}`, error: null });
  } else if (msg.type === 'tests') {
    reply({ type: 'started' });
    msg.tests.forEach((t: any, i: number) =>
      reply({
        type: 'result',
        index: i,
        result: {
          passed: t.input[0] === t.expectedOutput,
          actual: t.input[0],
          error: null,
        },
      }),
    );
    reply({ type: 'done', fatal: null });
  }
};

describe('inferPythonEntryPoint', () => {
  it('finds the first top-level def', () => {
    expect(
      inferPythonEntryPoint(
        'import os\n\ndef two_sum(a, b):\n  pass\ndef other(): pass',
      ),
    ).toBe('two_sum');
    expect(
      inferPythonEntryPoint('class A:\n    def method(self): pass'),
    ).toBeNull();
    expect(inferPythonEntryPoint('print(1)')).toBeNull();
  });
});

describe('worker source', () => {
  it('is valid JavaScript and embeds the Python helpers', () => {
    expect(() => new Function('self', PYTHON_WORKER_SOURCE)).not.toThrow();
    expect(PYTHON_WORKER_SOURCE).toContain('def ml_run');
    expect(PY_HELPERS).toContain('def ml_tests');
  });
});

describe('PythonRuntime', () => {
  it('loads once and reports status changes', async () => {
    const { factory, created } = scriptedWorkers(happy);
    const rt = new PythonRuntime(factory);
    const seen: string[] = [];
    rt.subscribe(() => seen.push(rt.status));
    await Promise.all([rt.start(), rt.start()]);
    expect(created).toHaveLength(1);
    expect(seen).toEqual(['loading', 'ready']);
  });

  it('runs code and returns its output', async () => {
    const rt = new PythonRuntime(scriptedWorkers(happy).factory);
    const r = await rt.run('print(1)');
    expect(r).toMatchObject({ output: 'ran:print(1)', error: null });
  });

  it('reports a load failure and lets the next call retry', async () => {
    let attempt = 0;
    const { factory, created } = scriptedWorkers((msg, reply) => {
      if (msg.type === 'init') {
        attempt++;
        if (attempt === 1)
          reply({
            type: 'init-error',
            error: 'Failed to load Python: network',
          });
        else reply({ type: 'ready' });
      } else happy(msg, reply);
    });
    const rt = new PythonRuntime(factory);
    const first = await rt.run('x');
    expect(first.error).toMatch(/network/);
    expect(rt.status).toBe('error');
    const second = await rt.run('x');
    expect(second.error).toBeNull();
    expect(created).toHaveLength(2);
  });

  it('gives up if loading never finishes', async () => {
    const { factory } = scriptedWorkers(() => {});
    const rt = new PythonRuntime(factory, 30);
    const r = await rt.run('x');
    expect(r.error).toMatch(/Timed out loading Python/);
    expect(rt.status).toBe('error');
  });

  it('kills a runaway script, keeps earlier test results and starts a fresh worker', async () => {
    const { factory, created } = scriptedWorkers((msg, reply) => {
      if (msg.type === 'tests') {
        reply({ type: 'started' });
        reply({
          type: 'result',
          index: 0,
          result: { passed: true, actual: 1, error: null },
        });
        // then hangs on test 2
      } else happy(msg, reply);
    });
    const rt = new PythonRuntime(factory);
    const out = await rt.runTests(
      'def f(x): return x',
      [1, 2, 3].map((n) => ({ input: [n], expectedOutput: n })),
      { entryPoint: 'f', timeoutMs: 40 },
    );
    expect(out.results[0].passed).toBe(true);
    expect(out.results[1].error).toMatch(/Time limit exceeded/);
    expect(out.results[2].error).toMatch(/Time limit exceeded/);
    expect(out.passed).toBe(1);
    expect(created[0].terminate).toHaveBeenCalled();
    expect(created).toHaveLength(2);

    // the replacement works
    const r = await rt.run('print(2)');
    expect(r.output).toBe('ran:print(2)');
  });

  it('does not count package installation against the run timeout', async () => {
    const { factory } = scriptedWorkers((msg, reply) => {
      if (msg.type === 'run') {
        setTimeout(() => {
          reply({ type: 'started' });
          setTimeout(
            () => reply({ type: 'done', output: 'ok', error: null }),
            10,
          );
        }, 80); // "installing numpy" takes longer than timeoutMs
      } else happy(msg, reply);
    });
    const rt = new PythonRuntime(factory);
    const r = await rt.run('import numpy', { timeoutMs: 50 });
    expect(r).toMatchObject({ output: 'ok', error: null });
  });

  it('treats a worker crash as a failure and restarts', async () => {
    let crash = true;
    const { factory, created } = scriptedWorkers((msg, reply) => {
      if (msg.type === 'run' && crash) {
        crash = false;
        created[0].onerror?.({ message: 'out of memory' });
      } else happy(msg, reply);
    });
    const rt = new PythonRuntime(factory);
    const r = await rt.run('x');
    expect(r.error).toBe('out of memory');
    expect(created).toHaveLength(2);
  });

  it('runs overlapping requests one at a time, in order', async () => {
    const order: string[] = [];
    const { factory } = scriptedWorkers((msg, reply) => {
      if (msg.type === 'run') {
        order.push(`start:${msg.code}`);
        reply({ type: 'started' });
        setTimeout(() => {
          order.push(`end:${msg.code}`);
          reply({ type: 'done', output: msg.code, error: null });
        }, 20);
      } else happy(msg, reply);
    });
    const rt = new PythonRuntime(factory);
    await Promise.all([rt.run('a'), rt.run('b')]);
    expect(order).toEqual(['start:a', 'end:a', 'start:b', 'end:b']);
  });

  it('validates the entry point before touching the worker', async () => {
    const { factory, created } = scriptedWorkers(happy);
    const rt = new PythonRuntime(factory);
    const none = await rt.runTests('print(1)', [
      { input: [1], expectedOutput: 1 },
    ]);
    expect(none.results[0].error).toMatch(/Could not find a function/);
    const bad = await rt.runTests(
      'def f(): pass',
      [{ input: [1], expectedOutput: 1 }],
      { entryPoint: 'f);x(' },
    );
    expect(bad.results[0].error).toMatch(/Invalid entry point/);
    expect(created).toHaveLength(0);
  });

  it('surfaces a fatal error (e.g. syntax error) on every test', async () => {
    const { factory } = scriptedWorkers((msg, reply) => {
      if (msg.type === 'tests') {
        reply({ type: 'started' });
        reply({ type: 'done', fatal: 'SyntaxError: invalid syntax' });
      } else happy(msg, reply);
    });
    const rt = new PythonRuntime(factory);
    const out = await rt.runTests(
      'def f(:',
      [
        { input: [1], expectedOutput: 1 },
        { input: [2], expectedOutput: 2 },
      ],
      { entryPoint: 'f' },
    );
    expect(out.passed).toBe(0);
    expect(out.results.map((r) => r.error)).toEqual([
      'SyntaxError: invalid syntax',
      'SyntaxError: invalid syntax',
    ]);
  });
});
