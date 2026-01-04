#!/usr/bin/env python3
"""
Automated Python to TypeScript converter for array lessons.
This script will help convert the remaining 14 lessons.
"""

import re
import sys


def convert_python_to_typescript(python_code):
    """Convert Python code to TypeScript with proper formatting."""
    ts = python_code

    # Function definitions with better handling
    def convert_function(match):
        name = match.group(1)
        params = match.group(2).strip()

        # Convert parameters
        if params:
            ts_params = []
            for param in params.split(','):
                param = param.strip()
                if '=' in param:
                    param = param.split('=')[0].strip()

                # Add type annotations
                if 'array' in param or param.endswith('s'):
                    ts_params.append(f"{param}: number[]")
                elif any(word in param for word in ['index', 'pos', 'target', 'sum', 'num', 'count', 'size', 'len']):
                    ts_params.append(f"{param}: number")
                else:
                    ts_params.append(f"{param}: any")
            params_str = ', '.join(ts_params)
        else:
            params_str = ''

        return f"function {name}({params_str})"

    ts = re.sub(r'def (\w+)\((.*?)\):', convert_function, ts)

    # Docstrings to JSDoc
    def convert_docstring(match):
        content = match.group(1)
        lines = content.strip().split('\n')
        jsdoc = ['  /**']
        for line in lines:
            stripped = line.strip()
            if stripped:
                jsdoc.append(f"   * {stripped}")
            else:
                jsdoc.append('   *')
        jsdoc.append('   */')
        return '\n'.join(jsdoc)

    ts = re.sub(r'    """(.*?)"""', convert_docstring, ts, flags=re.DOTALL)
    ts = re.sub(r'"""(.*?)"""', convert_docstring, ts, flags=re.DOTALL)

    # F-strings
    def convert_fstring(match):
        content = match.group(1)
        # Replace {var} with ${var}
        converted = re.sub(r'\{(\w+(?:\[\w+\])?(?:\.\w+)?)\}', r'${\1}', content)
        return f'console.log(\\`{converted}\\`)'

    ts = re.sub(r'print\(f"(.*?)"\)', convert_fstring, ts)
    ts = re.sub(r"print\(f'(.*?)'\)", convert_fstring, ts)

    # Regular prints
    ts = re.sub(r'print\("(.*?)"\)', r'console.log("\1")', ts)
    ts = re.sub(r"print\('(.*?)'\)", r"console.log('\1')", ts)

    # len() to .length
    ts = re.sub(r'len\((\w+)\)', r'\1.length', ts)

    # Keywords
    ts = re.sub(r'\bNone\b', 'null', ts)
    ts = re.sub(r'\bTrue\b', 'true', ts)
    ts = re.sub(r'\bFalse\b', 'false', ts)
    ts = re.sub(r'\bpass\b', '// TODO: Implement', ts)

    # Control flow
    ts = re.sub(r'elif\s+(.*?):', r'} else if (\1) {', ts)
    ts = re.sub(r'if\s+(.*?):', r'if (\1) {', ts)
    ts = re.sub(r'while\s+(.*?):', r'while (\1) {', ts)
    ts = re.sub(r'else:', r'} else {', ts)

    # Operators
    ts = re.sub(r'\bnot\s+(\w+)', r'!\1', ts)
    ts = re.sub(r'\band\b', '&&', ts)
    ts = re.sub(r'\bor\b', '||', ts)

    # Range loops
    ts = re.sub(
        r'for (\w+) in range\(len\((\w+)\)\s*-\s*(\d+)\):',
        r'for (let \1 = 0; \1 < \2.length - \3; \1++) {',
        ts
    )
    ts = re.sub(
        r'for (\w+) in range\((\d+),\s*len\((\w+)\)\):',
        r'for (let \1 = \2; \1 < \3.length; \1++) {',
        ts
    )
    ts = re.sub(
        r'for (\w+) in range\(len\((\w+)\)\):',
        r'for (let \1 = 0; \1 < \2.length; \1++) {',
        ts
    )
    ts = re.sub(
        r'for (\w+) in range\((\d+)\):',
        r'for (let \1 = 0; \1 < \2; \1++) {',
        ts
    )

    # Enumerate
    ts = re.sub(
        r'for (\w+),\s*(\w+) in enumerate\((\w+)\):',
        r'for (const [\1, \2] of \3.entries()) {',
        ts
    )

    # Return tuples
    ts = re.sub(r'return\s+\((.*?)\)', r'return [\1]', ts)

    # Built-ins
    ts = re.sub(r"float\('inf'\)", 'Number.POSITIVE_INFINITY', ts)
    ts = re.sub(r"float\('-inf'\)", 'Number.NEGATIVE_INFINITY', ts)
    ts = re.sub(r'\.append\(', '.push(', ts)
    ts = re.sub(r'\.get\((\w+),\s*0\)', r'.get(\1) ?? 0', ts)
    ts = re.sub(r'\bdict\(\)', 'new Map()', ts)
    ts = re.sub(r'\bset\(\)', 'new Set()', ts)
    ts = re.sub(r'\bset\((\w+)\)', r'new Set(\1)', ts)
    ts = re.sub(r'\babs\(', 'Math.abs(', ts)
    ts = re.sub(r'\bmax\(', 'Math.max(', ts)
    ts = re.sub(r'\bmin\(', 'Math.min(', ts)
    ts = re.sub(r'sum\((\w+)\)', r'\1.reduce((a, b) => a + b, 0)', ts)
    ts = re.sub(r'(\w+)\.sort\(\)', r'\1.sort((a, b) => a - b)', ts)

    # Slicing
    ts = re.sub(r'(\w+)\[(\w+):(\w+)\+1\]', r'\1.slice(\2, \3 + 1)', ts)
    ts = re.sub(r'(\w+)\[(\w+):\]', r'\1.slice(\2)', ts)
    ts = re.sub(r'(\w+)\[:(\w+)\]', r'\1.slice(0, \2)', ts)

    # Fix comparisons in conditions
    ts = re.sub(r'if \((.+) == (.+)\) \{', r'if (\1 === \2) {', ts)
    ts = re.sub(r'if \((.+) != (.+)\) \{', r'if (\1 !== \2) {', ts)
    ts = re.sub(r'while \((.+) == (.+)\) \{', r'while (\1 === \2) {', ts)
    ts = re.sub(r'while \((.+) != (.+)\) \{', r'while (\1 !== \2) {', ts)
    ts = re.sub(r'} else if \((.+) == (.+)\) \{', r'} else if (\1 === \2) {', ts)
    ts = re.sub(r'} else if \((.+) != (.+)\) \{', r'} else if (\1 !== \2) {', ts)

    # Add const/let for variable declarations (simple cases)
    ts = re.sub(r'^(\s+)(\w+) = ', r'\1const \2 = ', ts, flags=re.MULTILINE)

    # Fix let to const for immutable variables
    # This is a simple heuristic - arrays and reassigned vars should be let
    lines = ts.split('\n')
    result_lines = []
    for line in lines:
        # If line contains array operations or is being reassigned, use let
        if any(op in line for op in ['.push(', '.pop(', '++', '--', '+=', '-=', '*=', '/=']):
            line = line.replace('const ', 'let ')
        result_lines.append(line)

    ts = '\n'.join(result_lines)

    return ts


def print_conversion_example():
    """Print example conversion."""
    python_example = '''def find_middle(array):
    """
    Find the middle element.

    Args:
        array: List of numbers
    Returns:
        Middle element
    """
    if not array:
        return None

    slow = 0
    fast = 0

    while fast < len(array) - 1:
        slow += 1
        fast += 2
        print(f"Slow: {slow}, Fast: {fast}")

    return array[slow]'''

    print("Python Code:")
    print(python_example)
    print("\n" + "="*60 + "\n")
    print("TypeScript Code:")
    print(convert_python_to_typescript(python_example))


if __name__ == '__main__':
    print_conversion_example()
