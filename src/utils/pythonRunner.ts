import {
  DEFAULT_TIMEOUT_MS,
  type RunOutput,
  type RunTestCase,
  type TestResult,
  type TestRunOutput,
  type WorkerLike,
} from '@/utils/jsRunner';

export const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/';
/** Installing packages named in imports (numpy etc.) can be slow; it is not counted against the run timeout. */
const PREPARE_TIMEOUT_MS = 60_000;
const INIT_TIMEOUT_MS = 90_000;
const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

/** Python helpers loaded into Pyodide once per worker. */
export const PY_HELPERS = `
import ast, io, json, traceback
from contextlib import redirect_stdout, redirect_stderr
import js

class _Cap(io.TextIOBase):
    def __init__(self, cap):
        self.parts = []
        self.n = 0
        self.cap = cap
    def writable(self):
        return True
    def write(self, text):
        if self.n < self.cap:
            self.parts.append(text[: self.cap - self.n])
        self.n += len(text)
        return len(text)
    def getvalue(self):
        return ''.join(self.parts)

def _describe(exc):
    if isinstance(exc, SyntaxError):
        return 'SyntaxError: ' + str(exc)
    line = None
    for frame in traceback.extract_tb(exc.__traceback__):
        if frame.filename == '<solution>':
            line = frame.lineno
    msg = type(exc).__name__
    if str(exc):
        msg += ': ' + str(exc)
    return msg + (' (line ' + str(line) + ')' if line else '')

def _norm(v):
    if isinstance(v, float) and v.is_integer():
        return int(v)
    if isinstance(v, (list, tuple)):
        return [_norm(x) for x in v]
    if isinstance(v, dict):
        return {str(k): _norm(x) for k, x in v.items()}
    return v

def _jsonable(v):
    return _norm(json.loads(json.dumps(v, default=str)))

def _exec(code, ns, echo):
    tree = ast.parse(code, '<solution>', 'exec')
    last = None
    if echo and tree.body and isinstance(tree.body[-1], ast.Expr):
        last = ast.Expression(tree.body.pop().value)
    exec(compile(tree, '<solution>', 'exec'), ns)
    if last is not None:
        value = eval(compile(last, '<solution>', 'eval'), ns)
        if value is not None:
            print(value if isinstance(value, str) else repr(value))

def ml_run(code, echo):
    out = _Cap(20000)
    err = _Cap(20000)
    error = None
    ns = {'__name__': '__main__'}
    with redirect_stdout(out), redirect_stderr(err):
        try:
            _exec(code, ns, echo)
        except BaseException as exc:
            error = _describe(exc)
    return json.dumps({'output': out.getvalue(), 'error': error or err.getvalue() or None})

def ml_tests(code, entry, tests_json):
    tests = json.loads(tests_json)
    ns = {'__name__': '__main__'}
    sink = _Cap(2000)
    with redirect_stdout(sink), redirect_stderr(sink):
        try:
            _exec(code, ns, False)
        except BaseException as exc:
            return json.dumps({'fatal': _describe(exc)})
        fn = ns.get(entry)
        if not callable(fn):
            return json.dumps({'fatal': 'Entry point "' + entry + '" is not defined as a function'})
        for i, t in enumerate(tests):
            try:
                actual = _jsonable(fn(*json.loads(json.dumps(t['input']))))
                same = json.dumps(actual, sort_keys=True) == json.dumps(_norm(t['expectedOutput']), sort_keys=True)
                res = {'passed': same, 'actual': actual, 'error': None}
            except BaseException as exc:
                res = {'passed': False, 'actual': None, 'error': _describe(exc)}
            js.mlEmit(i, json.dumps(res))
    return json.dumps({'ok': True})
`;

/**
 * Source of the Python Web Worker. Plain JS, takes `self` as a parameter's global so tests can run it
 * outside a browser.
 */
export const PYTHON_WORKER_SOURCE = `
const PYODIDE_URL = ${JSON.stringify(PYODIDE_URL)};
const HELPERS = ${JSON.stringify(PY_HELPERS)};
let py = null;
self.mlEmit = (i, s) => self.postMessage({ type: 'result', index: i, result: JSON.parse(s) });
const msg = (e) => (e && e.message ? e.message : String(e));
self.onmessage = async (ev) => {
  const m = ev.data;
  try {
    if (m.type === 'init') {
      try {
        self.importScripts(PYODIDE_URL + 'pyodide.js');
        py = await self.loadPyodide({ indexURL: PYODIDE_URL });
        await py.runPythonAsync(HELPERS);
      } catch (e) {
        self.postMessage({ type: 'init-error', error: 'Failed to load Python: ' + msg(e) });
        return;
      }
      self.postMessage({ type: 'ready' });
      return;
    }
    try { await py.loadPackagesFromImports(m.code); } catch (e) { /* not fatal: the import error will surface when the code runs */ }
    self.postMessage({ type: 'started' });
    if (m.type === 'run') {
      const r = JSON.parse(py.globals.get('ml_run')(m.code, !!m.echo));
      self.postMessage({ type: 'done', output: r.output, error: r.error });
    } else if (m.type === 'tests') {
      const r = JSON.parse(py.globals.get('ml_tests')(m.code, m.entryPoint, JSON.stringify(m.tests)));
      self.postMessage({ type: 'done', fatal: r.fatal || null });
    }
  } catch (e) {
    self.postMessage({ type: 'done', output: '', error: msg(e), fatal: msg(e) });
  }
};
`;

/** Entry point to use when the problem does not declare one: the first top-level def. */
export function inferPythonEntryPoint(code: string): string | null {
  const m = code.match(/^(?:async\s+)?def\s+([A-Za-z_]\w*)\s*\(/m);
  return m ? m[1] : null;
}

function createPythonWorker(): WorkerLike {
  const blob = new Blob([PYTHON_WORKER_SOURCE], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const worker = new Worker(url) as unknown as WorkerLike;
  URL.revokeObjectURL(url);
  return worker;
}

export type PythonStatus = 'idle' | 'loading' | 'ready' | 'error';

interface Outcome {
  loadError: string | null;
  fatal: string | null;
  output: string;
  error: string | null;
  results: TestResult[];
  timedOut: boolean;
  elapsed: number;
}

/**
 * One shared Pyodide worker. Code runs off the main thread; if it exceeds the timeout the worker is
 * killed and a fresh one starts loading in the background.
 */
export class PythonRuntime {
  status: PythonStatus = 'idle';
  error: string | null = null;
  private worker: WorkerLike | null = null;
  private ready: Promise<void> | null = null;
  private listeners = new Set<() => void>();
  private queue: Promise<unknown> = Promise.resolve();

  constructor(
    private factory: () => WorkerLike = createPythonWorker,
    private initTimeoutMs = INIT_TIMEOUT_MS,
    private prepareTimeoutMs = PREPARE_TIMEOUT_MS,
  ) {}

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private setStatus(status: PythonStatus, error: string | null = null) {
    this.status = status;
    this.error = error;
    this.listeners.forEach((l) => l());
  }

  /** Begin loading Pyodide (idempotent). Rejects if loading fails; calling again retries. */
  start(): Promise<void> {
    if (this.ready) return this.ready;
    this.setStatus('loading');
    const worker = this.factory();
    this.worker = worker;
    const ready = new Promise<void>((resolve, reject) => {
      const fail = (message: string) => {
        clearTimeout(timer);
        worker.terminate();
        if (this.worker === worker) {
          this.worker = null;
          this.ready = null;
          this.setStatus('error', message);
        }
        reject(new Error(message));
      };
      const timer = setTimeout(
        () =>
          fail('Timed out loading Python. Check your connection and retry.'),
        this.initTimeoutMs,
      );
      worker.onmessage = ({ data }) => {
        if (data.type === 'ready') {
          clearTimeout(timer);
          this.setStatus('ready');
          resolve();
        } else if (data.type === 'init-error') {
          fail(data.error);
        }
      };
      worker.onerror = (ev) => fail(ev.message || 'Failed to start Python');
    });
    ready.catch(() => {});
    this.ready = ready;
    // Only start the worker once `this.ready` is set, so an immediate failure clears it properly.
    worker.postMessage({ type: 'init' });
    return ready;
  }

  /** Drop the current worker and begin loading a replacement. */
  private restart(worker: WorkerLike) {
    worker.terminate();
    if (this.worker === worker) {
      this.worker = null;
      this.ready = null;
    }
    this.start().catch(() => {});
  }

  private execute(
    message: Record<string, any>,
    timeoutMs: number,
  ): Promise<Outcome> {
    const job = async (): Promise<Outcome> => {
      const base = {
        fatal: null,
        output: '',
        error: null,
        results: [] as TestResult[],
        timedOut: false,
        elapsed: 0,
      };
      try {
        await this.start();
      } catch (e) {
        return {
          ...base,
          loadError: e instanceof Error ? e.message : String(e),
        };
      }
      const worker = this.worker!;
      const results: TestResult[] = [];
      return new Promise<Outcome>((resolve) => {
        let startedAt = performance.now();
        let timer: ReturnType<typeof setTimeout>;
        const end = (patch: Partial<Outcome>, kill: boolean) => {
          clearTimeout(timer);
          worker.onmessage = null;
          worker.onerror = null;
          if (kill) this.restart(worker);
          resolve({
            ...base,
            loadError: null,
            results,
            elapsed: performance.now() - startedAt,
            ...patch,
          });
        };
        const timeout = () =>
          end(
            {
              timedOut: true,
              fatal: `Time limit exceeded (${timeoutMs / 1000}s). Is there an infinite loop?`,
              error: `Time limit exceeded (${timeoutMs / 1000}s). Is there an infinite loop?`,
            },
            true,
          );
        timer = setTimeout(timeout, this.prepareTimeoutMs);
        worker.onmessage = ({ data }) => {
          if (data.type === 'started') {
            clearTimeout(timer);
            startedAt = performance.now();
            timer = setTimeout(timeout, timeoutMs);
          } else if (data.type === 'result') {
            results[data.index] = data.result;
          } else if (data.type === 'done') {
            end(
              {
                output: data.output ?? '',
                error: data.error ?? null,
                fatal: data.fatal ?? null,
              },
              false,
            );
          }
        };
        worker.onerror = (ev) =>
          end(
            {
              fatal: ev.message || 'Python crashed',
              error: ev.message || 'Python crashed',
            },
            true,
          );
        worker.postMessage(message);
      });
    };
    const run = this.queue.then(job, job);
    this.queue = run.catch(() => {});
    return run;
  }

  /** Run a script and capture its output. `echo` also prints the value of a final expression, like a REPL. */
  async run(
    code: string,
    opts: { timeoutMs?: number; echo?: boolean } = {},
  ): Promise<RunOutput> {
    const timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    const r = await this.execute(
      { type: 'run', code, echo: !!opts.echo },
      timeoutMs,
    );
    return {
      output: r.output,
      error: r.loadError ?? r.error,
      executionTime: r.elapsed,
    };
  }

  async runTests(
    code: string,
    tests: RunTestCase[],
    opts: { entryPoint?: string; timeoutMs?: number } = {},
  ): Promise<TestRunOutput> {
    const entryPoint = opts.entryPoint ?? inferPythonEntryPoint(code);
    const failAll = (error: string): TestRunOutput => ({
      passed: 0,
      total: tests.length,
      executionTime: 0,
      results: tests.map((t) => ({
        passed: false,
        input: t.input,
        expected: t.expectedOutput,
        actual: null,
        error,
      })),
    });
    if (!entryPoint)
      return failAll(
        'Could not find a function to test. Declare an entry point.',
      );
    if (!IDENTIFIER.test(entryPoint))
      return failAll(`Invalid entry point name: ${entryPoint}`);

    const r = await this.execute(
      { type: 'tests', code, entryPoint, tests },
      opts.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    );
    const results = tests.map((t, i): TestResult => {
      const got = r.results[i];
      return got
        ? {
            passed: got.passed,
            input: t.input,
            expected: t.expectedOutput,
            actual: got.actual,
            error: got.error,
          }
        : {
            passed: false,
            input: t.input,
            expected: t.expectedOutput,
            actual: null,
            error: r.loadError ?? r.fatal ?? 'Did not run',
          };
    });
    return {
      passed: results.filter((x) => x.passed).length,
      total: tests.length,
      results,
      executionTime: r.elapsed,
    };
  }
}

export const pythonRuntime = new PythonRuntime();
