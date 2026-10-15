import { transform } from 'sucrase';

export interface RunTestCase {
  input: any[];
  expectedOutput: any;
  description?: string;
}

export interface TestResult {
  passed: boolean;
  input: any[];
  expected: any;
  actual: any;
  error: string | null;
}

export interface RunOutput {
  output: string;
  error: string | null;
  executionTime: number;
}

export interface TestRunOutput {
  passed: number;
  total: number;
  results: TestResult[];
  executionTime: number;
}

export const DEFAULT_TIMEOUT_MS = 5000;
const MAX_OUTPUT_CHARS = 20000;
const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

/**
 * Source of the Web Worker. Plain JS (not a TS function) so it survives bundling untouched,
 * and takes `self` as a parameter so tests can run it without a real Worker.
 */
export const WORKER_SOURCE = `
const MAX = ${MAX_OUTPUT_CHARS};
const fmt = (a) => {
  if (typeof a === 'string') return a;
  try { const s = JSON.stringify(a); return s === undefined ? String(a) : s; } catch (e) { return String(a); }
};
const safe = (v) => {
  try { const s = JSON.stringify(v); return s === undefined ? null : JSON.parse(s); } catch (e) { return String(v); }
};
const same = (a, b) => {
  try { return JSON.stringify(a) === JSON.stringify(b); } catch (e) { return false; }
};
self.onmessage = (ev) => {
  const { js, entryPoint, tests } = ev.data;
  let out = '';
  const log = (...args) => {
    if (out.length < MAX) out += args.map(fmt).join(' ') + '\\n';
  };
  const con = { log, info: log, warn: log, error: log, debug: log };
  try {
    const factory = new Function('console', js + '\\n;return ' + (tests ? 'typeof ' + entryPoint + " === 'function' ? " + entryPoint + ' : undefined' : 'undefined') + ';');
    const fn = factory(con);
    if (!tests) {
      self.postMessage({ type: 'done', output: out.slice(0, MAX).replace(/\\n$/, '') });
      return;
    }
    if (typeof fn !== 'function') {
      self.postMessage({ type: 'fatal', error: 'Entry point "' + entryPoint + '" is not defined as a function' });
      return;
    }
    tests.forEach((t, i) => {
      let result;
      try {
        const actual = fn(...JSON.parse(JSON.stringify(t.input)));
        result = { passed: same(actual, t.expectedOutput), input: t.input, expected: t.expectedOutput, actual: safe(actual), error: null };
      } catch (err) {
        result = { passed: false, input: t.input, expected: t.expectedOutput, actual: null, error: err && err.message ? err.message : String(err) };
      }
      self.postMessage({ type: 'result', index: i, result });
    });
    self.postMessage({ type: 'done', output: out.slice(0, MAX).replace(/\\n$/, '') });
  } catch (err) {
    self.postMessage({ type: 'fatal', error: err && err.message ? err.message : String(err) });
  }
};
`;

/** Entry point to use when the problem does not declare one: first top-level function. */
export function inferEntryPoint(code: string): string | null {
  const m =
    code.match(/^\s*(?:export\s+)?(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)/m) ||
    code.match(/^\s*(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*(?::[^=]+)?=\s*(?:async\s*)?(?:function|\()/m);
  return m ? m[1] : null;
}

export type WorkerLike = {
  postMessage: (data: any) => void;
  terminate: () => void;
  onmessage: ((ev: { data: any }) => void) | null;
  onerror: ((ev: { message?: string }) => void) | null;
};

function createWorker(): WorkerLike {
  const blob = new Blob([WORKER_SOURCE], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const worker = new Worker(url) as unknown as WorkerLike;
  // The worker keeps its own copy of the script once started.
  URL.revokeObjectURL(url);
  return worker;
}

interface RunOptions {
  entryPoint?: string;
  tests?: RunTestCase[];
  timeoutMs?: number;
  /** Test seam: supply a worker instead of spawning a real one. */
  workerFactory?: () => WorkerLike;
}

/** Transpile TS→JS, run in a throwaway worker, and kill it if it exceeds the timeout. */
async function execute(code: string, opts: RunOptions) {
  const timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const start = performance.now();

  let js: string;
  try {
    js = transform(code, { transforms: ['typescript'] }).code;
  } catch (err) {
    return { fatal: err instanceof Error ? err.message : String(err), output: '', results: [] as TestResult[], timedOut: false, elapsed: 0 };
  }

  const worker = (opts.workerFactory ?? createWorker)();
  const results: TestResult[] = [];

  return new Promise<{ fatal: string | null; output: string; results: TestResult[]; timedOut: boolean; elapsed: number }>(
    (resolve) => {
      const finish = (fatal: string | null, output: string, timedOut: boolean) => {
        clearTimeout(timer);
        worker.terminate();
        resolve({ fatal, output, results, timedOut, elapsed: performance.now() - start });
      };
      const timer = setTimeout(
        () => finish(`Time limit exceeded (${timeoutMs / 1000}s). Is there an infinite loop?`, '', true),
        timeoutMs,
      );
      worker.onmessage = ({ data }) => {
        if (data.type === 'result') results[data.index] = data.result;
        else if (data.type === 'done') finish(null, data.output, false);
        else if (data.type === 'fatal') finish(data.error, '', false);
      };
      worker.onerror = (ev) => finish(ev.message || 'Script error', '', false);
      worker.postMessage({ js, entryPoint: opts.entryPoint, tests: opts.tests });
    },
  );
}

export async function runJs(code: string, opts: { timeoutMs?: number; workerFactory?: () => WorkerLike } = {}): Promise<RunOutput> {
  const r = await execute(code, opts);
  return { output: r.output, error: r.fatal, executionTime: r.elapsed };
}

export async function runJsTests(
  code: string,
  tests: RunTestCase[],
  opts: { entryPoint?: string; timeoutMs?: number; workerFactory?: () => WorkerLike } = {},
): Promise<TestRunOutput> {
  const entryPoint = opts.entryPoint ?? inferEntryPoint(code);
  const failAll = (error: string): TestRunOutput => ({
    passed: 0,
    total: tests.length,
    executionTime: 0,
    results: tests.map((t) => ({ passed: false, input: t.input, expected: t.expectedOutput, actual: null, error })),
  });

  if (!entryPoint) return failAll('Could not find a function to test. Declare an entry point.');
  if (!IDENTIFIER.test(entryPoint)) return failAll(`Invalid entry point name: ${entryPoint}`);

  const r = await execute(code, { ...opts, entryPoint, tests });
  const results = tests.map(
    (t, i): TestResult =>
      r.results[i] ?? {
        passed: false,
        input: t.input,
        expected: t.expectedOutput,
        actual: null,
        error: r.fatal ?? 'Did not run',
      },
  );
  return { passed: results.filter((x) => x.passed).length, total: tests.length, results, executionTime: r.elapsed };
}
