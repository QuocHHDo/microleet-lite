import { LessonContent } from '@/common/commonLesson';
import { Difficulty } from '@/common/commonConcept';


// SECTION 1: DYNAMIC PROGRAMMING FUNDAMENTALS
// ============================================================================

const dpConceptData: LessonContent = {
  title: 'Understanding Dynamic Programming: The Art of Breaking Down Problems',
  content: `Dynamic Programming (DP) is often considered one of the most challenging yet rewarding techniques in computer science. Let's demystify it and understand what makes DP such a powerful problem-solving approach.

<h3>What Is Dynamic Programming?</h3>

Imagine you're climbing a staircase, and someone asks you: "How many different ways can you reach the 10th step if you can take either 1 or 2 steps at a time?"

You could try every possible combination (1+1+1+1..., or 2+1+1+..., or 1+2+1+..., etc.), but that would take forever. Instead, think about it this way:

**To reach step 10, you either:**
- Came from step 9 (and took 1 step), OR
- Came from step 8 (and took 2 steps)

So the answer for step 10 = answer for step 9 + answer for step 8. This is the essence of Dynamic Programming!

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">The DP Principle</h4>
  <div class="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
    <p class="text-lg font-semibold text-blue-900 mb-2">Core Idea:</p>
    <p class="text-gray-700">Break a complex problem into simpler subproblems, solve each subproblem once, and store the result to avoid redundant calculations.</p>
  </div>
</div>

<h3>Two Key Properties of DP Problems</h3>

For a problem to be solvable with Dynamic Programming, it must have these two properties:

<h4>1. Optimal Substructure</h4>

The optimal solution to the problem contains optimal solutions to its subproblems.

Think of it like building blocks: if you have the best solution for smaller pieces, you can combine them to get the best solution for the bigger problem.

**Example:** Finding the shortest path from A to C through B requires finding the shortest paths from A to B and B to C.

<h4>2. Overlapping Subproblems</h4>

The same subproblems are solved multiple times when using a naive recursive approach.

**Example with Fibonacci:**

\`\`\`
Computing fib(5):
    fib(5)
   /      \\
fib(4)   fib(3)
 /  \\      /  \\
fib(3) fib(2) fib(2) fib(1)
 / \\
fib(2) fib(1)
\`\`\`

Notice how fib(3) is calculated twice, fib(2) is calculated three times! This redundancy is what DP eliminates.

<h3>DP vs Other Approaches</h3>

<div class="comparison-table my-6">
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-gray-200">
        <th class="border p-3 text-left">Approach</th>
        <th class="border p-3 text-left">When to Use</th>
        <th class="border p-3 text-left">Time Complexity</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-3"><strong>Brute Force / Recursion</strong></td>
        <td class="border p-3">Small inputs, simple logic</td>
        <td class="border p-3">Often exponential O(2ⁿ)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border p-3"><strong>Greedy</strong></td>
        <td class="border p-3">Local optimal = global optimal</td>
        <td class="border p-3">Usually O(n log n) or O(n)</td>
      </tr>
      <tr>
        <td class="border p-3"><strong>Dynamic Programming</strong></td>
        <td class="border p-3">Overlapping subproblems + optimal substructure</td>
        <td class="border p-3">Usually O(n²) or O(n³)</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border p-3"><strong>Divide & Conquer</strong></td>
        <td class="border p-3">Independent subproblems</td>
        <td class="border p-3">Often O(n log n)</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>Real-World DP Example: Navigation Apps</h3>

When Google Maps finds the fastest route from your home to work:

1. **Overlapping Subproblems:** Many routes share common segments
2. **Optimal Substructure:** The fastest route through point B includes the fastest routes to and from B
3. **DP Solution:** It doesn't recalculate shared segments for every possible route

<h3>The Classic DP Problem: Fibonacci Numbers</h3>

Let's see DP in action with the Fibonacci sequence:

\`\`\`python
# Naive Recursive Approach - SLOW! O(2ⁿ)
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n-1) + fib_recursive(n-2)

# For fib(40), this makes ~300 million recursive calls!
\`\`\`

\`\`\`python
# Dynamic Programming Approach - FAST! O(n)
def fib_dp(n):
    if n <= 1:
        return n

    # Store solutions to subproblems
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1

    # Build up from smaller problems
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]

# For fib(40), this makes only 40 calculations!
\`\`\`

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Performance Comparison</h4>
  <div class="grid grid-cols-2 gap-4">
    <div class="bg-red-50 p-4 rounded border-2 border-red-300">
      <p class="font-bold text-red-900">Recursive (No DP)</p>
      <p class="text-sm text-gray-700">fib(40): ~2-3 seconds</p>
      <p class="text-sm text-gray-700">fib(45): ~30-40 seconds</p>
    </div>
    <div class="bg-green-50 p-4 rounded border-2 border-green-300">
      <p class="font-bold text-green-900">Dynamic Programming</p>
      <p class="text-sm text-gray-700">fib(40): < 1 millisecond</p>
      <p class="text-sm text-gray-700">fib(45): < 1 millisecond</p>
    </div>
  </div>
</div>

<h3>When to Think "Dynamic Programming"</h3>

Consider DP when you see these clues in a problem:

1. **Optimization problems:** Find maximum/minimum, longest/shortest, most/least
2. **Counting problems:** How many ways to achieve something
3. **Decision-making:** Choose/don't choose, include/exclude patterns
4. **The phrase:** "Find the optimal..." or "Count the number of ways..."
5. **Subproblem relationships:** Solution depends on solutions to smaller versions

<h3>The DP Mindset: Ask These Questions</h3>

When approaching a DP problem, ask yourself:

1. **What are my subproblems?** Break the problem into smaller versions
2. **What's my state?** What information do I need to track?
3. **What's my base case?** What's the simplest version of the problem?
4. **What's my recurrence relation?** How do subproblem solutions combine?
5. **What's my final answer?** Which subproblem solution gives me the answer?

<h3>Common DP Patterns You'll Master</h3>

<ul class="list-disc pl-6 space-y-2">
  <li><strong>1D DP:</strong> Linear sequences (stairs, houses, decode ways)</li>
  <li><strong>2D DP:</strong> Grid paths, string matching (LCS, edit distance)</li>
  <li><strong>Knapsack:</strong> Selection problems (subset sum, partition)</li>
  <li><strong>String DP:</strong> Palindromes, word break, LIS</li>
  <li><strong>Advanced:</strong> Trees, bitmasks, intervals</li>
</ul>

<h3>The Beauty of Dynamic Programming</h3>

DP transforms exponential problems into polynomial ones. What might take millions of years to compute becomes instant. That's the power you're about to master!

Remember: **DP is not magic—it's careful bookkeeping.** Every DP problem follows the same pattern:
1. Identify subproblems
2. Find the recurrence relation
3. Determine base cases
4. Build up from smaller to larger problems

Let's begin your journey to mastering this essential technique!`,
  codeExample: `# Three Approaches to Fibonacci - See the Evolution

# ========================================
# APPROACH 1: Naive Recursion (SLOW)
# ========================================
def fibonacci_recursive(n):
    """
    Time: O(2^n) - Exponential!
    Space: O(n) - Recursion stack

    This recalculates the same values many times.
    """
    if n <= 1:
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)


# ========================================
# APPROACH 2: Memoization (Top-Down DP)
# ========================================
def fibonacci_memo(n, memo=None):
    """
    Time: O(n) - Each subproblem solved once
    Space: O(n) - Memo dictionary + recursion stack

    Cache results to avoid recalculation.
    """
    if memo is None:
        memo = {}

    if n in memo:
        return memo[n]

    if n <= 1:
        return n

    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]


# ========================================
# APPROACH 3: Tabulation (Bottom-Up DP)
# ========================================
def fibonacci_dp(n):
    """
    Time: O(n) - Single pass through array
    Space: O(n) - DP array

    Build from base cases up to final answer.
    """
    if n <= 1:
        return n

    # Create table to store solutions
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1

    # Fill table bottom-up
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]


# ========================================
# APPROACH 4: Space-Optimized DP
# ========================================
def fibonacci_optimized(n):
    """
    Time: O(n) - Single pass
    Space: O(1) - Only two variables!

    We only need the last two values.
    """
    if n <= 1:
        return n

    prev2 = 0  # fib(0)
    prev1 = 1  # fib(1)

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


# ========================================
# Performance Comparison
# ========================================
import time

def compare_approaches(n):
    """Compare the performance of different approaches."""

    # Approach 1: Too slow for large n, skip if n > 35
    if n <= 35:
        start = time.time()
        result1 = fibonacci_recursive(n)
        time1 = time.time() - start
        print(f"Recursive: fib({n}) = {result1}, Time: {time1:.6f}s")
    else:
        print(f"Recursive: Skipped (too slow for n={n})")

    # Approach 2: Memoization
    start = time.time()
    result2 = fibonacci_memo(n)
    time2 = time.time() - start
    print(f"Memoization: fib({n}) = {result2}, Time: {time2:.6f}s")

    # Approach 3: Tabulation
    start = time.time()
    result3 = fibonacci_dp(n)
    time3 = time.time() - start
    print(f"Tabulation: fib({n}) = {result3}, Time: {time3:.6f}s")

    # Approach 4: Optimized
    start = time.time()
    result4 = fibonacci_optimized(n)
    time4 = time.time() - start
    print(f"Optimized: fib({n}) = {result4}, Time: {time4:.6f}s")


# Test with different values
print("Computing fib(20):")
compare_approaches(20)
print("\\nComputing fib(30):")
compare_approaches(30)
print("\\nComputing fib(40):")
compare_approaches(40)`,
  exercises: [
    {
      prompt: 'Implement a function that calculates the nth Tribonacci number (sum of previous 3 numbers instead of 2). Use dynamic programming with O(n) time and O(1) space.',
      initialCode: `def tribonacci(n):
    """
    Calculate the nth Tribonacci number.
    T(n) = T(n-1) + T(n-2) + T(n-3)
    T(0) = 0, T(1) = 1, T(2) = 1

    Args:
        n: The position in the Tribonacci sequence
    Returns:
        The nth Tribonacci number
    """
    # Your code here
    pass`,
      solution: `def tribonacci(n):
    """
    Calculate the nth Tribonacci number.
    Time: O(n), Space: O(1)
    """
    if n == 0:
        return 0
    if n <= 2:
        return 1

    # Only need last 3 values
    t0, t1, t2 = 0, 1, 1

    for i in range(3, n + 1):
        current = t0 + t1 + t2
        t0 = t1
        t1 = t2
        t2 = current

    return t2`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Write a function to count the number of ways to climb n stairs if you can take 1, 2, or 3 steps at a time. Use dynamic programming.',
      initialCode: `def count_ways_to_climb(n):
    """
    Count ways to climb n stairs taking 1, 2, or 3 steps at a time.

    Args:
        n: Number of stairs
    Returns:
        Number of distinct ways to climb the stairs
    """
    # Your code here
    pass`,
      solution: `def count_ways_to_climb(n):
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

    return dp[n]`,
      difficulty: Difficulty.Beginner,
    },
  ],
  quizzes: [
    {
      question: 'What are the two key properties that a problem must have to be solved with Dynamic Programming?',
      options: [
        'Fast execution and low memory usage',
        'Optimal substructure and overlapping subproblems',
        'Recursive structure and iterative solution',
        'Greedy choice and divide-and-conquer',
      ],
      correctAnswer: 1,
      explanations: [
        'These are desirable outcomes but not the defining properties of DP problems.',
        'Correct! DP requires: (1) Optimal substructure - optimal solution contains optimal solutions to subproblems, and (2) Overlapping subproblems - the same subproblems are solved multiple times.',
        'While DP often uses these techniques, they are implementation details, not defining properties.',
        'Greedy choice is for greedy algorithms, and divide-and-conquer solves independent subproblems (DP solves overlapping ones).',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why is the naive recursive solution for Fibonacci inefficient?',
      options: [
        'It uses too much memory',
        'It cannot handle large numbers',
        'It recalculates the same subproblems many times',
        'It has too many base cases',
      ],
      correctAnswer: 2,
      explanations: [
        'The memory usage (recursion stack) is O(n), which is not the main issue.',
        'While this can be a problem, it is not the reason for inefficiency.',
        'Correct! The naive recursive approach recalculates values like fib(3), fib(2) many times, leading to exponential time complexity O(2^n).',
        'Having base cases is necessary and not a source of inefficiency.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the time complexity of the DP solution for calculating the nth Fibonacci number?',
      options: [
        'O(2^n) - Exponential',
        'O(n^2) - Quadratic',
        'O(n) - Linear',
        'O(log n) - Logarithmic',
      ],
      correctAnswer: 2,
      explanations: [
        'This is the complexity of the naive recursive approach without DP.',
        'DP for Fibonacci is more efficient than this.',
        'Correct! The DP solution calculates each Fibonacci number once, resulting in O(n) time complexity.',
        'While there is a matrix exponentiation approach that achieves this, the standard DP solution is O(n).',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const memoizationVsTabulationData: LessonContent = {
  title: 'Memoization vs Tabulation: Two Sides of the DP Coin',
  content: `There are two main approaches to implementing Dynamic Programming solutions: **Memoization (Top-Down)** and **Tabulation (Bottom-Up)**. Understanding both is crucial because different problems favor different approaches.

<h3>The Fundamental Difference</h3>

Think of solving a jigsaw puzzle:

**Memoization (Top-Down):**
- Start with the final picture (what you want)
- Work backwards, asking "what pieces do I need?"
- Cache pieces you've already placed
- Like starting from the complete puzzle and breaking it down

**Tabulation (Bottom-Up):**
- Start with individual pieces (base cases)
- Build up systematically
- Combine pieces until you have the complete picture
- Like starting from corners and edges, building inward

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">Memoization vs Tabulation</h4>
  <div class="grid grid-cols-2 gap-6">
    <div class="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
      <h5 class="font-bold text-purple-900 mb-2">Memoization (Top-Down)</h5>
      <ul class="text-sm space-y-1">
        <li>✓ Recursive approach</li>
        <li>✓ Solves subproblems as needed</li>
        <li>✓ Uses recursion call stack</li>
        <li>✓ More intuitive for some problems</li>
        <li>✗ May have stack overflow for deep recursion</li>
      </ul>
    </div>
    <div class="bg-green-50 p-4 rounded-lg border-2 border-green-300">
      <h5 class="font-bold text-green-900 mb-2">Tabulation (Bottom-Up)</h5>
      <ul class="text-sm space-y-1">
        <li>✓ Iterative approach</li>
        <li>✓ Solves all subproblems</li>
        <li>✓ Uses array/table</li>
        <li>✓ No recursion overhead</li>
        <li>✗ Must determine order of solving</li>
      </ul>
    </div>
  </div>
</div>

<h3>Memoization: Recursive with Caching</h3>

Memoization is essentially "remember-ization" - we remember (cache) results we've already computed.

**Key Characteristics:**
- Recursive function calls
- Cache/dictionary to store computed results
- Check cache before computing
- Top-down: start from the problem, work down to base cases
- Lazy evaluation: only computes what's needed

**When to Use:**
- Natural recursive formulation
- Not all subproblems need to be solved
- Recursion depth is manageable
- Problem is easier to think about recursively

<h3>Tabulation: Iterative Table-Filling</h3>

Tabulation builds a table (usually an array) from the ground up, filling it systematically.

**Key Characteristics:**
- Iterative loops
- Array/table to store all subproblem results
- Fill table in specific order
- Bottom-up: start from base cases, build to solution
- Eager evaluation: computes all subproblems

**When to Use:**
- Clear iteration order
- All subproblems needed anyway
- Want to avoid recursion overhead
- Need to optimize space (can sometimes use rolling arrays)

<h3>Side-by-Side Comparison: Climbing Stairs</h3>

Problem: Count ways to climb n stairs, taking 1 or 2 steps at a time.

**Approach 1: Memoization**
\`\`\`python
def climb_stairs_memo(n, memo=None):
    # Initialize cache
    if memo is None:
        memo = {}

    # Check if already computed
    if n in memo:
        return memo[n]

    # Base cases
    if n <= 2:
        return n

    # Recursive calls with caching
    memo[n] = climb_stairs_memo(n-1, memo) + climb_stairs_memo(n-2, memo)
    return memo[n]
\`\`\`

**Approach 2: Tabulation**
\`\`\`python
def climb_stairs_tab(n):
    # Handle base cases
    if n <= 2:
        return n

    # Create table
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2

    # Fill table bottom-up
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]
\`\`\`

<h3>Detailed Comparison Table</h3>

<table class="w-full border-collapse my-6">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Aspect</th>
      <th class="border p-3">Memoization</th>
      <th class="border p-3">Tabulation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3"><strong>Direction</strong></td>
      <td class="border p-3">Top-Down</td>
      <td class="border p-3">Bottom-Up</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3"><strong>Implementation</strong></td>
      <td class="border p-3">Recursive</td>
      <td class="border p-3">Iterative</td>
    </tr>
    <tr>
      <td class="border p-3"><strong>Storage</strong></td>
      <td class="border p-3">Dictionary/HashMap</td>
      <td class="border p-3">Array/Table</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3"><strong>Subproblems Solved</strong></td>
      <td class="border p-3">Only needed ones</td>
      <td class="border p-3">All subproblems</td>
    </tr>
    <tr>
      <td class="border p-3"><strong>Space Overhead</strong></td>
      <td class="border p-3">Cache + call stack</td>
      <td class="border p-3">Table only</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3"><strong>Time Complexity</strong></td>
      <td class="border p-3">Same as tabulation</td>
      <td class="border p-3">Same as memoization</td>
    </tr>
    <tr>
      <td class="border p-3"><strong>Ease of Coding</strong></td>
      <td class="border p-3">Often more intuitive</td>
      <td class="border p-3">Requires determining order</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3"><strong>Stack Overflow Risk</strong></td>
      <td class="border p-3">Yes, for deep recursion</td>
      <td class="border p-3">No</td>
    </tr>
  </tbody>
</table>

<h3>Conversion Between Approaches</h3>

Most problems can be solved with either approach. Here's how to convert:

**Memoization → Tabulation:**
1. Identify the recursive relation
2. Determine the order to fill the table
3. Replace recursive calls with table lookups
4. Use loops instead of recursion

**Tabulation → Memoization:**
1. Identify what you're computing
2. Write recursive function
3. Add caching for computed results
4. Add base cases

<h3>Space Optimization</h3>

Tabulation often allows for space optimization if you only need recent values:

\`\`\`python
# Original Tabulation: O(n) space
def fib_tab(n):
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Space-Optimized: O(1) space
def fib_optimized(n):
    if n <= 1:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr
\`\`\`

<h3>When to Choose Which?</h3>

**Choose Memoization when:**
- Problem has natural recursive structure
- Not all subproblems need solving (sparse computation)
- Recursion depth is manageable
- You want faster initial implementation

**Choose Tabulation when:**
- You need all subproblems anyway
- Want to optimize space with rolling arrays
- Want to avoid recursion overhead
- Iteration order is clear

**Pro Tip:** In interviews, start with memoization (faster to code), then optimize to tabulation if asked!`,
  codeExample: `# Complete Comparison: Fibonacci with Both Approaches

# ============================================
# MEMOIZATION (TOP-DOWN)
# ============================================

def fibonacci_memoization(n, memo=None):
    """
    Top-down DP using memoization.

    Time: O(n) - each number calculated once
    Space: O(n) - memo dict + recursion stack
    """
    # Initialize memoization dictionary
    if memo is None:
        memo = {}

    # Return cached result if available
    if n in memo:
        return memo[n]

    # Base cases
    if n <= 1:
        return n

    # Recursive calls with memoization
    memo[n] = fibonacci_memoization(n - 1, memo) + \\
               fibonacci_memoization(n - 2, memo)

    return memo[n]


# ============================================
# TABULATION (BOTTOM-UP)
# ============================================

def fibonacci_tabulation(n):
    """
    Bottom-up DP using tabulation.

    Time: O(n) - single pass
    Space: O(n) - dp array
    """
    # Handle base cases
    if n <= 1:
        return n

    # Create DP table
    dp = [0] * (n + 1)

    # Initialize base cases
    dp[0] = 0
    dp[1] = 1

    # Fill table from bottom to top
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]


# ============================================
# SPACE-OPTIMIZED TABULATION
# ============================================

def fibonacci_optimized(n):
    """
    Space-optimized bottom-up DP.

    Time: O(n)
    Space: O(1) - only two variables!
    """
    if n <= 1:
        return n

    # Only store last two values
    prev2 = 0  # fib(i-2)
    prev1 = 1  # fib(i-1)

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================
# COMPARISON: Climbing Stairs Problem
# ============================================

# Problem: Count ways to climb n stairs (1 or 2 steps at a time)

def climb_stairs_memo(n, memo=None):
    """Memoization approach for climbing stairs."""
    if memo is None:
        memo = {}

    if n in memo:
        return memo[n]

    if n <= 2:
        return n

    memo[n] = climb_stairs_memo(n - 1, memo) + \\
               climb_stairs_memo(n - 2, memo)
    return memo[n]


def climb_stairs_tab(n):
    """Tabulation approach for climbing stairs."""
    if n <= 2:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]


def climb_stairs_optimized(n):
    """Space-optimized climbing stairs."""
    if n <= 2:
        return n

    prev2 = 1  # ways to climb 1 stair
    prev1 = 2  # ways to climb 2 stairs

    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================
# DEMO: Compare All Approaches
# ============================================

def demo_comparison():
    """Demonstrate all approaches."""
    n = 10

    print(f"Computing Fibonacci({n}):")
    print(f"Memoization: {fibonacci_memoization(n)}")
    print(f"Tabulation: {fibonacci_tabulation(n)}")
    print(f"Optimized: {fibonacci_optimized(n)}")

    print(f"\\nClimbing {n} stairs:")
    print(f"Memoization: {climb_stairs_memo(n)}")
    print(f"Tabulation: {climb_stairs_tab(n)}")
    print(f"Optimized: {climb_stairs_optimized(n)}")


# ============================================
# CONVERSION EXAMPLE
# ============================================

def problem_memoization(n, memo=None):
    """Template for memoization approach."""
    # Initialize memo
    if memo is None:
        memo = {}

    # Check cache
    if n in memo:
        return memo[n]

    # Base case(s)
    if n == 0:
        return base_value

    # Recursive relation with memoization
    memo[n] = some_function(
        problem_memoization(n - 1, memo),
        problem_memoization(n - 2, memo)
    )

    return memo[n]


def problem_tabulation(n):
    """Template for tabulation approach."""
    # Handle base cases
    if n == 0:
        return base_value

    # Create DP table
    dp = [0] * (n + 1)

    # Initialize base cases
    dp[0] = base_value

    # Fill table iteratively
    for i in range(1, n + 1):
        dp[i] = some_function(dp[i - 1], dp[i - 2])

    return dp[n]


# Run demo
demo_comparison()`,
  exercises: [
    {
      prompt: 'Implement the "House Robber" problem using both memoization and tabulation. You cannot rob two adjacent houses. Return the maximum amount you can rob.',
      initialCode: `def rob_memo(nums, i=0, memo=None):
    """
    Memoization approach.
    nums: list of money in each house
    i: current house index
    """
    # Your code here
    pass

def rob_tab(nums):
    """
    Tabulation approach.
    nums: list of money in each house
    """
    # Your code here
    pass`,
      solution: `def rob_memo(nums, i=0, memo=None):
    """Memoization approach."""
    if memo is None:
        memo = {}

    if i in memo:
        return memo[i]

    if i >= len(nums):
        return 0

    # Rob current house + skip next, OR skip current
    memo[i] = max(
        nums[i] + rob_memo(nums, i + 2, memo),  # Rob this house
        rob_memo(nums, i + 1, memo)              # Skip this house
    )

    return memo[i]

def rob_tab(nums):
    """Tabulation approach."""
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    n = len(nums)
    dp = [0] * n
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, n):
        dp[i] = max(dp[i-1], nums[i] + dp[i-2])

    return dp[n-1]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the main difference between memoization and tabulation?',
      options: [
        'Memoization is faster than tabulation',
        'Memoization is top-down (recursive), tabulation is bottom-up (iterative)',
        'Memoization uses less memory than tabulation',
        'Tabulation can only solve easier problems',
      ],
      correctAnswer: 1,
      explanations: [
        'Both have the same time complexity when solving the same problem.',
        'Correct! Memoization starts from the target and works down (recursive with caching), while tabulation starts from base cases and builds up (iterative table-filling).',
        'Both typically use O(n) space, though tabulation can sometimes be optimized further.',
        'Both can solve the same problems; they are just different implementation approaches.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'When might you prefer memoization over tabulation?',
      options: [
        'When you want the fastest possible execution',
        'When not all subproblems need to be solved',
        'When you need the least memory usage',
        'When the problem has no recursive structure',
      ],
      correctAnswer: 1,
      explanations: [
        'Both approaches have similar execution times for the same problem.',
        'Correct! Memoization only computes subproblems as needed (lazy evaluation), which can be beneficial if not all subproblems are required.',
        'Tabulation often allows for better space optimization since you can use rolling arrays.',
        'Memoization is specifically for problems with recursive structure.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const dpPatternRecognitionData: LessonContent = {
  title: 'Recognizing DP Problems: The Detective\'s Guide',
  content: `One of the hardest skills in mastering Dynamic Programming is recognizing when to use it. Let's develop your "DP sense" - the ability to look at a problem and think, "Aha! This is a DP problem!"

<h3>The DP Problem Signature</h3>

Think of DP problems as having a specific "signature" or fingerprint. Here are the telltale signs:

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">The DP Checklist</h4>
  <div class="grid grid-cols-2 gap-4">
    <div class="bg-green-50 p-4 rounded-lg border-2 border-green-300">
      <h5 class="font-bold text-green-900 mb-2">Strong DP Signals ✓</h5>
      <ul class="text-sm space-y-1">
        <li>• "Find the maximum/minimum..."</li>
        <li>• "Count the number of ways..."</li>
        <li>• "Is it possible to..."</li>
        <li>• "Longest/shortest sequence..."</li>
        <li>• Decision making (choose/not choose)</li>
        <li>• Problem asks for optimization</li>
      </ul>
    </div>
    <div class="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
      <h5 class="font-bold text-blue-900 mb-2">Look Deeper If You See</h5>
      <ul class="text-sm space-y-1">
        <li>• Overlapping subproblems</li>
        <li>• Multiple ways to solve same subproblem</li>
        <li>• Optimal substructure</li>
        <li>• Current choice affects future choices</li>
        <li>• Exponential brute force solution</li>
      </ul>
    </div>
  </div>
</div>

<h3>Key Question Patterns</h3>

<h4>1. Optimization Problems</h4>

These ask for the **best** solution according to some criteria.

**Keywords to spot:**
- "Find the maximum..."
- "Find the minimum..."
- "Find the longest..."
- "Find the shortest..."
- "Maximize profit..."
- "Minimize cost..."

**Examples:**
- "What is the maximum profit you can achieve?"
- "Find the minimum cost to reach the destination"
- "What is the longest increasing subsequence?"

**Why DP?** You need to consider all possibilities and choose the best one.

<h4>2. Counting Problems</h4>

These ask **how many ways** something can be done.

**Keywords to spot:**
- "Count the number of ways..."
- "How many ways can you..."
- "Count all possible..."
- "Number of distinct..."

**Examples:**
- "How many ways can you climb n stairs?"
- "Count the number of paths in a grid"
- "How many ways to decode a string?"

**Why DP?** Counting often involves adding up counts from subproblems.

<h4>3. Possibility Problems</h4>

These ask **if something is possible**.

**Keywords to spot:**
- "Is it possible to..."
- "Can you..."
- "Determine if..."
- "Check whether..."

**Examples:**
- "Can you partition the array into two equal subsets?"
- "Is it possible to make change for this amount?"
- "Can this string be segmented into dictionary words?"

**Why DP?** You explore all possibilities systematically.

<h3>The Decision-Making Pattern</h3>

Many DP problems involve making a series of decisions where:
- Each decision affects future options
- You want the optimal sequence of decisions

**Classic Examples:**

**House Robber:**
"At each house, decide: rob it or skip it?"
- If you rob house i, you can't rob house i+1
- Need to find the best combination of decisions

**Knapsack:**
"For each item, decide: take it or leave it?"
- Taking an item uses capacity
- Need to maximize value with limited capacity

<h3>Problem Transformation Technique</h3>

Try to reframe the problem in these ways:

<table class="w-full border-collapse my-6">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3 text-left">Original Question</th>
      <th class="border p-3 text-left">DP Reframing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3">"Climb stairs with 1 or 2 steps"</td>
      <td class="border p-3">ways(n) = ways(n-1) + ways(n-2)</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">"Maximum profit from stock prices"</td>
      <td class="border p-3">profit(i) = max(sell at i, hold, buy at i)</td>
    </tr>
    <tr>
      <td class="border p-3">"Longest increasing subsequence"</td>
      <td class="border p-3">lis(i) = max(1 + lis(j)) where arr[j] < arr[i]</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">"Minimum coins for change"</td>
      <td class="border p-3">coins(n) = 1 + min(coins(n - coin_value))</td>
    </tr>
  </tbody>
</table>

<h3>The "What if I tried all possibilities?" Test</h3>

If your first thought is "I need to try all possible combinations," that's a strong DP signal!

**Example thought process:**

*Problem:* "Find the maximum sum of non-adjacent elements."

*Naive thought:* "I need to try every possible combination of non-adjacent elements..."

**⚡ DP Alert!** This exponential exploration suggests DP.

**DP formulation:** For each element, either include it (and skip next) or skip it.

<h3>Common DP Problem Categories</h3>

<h4>Category 1: Sequence Problems</h4>
- Climbing stairs variations
- Fibonacci-style problems
- Decode ways
- Jump game

**Recognition:** Linear sequence, decisions at each step

<h4>Category 2: String Problems</h4>
- Longest common subsequence
- Edit distance
- Palindrome problems
- Word break

**Recognition:** Comparing/transforming strings, substring/subsequence questions

<h4>Category 3: Grid/Matrix Problems</h4>
- Unique paths
- Minimum path sum
- Dungeon game

**Recognition:** 2D grid, movement restrictions, optimization

<h4>Category 4: Knapsack-Style</h4>
- 0/1 Knapsack
- Subset sum
- Partition problems
- Target sum

**Recognition:** Selection from a set, capacity constraints

<h4>Category 5: Game Theory</h4>
- Stone game
- Predict the winner
- Nim game

**Recognition:** Two players, optimal play, minimax

<h3>Red Flags: When NOT to use DP</h3>

<div class="bg-red-50 p-4 rounded-lg border-2 border-red-300 my-6">
  <h5 class="font-bold text-red-900 mb-2">Don't force DP when you see:</h5>
  <ul class="space-y-1">
    <li>• Simple linear search or sort would work</li>
    <li>• Greedy choice gives optimal solution (and you can prove it)</li>
    <li>• Problem has no optimization or counting aspect</li>
    <li>• No overlapping subproblems</li>
    <li>• Independent subproblems (use divide & conquer instead)</li>
  </ul>
</div>

<h3>The 30-Second DP Recognition Drill</h3>

Ask yourself these questions:

1. **What am I optimizing?** (max, min, count, possibility)
2. **Can I break this into smaller versions?** (subproblems)
3. **Do smaller problems overlap?** (same calculation multiple times)
4. **Can I make a recursive relation?** (current = function of previous)
5. **What's my base case?** (simplest version)

If you answer "yes" to 3 or more → **Try DP!**

<h3>Practice Recognition: Examples</h3>

Let's practice with these problems. Which ones are DP?

**Problem A:** "Sort an array in ascending order"
❌ **Not DP** - Simple sorting, no optimization over subproblems

**Problem B:** "Find the longest palindromic substring"
✅ **DP!** - Optimization (longest), overlapping subproblems (checking palindromes)

**Problem C:** "Find the maximum element in an array"
❌ **Not DP** - Single pass solution, no subproblem optimization

**Problem D:** "Count ways to make change for amount n with given coins"
✅ **DP!** - Counting problem, overlapping subproblems (same amounts)

**Problem E:** "Find two numbers that sum to target"
❌ **Not DP** - Hash map solution, no optimization needed

**Problem F:** "Minimum number of jumps to reach the end of array"
✅ **DP!** - Optimization (minimum), decisions at each position

<h3>Building Your DP Intuition</h3>

The more problems you solve, the faster you'll recognize patterns. Start with:

1. **Classic problems** (Fibonacci, climbing stairs)
2. **Variations** (what if you can take 3 steps? 4 steps?)
3. **Different categories** (strings, grids, knapsack)
4. **Recognize patterns** across different problems

Remember: Every DP expert started where you are. Pattern recognition is a skill that develops with practice!`,
  codeExample: `# Pattern Recognition Practice: Identifying DP Problems

# ============================================
# EXAMPLE 1: Classic DP - Climbing Stairs
# ============================================

def is_dp_problem_1():
    """
    Problem: You can climb 1 or 2 steps at a time.
    How many ways to climb n stairs?

    DP Recognition:
    ✓ Counting problem ("how many ways")
    ✓ Overlapping subproblems (ways to reach step i used multiple times)
    ✓ Optimal substructure (ways[i] = ways[i-1] + ways[i-2])
    ✓ Recursive relation exists

    Conclusion: DEFINITELY DP!
    """
    def count_ways(n):
        if n <= 2:
            return n

        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2

        for i in range(3, n + 1):
            dp[i] = dp[i-1] + dp[i-2]

        return dp[n]

    return count_ways


# ============================================
# EXAMPLE 2: DP Recognition - Coin Change
# ============================================

def is_dp_problem_2():
    """
    Problem: Given coin denominations and a target amount,
    find the minimum number of coins needed.

    DP Recognition:
    ✓ Optimization problem ("minimum number")
    ✓ Overlapping subproblems (same amounts calculated multiple times)
    ✓ Optimal substructure (min coins for n uses min coins for n-coin)
    ✓ Decision at each step (use this coin or not)

    Conclusion: DEFINITELY DP!
    """
    def coin_change(coins, amount):
        # dp[i] = minimum coins needed for amount i
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0  # Base case: 0 coins for amount 0

        for i in range(1, amount + 1):
            for coin in coins:
                if coin <= i:
                    dp[i] = min(dp[i], dp[i - coin] + 1)

        return dp[amount] if dp[amount] != float('inf') else -1

    return coin_change


# ============================================
# EXAMPLE 3: NOT DP - Two Sum
# ============================================

def is_dp_problem_3():
    """
    Problem: Find two numbers in array that sum to target.

    DP Recognition:
    ✗ No optimization (just find ANY pair)
    ✗ No overlapping subproblems
    ✗ No recursive structure
    ✗ Simple hash map solution exists

    Conclusion: NOT DP - Use hash map!
    """
    def two_sum(nums, target):
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []

    return two_sum


# ============================================
# EXAMPLE 4: DP Recognition - House Robber
# ============================================

def is_dp_problem_4():
    """
    Problem: Rob houses for maximum money,
    but can't rob two adjacent houses.

    DP Recognition:
    ✓ Optimization ("maximum money")
    ✓ Decision at each step (rob or skip)
    ✓ Overlapping subproblems (max money up to house i)
    ✓ Current decision affects future options
    ✓ Optimal substructure

    Conclusion: DEFINITELY DP!
    """
    def rob(houses):
        if not houses:
            return 0
        if len(houses) == 1:
            return houses[0]

        # dp[i] = max money robbing up to house i
        dp = [0] * len(houses)
        dp[0] = houses[0]
        dp[1] = max(houses[0], houses[1])

        for i in range(2, len(houses)):
            # Either rob current house + max from i-2,
            # or skip current and take max from i-1
            dp[i] = max(houses[i] + dp[i-2], dp[i-1])

        return dp[-1]

    return rob


# ============================================
# EXAMPLE 5: NOT DP - Find Maximum in Array
# ============================================

def is_dp_problem_5():
    """
    Problem: Find the maximum element in an array.

    DP Recognition:
    ✗ No overlapping subproblems
    ✗ Simple one-pass solution
    ✗ No recursive structure needed
    ✗ No optimization over subproblems

    Conclusion: NOT DP - Simple iteration!
    """
    def find_max(arr):
        if not arr:
            return None
        return max(arr)  # Or simple loop

    return find_max


# ============================================
# EXAMPLE 6: DP Recognition - Longest Increasing Subsequence
# ============================================

def is_dp_problem_6():
    """
    Problem: Find the length of longest increasing subsequence.

    DP Recognition:
    ✓ Optimization ("longest")
    ✓ Subsequence problem (choose/not choose)
    ✓ Overlapping subproblems (LIS ending at i)
    ✓ Optimal substructure
    ✓ Current choice affects future choices

    Conclusion: DEFINITELY DP!
    """
    def length_of_lis(nums):
        if not nums:
            return 0

        # dp[i] = length of LIS ending at index i
        dp = [1] * len(nums)

        for i in range(1, len(nums)):
            for j in range(i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[i], dp[j] + 1)

        return max(dp)

    return length_of_lis


# ============================================
# Recognition Quiz
# ============================================

def dp_recognition_quiz():
    """
    Practice identifying DP problems.
    """

    problems = [
        {
            "problem": "Find minimum cost to climb stairs with cost array",
            "is_dp": True,
            "reason": "Optimization + overlapping subproblems + decisions"
        },
        {
            "problem": "Check if array is sorted",
            "is_dp": False,
            "reason": "Simple one-pass check, no optimization"
        },
        {
            "problem": "Count number of ways to decode a string",
            "is_dp": True,
            "reason": "Counting + overlapping subproblems + recursive structure"
        },
        {
            "problem": "Find median of array",
            "is_dp": False,
            "reason": "Sorting or quickselect, not DP"
        },
        {
            "problem": "Minimum path sum in grid",
            "is_dp": True,
            "reason": "Optimization + overlapping subproblems in 2D"
        },
        {
            "problem": "Binary search in sorted array",
            "is_dp": False,
            "reason": "Divide & conquer with independent subproblems"
        },
    ]

    print("DP Recognition Quiz:")
    print("=" * 50)

    for i, p in enumerate(problems, 1):
        print(f"\\n{i}. {p['problem']}")
        print(f"   Is this DP? {p['is_dp']}")
        print(f"   Reason: {p['reason']}")

    return problems


# ============================================
# The DP Recognition Checklist Function
# ============================================

def should_use_dp(problem_description):
    """
    A function to help you decide if a problem needs DP.

    Returns: (should_use_dp: bool, reasons: list)
    """
    reasons = []
    score = 0

    # Check for optimization keywords
    optimization_keywords = ['maximum', 'minimum', 'longest', 'shortest',
                            'largest', 'smallest', 'optimize']
    if any(keyword in problem_description.lower() for keyword in optimization_keywords):
        reasons.append("✓ Contains optimization keywords")
        score += 1

    # Check for counting keywords
    counting_keywords = ['count', 'number of ways', 'how many']
    if any(keyword in problem_description.lower() for keyword in counting_keywords):
        reasons.append("✓ Asks for counting/ways")
        score += 1

    # Check for possibility keywords
    possibility_keywords = ['possible', 'can you', 'is it possible']
    if any(keyword in problem_description.lower() for keyword in possibility_keywords):
        reasons.append("✓ Asks about possibility")
        score += 1

    # Check for sequence/array keywords
    if any(word in problem_description.lower() for word in ['array', 'sequence', 'string']):
        reasons.append("✓ Involves sequences/arrays")
        score += 0.5

    should_use = score >= 1.5

    if not should_use:
        reasons.append("✗ No strong DP signals detected")

    return should_use, reasons


# Test the recognition function
if __name__ == "__main__":
    test_problems = [
        "Find the maximum sum of non-adjacent elements in an array",
        "Sort an array in ascending order",
        "Count the number of ways to climb n stairs",
        "Find if a number exists in a sorted array",
    ]

    for problem in test_problems:
        should_use, reasons = should_use_dp(problem)
        print(f"\\nProblem: {problem}")
        print(f"Use DP: {should_use}")
        for reason in reasons:
            print(f"  {reason}")`,
  exercises: [
    {
      prompt: 'For each of the following problems, determine if Dynamic Programming should be used and explain why or why not:\\n\\n1. Find the kth largest element in an unsorted array\\n2. Given coins of different denominations, count how many ways to make change for amount n\\n3. Merge two sorted arrays into one sorted array\\n4. Find the longest palindromic substring in a string',
      initialCode: `def analyze_problems():
    """
    Analyze each problem and determine if DP is appropriate.

    For each problem, provide:
    1. Is DP appropriate? (True/False)
    2. Reasoning
    3. What technique should be used instead (if not DP)
    """
    problems = {
        "problem_1": "Find kth largest element in unsorted array",
        "problem_2": "Count ways to make change for amount n",
        "problem_3": "Merge two sorted arrays",
        "problem_4": "Find longest palindromic substring"
    }

    # Your analysis here
    pass`,
      solution: `def analyze_problems():
    """
    Analysis of each problem:
    """
    analyses = {
        "problem_1": {
            "use_dp": False,
            "reasoning": "No overlapping subproblems or optimization over subproblems. This is a selection problem best solved with quickselect (O(n) average) or heap (O(n log k)).",
            "technique": "Quickselect or Min-Heap"
        },
        "problem_2": {
            "use_dp": True,
            "reasoning": "Counting problem with overlapping subproblems. Ways to make amount n includes ways to make n-coin for each coin. Classic DP problem.",
            "technique": "Dynamic Programming (Unbounded Knapsack variation)"
        },
        "problem_3": {
            "use_dp": False,
            "reasoning": "Simple two-pointer merge. No optimization or overlapping subproblems. Just systematic combination of two sorted sequences.",
            "technique": "Two-pointer merge (O(n+m))"
        },
        "problem_4": {
            "use_dp": True,
            "reasoning": "Optimization problem (longest) with overlapping subproblems. Checking if s[i:j] is palindrome uses results of s[i+1:j-1]. Classic 2D DP.",
            "technique": "Dynamic Programming (2D DP or expand around center)"
        }
    }

    return analyses`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Which of the following is the STRONGEST signal that a problem should be solved with Dynamic Programming?',
      options: [
        'The problem involves an array',
        'The problem asks to find the maximum or minimum of something',
        'The problem has overlapping subproblems and optimal substructure',
        'The problem mentions recursion',
      ],
      correctAnswer: 2,
      explanations: [
        'Many array problems don\'t need DP (sorting, searching, two-pointer, etc.).',
        'While many DP problems ask for optimization, this alone isn\'t sufficient. Greedy algorithms also optimize.',
        'Correct! These two properties together are THE defining characteristics of DP problems. Without both, DP may not be the best approach.',
        'Recursion is a technique that can be used in many contexts (divide & conquer, backtracking, etc.), not just DP.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'A problem asks: "Is it possible to partition an array into two subsets with equal sum?" Is this a DP problem?',
      options: [
        'No, it\'s a simple comparison problem',
        'No, it should use greedy approach',
        'Yes, it\'s a variant of the subset sum problem',
        'No, it should use two-pointers',
      ],
      correctAnswer: 2,
      explanations: [
        'This is not a simple comparison - it requires exploring combinations of elements.',
        'Greedy won\'t work here because local choices don\'t lead to global optimum.',
        'Correct! This is the partition equal subset sum problem, a classic DP problem. It\'s a variant of 0/1 knapsack where target is sum/2.',
        'Two-pointers work on sorted arrays for finding pairs/triplets, not for subset sum problems.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which keyword combination in a problem statement most strongly suggests DP?',
      options: [
        '"Find" and "sorted"',
        '"Count the number of ways"',
        '"Check if exists"',
        '"First occurrence"',
      ],
      correctAnswer: 1,
      explanations: [
        'Finding in sorted arrays typically uses binary search, not DP.',
        'Correct! "Count the number of ways" is a classic DP signal. Counting problems often involve adding up counts from subproblems, which is perfect for DP.',
        'Existence checks can often be done with hash sets, BFS, or simple iteration.',
        'Finding first occurrence is typically done with linear search or binary search.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const stateAndTransitionData: LessonContent = {
  title: 'State Definition and Transitions: The Heart of DP',
  content: `Understanding how to define states and derive transition equations is the most crucial skill in Dynamic Programming. This is where beginners struggle most, but once you master it, DP becomes much clearer.

<h3>What is a State?</h3>

A **state** is the information you need to track to solve the problem. Think of it as a snapshot of where you are in the problem-solving process.

**Analogy: Playing a Video Game**
- Your state might include: current level, health points, items in inventory, position
- Knowing your state tells you everything you need to make the next decision
- Different states lead to different outcomes

In DP, defining the state means answering: **"What do I need to know to solve a subproblem?"**

<div class="visualization-container bg-white p-6 rounded-lg shadow-md my-8">
  <h4 class="text-center text-gray-700 mb-4">State Definition Process</h4>
  <div class="flex flex-col space-y-3">
    <div class="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
      <strong>Step 1:</strong> What does the problem ask for?
    </div>
    <div class="text-center text-2xl">↓</div>
    <div class="bg-green-50 p-3 rounded border-l-4 border-green-500">
      <strong>Step 2:</strong> What parameters change as we solve subproblems?
    </div>
    <div class="text-center text-2xl">↓</div>
    <div class="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
      <strong>Step 3:</strong> Define state: dp[parameters] = answer for that subproblem
    </div>
  </div>
</div>

<h3>State Dimensions</h3>

States can have different dimensions based on problem complexity:

<h4>1D State (One Parameter)</h4>

**Example: Climbing Stairs**
- State: \`dp[i]\` = number of ways to reach step i
- One parameter: which step we're at

**Example: House Robber**
- State: \`dp[i]\` = maximum money robbing houses 0 to i
- One parameter: which house we're considering

<h4>2D State (Two Parameters)</h4>

**Example: Longest Common Subsequence**
- State: \`dp[i][j]\` = LCS length for first i chars of string1 and first j chars of string2
- Two parameters: position in string1, position in string2

**Example: Unique Paths in Grid**
- State: \`dp[i][j]\` = number of ways to reach cell (i,j)
- Two parameters: row, column

<h4>3D+ State (Multiple Parameters)</h4>

**Example: Buy/Sell Stock with Cooldown**
- State: \`dp[i][k][s]\` = max profit at day i, with k transactions, in state s (0=cooldown, 1=holding stock)
- Three parameters: day, transactions, holding state

<h3>The State Transition Equation</h3>

Once you have your state, you need to figure out how states relate to each other. This is the **recurrence relation** or **transition equation**.

**Formula:**
\`\`\`
dp[current_state] = function(dp[previous_states])
\`\`\`

<h4>Example: Fibonacci</h4>

**State:** \`dp[i]\` = ith Fibonacci number

**Transition:**
\`\`\`
dp[i] = dp[i-1] + dp[i-2]
\`\`\`

**Intuition:** Current number = sum of previous two numbers

<h4>Example: Climbing Stairs</h4>

**State:** \`dp[i]\` = ways to reach step i

**Transition:**
\`\`\`
dp[i] = dp[i-1] + dp[i-2]
\`\`\`

**Intuition:** To reach step i, either:
- Come from step i-1 (take 1 step)
- Come from step i-2 (take 2 steps)

<h3>The Four-Step State Definition Process</h3>

<table class="w-full border-collapse my-6">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Step</th>
      <th class="border p-3">Question to Ask</th>
      <th class="border p-3">Example (Coin Change)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3"><strong>1. Define State</strong></td>
      <td class="border p-3">What information do I need to track?</td>
      <td class="border p-3">dp[i] = min coins for amount i</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3"><strong>2. Base Case</strong></td>
      <td class="border p-3">What's the simplest case I know the answer to?</td>
      <td class="border p-3">dp[0] = 0 (0 coins for amount 0)</td>
    </tr>
    <tr>
      <td class="border p-3"><strong>3. Transition</strong></td>
      <td class="border p-3">How do I compute current from previous states?</td>
      <td class="border p-3">dp[i] = min(dp[i - coin] + 1) for all coins</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3"><strong>4. Final Answer</strong></td>
      <td class="border p-3">Which state gives me the answer?</td>
      <td class="border p-3">dp[amount]</td>
    </tr>
  </tbody>
</table>

<h3>Detailed Example: House Robber</h3>

**Problem:** Rob houses for max money, can't rob adjacent houses.

**Step 1: Define State**

What do we need to know to solve this?
- Which house we're at
- Maximum money we can rob up to this house

**State:** \`dp[i]\` = maximum money robbing houses from 0 to i

**Step 2: Identify Choices**

At house i, we have two choices:
1. **Rob house i:** Get money[i] + dp[i-2] (can't rob i-1)
2. **Skip house i:** Get dp[i-1] (take previous max)

**Step 3: Transition Equation**

\`\`\`
dp[i] = max(
    money[i] + dp[i-2],  # Rob current house
    dp[i-1]              # Skip current house
)
\`\`\`

**Step 4: Base Cases**

\`\`\`
dp[0] = money[0]              # Only one house
dp[1] = max(money[0], money[1])  # Choose better of first two
\`\`\`

**Step 5: Final Answer**

\`dp[n-1]\` where n is number of houses

<h3>Visual: State Transition Diagram</h3>

For climbing stairs with 1 or 2 steps:

\`\`\`
Step 0  →  Step 1  →  Step 2  →  Step 3
  |          ↗↘        ↗↘        ↗↘
  1         1  2     2  3      3  5

dp[0]=1   dp[1]=1   dp[2]=2   dp[3]=3

Each step gets contributions from previous 1 and 2 steps
\`\`\`

<h3>Common State Transition Patterns</h3>

<h4>Pattern 1: Binary Choice</h4>

**Choose or don't choose current element**

\`\`\`python
dp[i] = max(
    choose_current + dp[i-k],  # Take current
    dp[i-1]                     # Skip current
)
\`\`\`

**Examples:** House Robber, Knapsack

<h4>Pattern 2: Multiple Paths</h4>

**Sum all ways to reach current state**

\`\`\`python
dp[i] = dp[i-1] + dp[i-2] + ... + dp[i-k]
\`\`\`

**Examples:** Climbing Stairs, Decode Ways

<h4>Pattern 3: Minimize/Maximize Over Options</h4>

**Try all options, pick best**

\`\`\`python
dp[i] = min/max(
    option1 + dp[state1],
    option2 + dp[state2],
    ...
)
\`\`\`

**Examples:** Coin Change, Minimum Path Sum

<h4>Pattern 4: 2D Matching</h4>

**Compare two sequences**

\`\`\`python
dp[i][j] = function(
    dp[i-1][j],      # Skip from first
    dp[i][j-1],      # Skip from second
    dp[i-1][j-1]     # Match both
)
\`\`\`

**Examples:** LCS, Edit Distance

<h3>Common Mistakes in State Definition</h3>

<div class="bg-red-50 p-4 rounded-lg border-2 border-red-300 my-6">
  <h5 class="font-bold text-red-900 mb-2">❌ Mistake 1: Too Little Information</h5>
  <p class="text-sm">State doesn't capture enough to solve subproblem</p>
  <p class="text-xs text-gray-600 mt-2">Example: For "best time to buy/sell stock with cooldown", just tracking day isn't enough - need to track if holding stock</p>
</div>

<div class="bg-red-50 p-4 rounded-lg border-2 border-red-300 my-6">
  <h5 class="font-bold text-red-900 mb-2">❌ Mistake 2: Too Much Information</h5>
  <p class="text-sm">State has unnecessary parameters, making solution inefficient</p>
  <p class="text-xs text-gray-600 mt-2">Example: Tracking full path in state when only need count/length</p>
</div>

<div class="bg-red-50 p-4 rounded-lg border-2 border-red-300 my-6">
  <h5 class="font-bold text-red-900 mb-2">❌ Mistake 3: Wrong State Definition</h5>
  <p class="text-sm">State doesn't actually answer the question</p>
  <p class="text-xs text-gray-600 mt-2">Example: Defining dp[i] as "ways ending at i" when question asks "total ways up to i"</p>
</div>

<h3>Practice: Deriving State Transitions</h3>

Let's practice with a new problem:

**Problem:** Minimum cost to climb stairs where each stair has a cost.

**Step-by-Step:**

1. **What are we asking?** Minimum cost to reach the top
2. **What changes?** Which stair we're at
3. **State:** \`dp[i]\` = minimum cost to reach stair i
4. **Choices:** Come from stair i-1 or i-2
5. **Transition:** \`dp[i] = cost[i] + min(dp[i-1], dp[i-2])\`
6. **Base:** \`dp[0] = cost[0]\`, \`dp[1] = cost[1]\`
7. **Answer:** \`min(dp[n-1], dp[n-2])\` (can start from top-1 or top-2)

<h3>The State Definition Checklist</h3>

Before finalizing your state, verify:

- [ ] Does it capture all necessary information?
- [ ] Can I compute current state from previous states?
- [ ] Are my base cases clear and correct?
- [ ] Does my transition cover all possibilities?
- [ ] Can I identify which state gives the final answer?

Mastering state definition is like learning to see the matrix in DP problems. Once you see it, everything becomes clearer!`,
  codeExample: `# State Definition and Transition Examples

# ============================================
# EXAMPLE 1: Simple 1D State - Fibonacci
# ============================================

def fibonacci_state_analysis():
    """
    State: dp[i] = ith Fibonacci number
    Transition: dp[i] = dp[i-1] + dp[i-2]
    Base: dp[0] = 0, dp[1] = 1
    Answer: dp[n]
    """
    def fib(n):
        if n <= 1:
            return n

        # State array
        dp = [0] * (n + 1)

        # Base cases
        dp[0] = 0
        dp[1] = 1

        # Transition equation
        for i in range(2, n + 1):
            dp[i] = dp[i-1] + dp[i-2]

        return dp[n]

    return fib


# ============================================
# EXAMPLE 2: 1D with Choice - House Robber
# ============================================

def house_robber_state_analysis():
    """
    State: dp[i] = max money robbing houses 0..i
    Choice: Rob house i OR skip it
    Transition: dp[i] = max(nums[i] + dp[i-2], dp[i-1])
    Base: dp[0] = nums[0], dp[1] = max(nums[0], nums[1])
    Answer: dp[n-1]
    """
    def rob(nums):
        if not nums:
            return 0
        if len(nums) == 1:
            return nums[0]

        n = len(nums)
        dp = [0] * n

        # Base cases
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])

        # Transition: choose to rob current or not
        for i in range(2, n):
            # max(rob current + best from i-2, skip current)
            dp[i] = max(nums[i] + dp[i-2], dp[i-1])

        return dp[n-1]

    return rob


# ============================================
# EXAMPLE 3: 1D with Multiple Steps - Climbing Stairs
# ============================================

def climbing_stairs_state_analysis():
    """
    State: dp[i] = number of ways to reach step i
    Choice: Come from step i-1 or i-2
    Transition: dp[i] = dp[i-1] + dp[i-2]
    Base: dp[0] = 1, dp[1] = 1
    Answer: dp[n]
    """
    def climb_stairs(n):
        if n <= 1:
            return 1

        dp = [0] * (n + 1)

        # Base cases
        dp[0] = 1  # One way to stay at ground
        dp[1] = 1  # One way to reach first step

        # Transition: sum of ways from previous steps
        for i in range(2, n + 1):
            dp[i] = dp[i-1] + dp[i-2]

        return dp[n]

    return climb_stairs


# ============================================
# EXAMPLE 4: 1D with Cost - Min Cost Climbing
# ============================================

def min_cost_climbing_state_analysis():
    """
    State: dp[i] = minimum cost to reach step i
    Choice: Come from step i-1 or i-2
    Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    Base: dp[0] = cost[0], dp[1] = cost[1]
    Answer: min(dp[n-1], dp[n-2])
    """
    def min_cost_climbing_stairs(cost):
        n = len(cost)
        if n <= 1:
            return 0

        dp = [0] * n

        # Base cases
        dp[0] = cost[0]
        dp[1] = cost[1]

        # Transition: current cost + min of previous steps
        for i in range(2, n):
            dp[i] = cost[i] + min(dp[i-1], dp[i-2])

        # Can start from top step or second-to-top
        return min(dp[n-1], dp[n-2])

    return min_cost_climbing_stairs


# ============================================
# EXAMPLE 5: 2D State - Unique Paths
# ============================================

def unique_paths_state_analysis():
    """
    State: dp[i][j] = number of paths to cell (i,j)
    Choice: Come from top cell or left cell
    Transition: dp[i][j] = dp[i-1][j] + dp[i][j-1]
    Base: dp[0][j] = 1 (first row), dp[i][0] = 1 (first col)
    Answer: dp[m-1][n-1]
    """
    def unique_paths(m, n):
        # Create 2D state array
        dp = [[0] * n for _ in range(m)]

        # Base cases: first row and column
        for i in range(m):
            dp[i][0] = 1
        for j in range(n):
            dp[0][j] = 1

        # Transition: sum paths from top and left
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i-1][j] + dp[i][j-1]

        return dp[m-1][n-1]

    return unique_paths


# ============================================
# EXAMPLE 6: 1D with Min - Coin Change
# ============================================

def coin_change_state_analysis():
    """
    State: dp[i] = minimum coins needed for amount i
    Choice: Use each coin or not
    Transition: dp[i] = min(dp[i-coin] + 1) for all coins
    Base: dp[0] = 0
    Answer: dp[amount]
    """
    def coin_change(coins, amount):
        # State array: infinity for impossible amounts
        dp = [float('inf')] * (amount + 1)

        # Base case
        dp[0] = 0

        # Transition: try each coin
        for i in range(1, amount + 1):
            for coin in coins:
                if coin <= i:
                    # Use this coin: 1 coin + min for remaining amount
                    dp[i] = min(dp[i], dp[i - coin] + 1)

        return dp[amount] if dp[amount] != float('inf') else -1

    return coin_change


# ============================================
# TEMPLATE: State Definition Framework
# ============================================

def dp_template():
    """
    Universal DP template with state definition.
    """

    def solve_dp_problem(input_data):
        # STEP 1: Define state
        # dp[...] = what does this state represent?

        # STEP 2: Initialize state array
        # Create array/table for storing states

        # STEP 3: Base cases
        # What are the simplest cases you know?

        # STEP 4: State transition
        # How to compute current state from previous states?

        # STEP 5: Iteration order
        # In what order should we fill the table?

        # STEP 6: Return answer
        # Which state contains our final answer?

        pass

    return solve_dp_problem


# ============================================
# STATE TRANSITION VISUALIZATION
# ============================================

def visualize_transitions():
    """
    Visualize how states transition in climbing stairs.
    """
    def climb_stairs_visual(n):
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1

        print("State Transitions for Climbing Stairs:")
        print("=" * 50)
        print(f"dp[0] = 1 (base case)")
        print(f"dp[1] = 1 (base case)")

        for i in range(2, n + 1):
            dp[i] = dp[i-1] + dp[i-2]
            print(f"dp[{i}] = dp[{i-1}] + dp[{i-2}] = {dp[i-1]} + {dp[i-2]} = {dp[i]}")

        print(f"\\nFinal answer: {dp[n]} ways to climb {n} stairs")
        return dp[n]

    return climb_stairs_visual


# Test visualization
visualizer = visualize_transitions()
visualizer(5)`,
  exercises: [
    {
      prompt: 'Define the state and transition equation for the following problem: "You have n dice each with k faces. Find the number of ways to roll exactly target sum."\\n\\nDefine: 1) State, 2) Base case, 3) Transition equation, 4) Final answer location.',
      initialCode: `def dice_rolls(n, k, target):
    """
    Find number of ways to roll exactly target sum with n dice of k faces.

    Define your DP solution:
    1. State: dp[?][?] represents what?
    2. Base case: what's the simplest case?
    3. Transition: how to compute current from previous?
    4. Answer: which state gives final answer?

    Args:
        n: number of dice
        k: faces per die (1 to k)
        target: target sum

    Returns:
        Number of ways to achieve target sum
    """
    # Your code here
    pass`,
      solution: `def dice_rolls(n, k, target):
    """
    State: dp[i][j] = ways to get sum j using i dice
    Base: dp[0][0] = 1 (0 dice, 0 sum = 1 way)
    Transition: dp[i][j] = sum(dp[i-1][j-face]) for face in 1..k
    Answer: dp[n][target]
    """
    # Create 2D state array
    dp = [[0] * (target + 1) for _ in range(n + 1)]

    # Base case: 0 dice, 0 sum = 1 way
    dp[0][0] = 1

    # Fill table
    for i in range(1, n + 1):          # for each die
        for j in range(1, target + 1):  # for each sum
            # Try each face value
            for face in range(1, k + 1):
                if j >= face:
                    # Add ways from previous die
                    dp[i][j] += dp[i-1][j-face]

    return dp[n][target]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'For the House Robber problem, what does the state dp[i] represent?',
      options: [
        'Whether house i was robbed or not',
        'The amount of money in house i',
        'Maximum money that can be robbed from houses 0 to i',
        'The number of houses robbed up to i',
      ],
      correctAnswer: 2,
      explanations: [
        'dp[i] doesn\'t store a boolean about robbing, it stores the maximum money.',
        'This is just the input (nums[i]), not our DP state.',
        'Correct! dp[i] represents the maximum money we can rob considering houses from index 0 to i. This captures the answer to the subproblem.',
        'We don\'t track count of houses robbed, we track maximum money obtained.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In the transition equation dp[i] = max(nums[i] + dp[i-2], dp[i-1]), what does each part represent?',
      options: [
        'nums[i] + dp[i-2] = rob current house, dp[i-1] = skip current house',
        'nums[i] + dp[i-2] = rob previous house, dp[i-1] = rob current house',
        'Both represent the same thing',
        'nums[i] + dp[i-2] = skip current, dp[i-1] = rob current',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! nums[i] + dp[i-2] means rob the current house i (get nums[i]) plus the best we could do up to house i-2 (since we can\'t rob i-1). dp[i-1] means skip house i and take the best from previous houses.',
        'No, the indices are confused here.',
        'No, they represent the two different choices we can make at house i.',
        'No, this has the logic backwards.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why is the base case dp[0] = nums[0] for House Robber?',
      options: [
        'Because we always rob the first house',
        'Because with only one house, the maximum money is just that house\'s value',
        'Because 0 is a special index',
        'This is not the correct base case',
      ],
      correctAnswer: 1,
      explanations: [
        'We don\'t always rob the first house - we might skip it if the second has more money.',
        'Correct! When there\'s only one house (index 0), the maximum money we can rob is simply the value of that house. This is the simplest subproblem we can solve directly.',
        'The index isn\'t special - it\'s the fact that it\'s the only house that matters.',
        'This is indeed the correct base case for the DP solution.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

// ============================================================================


export const fundamentalsLessons = {
  'dp-concept': dpConceptData,
  'memoization-vs-tabulation': memoizationVsTabulationData,
  'dp-pattern-recognition': dpPatternRecognitionData,
  'state-and-transition': stateAndTransitionData,
};
