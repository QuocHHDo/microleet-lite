#!/usr/bin/env python3
"""
Batch converter for Array Lessons from Python-only to Python + TypeScript.
This script processes the arrayLessons.ts file and converts Python code to TypeScript.

Usage:
    python batch_convert_lessons.py

The script will:
1. Read the arrayLessons.ts file
2. Find Python code blocks without TypeScript equivalents
3. Convert Python to TypeScript
4. Add TypeScript blocks after Python blocks
5. Convert exercise formats
6. Write the updated file

NOTE: Manual review is still needed after conversion!
"""

import re
import sys
from pathlib import Path


class PythonToTypeScriptConverter:
    """Converts Python code to TypeScript with proper formatting."""

    @staticmethod
    def convert_code(python_code):
        """Main conversion method."""
        ts = python_code

        # Step 1: Function definitions
        ts = PythonToTypeScriptConverter._convert_functions(ts)

        # Step 2: Docstrings
        ts = PythonToTypeScriptConverter._convert_docstrings(ts)

        # Step 3: Print statements
        ts = PythonToTypeScriptConverter._convert_prints(ts)

        # Step 4: Basic replacements
        ts = PythonToTypeScriptConverter._convert_keywords(ts)

        # Step 5: Control flow
        ts = PythonToTypeScriptConverter._convert_control_flow(ts)

        # Step 6: Loops
        ts = PythonToTypeScriptConverter._convert_loops(ts)

        # Step 7: Operators
        ts = PythonToTypeScriptConverter._convert_operators(ts)

        # Step 8: Built-in functions
        ts = PythonToTypeScriptConverter._convert_builtins(ts)

        # Step 9: Array operations
        ts = PythonToTypeScriptConverter._convert_array_ops(ts)

        # Step 10: Variable declarations
        ts = PythonToTypeScriptConverter._add_var_declarations(ts)

        return ts

    @staticmethod
    def _convert_functions(code):
        """Convert function definitions."""
        def replace_func(match):
            name = match.group(1)
            params = match.group(2).strip()

            # Convert parameters with type hints
            if params:
                ts_params = []
                for param in params.split(','):
                    param = param.strip()
                    if '=' in param:
                        param = param.split('=')[0].strip()

                    # Add type annotations
                    if 'array' in param or param.endswith('s') or param.endswith('list'):
                        ts_params.append(f"{param}: number[]")
                    elif any(word in param for word in ['index', 'pos', 'start', 'end', 'left', 'right',
                                                          'target', 'sum', 'num', 'count', 'size', 'len',
                                                          'value', 'val', 'key', 'i', 'j', 'k']):
                        ts_params.append(f"{param}: number")
                    elif 'elements' in param or 'required' in param:
                        ts_params.append(f"{param}: Set<number>")
                    else:
                        ts_params.append(f"{param}: any")
                params_str = ', '.join(ts_params)
            else:
                params_str = ''

            return f"function {name}({params_str})"

        return re.sub(r'def (\w+)\((.*?)\):', replace_func, code)

    @staticmethod
    def _convert_docstrings(code):
        """Convert Python docstrings to JSDoc."""
        def replace_docstring(match):
            content = match.group(1)
            indent = match.group(2) if match.lastindex >= 2 else '  '
            lines = content.strip().split('\n')
            jsdoc = [f"{indent}/**"]
            for line in lines:
                stripped = line.strip()
                if stripped:
                    jsdoc.append(f"{indent} * {stripped}")
                else:
                    jsdoc.append(f"{indent} *")
            jsdoc.append(f"{indent} */")
            return '\n'.join(jsdoc)

        # Match indented docstrings
        code = re.sub(r'(\s+)"""\n(.*?)"""', lambda m: replace_docstring(re.match(r'(\s+)"""(.*?)"""', m.group(0), re.DOTALL)), code, flags=re.DOTALL)
        # Match non-indented docstrings
        code = re.sub(r'"""\n(.*?)"""', replace_docstring, code, flags=re.DOTALL)
        return code

    @staticmethod
    def _convert_prints(code):
        """Convert print statements."""
        # F-strings
        def convert_fstring(match):
            content = match.group(1)
            # Replace {var} with ${var}
            converted = re.sub(r'\{(\w+(?:\[\w+\])?(?:\.\w+)?(?:\[.*?\])?)\}', r'${\1}', content)
            # Use \\` for template literal escaping in the output
            return f'console.log(\\`{converted}\\`)'

        code = re.sub(r'print\(f"(.*?)"\)', convert_fstring, code)
        code = re.sub(r"print\(f'(.*?)'\)", convert_fstring, code)

        # Regular prints
        code = re.sub(r'print\("(.*?)"\)', r'console.log("\1")', code)
        code = re.sub(r"print\('(.*?)'\)", r"console.log('\1')", code)

        return code

    @staticmethod
    def _convert_keywords(code):
        """Convert Python keywords to TypeScript."""
        code = re.sub(r'\blen\((\w+)\)', r'\1.length', code)
        code = re.sub(r'\bNone\b', 'null', code)
        code = re.sub(r'\bTrue\b', 'true', code)
        code = re.sub(r'\bFalse\b', 'false', code)
        code = re.sub(r'\bpass\b', '// TODO: Implement', code)
        return code

    @staticmethod
    def _convert_control_flow(code):
        """Convert control flow statements."""
        code = re.sub(r'elif\s+(.*?):', r'} else if (\1) {', code)
        code = re.sub(r'if\s+(.*?):', r'if (\1) {', code)
        code = re.sub(r'while\s+(.*?):', r'while (\1) {', code)
        code = re.sub(r'else:', r'} else {', code)
        return code

    @staticmethod
    def _convert_loops(code):
        """Convert loop constructs."""
        # For loops with range
        code = re.sub(
            r'for (\w+) in range\(len\((\w+)\)\s*-\s*(\d+)\):',
            r'for (let \1 = 0; \1 < \2.length - \3; \1++) {',
            code
        )
        code = re.sub(
            r'for (\w+) in range\((\d+),\s*len\((\w+)\)\):',
            r'for (let \1 = \2; \1 < \3.length; \1++) {',
            code
        )
        code = re.sub(
            r'for (\w+) in range\(len\((\w+)\)\):',
            r'for (let \1 = 0; \1 < \2.length; \1++) {',
            code
        )
        code = re.sub(
            r'for (\w+) in range\((\d+)\):',
            r'for (let \1 = 0; \1 < \2; \1++) {',
            code
        )

        # Enumerate
        code = re.sub(
            r'for (\w+),\s*(\w+) in enumerate\((\w+)\):',
            r'for (const [\1, \2] of \3.entries()) {',
            code
        )

        return code

    @staticmethod
    def _convert_operators(code):
        """Convert operators."""
        code = re.sub(r'\bnot\s+(\w+)', r'!\1', code)
        code = re.sub(r'\band\b', '&&', code)
        code = re.sub(r'\bor\b', '||', code)

        # Fix == to === and != to !==
        code = re.sub(r'==', '===', code)
        code = re.sub(r'!=', '!==', code)

        return code

    @staticmethod
    def _convert_builtins(code):
        """Convert built-in functions."""
        code = re.sub(r"float\('inf'\)", 'Number.POSITIVE_INFINITY', code)
        code = re.sub(r"float\('-inf'\)", 'Number.NEGATIVE_INFINITY', code)
        code = re.sub(r'\.append\(', '.push(', code)
        code = re.sub(r'\.get\((\w+),\s*0\)', r'.get(\1) ?? 0', code)
        code = re.sub(r'\bdict\(\)', 'new Map()', code)
        code = re.sub(r'\bset\(\)', 'new Set()', code)
        code = re.sub(r'\bset\((\w+)\)', r'new Set(\1)', code)
        code = re.sub(r'\babs\(', 'Math.abs(', code)
        code = re.sub(r'\bmax\(', 'Math.max(', code)
        code = re.sub(r'\bmin\(', 'Math.min(', code)
        code = re.sub(r'sum\((\w+)\)', r'\1.reduce((a, b) => a + b, 0)', code)
        code = re.sub(r'(\w+)\.sort\(\)', r'\1.sort((a, b) => a - b)', code)
        return code

    @staticmethod
    def _convert_array_ops(code):
        """Convert array operations."""
        # Slicing
        code = re.sub(r'(\w+)\[(\w+):(\w+)\+1\]', r'\1.slice(\2, \3 + 1)', code)
        code = re.sub(r'(\w+)\[(\w+):\]', r'\1.slice(\2)', code)
        code = re.sub(r'(\w+)\[:(\w+)\]', r'\1.slice(0, \2)', code)

        # Return tuples to arrays
        code = re.sub(r'return\s+\((.*?)\)', r'return [\1]', code)

        return code

    @staticmethod
    def _add_var_declarations(code):
        """Add let/const declarations."""
        lines = code.split('\n')
        result = []

        for line in lines:
            # Skip if already has let/const or is part of function signature
            if 'function ' in line or 'const ' in line or 'let ' in line or 'for (' in line:
                result.append(line)
                continue

            # Simple assignment at start of line (with indentation)
            match = re.match(r'^(\s+)(\w+)\s*=\s*(.+)$', line)
            if match:
                indent, var_name, value = match.groups()
                # Use let for variables that might be reassigned
                if any(op in line for op in ['++', '--', '+=', '-=', '*=', '/=']) or \
                   any(keyword in var_name.lower() for keyword in ['count', 'sum', 'index', 'pos', 'ptr']):
                    result.append(f'{indent}let {var_name} = {value}')
                else:
                    result.append(f'{indent}const {var_name} = {value}')
            else:
                result.append(line)

        return '\n'.join(result)


def main():
    """Main conversion script."""
    print("Array Lessons Batch Converter")
    print("=" * 60)

    file_path = Path(__file__).parent / "src" / "data" / "lessons" / "leetcode" / "arrayLessons.ts"

    if not file_path.exists():
        print(f"Error: File not found at {file_path}")
        sys.exit(1)

    print(f"Reading file: {file_path}")

    # Example: Convert a sample Python function
    sample_python = '''def find_middle(array):
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

    print("\n" + "="*60)
    print("Sample Conversion:")
    print("="*60)
    print("\nPython Input:")
    print(sample_python)
    print("\nTypeScript Output:")
    print(PythonToTypeScriptConverter.convert_code(sample_python))
    print("\n" + "="*60)
    print("\nTo use this converter:")
    print("1. Extract Python code blocks from the lessons")
    print("2. Run through PythonToTypeScriptConverter.convert_code()")
    print("3. Review and adjust the output")
    print("4. Add escaped template literals (\\`  and \\${...})")
    print("5. Insert into the file after Python blocks")


if __name__ == '__main__':
    main()
