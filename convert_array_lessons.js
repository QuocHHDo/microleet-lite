/**
 * Script to help convert Python code to TypeScript for array lessons
 * Run with: node convert_array_lessons.js
 */

const fs = require('fs');
const path = require('path');

// Python to TypeScript conversion helpers
function convertPythonToTypeScript(pythonCode) {
  let tsCode = pythonCode;

  // Convert function definitions
  tsCode = tsCode.replace(/def (\w+)\((.*?)\):/g, (match, name, params) => {
    // Add void return type for functions without return
    const hasReturn = tsCode.includes('return');
    const returnType = hasReturn ? '' : ': void';

    // Convert parameters
    let tsParams = params;
    if (params.trim()) {
      tsParams = params.split(',').map(p => {
        p = p.trim();
        // Remove default values for now
        p = p.split('=')[0].trim();
        // Add type annotations
        if (!p.includes(':')) {
          if (p === 'array' || p.endsWith('_array') || p.endsWith('s')) {
            p = `${p}: number[]`;
          } else if (p.includes('index') || p.includes('pos') || p.includes('target') || p.includes('sum') || p.includes('num')) {
            p = `${p}: number`;
          } else {
            p = `${p}: any`;
          }
        }
        return p;
      }).join(', ');
    }

    return `function ${name}(${tsParams})${returnType} {`;
  });

  // Convert docstrings to JSDoc
  tsCode = tsCode.replace(/    """\n([\s\S]*?)    """/g, (match, content) => {
    const lines = content.split('\n');
    const jsdoc = ['  /**'];
    lines.forEach(line => {
      jsdoc.push(`   *${line.substring(4)}`);
    });
    jsdoc.push('   */');
    return jsdoc.join('\n');
  });

  // Convert print statements with f-strings
  tsCode = tsCode.replace(/print\(f"(.*?)"\)/g, (match, str) => {
    const converted = str.replace(/\{(\w+)\}/g, '${$1}');
    return `console.log(\\\`${converted}\\\`)`;
  });
  tsCode = tsCode.replace(/print\(f'(.*?)'\)/g, (match, str) => {
    const converted = str.replace(/\{(\w+)\}/g, '${$1}');
    return `console.log(\\\`${converted}\\\`)`;
  });

  // Regular print statements
  tsCode = tsCode.replace(/print\("(.*?)"\)/g, 'console.log("$1")');
  tsCode = tsCode.replace(/print\('(.*?)'\)/g, "console.log('$1')");

  // Convert len() to .length
  tsCode = tsCode.replace(/len\((\w+)\)/g, '$1.length');

  // Convert None to null
  tsCode = tsCode.replace(/\bNone\b/g, 'null');

  // Convert True/False
  tsCode = tsCode.replace(/\bTrue\b/g, 'true');
  tsCode = tsCode.replace(/\bFalse\b/g, 'false');

  // Convert pass
  tsCode = tsCode.replace(/    pass/g, '    // TODO: Implement');

  // Convert elif to else if
  tsCode = tsCode.replace(/elif\s+(.*?):/g, '} else if ($1) {');

  // Convert if/while/else
  tsCode = tsCode.replace(/if\s+(.*?):/g, 'if ($1) {');
  tsCode = tsCode.replace(/while\s+(.*?):/g, 'while ($1) {');
  tsCode = tsCode.replace(/else:/g, '} else {');

  // Convert not to !
  tsCode = tsCode.replace(/\bnot\s+(\w+)/g, '!$1');

  // Convert and/or
  tsCode = tsCode.replace(/\band\b/g, '&&');
  tsCode = tsCode.replace(/\bor\b/g, '||');

  // Convert range loops
  tsCode = tsCode.replace(/for (\w+) in range\(len\((\w+)\)\s*-\s*(\d+)\):/g,
    'for (let $1 = 0; $1 < $2.length - $3; $1++) {');
  tsCode = tsCode.replace(/for (\w+) in range\((\d+),\s*len\((\w+)\)\):/g,
    'for (let $1 = $2; $1 < $3.length; $1++) {');
  tsCode = tsCode.replace(/for (\w+) in range\(len\((\w+)\)\):/g,
    'for (let $1 = 0; $1 < $2.length; $1++) {');
  tsCode = tsCode.replace(/for (\w+) in range\((\d+)\):/g,
    'for (let $1 = 0; $1 < $2; $1++) {');

  // Convert enumerate
  tsCode = tsCode.replace(/for (\w+),\s*(\w+) in enumerate\((\w+)\):/g,
    'for (const [$1, $2] of $3.entries()) {');

  // Convert return statements
  tsCode = tsCode.replace(/return\s+\((.*?)\)/g, 'return [$1]');

  // Convert operators
  tsCode = tsCode.replace(/float\('inf'\)/g, 'Number.POSITIVE_INFINITY');
  tsCode = tsCode.replace(/float\('-inf'\)/g, 'Number.NEGATIVE_INFINITY');

  // Convert methods
  tsCode = tsCode.replace(/\.append\(/g, '.push(');
  tsCode = tsCode.replace(/\.get\((\w+),\s*0\)/g, '.get($1) ?? 0');

  // Convert built-ins
  tsCode = tsCode.replace(/\babs\(/g, 'Math.abs(');
  tsCode = tsCode.replace(/\bmax\(/g, 'Math.max(');
  tsCode = tsCode.replace(/\bmin\(/g, 'Math.min(');
  tsCode = tsCode.replace(/sum\((\w+)\)/g, '$1.reduce((a, b) => a + b, 0)');
  tsCode = tsCode.replace(/(\w+)\.sort\(\)/g, '$1.sort((a, b) => a - b)');

  // Convert slicing
  tsCode = tsCode.replace(/(\w+)\[(\w+):(\w+)\+1\]/g, '$1.slice($2, $3 + 1)');
  tsCode = tsCode.replace(/(\w+)\[(\w+):\]/g, '$1.slice($2)');
  tsCode = tsCode.replace(/(\w+)\[:(\w+)\]/g, '$1.slice(0, $2)');

  // Convert dict/set
  tsCode = tsCode.replace(/\bdict\(\)/g, 'new Map()');
  tsCode = tsCode.replace(/\bset\(\)/g, 'new Set()');
  tsCode = tsCode.replace(/\bset\((\w+)\)/g, 'new Set($1)');

  // Fix indentation - convert 4 spaces to 2
  tsCode = tsCode.split('\n').map(line => {
    const leadingSpaces = line.match(/^ */)[0].length;
    const newSpaces = Math.floor(leadingSpaces / 4) * 2;
    return ' '.repeat(newSpaces) + line.trim();
  }).join('\n');

  // Add closing braces for blocks
  const lines = tsCode.split('\n');
  const result = [];
  const indentStack = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const currentIndent = line.match(/^ */)[0].length;

    // Close blocks when indentation decreases
    while (indentStack.length > 0 && currentIndent <= indentStack[indentStack.length - 1]) {
      const prevIndent = indentStack.pop();
      result.push(' '.repeat(prevIndent) + '}');
    }

    result.push(line);

    // Track new blocks
    if (line.trim().endsWith(' {')) {
      indentStack.push(currentIndent);
    }
  }

  // Close remaining blocks
  while (indentStack.length > 0) {
    const prevIndent = indentStack.pop();
    result.push(' '.repeat(prevIndent) + '}');
  }

  return result.join('\n');
}

console.log('Python to TypeScript Conversion Helper');
console.log('======================================');
console.log('Use the convertPythonToTypeScript function to convert code blocks');
console.log('This is a helper script - manual adjustment will still be needed');

// Example usage
const examplePython = `def example_function(array, target):
    """
    Example function.

    Args:
        array: List of numbers
        target: Target value
    """
    for i in range(len(array)):
        if array[i] == target:
            print(f"Found at index {i}")
            return i
    return None`;

console.log('\nExample conversion:');
console.log('\nPython:');
console.log(examplePython);
console.log('\nTypeScript:');
console.log(convertPythonToTypeScript(examplePython));
