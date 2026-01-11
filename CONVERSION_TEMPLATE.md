# TypeScript Conversion Template Guide

## Quick Reference: Before & After Pattern

### For codeExample Fields

**BEFORE:**
```typescript
  codeExample: `def climb_stairs(n):
    if n <= 1:
        return 1

    prev2 = 1
    prev1 = 1

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1`,
```

**AFTER:**
```typescript
  codeExample: {
    python: `def climb_stairs(n):
    if n <= 1:
        return 1

    prev2 = 1
    prev1 = 1

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1`,
    typescript: `function climbStairs(n: number): number {
    if (n <= 1) {
        return 1;
    }

    let prev2 = 1;
    let prev1 = 1;

    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}`
  },
```

### For Exercise initialCode & solution Fields

**BEFORE:**
```typescript
    {
      prompt: 'Implement climbing stairs...',
      initialCode: `def climb_stairs(n):
    """Calculate number of ways."""
    # Your code here
    pass`,
      solution: `def climb_stairs(n):
    """Solution implementation."""
    if n <= 1:
        return 1
    # ... rest of solution`,
      difficulty: Difficulty.Intermediate,
    }
```

**AFTER:**
```typescript
    {
      prompt: 'Implement climbing stairs...',
      initialCode: {
        python: `def climb_stairs(n):
    """Calculate number of ways."""
    # Your code here
    pass`,
        typescript: `function climbStairs(n: number): number {
    /**
     * Calculate number of ways.
     */
    // Your code here
    return 0;
}`
      },
      solution: {
        python: `def climb_stairs(n):
    """Solution implementation."""
    if n <= 1:
        return 1
    # ... rest of solution`,
        typescript: `function climbStairs(n: number): number {
    /**
     * Solution implementation.
     */
    if (n <= 1) {
        return 1;
    }
    // ... rest of solution
}`
      },
      difficulty: Difficulty.Intermediate,
    }
```

## Step-by-Step Conversion Process

### Step 1: Identify the Python Code Block
Find blocks that look like:
- `codeExample: \`def ...`
- `initialCode: \`def ...`
- `solution: \`def ...`

### Step 2: Transform to Dual-Language Structure
Wrap in object with `python` and `typescript` keys.

### Step 3: Convert Python to TypeScript

#### A. Function Definition
```python
def function_name(param1, param2):
```
↓
```typescript
function functionName(param1: Type1, param2: Type2): ReturnType {
```

**Type Mapping:**
- `n`, `i`, `j`, `amount`, `target` → `number`
- `nums`, `arr`, `cost`, `coins`, `values`, `weights` → `number[]`
- `s`, `text`, `word` → `string`
- `word_dict`, `wordDict`, `dictionary` → `string[]`

#### B. Variable Declarations
```python
dp = [0] * n
count = 0
result = []
```
↓
```typescript
const dp: number[] = Array(n).fill(0);
let count = 0;
const result: number[] = [];
```

#### C. 2D Arrays
```python
dp = [[0] * n for _ in range(m)]
```
↓
```typescript
const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
```

#### D. Memoization
```python
memo = {}
if n in memo:
    return memo[n]
memo[n] = value
```
↓
```typescript
const memo = new Map<number, number>();
if (memo.has(n)) {
    return memo.get(n)!;
}
memo.set(n, value);
```

#### E. Loops
```python
for i in range(n):
for i in range(2, n + 1):
for i in range(n - 1, -1, -1):
```
↓
```typescript
for (let i = 0; i < n; i++)
for (let i = 2; i <= n; i++)
for (let i = n - 1; i >= 0; i--)
```

#### F. Conditionals
```python
if not nums or len(nums) == 0:
if n <= 1:
elif n == 2:
else:
```
↓
```typescript
if (!nums || nums.length === 0) {
if (n <= 1) {
} else if (n === 2) {
} else {
}
```

#### G. Built-in Functions
```python
len(arr)          → arr.length
max(a, b)         → Math.max(a, b)
min(a, b)         → Math.min(a, b)
float('inf')      → Infinity
s[i:j]            → s.slice(i, j)
int(s[i:j])       → parseInt(s.slice(i, j))
s[i]              → s[i]  (same)
```

#### H. Boolean & None
```python
True              → true
False             → false
None              → null
not x             → !x
and               → &&
or                → ||
```

#### I. Return Statements
```python
return value
```
↓
```typescript
return value;  // Add semicolon
```

#### J. Docstrings & Comments
```python
"""
Multi-line docstring
"""
# Single line comment
```
↓
```typescript
/**
 * Multi-line comment
 */
// Single line comment
```

### Step 4: Special Cases

#### Case 1: Multiple Return Statements
Keep structure the same, just convert each:
```python
if condition:
    return value1
return value2
```
↓
```typescript
if (condition) {
    return value1;
}
return value2;
```

#### Case 2: List Comprehension
```python
dp = [i * 2 for i in range(n)]
```
↓
```typescript
const dp: number[] = Array.from({ length: n }, (_, i) => i * 2);
```

#### Case 3: Tuple Unpacking
```python
a, b = b, a + b
prev3, prev2, prev1 = prev2, prev1, current
```
↓
```typescript
[a, b] = [b, a + b];
[prev3, prev2, prev1] = [prev2, prev1, current];
```

#### Case 4: String Operations
```python
s.startswith('a')  → s.startsWith('a')
s.endswith('z')    → s.endsWith('z')
s.lower()          → s.toLowerCase()
s.upper()          → s.toUpperCase()
```

## Common Patterns in DP Files

### Pattern 1: Basic Fibonacci-like
```python
def func(n):
    if n <= 1:
        return n
    prev2, prev1 = 0, 1
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    return prev1
```
↓
```typescript
function func(n: number): number {
    if (n <= 1) {
        return n;
    }
    let prev2 = 0, prev1 = 1;
    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}
```

### Pattern 2: Array DP
```python
def func(nums):
    if not nums:
        return 0
    n = len(nums)
    dp = [0] * n
    dp[0] = nums[0]
    for i in range(1, n):
        dp[i] = max(dp[i-1], nums[i])
    return dp[n-1]
```
↓
```typescript
function func(nums: number[]): number {
    if (!nums || nums.length === 0) {
        return 0;
    }
    const n = nums.length;
    const dp: number[] = Array(n).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i-1], nums[i]);
    }
    return dp[n-1];
}
```

### Pattern 3: 2D DP
```python
def func(m, n):
    dp = [[0] * n for _ in range(m)]
    for i in range(m):
        for j in range(n):
            if i == 0 or j == 0:
                dp[i][j] = 1
            else:
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
    return dp[m-1][n-1]
```
↓
```typescript
function func(m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
}
```

## Quality Checklist

After each conversion, verify:
- [ ] Function name converted from snake_case to camelCase
- [ ] All parameters have type annotations
- [ ] Return type is specified
- [ ] All variables declared with `const` or `let`
- [ ] Array types explicitly declared (`:number[]`, `:string[]`, etc.)
- [ ] All loops converted to TypeScript syntax
- [ ] All conditionals have braces `{}`
- [ ] All statements end with semicolons
- [ ] `len()` → `.length`
- [ ] `max()`/`min()` → `Math.max()`/`Math.min()`
- [ ] `True`/`False`/`None` → `true`/`false`/`null`
- [ ] Comments converted (`#` → `//`, `"""` → `/** */`)
- [ ] No Python-specific syntax remains

## Example: Complete Exercise Conversion

**BEFORE (Python only):**
```typescript
{
  prompt: 'Solve the House Robber problem.',
  initialCode: `def rob(nums):
    """
    Rob houses to maximize money without robbing adjacent.
    """
    # Your code here
    pass`,
  solution: `def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    prev2 = nums[0]
    prev1 = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        current = max(nums[i] + prev2, prev1)
        prev2, prev1 = prev1, current

    return prev1`,
  difficulty: Difficulty.Intermediate,
}
```

**AFTER (Dual-language):**
```typescript
{
  prompt: 'Solve the House Robber problem.',
  initialCode: {
    python: `def rob(nums):
    """
    Rob houses to maximize money without robbing adjacent.
    """
    # Your code here
    pass`,
    typescript: `function rob(nums: number[]): number {
    /**
     * Rob houses to maximize money without robbing adjacent.
     */
    // Your code here
    return 0;
}`
  },
  solution: {
    python: `def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    prev2 = nums[0]
    prev1 = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        current = max(nums[i] + prev2, prev1)
        prev2, prev1 = prev1, current

    return prev1`,
    typescript: `function rob(nums: number[]): number {
    if (!nums || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    let prev2 = nums[0];
    let prev1 = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        const current = Math.max(nums[i] + prev2, prev1);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}`
  },
  difficulty: Difficulty.Intermediate,
}
```

## Tools for Conversion

### Use Edit Tool
```typescript
Edit({
  file_path: "path/to/file.ts",
  old_string: "initialCode: `def func(n):",  // Exact match from Python version
  new_string: "initialCode: {\n  python: `def func(n):",  // Start of dual-language version
  replace_all: false
})
```

### Test Build After Each Section
```bash
npm run build
```

This ensures TypeScript compilation succeeds and catches syntax errors immediately.
