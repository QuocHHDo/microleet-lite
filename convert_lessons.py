#!/usr/bin/env python3
"""
Script to convert Array lessons to support both Python and TypeScript.
This script processes specific lessons in arrayLessons.ts file.
"""

import re
import sys

# Lesson conversion data with line numbers
LESSONS_TO_CONVERT = [
    ("twoPointerBasicsData", 7993, 8465),
    ("twoPointerVariationsData", 8466, 8940),
    ("arrayPartitioningData", 8940, 9393),
    ("dutchFlagData", 9393, 9850),
    ("slidingWindowConceptData", 9850, 10337),
    ("windowVariationsData", 10337, 10851),
    ("prefixSumBasicsData", 10851, 11311),
    ("rangeQueriesData", 11311, 11789),
    ("kadaneAlgorithmData", 11789, 12171),
    ("stockPatternsData", 12171, 12629),
    ("subarrayProblemsData", 12629, 13111),
    ("arrayRotationData", 13111, 13489),
    ("majorityElementData", 13489, 13883),
    ("matrixTraversalData", 13883, 14578),
    ("matrixTransformationData", 14578, 15500),  # Approximate end
]


def python_to_typescript(python_code):
    """
    Convert Python code to TypeScript.
    This is a basic conversion - may need manual adjustment for complex cases.
    """
    ts_code = python_code

    # Convert function definitions
    ts_code = re.sub(r'def (\w+)\((.*?)\):', r'function \1(\2):', ts_code)

    # Convert docstrings to JSDoc comments
    ts_code = re.sub(r'    """(.*?)"""', r'    /**\n     * \1\n     */', ts_code, flags=re.DOTALL)
    ts_code = re.sub(r'"""(.*?)"""', r'/**\n * \1\n */', ts_code, flags=re.DOTALL)

    # Convert print statements
    ts_code = re.sub(r'print\(f"(.*?)"\)', lambda m: f'console.log(`{m.group(1)}`)', ts_code)
    ts_code = re.sub(r'print\(f\'(.*?)\'\)', lambda m: f'console.log(`{m.group(1)}`)', ts_code)
    ts_code = re.sub(r'print\("(.*?)"\)', r'console.log("\1")', ts_code)
    ts_code = re.sub(r'print\(\'(.*?)\'\)', r'console.log(\'\1\')', ts_code)

    # Convert len() to .length
    ts_code = re.sub(r'len\((\w+)\)', r'\1.length', ts_code)

    # Convert range() to Array.from() or loops
    ts_code = re.sub(r'for (\w+) in range\((\d+), len\((\w+)\)\):',
                     r'for (let \1 = \2; \1 < \3.length; \1++) {', ts_code)
    ts_code = re.sub(r'for (\w+) in range\(len\((\w+)\) - (\d+)\):',
                     r'for (let \1 = 0; \1 < \2.length - \3; \1++) {', ts_code)
    ts_code = re.sub(r'for (\w+) in range\(len\((\w+)\)\):',
                     r'for (let \1 = 0; \1 < \2.length; \1++) {', ts_code)
    ts_code = re.sub(r'for (\w+) in range\((\d+)\):',
                     r'for (let \1 = 0; \1 < \2; \1++) {', ts_code)

    # Convert enumerate
    ts_code = re.sub(r'for (\w+), (\w+) in enumerate\((\w+)\):',
                     r'for (let [\1, \2] of \3.entries()) {', ts_code)

    # Convert None to null
    ts_code = re.sub(r'\bNone\b', 'null', ts_code)

    # Convert True/False to true/false
    ts_code = re.sub(r'\bTrue\b', 'true', ts_code)
    ts_code = re.sub(r'\bFalse\b', 'false', ts_code)

    # Convert pass to empty block
    ts_code = re.sub(r'    pass', '    // TODO: Implement', ts_code)
    ts_code = re.sub(r'pass', '// TODO: Implement', ts_code)

    # Convert elif to else if
    ts_code = re.sub(r'elif\s+', 'else if (', ts_code)
    ts_code = re.sub(r'else if \((.*?):\)', r'else if (\1) {', ts_code)

    # Convert if/else/while statements
    ts_code = re.sub(r'if (.*?):', r'if (\1) {', ts_code)
    ts_code = re.sub(r'while (.*?):', r'while (\1) {', ts_code)
    ts_code = re.sub(r'else:', 'else {', ts_code)

    # Convert not to !
    ts_code = re.sub(r'\bnot\s+(\w+)', r'!\1', ts_code)

    # Convert and/or to &&/||
    ts_code = re.sub(r'\band\b', '&&', ts_code)
    ts_code = re.sub(r'\bor\b', '||', ts_code)

    # Convert float('inf') to Number.POSITIVE_INFINITY
    ts_code = re.sub(r"float\('inf'\)", 'Number.POSITIVE_INFINITY', ts_code)
    ts_code = re.sub(r"float\('-inf'\)", 'Number.NEGATIVE_INFINITY', ts_code)

    # Convert array slicing
    ts_code = re.sub(r'(\w+)\[(\w+):(\w+)\+1\]', r'\1.slice(\2, \3 + 1)', ts_code)
    ts_code = re.sub(r'(\w+)\[(\w+):\]', r'\1.slice(\2)', ts_code)
    ts_code = re.sub(r'(\w+)\[:(\w+)\]', r'\1.slice(0, \2)', ts_code)

    # Convert .append() to .push()
    ts_code = re.sub(r'\.append\(', '.push(', ts_code)

    # Convert .get() to ?? operator or Map.get()
    ts_code = re.sub(r'\.get\((\w+), 0\)', r'.get(\1) ?? 0', ts_code)

    # Convert dict() to new Map()
    ts_code = re.sub(r'\bdict\(\)', 'new Map()', ts_code)

    # Convert set() to new Set()
    ts_code = re.sub(r'\bset\(\)', 'new Set()', ts_code)
    ts_code = re.sub(r'\bset\((\w+)\)', r'new Set(\1)', ts_code)

    # Convert abs() to Math.abs()
    ts_code = re.sub(r'\babs\(', 'Math.abs(', ts_code)

    # Convert max() to Math.max()
    ts_code = re.sub(r'\bmax\(', 'Math.max(', ts_code)

    # Convert min() to Math.min()
    ts_code = re.sub(r'\bmin\(', 'Math.min(', ts_code)

    # Convert sum() to reduce
    ts_code = re.sub(r'sum\((\w+)\)', r'\1.reduce((a, b) => a + b, 0)', ts_code)

    # Convert .sort() to .sort()
    ts_code = re.sub(r'\.sort\(\)', '.sort((a, b) => a - b)', ts_code)

    # Convert return type hints
    ts_code = re.sub(r'->\s*(\w+):', r': \1 {', ts_code)

    return ts_code


def main():
    print("Array Lessons Converter")
    print("=" * 50)
    print("This script helps identify patterns for conversion.")
    print("Due to complexity, actual conversion needs to be done carefully.")
    print("\nLessons to convert:")
    for name, start, end in LESSONS_TO_CONVERT:
        print(f"  - {name} (lines {start}-{end})")


if __name__ == "__main__":
    main()
