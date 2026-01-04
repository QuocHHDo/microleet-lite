import { useState, useEffect, useCallback } from 'react';
import type { PyodideInterface } from '@/types/pyodide';

// Singleton to ensure Pyodide is only loaded once globally
let globalPyodide: PyodideInterface | null = null;
let pyodidePromise: Promise<PyodideInterface> | null = null;
let loadError: string | null = null;

/**
 * Hook to load and manage Pyodide (Python in WebAssembly)
 * Uses singleton pattern to prevent multiple instances
 * @param shouldLoad - If false, skip loading Pyodide entirely (default: true)
 */
export function usePyodide(shouldLoad: boolean = true) {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(globalPyodide);
  const [loading, setLoading] = useState(!globalPyodide && shouldLoad);
  const [error, setError] = useState<string | null>(loadError);

  useEffect(() => {
    // Skip loading if not needed
    if (!shouldLoad) {
      setLoading(false);
      return;
    }

    let mounted = true;

    async function loadPyodide() {
      // If already loaded, use cached instance
      if (globalPyodide) {
        if (mounted) {
          setPyodide(globalPyodide);
          setLoading(false);
        }
        return;
      }

      // If currently loading, wait for existing promise
      if (pyodidePromise) {
        try {
          const instance = await pyodidePromise;
          if (mounted) {
            setPyodide(instance);
            setLoading(false);
          }
        } catch (err) {
          if (mounted) {
            setError(err instanceof Error ? err.message : 'Failed to load Pyodide');
            setLoading(false);
          }
        }
        return;
      }

      // Start loading Pyodide (first instance)
      try {
        setLoading(true);
        setError(null);

        pyodidePromise = (async () => {
          // Load Pyodide script from CDN if not already loaded
          if (!window.loadPyodide) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
            script.async = true;

            await new Promise((resolve, reject) => {
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            });
          }

          // Load Pyodide from CDN
          const pyodideInstance = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
          });

          globalPyodide = pyodideInstance;
          return pyodideInstance;
        })();

        const instance = await pyodidePromise;

        if (mounted) {
          setPyodide(instance);
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to load Pyodide:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load Python environment');
          setLoading(false);
        }
      }
    }

    loadPyodide();

    return () => {
      mounted = false;
    };
  }, [shouldLoad]);

  /**
   * Run Python code and capture output
   */
  const runCode = useCallback(
    async (code: string): Promise<{ output: string; error: string | null; executionTime: number }> => {
      if (!pyodide) {
        return {
          output: '',
          error: 'Python environment not loaded yet',
          executionTime: 0,
        };
      }

      const startTime = performance.now();

      try {
        // Capture stdout
        await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
        `);

        // Load any required packages from imports
        try {
          await pyodide.loadPackagesFromImports(code);
        } catch (e) {
          // Continue even if package loading fails
          console.warn('Package loading warning:', e);
        }

        // Run the user's code
        await pyodide.runPythonAsync(code);

        // Get stdout and stderr
        const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
        const stderr = await pyodide.runPythonAsync('sys.stderr.getvalue()');

        const endTime = performance.now();
        const executionTime = endTime - startTime;

        return {
          output: stdout || '',
          error: stderr || null,
          executionTime,
        };
      } catch (err) {
        const endTime = performance.now();
        const executionTime = endTime - startTime;

        return {
          output: '',
          error: err instanceof Error ? err.message : String(err),
          executionTime,
        };
      }
    },
    [pyodide],
  );

  /**
   * Run code with test cases
   */
  const runWithTests = useCallback(
    async (
      code: string,
      testCases: Array<{ input: any[]; expectedOutput: any }>,
    ): Promise<{
      passed: number;
      total: number;
      results: Array<{ passed: boolean; input: any[]; expected: any; actual: any; error?: string }>;
      executionTime: number;
    }> => {
      if (!pyodide) {
        return { passed: 0, total: 0, results: [], executionTime: 0 };
      }

      const startTime = performance.now();
      const results: Array<{
        passed: boolean;
        input: any[];
        expected: any;
        actual: any;
        error?: string;
      }> = [];

      try {
        // Load packages if needed
        await pyodide.loadPackagesFromImports(code);

        // Execute the user's code to define functions
        await pyodide.runPythonAsync(code);

        // Run each test case
        for (const testCase of testCases) {
          try {
            // Extract function name from code (assumes first def statement)
            const functionMatch = code.match(/def\s+(\w+)\s*\(/);
            const functionName = functionMatch ? functionMatch[1] : null;

            if (!functionName) {
              results.push({
                passed: false,
                input: testCase.input,
                expected: testCase.expectedOutput,
                actual: null,
                error: 'Could not find function definition',
              });
              continue;
            }

            // Call the function with test inputs
            const inputStr = testCase.input.map((i) => JSON.stringify(i)).join(', ');
            const result = await pyodide.runPythonAsync(`${functionName}(${inputStr})`);

            // Compare result with expected output
            const passed = JSON.stringify(result) === JSON.stringify(testCase.expectedOutput);

            results.push({
              passed,
              input: testCase.input,
              expected: testCase.expectedOutput,
              actual: result,
            });
          } catch (err) {
            results.push({
              passed: false,
              input: testCase.input,
              expected: testCase.expectedOutput,
              actual: null,
              error: err instanceof Error ? err.message : String(err),
            });
          }
        }
      } catch (err) {
        console.error('Test execution error:', err);
      }

      const endTime = performance.now();
      const passed = results.filter((r) => r.passed).length;

      return {
        passed,
        total: testCases.length,
        results,
        executionTime: endTime - startTime,
      };
    },
    [pyodide],
  );

  return {
    pyodide,
    loading,
    error,
    runCode,
    runWithTests,
    isReady: !!pyodide && !loading,
  };
}
