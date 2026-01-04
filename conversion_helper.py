#!/usr/bin/env python3
"""
Helper script to assist with Python to TypeScript conversion for array lessons.
This script provides TypeScript equivalents for common Python patterns.
"""

# This is a reference file for manual conversion patterns

CONVERSION_PATTERNS = {
    # Function declarations
    "def func_name(param):": "function funcName(param: type): returnType {",

    # Print statements
    'print(f"text {var}")': 'console.log(\\`text ${var}\\`);',
    'print("text")': 'console.log("text");',

    # List operations
    "len(array)": "array.length",
    "array[:]": "array.slice()",
    "array[:n]": "array.slice(0, n)",
    "array[n:]": "array.slice(n)",
    "array[start:end]": "array.slice(start, end)",
    "sum(array)": "array.reduce((a, b) => a + b, 0)",
    "array.append(x)": "array.push(x)",

    # Dictionary/Map operations
    "{}": "new Map()",
    "dict[key] = value": "dict.set(key, value)",
    "dict.get(key, default)": "(dict.get(key) || default)",
    "del dict[key]": "dict.delete(key)",
    "key in dict": "dict.has(key)",
    "len(dict)": "dict.size",

    # Set operations
    "set()": "new Set()",
    "set(array)": "new Set(array)",

    # Range and loops
    "range(n)": "Array.from({ length: n }, (_, i) => i)",
    "for i in range(n):": "for (let i = 0; i < n; i++) {",
    "for item in array:": "for (const item of array) {",

    # Special values
    "float('inf')": "Infinity",
    "float('-inf')": "-Infinity",
    "None": "null",
    "True": "true",
    "False": "false",

    # Type annotations
    "List[int]": "number[]",
    "List[str]": "string[]",
    "Tuple[int, int]": "[number, number]",
    "Dict[str, int]": "Map<string, number>",
    "Set[int]": "Set<number>",
}

print("Python to TypeScript Conversion Reference")
print("==========================================")
for py, ts in CONVERSION_PATTERNS.items():
    print(f"{py:30} -> {ts}")
