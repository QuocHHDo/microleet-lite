#!/usr/bin/env python3
"""Helper script to convert Python DP code to TypeScript."""

def python_to_typescript(python_code: str) -> str:
    """Convert Python code to TypeScript with basic transformations."""
    ts_code = python_code

    # Replace def with function and add types
    import re

    # Handle simple function definitions
    ts_code = re.sub(
        r'def (\w+)\(([^)]*)\):',
        lambda m: f'function {m.group(1)}({convert_params(m.group(2))}):',
        ts_code
    )

    # Python docstrings to TypeScript comments
    ts_code = re.sub(r'"""', '/**', ts_code, count=1)
    ts_code = re.sub(r'"""', ' */', ts_code, count=1)

    # Comments
    ts_code = ts_code.replace('# ', '// ')

    # Boolean values
    ts_code = ts_code.replace(' True', ' true')
    ts_code = ts_code.replace(' False', ' false')
    ts_code = ts_code.replace('(True)', '(true)')
    ts_code = ts_code.replace('(False)', '(false)')

    # None to null
    ts_code = ts_code.replace('None', 'null')

    # range to for loop
    ts_code = re.sub(
        r'for (\w+) in range\((\d+)\):',
        r'for (let \1 = 0; \1 < \2; \1++)',
        ts_code
    )
    ts_code = re.sub(
        r'for (\w+) in range\((\w+)\):',
        r'for (let \1 = 0; \1 < \2; \1++)',
        ts_code
    )
    ts_code = re.sub(
        r'for (\w+) in range\((\d+), (\d+)\):',
        r'for (let \1 = \2; \1 < \3; \1++)',
        ts_code
    )
    ts_code = re.sub(
        r'for (\w+) in range\((\w+), (\w+)\):',
        r'for (let \1 = \2; \1 < \3; \1++)',
        ts_code
    )
    ts_code = re.sub(
        r'for (\w+) in range\((\d+), (\d+) \+ 1\):',
        r'for (let \1 = \2; \1 <= \3; \1++)',
        ts_code
    )
    ts_code = re.sub(
        r'for (\w+) in range\((\w+), (\w+) \+ 1\):',
        r'for (let \1 = \2; \1 <= \3; \1++)',
        ts_code
    )

    # Array creation
    ts_code = re.sub(r'\[0\] \* \((\w+) \+ 1\)', r'Array(\1 + 1).fill(0)', ts_code)
    ts_code = re.sub(r'\[0\] \* (\w+)', r'Array(\1).fill(0)', ts_code)
    ts_code = re.sub(r'\[1\] \* \((\w+) \+ 1\)', r'Array(\1 + 1).fill(1)', ts_code)
    ts_code = re.sub(r'\[1\] \* (\w+)', r'Array(\1).fill(1)', ts_code)
    ts_code = re.sub(r'\[False\] \* \((\w+) \+ 1\)', r'Array(\1 + 1).fill(false)', ts_code)

    # 2D array creation
    ts_code = re.sub(
        r'\[\[0\] \* (\w+) for _ in range\((\w+)\)\]',
        r'Array.from({ length: \2 }, () => Array(\1).fill(0))',
        ts_code
    )

    # len() to .length
    ts_code = re.sub(r'len\((\w+)\)', r'\1.length', ts_code)

    # Dictionary operations
    ts_code = re.sub(r'(\w+) = \{\}', r'const \1 = new Map<number, number>()', ts_code)
    ts_code = re.sub(r'(\w+) in (\w+)', r'\2.has(\1)', ts_code)
    ts_code = re.sub(r'(\w+)\[(\w+)\] = ', r'\1.set(\2, ', ts_code)

    # float('inf') to Infinity
    ts_code = ts_code.replace("float('inf')", 'Infinity')

    # print to console.log
    ts_code = re.sub(r'print\(f"([^"]+)"\)', lambda m: f'console.log(`{m.group(1)}`)', ts_code)
    ts_code = re.sub(r'print\(f\'([^\']+)\'\)', lambda m: f'console.log(`{m.group(1)}`)', ts_code)

    # return statements stay the same but add semicolons
    ts_code = re.sub(r'(\n\s+return [^;\n]+)(?=\n)', r'\1;', ts_code)

    # Add semicolons to simple statements
    ts_code = re.sub(r'(\n\s+)([a-zA-Z_]\w*\s*=\s*[^=\n]+)(?=\n)', r'\1\2;', ts_code)

    # if/elif/else
    ts_code = re.sub(r'elif ', 'else if ', ts_code)
    ts_code = re.sub(r'if (.+):', r'if (\1) {', ts_code)
    ts_code = re.sub(r'else:', 'else {', ts_code)

    # Type annotations
    ts_code = ts_code.replace('-> int', '): number')
    ts_code = ts_code.replace('-> bool', '): boolean')
    ts_code = ts_code.replace('-> float', '): number')

    return ts_code


def convert_params(params: str) -> str:
    """Convert Python parameters to TypeScript."""
    if not params.strip():
        return ''

    parts = [p.strip() for p in params.split(',')]
    ts_params = []

    for part in parts:
        if '=' in part:
            # Has default value
            name, default = part.split('=')
            name = name.strip()
            default = default.strip()
            if default == 'None':
                default = 'null'
            elif default == 'True':
                default = 'true'
            elif default == 'False':
                default = 'false'
            ts_params.append(f'{name}: any = {default}')
        else:
            # No default value - infer type
            name = part.strip()
            if name in ['n', 'i', 'j', 'k', 'amount', 'target', 'W']:
                ts_params.append(f'{name}: number')
            elif name in ['nums', 'arr', 'values', 'weights', 'coins']:
                ts_params.append(f'{name}: number[]')
            elif name == 's':
                ts_params.append(f'{name}: string')
            else:
                ts_params.append(f'{name}: any')

    return ', '.join(ts_params)


# Test
if __name__ == '__main__':
    test_code = '''def count_ways_to_climb(n):
    """
    Count ways to climb n stairs.
    Time: O(n), Space: O(n)
    """
    if n == 0:
        return 1
    if n == 1:
        return 1
    if n == 2:
        return 2

    dp = [0] * (n + 1)
    dp[0] = 1  # One way to stay at ground
    dp[1] = 1  # One way: 1 step
    dp[2] = 2  # Two ways: 1+1 or 2

    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

    return dp[n]'''

    print("PYTHON:")
    print(test_code)
    print("\n" + "="*50 + "\n")
    print("TYPESCRIPT:")
    print(python_to_typescript(test_code))
