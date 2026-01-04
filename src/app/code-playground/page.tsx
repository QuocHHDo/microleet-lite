'use client';
import React from 'react';
import CodeExecutor from '@/components/CodeExecutor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useUserProgress } from '@/hooks/useUserProgress';

export default function CodePlaygroundPage() {
  const { progress } = useUserProgress();
  const language = progress.preferences.language || 'python';
  // Example test cases for a simple function
  const sumTestCases = [
    {
      input: [2, 3],
      expectedOutput: 5,
      description: 'Basic addition',
    },
    {
      input: [0, 0],
      expectedOutput: 0,
      description: 'Adding zeros',
    },
    {
      input: [-5, 10],
      expectedOutput: 5,
      description: 'Negative and positive',
    },
  ];

  const sumCodePython = `def sum_numbers(a, b):
    """Return the sum of two numbers"""
    return a + b

# Test it
print(sum_numbers(2, 3))`;

  const sumCodeTypeScript = `function sum_numbers(a: number, b: number): number {
  // Return the sum of two numbers
  return a + b;
}

// Test it
console.log(sum_numbers(2, 3));`;

  const fibTestCases = [
    {
      input: [5],
      expectedOutput: 5,
      description: 'Fibonacci of 5',
    },
    {
      input: [10],
      expectedOutput: 55,
      description: 'Fibonacci of 10',
    },
    {
      input: [0],
      expectedOutput: 0,
      description: 'Edge case: n=0',
    },
  ];

  const fibCodePython = `def fibonacci(n):
    """Calculate the nth Fibonacci number"""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)`;

  const fibCodeTypeScript = `function fibonacci(n: number): number {
  // Calculate the nth Fibonacci number
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}`;

  const helloCodePython = `# Welcome to the Python Playground!
print("Hello, World!")

# Try some math
result = 10 + 20
print(f"10 + 20 = {result}")

# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}s!")`;

  const helloCodeTypeScript = `// Welcome to the TypeScript Playground!
console.log("Hello, World!");

// Try some math
const result = 10 + 20;
console.log(\`10 + 20 = \${result}\`);

// Loop through an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(\`I like \${fruit}s!\`);
}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Interactive Code Playground
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Write and execute {language === 'python' ? 'Python' : 'TypeScript'} code directly in your browser! Test your solutions with
            automated test cases and get instant feedback.
          </p>
          <LanguageSelector className="mt-4" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🚀 Instant Execution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Run Python code directly in your browser using WebAssembly - no server needed!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">✅ Automated Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Validate your solutions with predefined test cases and see detailed results.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">⚡ Real-time Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Get immediate feedback on your code with execution times and error messages.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Examples */}
        <Tabs defaultValue="basic" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Example</TabsTrigger>
            <TabsTrigger value="tests">With Test Cases</TabsTrigger>
            <TabsTrigger value="algorithm">Algorithm</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Basic Code Execution</CardTitle>
                <CardDescription>
                  Try editing the code below and clicking &quot;Run Code&quot; to see the output
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeExecutor
                  initialCode={language === 'python' ? helloCodePython : helloCodeTypeScript}
                  language={language}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests">
            <Card>
              <CardHeader>
                <CardTitle>Code with Test Cases</CardTitle>
                <CardDescription>
                  Write a function that passes all test cases to see it marked as correct
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeExecutor
                  initialCode={language === 'python' ? sumCodePython : sumCodeTypeScript}
                  testCases={sumTestCases}
                  language={language}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="algorithm">
            <Card>
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
                <CardDescription>
                  Implement the Fibonacci sequence and test it with multiple inputs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeExecutor
                  initialCode={language === 'python' ? fibCodePython : fibCodeTypeScript}
                  testCases={fibTestCases}
                  language={language}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Technical Info */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg">🔧 How It Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-700">
            {language === 'python' ? (
              <>
                <p>
                  <strong>Powered by Pyodide:</strong> This playground uses Pyodide, a port of CPython
                  to WebAssembly, allowing Python to run directly in your browser.
                </p>
                <p>
                  <strong>No Server Required:</strong> All code execution happens locally in your
                  browser - your code never leaves your device.
                </p>
                <p>
                  <strong>Standard Library:</strong> Most Python standard library modules are
                  available, along with popular packages like NumPy.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>TypeScript Execution:</strong> Your TypeScript code is transpiled to JavaScript using Sucrase
                  and executed directly in your browser.
                </p>
                <p>
                  <strong>No Server Required:</strong> All code execution happens locally in your
                  browser - your code never leaves your device.
                </p>
                <p>
                  <strong>Full TypeScript Support:</strong> Write modern TypeScript with type annotations,
                  interfaces, and all the features you love.
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
