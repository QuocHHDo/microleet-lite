#!/usr/bin/env python3
"""
Semi-automated conversion helper for Python to TypeScript in arrayLessons.ts
This script provides TypeScript conversions for the remaining lessons.

IMPORTANT: This script generates TypeScript code that needs to be manually inserted
into the arrayLessons.ts file. Review each conversion before adding to the file.
"""

import re

# Conversion mappings
CONVERSIONS = {
    # Basic types and values
    'None': 'null',
    'True': 'true',
    'False': 'false',
    "float('inf')": 'Infinity',
    "float('-inf')": '-Infinity',

    # String operations
    r'print\(f"([^"]+)"\)': r'console.log(\`\1\`)',
    r'print\("([^"]+)"\)': r'console.log("\1")',

    # List/Array operations
    r'len\((\w+)\)': r'\1.length',
    r'\.append\(': '.push(',
    r'range\((\w+)\)': r'Array.from({ length: \1 }, (_, i) => i)',

    # Dict/Map operations
    r'\.get\((\w+), ([^)]+)\)': r'(dict.get(\1) || \2)',

    # Loop structures
    r'for (\w+) in range\((\w+)\):': r'for (let \1 = 0; \1 < \2; \1++) {',
    r'for (\w+) in (\w+):': r'for (const \1 of \2) {',

    # Conditional
    r'if not (\w+):': r'if (!\1) {',
    r'elif ': 'else if (',
    r'else:': 'else {',
}

def convert_snake_to_camel(name):
    """Convert snake_case to camelCase"""
    components = name.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])

def generate_typescript_function_signature(python_func):
    """
    Generate TypeScript function signature from Python function.
    This is a helper - manual review required!
    """
    # Extract function name
    match = re.search(r'def (\w+)\((.*?)\):', python_func)
    if not match:
        return None

    func_name = match.group(1)
    params = match.group(2)

    ts_func_name = convert_snake_to_camel(func_name)

    # Simple parameter conversion (needs manual type annotation)
    if params:
        ts_params = ', '.join([f"{p.strip()}: any" for p in params.split(',')])
    else:
        ts_params = ""

    return f"function {ts_func_name}({ts_params}): any {{"

def print_conversion_guide():
    """Print a guide for manual conversion"""
    print("=" * 70)
    print("PYTHON TO TYPESCRIPT CONVERSION GUIDE")
    print("=" * 70)
    print()
    print("COMMON PATTERNS:")
    print()

    patterns = [
        ("def func(param):", "function func(param: type): returnType {"),
        ("len(array)", "array.length"),
        ("array[:]", "array.slice()"),
        ("array[:n]", "array.slice(0, n)"),
        ("array[start:end]", "array.slice(start, end)"),
        ("sum(array)", "array.reduce((a, b) => a + b, 0)"),
        ("array.append(x)", "array.push(x)"),
        ("{}", "new Map()"),
        ("dict[key] = value", "dict.set(key, value)"),
        ("dict.get(key, default)", "(dict.get(key) || default)"),
        ("del dict[key]", "dict.delete(key)"),
        ("set()", "new Set()"),
        ("for i in range(n):", "for (let i = 0; i < n; i++) {"),
        ("for item in array:", "for (const item of array) {"),
        ('print(f"text {var}")', 'console.log(\\`text ${var}\\`)'),
    ]

    for py, ts in patterns:
        print(f"  {py:30} => {ts}")

    print()
    print("TEMPLATE LITERAL ESCAPING:")
    print("  In arrayLessons.ts, use triple backslashes for template literals:")
    print('  console.log(\\\\\\`Value: \\\\\\${variable}\\\\\\`);')
    print()
    print("TYPE ANNOTATIONS:")
    print("  number[] - for number arrays")
    print("  string[] - for string arrays")
    print("  [number, number] - for tuples")
    print("  Map<K, V> - for dictionaries")
    print("  Set<T> - for sets")
    print("  | null - for optional/nullable types")
    print()
    print("EXERCISE FORMAT:")
    print("  Use dual-language format:")
    print("  {")
    print("    prompt: '...',")
    print("    initialCode: {")
    print("      python: `...`,")
    print("      typescript: `...`")
    print("    },")
    print("    solution: {")
    print("      python: `...`,")
    print("      typescript: `...`")
    print("    },")
    print("    difficulty: Difficulty.Level")
    print("  }")
    print()
    print("=" * 70)

if __name__ == "__main__":
    print_conversion_guide()

    print("\nLESSONS REMAINING TO CONVERT:")
    print("=" * 70)

    lessons = [
        ("Window Variations", "~12206", "Partially done - complete exercises"),
        ("Prefix Sum Basics", "~12351", "All code blocks + exercises"),
        ("Range Queries", "~12811", "All code blocks + exercises"),
        ("Kadane Algorithm", "~13289", "All code blocks + exercises"),
        ("Stock Patterns", "~13700", "All code blocks + exercises"),
        ("Subarray Problems", "~14100", "All code blocks + exercises"),
        ("Array Rotation", "~14500", "All code blocks + exercises"),
        ("Majority Element", "~15000", "All code blocks + exercises"),
        ("Matrix Traversal", "~15400", "All code blocks + exercises"),
        ("Matrix Transformation", "~15800", "All code blocks + exercises"),
    ]

    for i, (name, line, status) in enumerate(lessons, 1):
        print(f"{i}. {name:25} (Line {line:6}) - {status}")

    print("\n" + "=" * 70)
    print("\nRECOMMENDATION:")
    print("Due to the large number of remaining lessons, continue converting")
    print("lessons manually using the Edit tool, following these patterns.")
    print("\nFor each lesson:")
    print("1. Convert all main code blocks to add TypeScript versions")
    print("2. Convert exercise initialCode and solution to dual-language format")
    print("3. Update the TODO list as each lesson is completed")
    print("\nThe conversion is straightforward but requires attention to detail")
    print("for proper type annotations and escaped backticks.")
