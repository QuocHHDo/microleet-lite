'use client';
import React, { useState } from 'react';
import { Play, Loader2, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { usePyodide } from '@/hooks/usePyodide';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { javascript } from '@codemirror/lang-javascript';
import { Language } from '@/common/commonLanguage';
import { transform } from 'sucrase';

interface CodeExecutorProps {
  initialCode?: string;
  readOnly?: boolean;
  showEditor?: boolean;
  testCases?: Array<{ input: any[]; expectedOutput: any; description?: string }>;
  onSuccess?: () => void;
  language?: Language;
}

export default function CodeExecutor({
  initialCode = '# Write your Python code here\nprint("Hello, World!")',
  readOnly = false,
  showEditor = true,
  testCases,
  onSuccess,
  language = 'python',
}: CodeExecutorProps) {
  // Only load Pyodide when language is Python
  const pyodideData = usePyodide(language === 'python');
  const { loading: pyodideLoading, error: pyodideError, runCode: runPythonCode, runWithTests: runPythonWithTests, isReady: pyodideReady } = pyodideData;

  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [executing, setExecuting] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [testResults, setTestResults] = useState<any>(null);

  const isReady = language === 'python' ? pyodideReady : true; // TypeScript is always ready

  // TypeScript/JavaScript execution helpers
  const runTypeScriptCode = async (code: string): Promise<{ output: string; error: string | null; executionTime: number }> => {
    const startTime = performance.now();
    let output = '';
    let error: string | null = null;

    try {
      // Transpile TypeScript to JavaScript
      const { code: jsCode } = transform(code, {
        transforms: ['typescript'],
      });

      // Capture console.log output
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args: any[]) => {
        logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' '));
      };

      // Execute the code
      try {
        // eslint-disable-next-line no-eval
        eval(jsCode);
        output = logs.join('\n');
      } finally {
        console.log = originalLog;
      }
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
    }

    const executionTime = performance.now() - startTime;
    return { output, error, executionTime };
  };

  const runTypeScriptWithTests = async (
    code: string,
    testCases: Array<{ input: any[]; expectedOutput: any; description?: string }>
  ): Promise<{ passed: number; total: number; results: any[]; executionTime: number }> => {
    const startTime = performance.now();
    const results: any[] = [];

    try {
      // Transpile TypeScript to JavaScript
      const { code: jsCode } = transform(code, {
        transforms: ['typescript'],
      });

      // Extract the function name from code (assumes format: function name(...) or const name = ...)
      const functionMatch = code.match(/(?:function|const|let|var)\s+(\w+)/);
      const functionName = functionMatch ? functionMatch[1] : null;

      if (!functionName) {
        throw new Error('Could not find function name in code');
      }

      // Execute the code to define the function
      // eslint-disable-next-line no-eval
      eval(jsCode);

      // Run each test case
      for (const testCase of testCases) {
        try {
          // eslint-disable-next-line no-eval
          const actual = eval(`${functionName}(...${JSON.stringify(testCase.input)})`);
          const passed = JSON.stringify(actual) === JSON.stringify(testCase.expectedOutput);

          results.push({
            passed,
            input: testCase.input,
            expected: testCase.expectedOutput,
            actual,
            error: null,
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
      // If transpilation or function extraction fails, mark all tests as failed
      for (const testCase of testCases) {
        results.push({
          passed: false,
          input: testCase.input,
          expected: testCase.expectedOutput,
          actual: null,
          error: err instanceof Error ? err.message : String(err),
        });
      }
    }

    const executionTime = performance.now() - startTime;
    const passed = results.filter(r => r.passed).length;

    return {
      passed,
      total: results.length,
      results,
      executionTime,
    };
  };

  const handleRun = async () => {
    if (!isReady) return;

    setExecuting(true);
    setOutput('');
    setError(null);
    setTestResults(null);
    setExecutionTime(null);

    try {
      if (testCases && testCases.length > 0) {
        // Run with test cases
        const results = language === 'python'
          ? await runPythonWithTests(code, testCases)
          : await runTypeScriptWithTests(code, testCases);

        setTestResults(results);
        setExecutionTime(results.executionTime);

        if (results.passed === results.total && onSuccess) {
          onSuccess();
        }
      } else {
        // Run code normally
        const result = language === 'python'
          ? await runPythonCode(code)
          : await runTypeScriptCode(code);

        setOutput(result.output);
        setError(result.error);
        setExecutionTime(result.executionTime);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setExecuting(false);
    }
  };

  if (language === 'python' && pyodideError) {
    return (
      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Failed to load Python environment</AlertTitle>
        <AlertDescription>{pyodideError}</AlertDescription>
      </Alert>
    );
  }

  const languageExtension = language === 'python' ? python() : javascript({ typescript: true });

  return (
    <div className="space-y-4">
      {/* Code Editor */}
      {showEditor && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Code Editor</CardTitle>
              <Button
                onClick={handleRun}
                disabled={!isReady || executing}
                size="sm"
                className="gap-2"
              >
                {executing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Run Code
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <CodeMirror
              value={code}
              height="300px"
              extensions={[languageExtension]}
              onChange={(value) => setCode(value)}
              editable={!readOnly}
              theme="light"
              className="border-t"
            />
          </CardContent>
        </Card>
      )}

      {/* Run Button for read-only mode */}
      {!showEditor && (
        <Button onClick={handleRun} disabled={!isReady || executing} size="sm" className="gap-2">
          {executing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Run This Code
            </>
          )}
        </Button>
      )}

      {/* Loading State */}
      {language === 'python' && pyodideLoading && (
        <Alert>
          <Loader2 className="h-4 w-4 animate-spin" />
          <AlertTitle>Loading Python Environment</AlertTitle>
          <AlertDescription>
            Please wait while we load the Python runtime (this may take a few seconds on first
            load)...
          </AlertDescription>
        </Alert>
      )}

      {/* Test Results */}
      {testResults && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                {testResults.passed === testResults.total ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    All Tests Passed!
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-red-500" />
                    Tests Failed
                  </>
                )}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                {executionTime?.toFixed(2)}ms
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Passed: {testResults.passed}/{testResults.total}
            </p>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-3">
                {testResults.results.map((result: any, index: number) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      result.passed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {result.passed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600" />
                      )}
                      <span className="font-medium text-sm">
                        Test Case {index + 1}
                        {testCases?.[index]?.description && `: ${testCases[index].description}`}
                      </span>
                    </div>
                    <div className="text-sm space-y-1 font-mono">
                      <div>
                        <span className="text-gray-600">Input:</span>{' '}
                        <span className="text-gray-900">{JSON.stringify(result.input)}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Expected:</span>{' '}
                        <span className="text-gray-900">{JSON.stringify(result.expected)}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Got:</span>{' '}
                        <span
                          className={result.passed ? 'text-green-700' : 'text-red-700'}
                        >
                          {JSON.stringify(result.actual)}
                        </span>
                      </div>
                      {result.error && (
                        <div className="text-red-600 mt-2">Error: {result.error}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}

      {/* Output Console */}
      {!testResults && (output || error) && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Output</CardTitle>
              {executionTime !== null && (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  {executionTime.toFixed(2)}ms
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {error ? (
                <pre className="text-sm text-red-600 font-mono whitespace-pre-wrap">{error}</pre>
              ) : (
                <pre className="text-sm text-gray-900 font-mono whitespace-pre-wrap">
                  {output || '(No output)'}
                </pre>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
