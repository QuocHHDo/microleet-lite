import { useState, useEffect, useCallback } from 'react';
import { pythonRuntime } from '@/utils/pythonRunner';
import type { RunOutput, RunTestCase, TestRunOutput } from '@/utils/jsRunner';

/**
 * Hook for running Python (Pyodide in a Web Worker, shared across the page).
 * Code runs off the main thread with a timeout; if it times out the runtime restarts itself.
 * @param shouldLoad - If false, don't start loading Python (default: true)
 */
export function usePyodide(shouldLoad: boolean = true) {
  const [status, setStatus] = useState(pythonRuntime.status);
  const [error, setError] = useState<string | null>(pythonRuntime.error);

  useEffect(() => {
    if (!shouldLoad) return;
    const sync = () => {
      setStatus(pythonRuntime.status);
      setError(pythonRuntime.error);
    };
    const unsubscribe = pythonRuntime.subscribe(sync);
    sync();
    pythonRuntime.start().catch(() => {
      // surfaced through `error`
    });
    return unsubscribe;
  }, [shouldLoad]);

  const runCode = useCallback(
    (code: string): Promise<RunOutput> => pythonRuntime.run(code),
    [],
  );

  const runWithTests = useCallback(
    (
      code: string,
      testCases: RunTestCase[],
      entryPoint?: string,
    ): Promise<TestRunOutput> =>
      pythonRuntime.runTests(code, testCases, { entryPoint }),
    [],
  );

  const loading = shouldLoad && status !== 'ready' && status !== 'error';

  return {
    loading,
    error,
    runCode,
    runWithTests,
    isReady: shouldLoad && status === 'ready',
  };
}
