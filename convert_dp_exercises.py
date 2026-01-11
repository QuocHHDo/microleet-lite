#!/usr/bin/env python3
"""
Helper script to convert Python exercise code to TypeScript in DP lesson files.
This script handles the conversion patterns for oneDimensionalDP.ts exercises.
"""

import re

def convert_python_to_typescript(python_code: str, function_name: str = None) -> str:
    """
    Convert Python code to TypeScript with proper type annotations.
    """
    lines = python_code.strip().split('\n')
    ts_lines = []

    for line in lines:
        # Handle function definitions
        if line.strip().startswith('def '):
            # Extract function name and parameters
            match = re.match(r'(\s*)def (\w+)\((.*?)\):', line)
            if match:
                indent, func_name, params = match.groups()
                # Convert parameters
                if params:
                    # Split parameters and add types
                    param_list = [p.strip() for p in params.split(',')]
                    typed_params = []
                    for param in param_list:
                        if '=' in param:
                            name, default = param.split('=')
                            name = name.strip()
                            # Determine type from default
                            if default.strip().isdigit():
                                typed_params.append(f"{name}: number = {default.strip()}")
                            elif default.strip() in ['True', 'False']:
                                typed_params.append(f"{name}: boolean = {default.strip().lower()}")
                            else:
                                typed_params.append(f"{name}: any = {default.strip()}")
                        else:
                            # Add type based on common patterns
                            if 'nums' in param or 'cost' in param or 'arr' in param:
                                typed_params.append(f"{param}: number[]")
                            elif 's' == param or 'word' in param:
                                typed_params.append(f"{param}: string")
                            elif param in ['word_dict', 'wordDict', 'dictionary']:
                                typed_params.append(f"{param}: string[]")
                            else:
                                typed_params.append(f"{param}: number")
                    params_str = ', '.join(typed_params)
                else:
                    params_str = ''

                # Determine return type
                return_type = "number"  # default
                ts_lines.append(f"{indent}function {func_name}({params_str}): {return_type} {{")
                continue

        # Convert docstrings
        if '"""' in line:
            ts_lines.append(line.replace('"""', '/**').replace('"""', '*/') if line.count('"""') == 2 else line.replace('"""', '/**' if not any('/**' in l for l in ts_lines[-3:]) else '*/'))
            continue

        # Convert comments
        if line.strip().startswith('#'):
            ts_lines.append(line.replace('#', '//'))
            continue

        # Convert variable declarations
        # len() -> .length
        line = re.sub(r'len\((\w+)\)', r'\1.length', line)

        # range() loops
        line = re.sub(r'for (\w+) in range\((\d+), (.+?)\):', r'for (let \1 = \2; \1 < \3; \1++)', line)
        line = re.sub(r'for (\w+) in range\((.+?)\):', r'for (let \1 = 0; \1 < \2; \1++)', line)

        # List comprehensions and array creation
        line = re.sub(r'\[0\] \* \((.+?)\)', r'Array(\1).fill(0)', line)
        line = re.sub(r'\[(.+?)\] \* (\w+)', r'Array(\2).fill(\1)', line)
        line = re.sub(r'\[\[0\] \* (.+?) for _ in range\((.+?)\)\]', r'Array.from({ length: \2 }, () => Array(\1).fill(0))', line)

        # Variable declarations
        if '=' in line and not line.strip().startswith(('if', 'for', 'while', 'return', 'elif', 'else')):
            # Add const/let
            indent_match = re.match(r'(\s*)', line)
            indent = indent_match.group(1) if indent_match else ''
            var_part = line.strip()
            if not any(keyword in var_part for keyword in ['const ', 'let ', 'var ']):
                if ',' in var_part.split('=')[0]:  # Multiple assignment
                    # Convert tuple unpacking
                    vars_left = var_part.split('=')[0].strip()
                    vars_right = '='.join(var_part.split('=')[1:]).strip()
                    line = f"{indent}let [{vars_left.replace(' ', '')}] = [{vars_right}];"
                    ts_lines.append(line)
                    continue
                else:
                    line = f"{indent}const {var_part}"

        # None -> null
        line = line.replace(' None', ' null').replace('=None', '= null')

        # Boolean values
        line = line.replace(' True', ' true').replace(' False', ' false')

        # not -> !
        line = re.sub(r'\bnot\s+', '!', line)

        # and/or
        line = line.replace(' and ', ' && ').replace(' or ', ' || ')

        # in operator for strings/arrays
        line = re.sub(r'(\w+) in (\w+)', r'\2.includes(\1)', line)

        # max/min
        line = re.sub(r'\bmax\((.*?)\)', r'Math.max(\1)', line)
        line = re.sub(r'\bmin\((.*?)\)', r'Math.min(\1)', line)

        # int()
        line = re.sub(r'int\((.+?)\)', r'parseInt(\1)', line)

        # String slicing
        line = re.sub(r'(\w+)\[(.+?):(.+?)\]', r'\1.slice(\2, \3)', line)

        # if/elif/else
        if line.strip().startswith('elif '):
            line = line.replace('elif ', 'else if (') + ')'
        elif line.strip().startswith('if ') and ':' in line:
            line = line.replace(':', ') {')
            line = re.sub(r'if (.+?) \) \{', r'if (\1) {', line)
        elif line.strip() == 'else:':
            line = line.replace('else:', 'else {')

        # return
        if line.strip().startswith('return'):
            if not line.strip().endswith(';'):
                line = line.rstrip() + ';'

        # Add semicolons to statements
        if line.strip() and not line.strip().endswith(('{', '}', ':', ';', '*/')) and not line.strip().startswith(('if', 'for', 'while', 'else', 'function', '/**', '//', '*')):
            if '=' in line or 'return' in line:
                line = line.rstrip() + ';'

        # Close braces
        if line.strip() and (indent := re.match(r'(\s*)', line)):
            # Track indentation changes
            pass

        ts_lines.append(line)

    # Add closing brace for function
    ts_lines.append('}')

    return '\n'.join(ts_lines)

# Example usage
if __name__ == "__main__":
    python_code = """def fib(n):
    if n <= 1:
        return n

    prev2 = 0
    prev1 = 1

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1"""

    print("Python to TypeScript Conversion:")
    print("="*50)
    print(convert_python_to_typescript(python_code))
