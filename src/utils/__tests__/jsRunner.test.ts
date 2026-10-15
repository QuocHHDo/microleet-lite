import { inferEntryPoint, runJs, runJsTests } from '../jsRunner';
import { fakeWorker } from '../testing/fakeWorker';

describe('inferEntryPoint', () => {
  it('finds function declarations and arrow consts', () => {
    expect(inferEntryPoint('function foo(a: number) {}')).toBe('foo');
    expect(inferEntryPoint('const bar = (a) => a')).toBe('bar');
    expect(inferEntryPoint('console.log(1)')).toBeNull();
  });
});

describe('runJs', () => {
  it('captures console output', async () => {
    const r = await runJs('console.log("hi", {a:1});', {
      workerFactory: fakeWorker(),
    });
    expect(r.error).toBeNull();
    expect(r.output).toBe('hi {"a":1}');
  });

  it('reports runtime errors', async () => {
    const r = await runJs('throw new Error("boom")', {
      workerFactory: fakeWorker(),
    });
    expect(r.error).toBe('boom');
  });

  it('times out and terminates a hung worker', async () => {
    const factory = fakeWorker(true);
    let w: any;
    const r = await runJs('while(true){}', {
      timeoutMs: 50,
      workerFactory: () => (w = factory()),
    });
    expect(r.error).toMatch(/Time limit exceeded/);
    expect(w.terminate).toHaveBeenCalled();
  });
});

describe('runJsTests', () => {
  const code = `function helper() { return 0 }\nfunction add(a: number, b: number): number { return a + b }`;
  const tests = [
    { input: [1, 2], expectedOutput: 3 },
    { input: [1, 2], expectedOutput: 4 },
  ];

  it('uses the declared entry point, not the first function', async () => {
    const r = await runJsTests(code, tests, {
      entryPoint: 'add',
      workerFactory: fakeWorker(),
    });
    expect(r.passed).toBe(1);
    expect(r.results[1]).toMatchObject({
      passed: false,
      actual: 3,
      expected: 4,
    });
  });

  it('fails every test when the entry point is missing', async () => {
    const r = await runJsTests(code, tests, {
      entryPoint: 'nope',
      workerFactory: fakeWorker(),
    });
    expect(r.passed).toBe(0);
    expect(r.results[0].error).toMatch(/not defined as a function/);
  });

  it('rejects entry points that are not identifiers', async () => {
    const r = await runJsTests(code, tests, {
      entryPoint: 'add);evil(',
      workerFactory: fakeWorker(),
    });
    expect(r.results[0].error).toMatch(/Invalid entry point/);
  });

  it('marks unfinished tests as failed on timeout', async () => {
    const r = await runJsTests(code, tests, {
      entryPoint: 'add',
      timeoutMs: 50,
      workerFactory: fakeWorker(true),
    });
    expect(r.passed).toBe(0);
    expect(r.results[0].error).toMatch(/Time limit exceeded/);
  });
});
