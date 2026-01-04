import { LessonContent } from '@/common/commonLesson';
import { Difficulty } from '@/common/commonConcept';


// SECTION 2: 1D DYNAMIC PROGRAMMING
// ============================================================================

const fibonacciPatternData: LessonContent = {
  title: 'Fibonacci and Basic Sequences',
  content: `<div>
<h1>Fibonacci and Basic Sequences in Dynamic Programming</h1>

<p>The Fibonacci sequence is the quintessential introduction to 1D Dynamic Programming. While it may seem simple, it demonstrates all the core concepts of DP and serves as a foundation for recognizing similar patterns in more complex problems.</p>

<h2>The Classic Fibonacci Problem</h2>

<p>The Fibonacci sequence is defined as:</p>
<ul>
  <li>F(0) = 0</li>
  <li>F(1) = 1</li>
  <li>F(n) = F(n-1) + F(n-2) for n ≥ 2</li>
</ul>

<p>This simple recurrence relation leads to the sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p>

<h2>Why Fibonacci is Perfect for DP</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <h3 class="text-blue-800">Key Characteristics:</h3>
  <ul>
    <li><strong>Optimal Substructure:</strong> F(n) can be computed from F(n-1) and F(n-2)</li>
    <li><strong>Overlapping Subproblems:</strong> Computing F(5) requires F(3) multiple times</li>
    <li><strong>Simple State:</strong> Just one parameter (n)</li>
    <li><strong>Clear Transition:</strong> F(n) = F(n-1) + F(n-2)</li>
  </ul>
</div>

<h2>Evolution: From Recursion to DP</h2>

<h3>Step 1: Naive Recursion (Exponential Time)</h3>
<p>The most intuitive approach directly implements the mathematical definition:</p>

<div class="visualization">
  <pre>
Recursion Tree for F(5):
                    F(5)
                /          \\
            F(4)              F(3)
          /      \\          /      \\
      F(3)        F(2)    F(2)      F(1)
     /    \\      /   \\   /   \\
  F(2)   F(1) F(1) F(0) F(1) F(0)
  /  \\
F(1) F(0)

Notice: F(3) computed 2 times, F(2) computed 3 times!
  </pre>
</div>

<p><strong>Time Complexity:</strong> O(2^n) - exponential growth!</p>
<p><strong>Space Complexity:</strong> O(n) - call stack depth</p>

<h3>Step 2: Memoization (Top-Down DP)</h3>
<p>Cache results to avoid recomputation:</p>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <strong>Key Insight:</strong> Store F(i) once computed, reuse it whenever needed.
</div>

<p><strong>Time Complexity:</strong> O(n) - each F(i) computed once</p>
<p><strong>Space Complexity:</strong> O(n) - memo array + call stack</p>

<h3>Step 3: Tabulation (Bottom-Up DP)</h3>
<p>Build solution iteratively from base cases:</p>

<p><strong>Time Complexity:</strong> O(n)</p>
<p><strong>Space Complexity:</strong> O(n) - DP array only</p>

<h3>Step 4: Space Optimization</h3>
<p>Since we only need previous two values:</p>

<p><strong>Time Complexity:</strong> O(n)</p>
<p><strong>Space Complexity:</strong> O(1) - only two variables!</p>

<h2>Fibonacci Pattern Recognition</h2>

<p>Problems that follow the Fibonacci pattern have these characteristics:</p>

<div class="pattern-box">
  <h3>Pattern Signature:</h3>
  <ol>
    <li>The answer for n depends on answers for n-1 and n-2</li>
    <li>Usually involves counting ways or combinations</li>
    <li>State is one-dimensional (single parameter)</li>
    <li>Recurrence: dp[i] = f(dp[i-1], dp[i-2])</li>
  </ol>
</div>

<h2>Common Variations</h2>

<h3>Variation 1: Tribonacci</h3>
<p>Instead of summing two previous terms, sum three:</p>
<p>T(n) = T(n-1) + T(n-2) + T(n-3)</p>

<h3>Variation 2: Climbing Stairs</h3>
<p>Count ways to reach step n if you can climb 1 or 2 steps at a time.</p>
<p>This is exactly Fibonacci! ways(n) = ways(n-1) + ways(n-2)</p>

<h3>Variation 3: Min Cost Climbing Stairs</h3>
<p>Find minimum cost to reach top when each step has a cost.</p>
<p>dp[i] = cost[i] + min(dp[i-1], dp[i-2])</p>

<h2>The DP Framework Applied</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Step</th>
    <th class="border p-2">Fibonacci Example</th>
  </tr>
  <tr>
    <td class="border p-2"><strong>1. Define State</strong></td>
    <td class="border p-2">dp[i] = the i-th Fibonacci number</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>2. Base Cases</strong></td>
    <td class="border p-2">dp[0] = 0, dp[1] = 1</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>3. Transition</strong></td>
    <td class="border p-2">dp[i] = dp[i-1] + dp[i-2]</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>4. Order</strong></td>
    <td class="border p-2">i from 2 to n (bottom-up)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>5. Answer</strong></td>
    <td class="border p-2">dp[n]</td>
  </tr>
</table>

<h2>Practice Strategy</h2>

<p>When you encounter a problem that might be Fibonacci-like:</p>

<ol>
  <li><strong>Identify the recurrence:</strong> Can current state be expressed using previous 1-2 states?</li>
  <li><strong>Check dependencies:</strong> Does computing F(n) require F(n-1) and F(n-2)?</li>
  <li><strong>Start simple:</strong> Write the recursive solution first</li>
  <li><strong>Add memoization:</strong> Cache to eliminate redundant computation</li>
  <li><strong>Convert to tabulation:</strong> Build iteratively for better space usage</li>
  <li><strong>Optimize space:</strong> Use only necessary variables</li>
</ol>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <strong>Pro Tip:</strong> Many interview problems are disguised Fibonacci! Look for the "sum of previous two states" pattern.
</div>

</div>`,
  codeExample: `# ============================================================================
# FIBONACCI PATTERN: Complete Implementation Guide
# ============================================================================

# Approach 1: Naive Recursion (DO NOT USE IN PRODUCTION)
# Time: O(2^n), Space: O(n)
def fib_recursive(n):
    """
    Direct mathematical implementation.
    Demonstrates the problem that DP solves.
    """
    if n <= 1:
        return n
    return fib_recursive(n - 1) + fib_recursive(n - 2)


# Approach 2: Memoization (Top-Down DP)
# Time: O(n), Space: O(n)
def fib_memo(n, memo=None):
    """
    Top-down DP with memoization.
    Uses recursion with caching.
    """
    if memo is None:
        memo = {}

    # Check cache first
    if n in memo:
        return memo[n]

    # Base cases
    if n <= 1:
        return n

    # Recursive computation with caching
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]


# Approach 3: Tabulation (Bottom-Up DP)
# Time: O(n), Space: O(n)
def fib_tabulation(n):
    """
    Bottom-up DP using table.
    Iterative approach building from base cases.
    """
    if n <= 1:
        return n

    # Create DP table
    dp = [0] * (n + 1)

    # Base cases
    dp[0] = 0
    dp[1] = 1

    # Fill table bottom-up
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]


# Approach 4: Space Optimized
# Time: O(n), Space: O(1)
def fib_optimized(n):
    """
    Space-optimized DP.
    Only keep track of last two values.
    """
    if n <= 1:
        return n

    # Only need previous two values
    prev2 = 0  # F(0)
    prev1 = 1  # F(1)

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# VARIATION 1: Tribonacci Sequence
# ============================================================================

def tribonacci(n):
    """
    T(n) = T(n-1) + T(n-2) + T(n-3)
    Base: T(0) = 0, T(1) = 1, T(2) = 1

    Example: 0, 1, 1, 2, 4, 7, 13, 24, ...
    """
    if n == 0:
        return 0
    if n <= 2:
        return 1

    # Keep track of last three values
    t0, t1, t2 = 0, 1, 1

    for i in range(3, n + 1):
        current = t0 + t1 + t2
        t0, t1, t2 = t1, t2, current

    return t2


# ============================================================================
# VARIATION 2: N-th Tribonacci with DP Table
# ============================================================================

def tribonacci_table(n):
    """
    Tribonacci using tabulation for clarity.
    Shows the DP pattern more explicitly.
    """
    if n == 0:
        return 0
    if n <= 2:
        return 1

    dp = [0] * (n + 1)
    dp[0], dp[1], dp[2] = 0, 1, 1

    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

    return dp[n]


# ============================================================================
# VARIATION 3: Climbing Stairs (Fibonacci in Disguise)
# ============================================================================

def climb_stairs(n):
    """
    You're climbing a staircase with n steps.
    Each time you can climb 1 or 2 steps.
    How many distinct ways can you reach the top?

    State: dp[i] = number of ways to reach step i
    Base: dp[0] = 1, dp[1] = 1
    Transition: dp[i] = dp[i-1] + dp[i-2]

    This is Fibonacci!
    - From step i-1, take 1 step to reach i
    - From step i-2, take 2 steps to reach i
    """
    if n <= 1:
        return 1

    prev2 = 1  # ways to reach step 0
    prev1 = 1  # ways to reach step 1

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# VARIATION 4: Min Cost Climbing Stairs
# ============================================================================

def min_cost_climbing_stairs(cost):
    """
    cost[i] is the cost of stepping on i-th stair.
    You can start from step 0 or step 1.
    Find minimum cost to reach the top (beyond last step).

    State: dp[i] = minimum cost to reach step i
    Base: dp[0] = cost[0], dp[1] = cost[1]
    Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    Answer: min(dp[n-1], dp[n-2]) to reach beyond
    """
    n = len(cost)
    if n <= 1:
        return 0

    # Space optimized version
    prev2 = cost[0]
    prev1 = cost[1]

    for i in range(2, n):
        current = cost[i] + min(prev1, prev2)
        prev2 = prev1
        prev1 = current

    # Can reach top from either last or second-to-last step
    return min(prev1, prev2)


# ============================================================================
# VARIATION 5: House Robber (Similar Pattern)
# ============================================================================

def rob_houses(nums):
    """
    Rob houses to maximize money without robbing adjacent houses.

    State: dp[i] = max money robbing houses 0..i
    Base: dp[0] = nums[0]
    Transition: dp[i] = max(nums[i] + dp[i-2], dp[i-1])
                        rob i + best up to i-2, or skip i
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    prev2 = nums[0]
    prev1 = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        current = max(nums[i] + prev2, prev1)
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# VARIATION 6: Decode Ways (More Complex Fibonacci)
# ============================================================================

def num_decodings(s):
    """
    'A' -> 1, 'B' -> 2, ..., 'Z' -> 26
    Count ways to decode string s.

    Example: "12" -> 2 ways ("AB" or "L")

    State: dp[i] = ways to decode s[0:i]
    Transition: Consider single digit s[i-1] and two digits s[i-2:i]
    """
    if not s or s[0] == '0':
        return 0

    n = len(s)

    # dp[i] represents ways to decode s[0:i]
    prev2 = 1  # dp[0] - empty string
    prev1 = 1  # dp[1] - first character

    for i in range(2, n + 1):
        current = 0

        # Single digit decode
        if s[i-1] != '0':
            current += prev1

        # Two digit decode
        two_digit = int(s[i-2:i])
        if 10 <= two_digit <= 26:
            current += prev2

        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# VISUALIZATION HELPER
# ============================================================================

def visualize_fibonacci_computation(n):
    """
    Show step-by-step computation of Fibonacci.
    Demonstrates the DP table building process.
    """
    if n < 0:
        return []

    print(f"Computing Fibonacci({n}) using Tabulation:\\n")
    print("=" * 60)

    if n == 0:
        print("Base case: F(0) = 0")
        return [0]

    if n == 1:
        print("Base case: F(0) = 0")
        print("Base case: F(1) = 1")
        return [0, 1]

    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1

    print(f"Initial: dp[0] = 0 (base case)")
    print(f"Initial: dp[1] = 1 (base case)\\n")

    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
        print(f"Step {i-1}: dp[{i}] = dp[{i-1}] + dp[{i-2}] = {dp[i-1]} + {dp[i-2]} = {dp[i]}")

    print("=" * 60)
    print(f"\\nFinal answer: F({n}) = {dp[n]}")
    print(f"\\nComplete sequence: {dp}")

    return dp


# ============================================================================
# TESTING AND COMPARISON
# ============================================================================

def compare_approaches(n):
    """
    Compare different Fibonacci implementations.
    Shows time complexity differences.
    """
    import time

    methods = [
        ("Tabulation", fib_tabulation),
        ("Memoization", fib_memo),
        ("Space Optimized", fib_optimized),
    ]

    # Only test recursive for small n
    if n <= 30:
        methods.insert(0, ("Naive Recursion", fib_recursive))

    print(f"Computing Fibonacci({n}):\\n")
    print("-" * 60)

    for name, func in methods:
        start = time.time()
        result = func(n)
        elapsed = time.time() - start
        print(f"{name:20} | Result: {result:15} | Time: {elapsed:.6f}s")

    print("-" * 60)


# Example usage
if __name__ == "__main__":
    # Visualize computation
    visualize_fibonacci_computation(10)

    print("\\n\\n")

    # Compare approaches
    compare_approaches(35)

    print("\\n\\nVariation Examples:")
    print(f"Tribonacci(10) = {tribonacci(10)}")
    print(f"Climb 5 stairs = {climb_stairs(5)} ways")
    print(f"Min cost [10,15,20] = {min_cost_climbing_stairs([10, 15, 20])}")
    print(f"Rob [2,7,9,3,1] = {rob_houses([2, 7, 9, 3, 1])}")
    print(f"Decode '226' = {num_decodings('226')} ways")`,
  exercises: [
    {
      prompt: 'Implement the N-th Fibonacci number using bottom-up DP with O(n) time and O(1) space. Your solution should only use two variables to track previous values.',
      initialCode: `def fib(n):
    """
    Calculate the n-th Fibonacci number.

    F(0) = 0
    F(1) = 1
    F(n) = F(n-1) + F(n-2) for n >= 2

    Use space-optimized approach with only two variables.

    Args:
        n: The index of Fibonacci number to calculate

    Returns:
        The n-th Fibonacci number

    Examples:
        fib(0) -> 0
        fib(1) -> 1
        fib(5) -> 5
        fib(10) -> 55
    """
    # Your code here
    pass`,
      solution: `def fib(n):
    """
    Space-optimized Fibonacci using two variables.
    Time: O(n), Space: O(1)
    """
    # Handle base cases
    if n <= 1:
        return n

    # Initialize first two Fibonacci numbers
    prev2 = 0  # F(0)
    prev1 = 1  # F(1)

    # Compute from F(2) to F(n)
    for i in range(2, n + 1):
        current = prev1 + prev2  # F(i) = F(i-1) + F(i-2)
        prev2 = prev1            # Update for next iteration
        prev1 = current

    return prev1

# Alternative: Using tuple unpacking (more Pythonic)
def fib_pythonic(n):
    if n <= 1:
        return n

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b

    return b`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement the Tribonacci sequence where T(n) = T(n-1) + T(n-2) + T(n-3), with T(0) = 0, T(1) = 1, T(2) = 1. Use space optimization.',
      initialCode: `def tribonacci(n):
    """
    Calculate the n-th Tribonacci number.

    T(0) = 0
    T(1) = 1
    T(2) = 1
    T(n) = T(n-1) + T(n-2) + T(n-3) for n >= 3

    Args:
        n: The index of Tribonacci number to calculate

    Returns:
        The n-th Tribonacci number

    Examples:
        tribonacci(0) -> 0
        tribonacci(4) -> 4
        tribonacci(25) -> 1389537
    """
    # Your code here
    pass`,
      solution: `def tribonacci(n):
    """
    Space-optimized Tribonacci.
    Time: O(n), Space: O(1)
    """
    # Handle base cases
    if n == 0:
        return 0
    if n <= 2:
        return 1

    # Track last three values
    t0, t1, t2 = 0, 1, 1

    # Compute from T(3) to T(n)
    for i in range(3, n + 1):
        current = t0 + t1 + t2
        t0, t1, t2 = t1, t2, current

    return t2

# With tabulation (if you want to see all values)
def tribonacci_with_table(n):
    """Shows all intermediate values."""
    if n == 0:
        return 0
    if n <= 2:
        return 1

    dp = [0] * (n + 1)
    dp[0], dp[1], dp[2] = 0, 1, 1

    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

    return dp[n]`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Solve the "Climbing Stairs with Variable Steps" problem: You can climb 1, 2, or 3 steps at a time. Count the number of ways to reach step n.',
      initialCode: `def climb_stairs_variable(n):
    """
    Count ways to climb n stairs when you can take 1, 2, or 3 steps.

    State: dp[i] = number of ways to reach step i
    You can reach step i from:
      - step i-1 (take 1 step)
      - step i-2 (take 2 steps)
      - step i-3 (take 3 steps)

    Args:
        n: Number of stairs

    Returns:
        Number of distinct ways to reach the top

    Examples:
        climb_stairs_variable(3) -> 4
        # Ways: 1+1+1, 1+2, 2+1, 3

        climb_stairs_variable(4) -> 7
    """
    # Your code here
    pass`,
      solution: `def climb_stairs_variable(n):
    """
    Climbing stairs with 1, 2, or 3 steps.
    This follows the Tribonacci pattern!

    Time: O(n), Space: O(1)
    """
    if n == 0:
        return 1  # One way to stay at ground (do nothing)
    if n == 1:
        return 1  # One way: take 1 step
    if n == 2:
        return 2  # Two ways: 1+1 or 2

    # Track last three values
    # dp[i-3], dp[i-2], dp[i-1]
    prev3 = 1  # dp[0]
    prev2 = 1  # dp[1]
    prev1 = 2  # dp[2]

    for i in range(3, n + 1):
        current = prev1 + prev2 + prev3
        prev3, prev2, prev1 = prev2, prev1, current

    return prev1

# With detailed table for understanding
def climb_stairs_variable_verbose(n):
    """Shows the DP table construction."""
    if n == 0:
        return 1
    if n == 1:
        return 1
    if n == 2:
        return 2

    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    print(f"Computing ways to climb {n} stairs:\\n")
    print(f"dp[0] = {dp[0]} (base case)")
    print(f"dp[1] = {dp[1]} (base case)")
    print(f"dp[2] = {dp[2]} (base case)\\n")

    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
        print(f"dp[{i}] = dp[{i-1}] + dp[{i-2}] + dp[{i-3}] = {dp[i-1]} + {dp[i-2]} + {dp[i-3]} = {dp[i]}")

    return dp[n]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the time complexity of computing the n-th Fibonacci number using naive recursion?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(2^n)',
        'O(n^2)',
      ],
      correctAnswer: 2,
      explanations: [
        'O(n) would be the case with DP or memoization, but naive recursion recomputes many values.',
        'This complexity doesn\'t match the branching factor of the recursive tree.',
        'Correct! Each call branches into two recursive calls, creating a binary tree of height n. The number of nodes in this tree is approximately 2^n, making it exponential.',
        'This would suggest nested loops, but the recursion tree grows exponentially, not quadratically.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In the space-optimized Fibonacci solution using two variables, why don\'t we need to store all previous values?',
      options: [
        'Because Fibonacci numbers get too large to store',
        'Because we only need the previous two values to compute the next one',
        'Because we\'re using recursion instead of iteration',
        'Because the base cases are constant',
      ],
      correctAnswer: 1,
      explanations: [
        'Storage size isn\'t the reason - we can store large numbers. The reason is about dependency.',
        'Correct! The recurrence relation F(n) = F(n-1) + F(n-2) only depends on the previous two values. Once we compute F(n), we don\'t need F(n-2) anymore. We can just keep shifting the two most recent values.',
        'The space optimization works with iteration, not recursion. Recursion would use O(n) call stack space.',
        'While base cases are constant, that\'s not why we can optimize space. It\'s about the limited dependency window.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which of these problems does NOT follow the Fibonacci pattern?',
      options: [
        'Climbing stairs where you can take 1 or 2 steps',
        'Tribonacci sequence (sum of previous 3 terms)',
        'Counting ways to decode a numeric string',
        'Finding the longest increasing subsequence',
      ],
      correctAnswer: 3,
      explanations: [
        'This is exactly Fibonacci! ways(n) = ways(n-1) + ways(n-2).',
        'This follows a similar pattern, just with 3 previous terms instead of 2.',
        'Decode Ways follows the Fibonacci pattern when considering 1-digit and 2-digit decodings.',
        'Correct! Longest Increasing Subsequence (LIS) is a different DP pattern. While it uses DP, it doesn\'t have the characteristic "sum of previous k terms" structure. LIS requires comparing with all previous elements, not just a fixed window.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the key insight that transforms a naive recursive Fibonacci into an O(n) solution?',
      options: [
        'Using iteration instead of recursion',
        'Recognizing and eliminating overlapping subproblems through caching',
        'Using better variable names',
        'Optimizing the base cases',
      ],
      correctAnswer: 1,
      explanations: [
        'While iteration can help, you can achieve O(n) with recursion too (using memoization). The key isn\'t the loop vs recursion choice.',
        'Correct! The naive recursion is slow because it recomputes F(i) many times. The breakthrough is recognizing that F(i) always has the same value, so we can cache it. This is the essence of dynamic programming - identifying overlapping subproblems and storing their solutions.',
        'Variable naming doesn\'t affect time complexity, only code readability.',
        'The base cases don\'t change between naive and optimized versions. The optimization comes from caching.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// ============================================================================

const climbingStairsPatternData: LessonContent = {
  title: 'Climbing Stairs Pattern',
  content: `<div>
<h1>The Climbing Stairs Pattern in Dynamic Programming</h1>

<p>The "Climbing Stairs" problem is one of the most fundamental patterns in dynamic programming. It appears frequently in coding interviews and serves as a template for recognizing similar problems in different disguises.</p>

<h2>The Classic Problem</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem Statement:</strong> You are climbing a staircase with <code>n</code> steps. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?</p>
</div>

<p><strong>Example:</strong></p>
<pre>
Input: n = 3
Output: 3
Explanation: There are three ways to climb to step 3:
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<h2>Why This is Actually Fibonacci</h2>

<p>The climbing stairs problem is Fibonacci in disguise! Here's why:</p>

<div class="visualization">
  <pre>
To reach step n, you must have come from either:
  • Step n-1 (then take 1 step) → ways(n-1) ways
  • Step n-2 (then take 2 steps) → ways(n-2) ways

Therefore: ways(n) = ways(n-1) + ways(n-2)

This is exactly the Fibonacci recurrence!

Base cases:
  ways(0) = 1 (one way to stay at ground: do nothing)
  ways(1) = 1 (one way: take 1 step)

Sequence: 1, 1, 2, 3, 5, 8, 13, 21, ...
(Same as Fibonacci starting from F(1)!)
  </pre>
</div>

<h2>The DP Framework Step-by-Step</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Step</th>
    <th class="border p-2">Details</th>
  </tr>
  <tr>
    <td class="border p-2"><strong>1. Define State</strong></td>
    <td class="border p-2">dp[i] = number of distinct ways to reach step i</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>2. Base Cases</strong></td>
    <td class="border p-2">dp[0] = 1 (at ground)<br>dp[1] = 1 (one step)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>3. Transition</strong></td>
    <td class="border p-2">dp[i] = dp[i-1] + dp[i-2]<br>(from 1-step back + from 2-steps back)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>4. Order</strong></td>
    <td class="border p-2">Compute from i = 2 to n (bottom-up)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>5. Answer</strong></td>
    <td class="border p-2">dp[n]</td>
  </tr>
</table>

<h2>Variations of the Pattern</h2>

<h3>Variation 1: Variable Step Sizes</h3>
<p>What if you can climb 1, 2, or 3 steps at a time?</p>
<div class="pattern-box">
  <strong>Recurrence:</strong> dp[i] = dp[i-1] + dp[i-2] + dp[i-3]<br>
  <strong>Pattern:</strong> This becomes Tribonacci!
</div>

<h3>Variation 2: Minimum Steps</h3>
<p>What if each step has a cost, and you want minimum cost?</p>
<div class="pattern-box">
  <strong>Recurrence:</strong> dp[i] = cost[i] + min(dp[i-1], dp[i-2])<br>
  <strong>Pattern:</strong> Same structure, different operation (min vs sum)
</div>

<h3>Variation 3: With Constraints</h3>
<p>What if you can't take the same step size twice in a row?</p>
<div class="pattern-box">
  <strong>State:</strong> dp[i][last_step] = ways to reach i with last step size<br>
  <strong>Pattern:</strong> 2D state tracking additional constraint
</div>

<h3>Variation 4: Forbidden Steps</h3>
<p>What if certain steps are broken/forbidden?</p>
<div class="pattern-box">
  <strong>Transition:</strong> Skip forbidden steps: if i is forbidden, dp[i] = 0<br>
  <strong>Pattern:</strong> Conditional transitions
</div>

<h2>Recognition Checklist</h2>

<p>A problem follows the Climbing Stairs pattern if it has:</p>

<ul class="list-disc ml-6">
  <li>✓ <strong>Sequential stages:</strong> Process elements one by one (steps, days, positions)</li>
  <li>✓ <strong>Decision at each stage:</strong> Limited choices (take 1 step or 2)</li>
  <li>✓ <strong>Current depends on previous:</strong> State i depends on i-1, i-2, etc.</li>
  <li>✓ <strong>Counting/Optimization:</strong> Count ways OR find min/max cost</li>
  <li>✓ <strong>No backtracking needed:</strong> Move forward through stages</li>
</ul>

<h2>Common Interview Problems Using This Pattern</h2>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <ol>
    <li><strong>Climbing Stairs:</strong> Classic version with 1 or 2 steps</li>
    <li><strong>Min Cost Climbing Stairs:</strong> Each step has a cost, minimize total</li>
    <li><strong>House Robber:</strong> Rob houses (can't rob adjacent)</li>
    <li><strong>Decode Ways:</strong> Count decodings of a numeric string</li>
    <li><strong>Jump Game:</strong> Can you reach the end with variable jumps</li>
    <li><strong>Fibonacci Numbers:</strong> The underlying pattern</li>
  </ol>
</div>

<h2>Implementation Approaches</h2>

<h3>Approach 1: Top-Down (Recursion + Memoization)</h3>
<div class="pros-cons">
  <p><strong>Pros:</strong> Natural to think about, matches recurrence relation</p>
  <p><strong>Cons:</strong> Uses O(n) call stack space</p>
  <p><strong>Use when:</strong> Problem is easier to express recursively</p>
</div>

<h3>Approach 2: Bottom-Up (Tabulation)</h3>
<div class="pros-cons">
  <p><strong>Pros:</strong> No recursion overhead, clear iteration order</p>
  <p><strong>Cons:</strong> Requires thinking iteratively</p>
  <p><strong>Use when:</strong> Clear order of computation</p>
</div>

<h3>Approach 3: Space-Optimized</h3>
<div class="pros-cons">
  <p><strong>Pros:</strong> O(1) space, optimal</p>
  <p><strong>Cons:</strong> Can't reconstruct full path</p>
  <p><strong>Use when:</strong> Only final answer needed</p>
</div>

<h2>Problem-Solving Template</h2>

<pre class="bg-gray-100 p-4 rounded">
# Step 1: Identify if it's Climbing Stairs pattern
# - Sequential stages? ✓
# - Limited choices at each stage? ✓
# - Current depends on previous k stages? ✓

# Step 2: Define state
# dp[i] = [what does reaching stage i represent?]

# Step 3: Identify base cases
# dp[0] = ?, dp[1] = ?

# Step 4: Find recurrence relation
# How do choices combine?
# dp[i] = f(dp[i-1], dp[i-2], ...)

# Step 5: Determine computation order
# Usually i from base cases to n

# Step 6: Identify answer location
# Usually dp[n]

# Step 7: Optimize space if needed
# If only need previous k values, use k variables
</pre>

<h2>Time and Space Complexity</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Approach</th>
    <th class="border p-2">Time</th>
    <th class="border p-2">Space</th>
  </tr>
  <tr>
    <td class="border p-2">Naive Recursion</td>
    <td class="border p-2">O(2^n)</td>
    <td class="border p-2">O(n)</td>
  </tr>
  <tr>
    <td class="border p-2">Memoization</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(n)</td>
  </tr>
  <tr>
    <td class="border p-2">Tabulation</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(n)</td>
  </tr>
  <tr>
    <td class="border p-2">Space Optimized</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(1)</td>
  </tr>
</table>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <strong>Interview Tip:</strong> Always start with the recursive solution to show understanding, then optimize to tabulation, then space-optimize if asked. This demonstrates progressive optimization thinking.
</div>

</div>`,
  codeExample: `# ============================================================================
# CLIMBING STAIRS PATTERN: Complete Implementation Guide
# ============================================================================

# PROBLEM 1: Classic Climbing Stairs
# ============================================================================

def climb_stairs_recursive(n, memo=None):
    """
    Top-down recursive solution with memoization.

    Time: O(n), Space: O(n)
    """
    if memo is None:
        memo = {}

    if n in memo:
        return memo[n]

    # Base cases
    if n <= 1:
        return 1

    # Recurrence: ways(n) = ways(n-1) + ways(n-2)
    memo[n] = climb_stairs_recursive(n - 1, memo) + climb_stairs_recursive(n - 2, memo)
    return memo[n]


def climb_stairs_tabulation(n):
    """
    Bottom-up iterative solution with DP table.

    Time: O(n), Space: O(n)
    """
    if n <= 1:
        return 1

    # Create DP table
    dp = [0] * (n + 1)

    # Base cases
    dp[0] = 1  # One way to stay at ground
    dp[1] = 1  # One way to reach step 1

    # Fill table
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]


def climb_stairs_optimized(n):
    """
    Space-optimized solution using only two variables.

    Time: O(n), Space: O(1)
    """
    if n <= 1:
        return 1

    # Only keep track of last two values
    prev2 = 1  # ways(0)
    prev1 = 1  # ways(1)

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# VARIATION 1: Min Cost Climbing Stairs
# LeetCode 746
# ============================================================================

def min_cost_climbing_stairs(cost):
    """
    Each step has a cost. You can start at step 0 or 1.
    Find minimum cost to reach beyond the top step.

    State: dp[i] = minimum cost to reach step i
    Base: dp[0] = cost[0], dp[1] = cost[1]
    Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    Answer: min(dp[n-1], dp[n-2])

    Time: O(n), Space: O(1) with optimization
    """
    n = len(cost)

    if n <= 1:
        return 0

    # Space-optimized: only track last two costs
    prev2 = cost[0]
    prev1 = cost[1]

    for i in range(2, n):
        current = cost[i] + min(prev1, prev2)
        prev2 = prev1
        prev1 = current

    # Can reach top from either last or second-to-last step
    return min(prev1, prev2)


def min_cost_climbing_stairs_verbose(cost):
    """
    Same solution with detailed DP table for learning.
    """
    n = len(cost)

    if n <= 1:
        return 0

    # DP table
    dp = [0] * n
    dp[0] = cost[0]
    dp[1] = cost[1]

    print("Min Cost Climbing Stairs Computation:")
    print("=" * 50)
    print(f"dp[0] = {dp[0]} (cost[0])")
    print(f"dp[1] = {dp[1]} (cost[1])\\n")

    for i in range(2, n):
        dp[i] = cost[i] + min(dp[i-1], dp[i-2])
        print(f"dp[{i}] = cost[{i}] + min(dp[{i-1}], dp[{i-2}])")
        print(f"     = {cost[i]} + min({dp[i-1]}, {dp[i-2]})")
        print(f"     = {cost[i]} + {min(dp[i-1], dp[i-2])}")
        print(f"     = {dp[i]}\\n")

    answer = min(dp[n-1], dp[n-2])
    print(f"Final: min(dp[{n-1}], dp[{n-2}]) = min({dp[n-1]}, {dp[n-2]}) = {answer}")

    return answer


# ============================================================================
# VARIATION 2: Climbing Stairs with Variable Steps
# ============================================================================

def climb_stairs_k_steps(n, k):
    """
    You can climb 1, 2, ..., k steps at a time.
    Count ways to reach step n.

    State: dp[i] = ways to reach step i
    Transition: dp[i] = sum(dp[i-j] for j in 1..min(i,k))

    Time: O(n*k), Space: O(n)
    """
    if n == 0:
        return 1

    dp = [0] * (n + 1)
    dp[0] = 1

    for i in range(1, n + 1):
        # Can come from any of the previous k steps
        for j in range(1, min(i, k) + 1):
            dp[i] += dp[i - j]

    return dp[n]


def climb_stairs_k_steps_optimized(n, k):
    """
    Space-optimized version using sliding window.

    Time: O(n*k), Space: O(k)
    """
    if n == 0:
        return 1

    # Keep only last k values
    dp = [0] * (k + 1)
    dp[0] = 1

    for i in range(1, n + 1):
        new_val = 0
        for j in range(1, min(i, k) + 1):
            new_val += dp[(i - j) % (k + 1)]
        dp[i % (k + 1)] = new_val

    return dp[n % (k + 1)]


# ============================================================================
# VARIATION 3: Climbing Stairs with Forbidden Steps
# ============================================================================

def climb_stairs_with_obstacles(n, forbidden):
    """
    Some steps are broken (forbidden).
    Count ways to reach step n without stepping on forbidden steps.

    forbidden: set of step indices that are broken

    Time: O(n), Space: O(n)
    """
    if n in forbidden:
        return 0
    if n <= 1:
        return 1

    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 0 if 1 in forbidden else 1

    for i in range(2, n + 1):
        if i in forbidden:
            dp[i] = 0  # Can't step here
        else:
            dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]


# ============================================================================
# VARIATION 4: Climbing Stairs - Count Specific Step Combinations
# ============================================================================

def count_ways_with_steps(n, steps):
    """
    Given specific step sizes you can take, count ways to reach n.

    Example: steps = [1, 3, 5] means you can climb 1, 3, or 5 steps.

    This is the "Coin Change" pattern applied to stairs!

    Time: O(n * len(steps)), Space: O(n)
    """
    dp = [0] * (n + 1)
    dp[0] = 1  # Base case

    for i in range(1, n + 1):
        for step in steps:
            if i >= step:
                dp[i] += dp[i - step]

    return dp[n]


# ============================================================================
# VARIATION 5: Climbing Stairs with Maximum Consecutive Same Steps
# ============================================================================

def climb_stairs_max_consecutive(n, max_consecutive):
    """
    You can take 1 or 2 steps, but can't take the same size
    more than max_consecutive times in a row.

    State: dp[i][last_step][count] = ways to reach i
           where last step size was last_step, repeated count times

    Time: O(n), Space: O(n) with optimization
    """
    # Simplified version: can't take 2-step twice in a row
    if n <= 2:
        return n if n > 0 else 1

    # dp[i][0] = ways to reach i with last step being 1
    # dp[i][1] = ways to reach i with last step being 2
    dp = [[0, 0] for _ in range(n + 1)]

    dp[0][0] = 1  # Start position
    dp[1][0] = 1  # Take one 1-step
    dp[2][0] = 1  # Take two 1-steps
    dp[2][1] = 1  # Take one 2-step

    for i in range(3, n + 1):
        # Last step was 1: could have come from any previous state
        dp[i][0] = dp[i-1][0] + dp[i-1][1]

        # Last step was 2: could only come from state ending in 1
        # (to avoid consecutive 2-steps)
        dp[i][1] = dp[i-2][0]

    return dp[n][0] + dp[n][1]


# ============================================================================
# VARIATION 6: Minimum Jumps to Reach End
# ============================================================================

def min_jumps_to_reach_end(arr):
    """
    arr[i] = maximum jump length from position i.
    Find minimum number of jumps to reach the end.

    State: dp[i] = minimum jumps to reach position i
    Transition: For each j < i where j + arr[j] >= i:
                dp[i] = min(dp[i], dp[j] + 1)

    Time: O(n^2), Space: O(n)
    """
    n = len(arr)
    if n <= 1:
        return 0

    dp = [float('inf')] * n
    dp[0] = 0  # Start position

    for i in range(1, n):
        # Check all positions that can reach i
        for j in range(i):
            if j + arr[j] >= i:
                dp[i] = min(dp[i], dp[j] + 1)

    return dp[n - 1] if dp[n - 1] != float('inf') else -1


# ============================================================================
# VISUALIZATION AND TESTING
# ============================================================================

def visualize_climbing_stairs(n):
    """
    Visualize the DP table construction for climbing stairs.
    """
    print(f"Climbing Stairs: n = {n}\\n")
    print("=" * 60)

    if n <= 1:
        print(f"Base case: ways({n}) = 1")
        return 1

    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1

    print("Base cases:")
    print(f"  ways(0) = 1 (stay at ground)")
    print(f"  ways(1) = 1 (one 1-step)\\n")

    print("Building table:")
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
        print(f"  ways({i}) = ways({i-1}) + ways({i-2})")
        print(f"          = {dp[i-1]} + {dp[i-2]}")
        print(f"          = {dp[i]}")

        # Show the actual paths for small n
        if i <= 4:
            print(f"    Paths: ", end="")
            show_paths(i, dp[i])
        print()

    print("=" * 60)
    print(f"\\nAnswer: {dp[n]} distinct ways to climb {n} stairs")

    return dp[n]


def show_paths(n, count):
    """Helper to show actual step combinations for small n."""
    # This is illustrative - not optimal for large n
    if n == 2:
        print("[1,1], [2]")
    elif n == 3:
        print("[1,1,1], [1,2], [2,1]")
    elif n == 4:
        print("[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]")
    else:
        print(f"{count} ways")


# ============================================================================
# EXAMPLE USAGE
# ============================================================================

if __name__ == "__main__":
    # Classic climbing stairs
    print("CLASSIC CLIMBING STAIRS:")
    visualize_climbing_stairs(5)

    print("\\n\\n" + "="*60)
    print("MIN COST CLIMBING STAIRS:")
    print("="*60 + "\\n")
    cost = [10, 15, 20]
    result = min_cost_climbing_stairs_verbose(cost)

    print("\\n\\n" + "="*60)
    print("VARIATIONS:")
    print("="*60)
    print(f"Climb 5 stairs with k=3 steps: {climb_stairs_k_steps(5, 3)} ways")
    print(f"Climb 6 stairs avoiding step 3: {climb_stairs_with_obstacles(6, {3})} ways")
    print(f"Climb 5 stairs with steps [1,3,4]: {count_ways_with_steps(5, [1, 3, 4])} ways")`,
  exercises: [
    {
      prompt: 'Implement the classic climbing stairs problem using space-optimized DP (O(1) space). Count distinct ways to climb n stairs taking 1 or 2 steps at a time.',
      initialCode: `def climb_stairs(n):
    """
    Count distinct ways to climb n stairs.
    Can take 1 or 2 steps at a time.

    Args:
        n: Number of stairs

    Returns:
        Number of distinct ways to reach the top

    Examples:
        climb_stairs(2) -> 2  # [1,1] or [2]
        climb_stairs(3) -> 3  # [1,1,1], [1,2], [2,1]
        climb_stairs(4) -> 5
    """
    # Your code here
    pass`,
      solution: `def climb_stairs(n):
    """
    Space-optimized climbing stairs.
    Time: O(n), Space: O(1)
    """
    if n <= 1:
        return 1

    # Track last two values
    prev2 = 1  # ways(0)
    prev1 = 1  # ways(1)

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1

# Alternative with clearer variable names
def climb_stairs_clear(n):
    if n <= 1:
        return 1

    one_step_before = 1
    two_steps_before = 1

    for i in range(2, n + 1):
        current = one_step_before + two_steps_before
        two_steps_before = one_step_before
        one_step_before = current

    return one_step_before`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Solve the Min Cost Climbing Stairs problem (LeetCode 746). Given an array where cost[i] is the cost of stepping on stair i, find the minimum cost to reach the top. You can start from step 0 or 1.',
      initialCode: `def min_cost_climbing_stairs(cost):
    """
    Find minimum cost to reach the top of stairs.

    - cost[i] = cost of stepping on i-th stair
    - Can start at index 0 or 1
    - From step i, can go to i+1 or i+2
    - Top is beyond the last step

    Args:
        cost: List of costs for each step

    Returns:
        Minimum cost to reach beyond the top step

    Examples:
        cost = [10, 15, 20] -> 15
        # Start at 1 (cost 15), jump to top

        cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] -> 6
        # Path: 0->2->3->4->6->7->9->top
    """
    # Your code here
    pass`,
      solution: `def min_cost_climbing_stairs(cost):
    """
    Min cost climbing using space-optimized DP.

    State: dp[i] = min cost to reach step i
    Base: dp[0] = cost[0], dp[1] = cost[1]
    Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    Answer: min(dp[n-1], dp[n-2])

    Time: O(n), Space: O(1)
    """
    n = len(cost)

    if n <= 1:
        return 0

    # Only track last two costs
    prev2 = cost[0]
    prev1 = cost[1]

    # Compute minimum cost to reach each step
    for i in range(2, n):
        current = cost[i] + min(prev1, prev2)
        prev2 = prev1
        prev1 = current

    # Can reach top from either last or second-to-last step
    return min(prev1, prev2)

# With full DP table (for understanding)
def min_cost_with_table(cost):
    n = len(cost)
    if n <= 1:
        return 0

    dp = [0] * n
    dp[0] = cost[0]
    dp[1] = cost[1]

    for i in range(2, n):
        dp[i] = cost[i] + min(dp[i-1], dp[i-2])

    return min(dp[n-1], dp[n-2])`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Implement climbing stairs where you can take 1, 2, or 3 steps at a time. This follows the Tribonacci pattern.',
      initialCode: `def climb_stairs_three_steps(n):
    """
    Count ways to climb n stairs when you can take 1, 2, or 3 steps.

    State: dp[i] = ways to reach step i
    You can reach i from: i-1, i-2, or i-3

    Args:
        n: Number of stairs

    Returns:
        Number of distinct ways

    Examples:
        climb_stairs_three_steps(3) -> 4
        # Ways: [1,1,1], [1,2], [2,1], [3]

        climb_stairs_three_steps(4) -> 7
    """
    # Your code here
    pass`,
      solution: `def climb_stairs_three_steps(n):
    """
    Climbing stairs with 1, 2, or 3 steps.
    This is the Tribonacci sequence!

    Time: O(n), Space: O(1)
    """
    if n == 0:
        return 1
    if n == 1:
        return 1
    if n == 2:
        return 2

    # Track last three values
    prev3 = 1  # ways(0)
    prev2 = 1  # ways(1)
    prev1 = 2  # ways(2)

    for i in range(3, n + 1):
        current = prev1 + prev2 + prev3
        prev3 = prev2
        prev2 = prev1
        prev1 = current

    return prev1

# With DP table for clarity
def climb_stairs_three_steps_table(n):
    if n <= 0:
        return 1
    if n == 1:
        return 1
    if n == 2:
        return 2

    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

    return dp[n]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Why is the Climbing Stairs problem essentially the same as computing Fibonacci numbers?',
      options: [
        'Because both use dynamic programming',
        'Because they both have the same recurrence relation: F(n) = F(n-1) + F(n-2)',
        'Because they both start with base case 1',
        'Because they both count something',
      ],
      correctAnswer: 1,
      explanations: [
        'While both use DP, that\'s not why they\'re the same problem. Many DP problems have different structures.',
        'Correct! To reach step n, you must come from step n-1 (then take 1 step) or step n-2 (then take 2 steps). So ways(n) = ways(n-1) + ways(n-2), which is exactly the Fibonacci recurrence relation.',
        'While base cases are similar, the recurrence relation is what makes them equivalent.',
        'Many problems involve counting, but the specific recurrence relation is what makes these equivalent.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In the Min Cost Climbing Stairs problem, why is the answer min(dp[n-1], dp[n-2]) instead of just dp[n]?',
      options: [
        'Because we want the minimum cost',
        'Because we can reach beyond the top from either the last or second-to-last step',
        'Because of an off-by-one error in the problem definition',
        'Because dp[n] doesn\'t exist',
      ],
      correctAnswer: 1,
      explanations: [
        'While we do want minimum cost, this doesn\'t explain why we consider two positions.',
        'Correct! The "top" is beyond the last step. We can reach it by taking one step from the last position (n-1) or two steps from the second-to-last position (n-2). We choose whichever path has lower cost.',
        'This isn\'t an error - it\'s by design. The top is defined as beyond the last step.',
        'We could define dp[n], but the problem asks for cost to reach beyond the last step, not the last step itself.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'If you can take 1, 2, or 3 steps at a time, what changes in the recurrence relation?',
      options: [
        'dp[i] = dp[i-1] + dp[i-2] + dp[i-3]',
        'dp[i] = max(dp[i-1], dp[i-2], dp[i-3])',
        'dp[i] = dp[i-1] * dp[i-2] * dp[i-3]',
        'Nothing changes, it\'s still dp[i] = dp[i-1] + dp[i-2]',
      ],
      correctAnswer: 0,
      explanations: [
        'Correct! Now you can reach step i from three previous positions: i-1 (take 1 step), i-2 (take 2 steps), or i-3 (take 3 steps). So total ways = ways from i-1 + ways from i-2 + ways from i-3. This becomes the Tribonacci sequence!',
        'We use max for optimization problems, but this is a counting problem, so we sum the possibilities.',
        'We don\'t multiply - we add the number of ways from each previous reachable position.',
        'This would only work if you could still take only 1 or 2 steps. With 3 steps as an option, we need to add dp[i-3].',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What is the space complexity of the optimal Climbing Stairs solution, and why?',
      options: [
        'O(n) because we need to store all previous values',
        'O(log n) because we can use divide and conquer',
        'O(1) because we only need to track the last two values',
        'O(2^n) because of the branching recursion',
      ],
      correctAnswer: 2,
      explanations: [
        'We would need O(n) space with a DP table, but we can optimize better.',
        'Climbing stairs is computed iteratively, not with divide and conquer.',
        'Correct! Since dp[i] only depends on dp[i-1] and dp[i-2], we only need two variables (prev1 and prev2) to track the previous two values. As we iterate, we update these variables. This gives us O(1) space while maintaining O(n) time.',
        'This would be the time complexity of naive recursion, not the space complexity of the optimal solution.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

// ============================================================================

const houseRobberPatternData: LessonContent = {
  title: 'House Robber Pattern',
  content: `<div>
<h1>The House Robber Pattern in Dynamic Programming</h1>

<p>The House Robber problem introduces a critical DP pattern: <strong>optimization with constraints</strong>. Unlike simple counting problems, here we maximize value while respecting the constraint that we cannot select adjacent elements.</p>

<h2>The Classic Problem</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem Statement:</strong> You are a professional robber planning to rob houses along a street. Each house has a certain amount of money. Adjacent houses have security systems that will alert police if two adjacent houses are robbed on the same night. Given an array representing the amount of money in each house, determine the maximum amount of money you can rob without alerting the police.</p>
</div>

<p><strong>Example:</strong></p>
<pre>
Input: nums = [2, 7, 9, 3, 1]
Output: 12
Explanation: Rob house 0 (money = 2), house 2 (money = 9), and house 4 (money = 1).
Total = 2 + 9 + 1 = 12.
</pre>

<h2>Pattern Recognition</h2>

<p>The House Robber pattern appears when you have:</p>

<ul class="list-disc ml-6">
  <li>✓ <strong>Sequential elements:</strong> Process items one by one (houses, jobs, stocks)</li>
  <li>✓ <strong>Optimization goal:</strong> Maximize or minimize some value</li>
  <li>✓ <strong>Adjacent constraint:</strong> Cannot select consecutive elements</li>
  <li>✓ <strong>Independent values:</strong> Each element has its own value/cost</li>
  <li>✓ <strong>Decision at each step:</strong> Take current element or skip it</li>
</ul>

<h2>The Key Insight</h2>

<div class="visualization">
  <pre>
For each house i, you have two choices:

1. ROB house i:
   - Get money: nums[i]
   - Cannot rob house i-1
   - Best you could have done: dp[i-2]
   - Total: nums[i] + dp[i-2]

2. SKIP house i:
   - Get money: 0
   - Best you could have done: dp[i-1]
   - Total: dp[i-1]

DECISION: dp[i] = max(nums[i] + dp[i-2], dp[i-1])
                  |___ rob i ____|  |_ skip i _|
  </pre>
</div>

<h2>The DP Framework</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Step</th>
    <th class="border p-2">House Robber</th>
  </tr>
  <tr>
    <td class="border p-2"><strong>1. Define State</strong></td>
    <td class="border p-2">dp[i] = maximum money that can be robbed from houses 0 to i</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>2. Base Cases</strong></td>
    <td class="border p-2">dp[0] = nums[0] (only one house)<br>dp[1] = max(nums[0], nums[1]) (take better of first two)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>3. Transition</strong></td>
    <td class="border p-2">dp[i] = max(nums[i] + dp[i-2], dp[i-1])<br>(rob current + best from i-2, or skip current)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>4. Order</strong></td>
    <td class="border p-2">i from 2 to n-1 (left to right)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>5. Answer</strong></td>
    <td class="border p-2">dp[n-1] (maximum money from all houses)</td>
  </tr>
</table>

<h2>Why This is Different from Climbing Stairs</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Aspect</th>
    <th class="border p-2">Climbing Stairs</th>
    <th class="border p-2">House Robber</th>
  </tr>
  <tr>
    <td class="border p-2"><strong>Operation</strong></td>
    <td class="border p-2">Sum (addition)</td>
    <td class="border p-2">Max (optimization)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>Goal</strong></td>
    <td class="border p-2">Count ways</td>
    <td class="border p-2">Maximize value</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>Recurrence</strong></td>
    <td class="border p-2">dp[i] = dp[i-1] + dp[i-2]</td>
    <td class="border p-2">dp[i] = max(nums[i] + dp[i-2], dp[i-1])</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>Element Values</strong></td>
    <td class="border p-2">No values (just counting)</td>
    <td class="border p-2">Each element has value nums[i]</td>
  </tr>
</table>

<h2>Variations of the Pattern</h2>

<h3>Variation 1: House Robber II (Circular)</h3>
<div class="pattern-box">
  <p><strong>Change:</strong> Houses are arranged in a circle - first and last are adjacent.</p>
  <p><strong>Solution:</strong> Solve twice - once excluding first house, once excluding last house. Take maximum.</p>
  <p><strong>Recurrence:</strong> Same, but run on nums[0:n-1] and nums[1:n]</p>
</div>

<h3>Variation 2: Delete and Earn</h3>
<div class="pattern-box">
  <p><strong>Change:</strong> Taking a number deletes all instances of num-1 and num+1.</p>
  <p><strong>Solution:</strong> Convert to House Robber by grouping values.</p>
  <p><strong>Recurrence:</strong> dp[i] = max(i * count[i] + dp[i-2], dp[i-1])</p>
</div>

<h3>Variation 3: Paint House</h3>
<div class="pattern-box">
  <p><strong>Change:</strong> Paint houses with k colors, adjacent houses can't have same color.</p>
  <p><strong>Solution:</strong> 2D DP tracking color at each house.</p>
  <p><strong>Recurrence:</strong> dp[i][c] = cost[i][c] + min(dp[i-1][other colors])</p>
</div>

<h3>Variation 4: Best Time to Buy/Sell Stock with Cooldown</h3>
<div class="pattern-box">
  <p><strong>Change:</strong> After selling stock, must cooldown one day before buying again.</p>
  <p><strong>Solution:</strong> Track states: holding stock, sold (cooldown), not holding.</p>
  <p><strong>Pattern:</strong> State machine DP with "can't use adjacent" constraint</p>
</div>

<h2>Common Interview Problems</h2>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <ol>
    <li><strong>House Robber I:</strong> Linear array, can't rob adjacent</li>
    <li><strong>House Robber II:</strong> Circular array</li>
    <li><strong>House Robber III:</strong> Binary tree, can't rob parent and child</li>
    <li><strong>Delete and Earn:</strong> Disguised House Robber</li>
    <li><strong>Maximum Sum with No Adjacent:</strong> Direct application</li>
    <li><strong>Paint House:</strong> Extended with colors</li>
    <li><strong>Maximum Product Subarray:</strong> Similar optimization pattern</li>
  </ol>
</div>

<h2>Decision Tree Visualization</h2>

<div class="visualization">
  <pre>
For nums = [2, 7, 9, 3, 1]:

Position 0: Rob house 0 (2)
  dp[0] = 2

Position 1: Max of:
  - Rob house 1: 7 (skip house 0)
  - Skip house 1: 2 (keep house 0)
  dp[1] = 7

Position 2: Max of:
  - Rob house 2: 9 + dp[0] = 9 + 2 = 11
  - Skip house 2: dp[1] = 7
  dp[2] = 11

Position 3: Max of:
  - Rob house 3: 3 + dp[1] = 3 + 7 = 10
  - Skip house 3: dp[2] = 11
  dp[3] = 11

Position 4: Max of:
  - Rob house 4: 1 + dp[2] = 1 + 11 = 12
  - Skip house 4: dp[3] = 11
  dp[4] = 12

Answer: 12 (rob houses 0, 2, 4)
  </pre>
</div>

<h2>Space Optimization</h2>

<p>Since dp[i] only depends on dp[i-1] and dp[i-2], we can use two variables:</p>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <p><strong>Space Reduction:</strong></p>
  <ul>
    <li>Tabulation: O(n) space (full DP array)</li>
    <li>Optimized: O(1) space (two variables: prev1, prev2)</li>
  </ul>
</div>

<h2>Problem-Solving Template</h2>

<pre class="bg-gray-100 p-4 rounded">
# House Robber Pattern Recognition:
# 1. Sequential elements ✓
# 2. Can't select adjacent ✓
# 3. Maximize/minimize value ✓
# 4. Each element has independent value ✓

# Solution Steps:
# 1. Define: dp[i] = max value using elements 0..i
# 2. Base: dp[0] = nums[0], dp[1] = max(nums[0], nums[1])
# 3. Recurrence: dp[i] = max(nums[i] + dp[i-2], dp[i-1])
#    - Choose to take current (nums[i] + dp[i-2])
#    - OR skip current (dp[i-1])
# 4. Optimize: Use two variables instead of array
</pre>

<h2>Time and Space Complexity</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Approach</th>
    <th class="border p-2">Time</th>
    <th class="border p-2">Space</th>
  </tr>
  <tr>
    <td class="border p-2">Recursion + Memo</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(n)</td>
  </tr>
  <tr>
    <td class="border p-2">Tabulation</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(n)</td>
  </tr>
  <tr>
    <td class="border p-2">Space Optimized</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(1)</td>
  </tr>
</table>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <strong>Interview Strategy:</strong>
  <ol>
    <li>Recognize the "can't use adjacent" constraint</li>
    <li>Identify if it's a max/min optimization</li>
    <li>Define what dp[i] represents</li>
    <li>Write the recurrence with "take" vs "skip" logic</li>
    <li>Implement with tabulation first, then optimize space</li>
  </ol>
</div>

</div>`,
  codeExample: `# ============================================================================
# HOUSE ROBBER PATTERN: Complete Implementation Guide
# ============================================================================

# PROBLEM 1: Classic House Robber (LeetCode 198)
# ============================================================================

def rob_recursive(nums, i=0, memo=None):
    """
    Top-down recursive solution with memoization.

    At each house, decide: rob it or skip it.

    Time: O(n), Space: O(n)
    """
    if memo is None:
        memo = {}

    if i in memo:
        return memo[i]

    if i >= len(nums):
        return 0

    # Choice 1: Rob current house, skip next
    rob_current = nums[i] + rob_recursive(nums, i + 2, memo)

    # Choice 2: Skip current house, move to next
    skip_current = rob_recursive(nums, i + 1, memo)

    memo[i] = max(rob_current, skip_current)
    return memo[i]


def rob_tabulation(nums):
    """
    Bottom-up DP using tabulation.

    State: dp[i] = max money robbing houses 0..i
    Base: dp[0] = nums[0]
          dp[1] = max(nums[0], nums[1])
    Transition: dp[i] = max(nums[i] + dp[i-2], dp[i-1])

    Time: O(n), Space: O(n)
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    n = len(nums)
    dp = [0] * n

    # Base cases
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    # Fill table
    for i in range(2, n):
        # Max of: rob current + best from i-2, or skip current
        dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])

    return dp[n - 1]


def rob_optimized(nums):
    """
    Space-optimized solution using two variables.

    Only need to track previous two values.

    Time: O(n), Space: O(1)
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    # prev2 = dp[i-2], prev1 = dp[i-1]
    prev2 = nums[0]
    prev1 = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        current = max(nums[i] + prev2, prev1)
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# VARIATION 1: House Robber II (Circular Array) - LeetCode 213
# ============================================================================

def rob_circular(nums):
    """
    Houses arranged in circle - first and last are adjacent.
    Can't rob both first and last house.

    Solution: Run House Robber I twice:
      1. On nums[0:n-1] (exclude last house)
      2. On nums[1:n] (exclude first house)
    Take maximum of both.

    Time: O(n), Space: O(1)
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    if len(nums) == 2:
        return max(nums[0], nums[1])

    def rob_linear(houses):
        """Helper: rob linear array."""
        if not houses:
            return 0
        if len(houses) == 1:
            return houses[0]

        prev2 = houses[0]
        prev1 = max(houses[0], houses[1])

        for i in range(2, len(houses)):
            current = max(houses[i] + prev2, prev1)
            prev2 = prev1
            prev1 = current

        return prev1

    # Case 1: Exclude last house (can include first)
    case1 = rob_linear(nums[:-1])

    # Case 2: Exclude first house (can include last)
    case2 = rob_linear(nums[1:])

    return max(case1, case2)


# ============================================================================
# VARIATION 2: Delete and Earn - LeetCode 740
# ============================================================================

def delete_and_earn(nums):
    """
    Pick a number, earn that many points (all instances of it).
    But all instances of num-1 and num+1 are deleted.

    Example: [2, 2, 3, 3, 3, 4]
    If you pick 3, you earn 3*3=9 points, but lose all 2s and 4s.

    This is House Robber in disguise!

    Transform:
      - Count frequency of each number
      - Create array where index i has value: i * frequency[i]
      - Now can't take adjacent indices → House Robber!

    Time: O(n + m) where m = max(nums), Space: O(m)
    """
    if not nums:
        return 0

    max_num = max(nums)

    # points[i] = total points from taking all instances of number i
    points = [0] * (max_num + 1)
    for num in nums:
        points[num] += num

    # Now it's House Robber problem on points array!
    if len(points) == 1:
        return points[0]

    prev2 = points[0]
    prev1 = max(points[0], points[1])

    for i in range(2, len(points)):
        current = max(points[i] + prev2, prev1)
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# VARIATION 3: Maximum Sum - No Adjacent Elements
# ============================================================================

def max_sum_no_adjacent(arr):
    """
    Find maximum sum of elements with no two adjacent.

    This is exactly House Robber!

    Time: O(n), Space: O(1)
    """
    if not arr:
        return 0
    if len(arr) == 1:
        return arr[0]

    prev2 = arr[0]
    prev1 = max(arr[0], arr[1])

    for i in range(2, len(arr)):
        current = max(arr[i] + prev2, prev1)
        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# VARIATION 4: Paint House - LeetCode 256
# ============================================================================

def min_cost_paint_house(costs):
    """
    Paint n houses with 3 colors (R, G, B).
    costs[i][j] = cost to paint house i with color j.
    No two adjacent houses can have same color.

    State: dp[i][c] = min cost to paint houses 0..i with house i being color c
    Transition: dp[i][c] = costs[i][c] + min(dp[i-1][other colors])

    Time: O(n), Space: O(1) with optimization
    """
    if not costs:
        return 0

    n = len(costs)

    # Space-optimized: only track previous row
    prev_red, prev_green, prev_blue = costs[0]

    for i in range(1, n):
        # Paint current house red: add min cost of prev being green or blue
        curr_red = costs[i][0] + min(prev_green, prev_blue)

        # Paint current house green: add min cost of prev being red or blue
        curr_green = costs[i][1] + min(prev_red, prev_blue)

        # Paint current house blue: add min cost of prev being red or green
        curr_blue = costs[i][2] + min(prev_red, prev_green)

        prev_red, prev_green, prev_blue = curr_red, curr_green, curr_blue

    return min(prev_red, prev_green, prev_blue)


# ============================================================================
# VARIATION 5: Paint House with K Colors - LeetCode 265
# ============================================================================

def min_cost_paint_house_k_colors(costs):
    """
    Paint n houses with k colors.
    No two adjacent houses can have same color.

    Time: O(n * k^2) naive, O(n * k) optimized
    """
    if not costs:
        return 0

    n = len(costs)
    k = len(costs[0])

    # prev[c] = min cost to paint up to previous house with that house being color c
    prev = costs[0][:]

    for i in range(1, n):
        curr = [0] * k
        for c in range(k):
            # Paint house i with color c
            # Must take min of all previous colors except c
            min_prev = min(prev[j] for j in range(k) if j != c)
            curr[c] = costs[i][c] + min_prev
        prev = curr

    return min(prev)


# ============================================================================
# VISUALIZATION HELPERS
# ============================================================================

def rob_with_visualization(nums):
    """
    Show step-by-step decision making for House Robber.
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    n = len(nums)
    dp = [0] * n
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    print(f"House Robber: nums = {nums}\\n")
    print("=" * 70)
    print(f"dp[0] = {dp[0]} (only house 0, take {nums[0]})")
    print(f"dp[1] = max({nums[0]}, {nums[1]}) = {dp[1]} (better of first two)\\n")

    for i in range(2, n):
        rob_current = nums[i] + dp[i - 2]
        skip_current = dp[i - 1]
        dp[i] = max(rob_current, skip_current)

        print(f"House {i} (value = {nums[i]}):")
        print(f"  Option 1 (rob):  {nums[i]} + dp[{i-2}] = {nums[i]} + {dp[i-2]} = {rob_current}")
        print(f"  Option 2 (skip): dp[{i-1}] = {skip_current}")
        print(f"  Decision: dp[{i}] = max({rob_current}, {skip_current}) = {dp[i]}")
        if dp[i] == rob_current:
            print(f"  → Rob house {i}")
        else:
            print(f"  → Skip house {i}")
        print()

    print("=" * 70)
    print(f"Maximum money: {dp[n-1]}\\n")

    return dp[n - 1]


def find_robbed_houses(nums):
    """
    Not only find max money, but also which houses were robbed.
    Use backtracking through DP table.
    """
    if not nums:
        return 0, []
    if len(nums) == 1:
        return nums[0], [0]

    n = len(nums)
    dp = [0] * n
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, n):
        dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])

    # Backtrack to find which houses were robbed
    robbed = []
    i = n - 1
    while i >= 0:
        if i == 0:
            robbed.append(0)
            break
        elif i == 1:
            if dp[1] == nums[1]:
                robbed.append(1)
            else:
                robbed.append(0)
            break
        else:
            # Check if house i was robbed
            if nums[i] + dp[i - 2] > dp[i - 1]:
                robbed.append(i)
                i -= 2
            else:
                i -= 1

    robbed.reverse()
    return dp[n - 1], robbed


# ============================================================================
# TESTING
# ============================================================================

if __name__ == "__main__":
    # Test classic house robber
    nums1 = [2, 7, 9, 3, 1]
    print("CLASSIC HOUSE ROBBER:")
    result = rob_with_visualization(nums1)
    max_money, houses = find_robbed_houses(nums1)
    print(f"Houses robbed: {houses}")
    print(f"Money from those houses: {[nums1[i] for i in houses]}")
    print(f"Total: {sum(nums1[i] for i in houses)}\\n\\n")

    # Test circular
    nums2 = [2, 3, 2]
    print("CIRCULAR HOUSE ROBBER:")
    print(f"nums = {nums2}")
    print(f"Result: {rob_circular(nums2)}\\n\\n")

    # Test delete and earn
    nums3 = [3, 4, 2]
    print("DELETE AND EARN:")
    print(f"nums = {nums3}")
    print(f"Result: {delete_and_earn(nums3)}")`,
  exercises: [
    {
      prompt: 'Implement the classic House Robber problem using space-optimized DP (O(1) space). Return the maximum amount of money that can be robbed.',
      initialCode: `def rob(nums):
    """
    Rob houses to maximize money without robbing adjacent houses.

    State: dp[i] = max money from houses 0..i
    Transition: dp[i] = max(nums[i] + dp[i-2], dp[i-1])

    Args:
        nums: List of money in each house

    Returns:
        Maximum money that can be robbed

    Examples:
        rob([1,2,3,1]) -> 4  # rob house 0 and 2
        rob([2,7,9,3,1]) -> 12  # rob house 0, 2, and 4
    """
    # Your code here
    pass`,
      solution: `def rob(nums):
    """
    Space-optimized House Robber.
    Time: O(n), Space: O(1)
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    # Track dp[i-2] and dp[i-1]
    prev2 = nums[0]
    prev1 = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        # Choice: rob current + best from i-2, OR skip current
        current = max(nums[i] + prev2, prev1)
        prev2 = prev1
        prev1 = current

    return prev1

# With clear variable names
def rob_clear(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    rob_prev_prev = nums[0]
    rob_prev = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        rob_current = max(nums[i] + rob_prev_prev, rob_prev)
        rob_prev_prev = rob_prev
        rob_prev = rob_current

    return rob_prev`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Solve House Robber II where houses are arranged in a circle (first and last houses are adjacent). You cannot rob both the first and last house.',
      initialCode: `def rob_circular(nums):
    """
    Rob circular array of houses.
    First and last houses are adjacent.

    Approach: Run linear House Robber twice:
      - Once excluding last house (can include first)
      - Once excluding first house (can include last)
    Take maximum.

    Args:
        nums: List of money in each house (circular)

    Returns:
        Maximum money that can be robbed

    Examples:
        rob_circular([2,3,2]) -> 3
        rob_circular([1,2,3,1]) -> 4
    """
    # Your code here
    pass`,
      solution: `def rob_circular(nums):
    """
    House Robber II - Circular array.
    Time: O(n), Space: O(1)
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    if len(nums) == 2:
        return max(nums[0], nums[1])

    def rob_linear(houses):
        """Helper: rob linear array."""
        if not houses:
            return 0
        if len(houses) == 1:
            return houses[0]

        prev2 = houses[0]
        prev1 = max(houses[0], houses[1])

        for i in range(2, len(houses)):
            current = max(houses[i] + prev2, prev1)
            prev2 = prev1
            prev1 = current

        return prev1

    # Case 1: Exclude last house (indices 0 to n-2)
    max_excluding_last = rob_linear(nums[:-1])

    # Case 2: Exclude first house (indices 1 to n-1)
    max_excluding_first = rob_linear(nums[1:])

    return max(max_excluding_last, max_excluding_first)

# Alternative: In-place without slicing
def rob_circular_optimized(nums):
    n = len(nums)
    if n == 1:
        return nums[0]
    if n == 2:
        return max(nums)

    def rob_range(start, end):
        """Rob houses in range [start, end]."""
        prev2 = nums[start]
        prev1 = max(nums[start], nums[start + 1])

        for i in range(start + 2, end + 1):
            current = max(nums[i] + prev2, prev1)
            prev2 = prev1
            prev1 = current

        return prev1

    # Rob [0, n-2] or [1, n-1]
    return max(rob_range(0, n - 2), rob_range(1, n - 1))`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Solve the "Delete and Earn" problem (LeetCode 740): Pick numbers from array to earn points (equal to the number). When you pick a number, all instances of num-1 and num+1 are deleted. This is House Robber in disguise!',
      initialCode: `def delete_and_earn(nums):
    """
    Pick numbers to maximize earned points.
    Picking num earns num points for each instance.
    But deletes all instances of num-1 and num+1.

    Transform to House Robber:
      1. Count frequency of each number
      2. Create points array: points[i] = i * count[i]
      3. Solve House Robber on points array

    Args:
        nums: List of numbers

    Returns:
        Maximum points that can be earned

    Examples:
        delete_and_earn([3,4,2]) -> 6
        # Pick 3 (earn 3), pick 2 (earn 2). Total = 5... wait
        # Actually: pick all 2s, skip 3, pick all 4s

        delete_and_earn([2,2,3,3,3,4]) -> 9
        # Pick all 3s (3*3=9), lose 2s and 4s
    """
    # Your code here
    pass`,
      solution: `def delete_and_earn(nums):
    """
    Delete and Earn using House Robber pattern.

    Key insight: Taking number i means you can't take i-1 or i+1.
    This is like adjacent houses!

    Time: O(n + m) where m = max(nums)
    Space: O(m)
    """
    if not nums:
        return 0

    max_num = max(nums)

    # points[i] = total points from taking all instances of number i
    points = [0] * (max_num + 1)
    for num in nums:
        points[num] += num

    # Now solve House Robber on points array
    if len(points) == 1:
        return points[0]

    prev2 = points[0]
    prev1 = max(points[0], points[1]) if len(points) > 1 else points[0]

    for i in range(2, len(points)):
        current = max(points[i] + prev2, prev1)
        prev2 = prev1
        prev1 = current

    return prev1

# Alternative: Using Counter for clarity
from collections import Counter

def delete_and_earn_clear(nums):
    if not nums:
        return 0

    # Count frequency of each number
    count = Counter(nums)
    max_num = max(nums)

    # Convert to points array
    points = [0] * (max_num + 1)
    for num in range(max_num + 1):
        if num in count:
            points[num] = num * count[num]

    # House Robber
    if max_num == 0:
        return points[0]

    prev2 = points[0]
    prev1 = max(points[0], points[1])

    for i in range(2, max_num + 1):
        current = max(points[i] + prev2, prev1)
        prev2 = prev1
        prev1 = current

    return prev1`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'In the House Robber problem, what does the recurrence relation dp[i] = max(nums[i] + dp[i-2], dp[i-1]) represent?',
      options: [
        'The sum of all houses robbed so far',
        'The choice between robbing house i (plus best from i-2) or skipping it (keeping best from i-1)',
        'The minimum cost to rob house i',
        'The total number of houses robbed',
      ],
      correctAnswer: 1,
      explanations: [
        'We\'re not summing all houses - we\'re choosing which ones to rob to maximize value.',
        'Correct! At each house i, we have two choices: (1) Rob it and get nums[i] + dp[i-2] (can\'t rob i-1), or (2) Skip it and keep dp[i-1]. We take the maximum of these two options.',
        'This is a maximization problem, not minimization. We want maximum money.',
        'We\'re tracking maximum money, not counting houses.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why does the House Robber II (circular) problem require running the algorithm twice?',
      options: [
        'To check both clockwise and counterclockwise directions',
        'Because the first and last houses are adjacent, so we can\'t rob both. We need to try excluding one, then the other.',
        'To double-check the answer for correctness',
        'Because circular arrays require two passes',
      ],
      correctAnswer: 1,
      explanations: [
        'Direction doesn\'t matter in this problem - we\'re looking at all houses simultaneously.',
        'Correct! In a circular array, houses 0 and n-1 are adjacent. We can\'t rob both. So we solve twice: once excluding the last house (allowing first), and once excluding the first house (allowing last). The maximum of these two is our answer.',
        'Running twice isn\'t for verification - it\'s essential to handle the circular constraint.',
        'Circular arrays don\'t inherently need two passes - the specific constraint does.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'How is the "Delete and Earn" problem related to House Robber?',
      options: [
        'They both involve arrays',
        'They\'re completely different problems',
        'Taking number i deletes i-1 and i+1, which is like the "can\'t use adjacent" constraint',
        'Both are about maximization',
      ],
      correctAnswer: 2,
      explanations: [
        'Many problems involve arrays - this doesn\'t explain the specific connection.',
        'They\'re actually the same pattern! Delete and Earn can be transformed into House Robber.',
        'Correct! When you take number i, you lose all i-1 and i+1 values. This creates an adjacency constraint: you can\'t take consecutive numbers. By creating a points array where points[i] = i * count[i], the problem becomes: choose numbers to maximize points without taking adjacent indices - exactly House Robber!',
        'While both are maximization problems, the key connection is the adjacency constraint.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What is the space complexity of the optimized House Robber solution, and why can we achieve it?',
      options: [
        'O(n) because we need to store all house values',
        'O(log n) using divide and conquer',
        'O(1) because we only need to track the previous two DP values',
        'O(n^2) for the DP table',
      ],
      correctAnswer: 2,
      explanations: [
        'We need to read all values, but we don\'t need to store intermediate DP results.',
        'House Robber doesn\'t use divide and conquer - it\'s linear DP.',
        'Correct! The recurrence dp[i] = max(nums[i] + dp[i-2], dp[i-1]) only depends on the previous two values. We can use two variables (prev2 and prev1) that we update as we iterate through the array. This reduces space from O(n) to O(1) while maintaining O(n) time.',
        'We only need a 1D DP array, and even that can be optimized away.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const minCostClimbingData: LessonContent = {
  title: 'Min Cost Path Problems',
  content: `<div>
<h1>Min Cost Path Problems in Dynamic Programming</h1>

<p>Min Cost Path is a fundamental DP pattern where we find the minimum (or maximum) cost to reach a destination. This pattern extends the Climbing Stairs concept by adding weights/costs to decisions, transforming counting problems into optimization problems.</p>

<h2>The Core Pattern</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Key Characteristics:</strong></p>
  <ul>
    <li>Sequential stages with costs at each stage</li>
    <li>Multiple ways to reach each stage</li>
    <li>Goal: Find minimum (or maximum) total cost</li>
    <li>Optimal substructure: minimum cost to reach i depends on minimum costs to reach previous stages</li>
  </ul>
</div>

<h2>Classic Problem: Min Cost Climbing Stairs (LeetCode 746)</h2>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <p><strong>Problem:</strong> You are given an array cost where cost[i] is the cost of stepping on the i-th stair. You can start from step 0 or step 1. Find the minimum cost to reach the top (beyond the last step).</p>
</div>

<p><strong>Example:</strong></p>
<pre>
Input: cost = [10, 15, 20]
Output: 15
Explanation: Start at index 1 (cost 15), step directly to top. Total = 15.

Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Start at 0, go to 2, 3, 4, 6, 7, 9, then top. Total = 1+1+1+1+1+1 = 6.
</pre>

<h2>DP Framework</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Step</th>
    <th class="border p-2">Min Cost Climbing Stairs</th>
  </tr>
  <tr>
    <td class="border p-2"><strong>1. Define State</strong></td>
    <td class="border p-2">dp[i] = minimum cost to reach step i</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>2. Base Cases</strong></td>
    <td class="border p-2">dp[0] = cost[0] (pay to start at 0)<br>dp[1] = cost[1] (pay to start at 1)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>3. Transition</strong></td>
    <td class="border p-2">dp[i] = cost[i] + min(dp[i-1], dp[i-2])<br>(pay for current step + minimum of previous two)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>4. Order</strong></td>
    <td class="border p-2">i from 2 to n-1</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>5. Answer</strong></td>
    <td class="border p-2">min(dp[n-1], dp[n-2]) (can reach top from either)</td>
  </tr>
</table>

<h2>Key Difference from Counting Problems</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Aspect</th>
    <th class="border p-2">Climbing Stairs (Count)</th>
    <th class="border p-2">Min Cost Climbing (Optimize)</th>
  </tr>
  <tr>
    <td class="border p-2"><strong>Operation</strong></td>
    <td class="border p-2">Sum (add ways)</td>
    <td class="border p-2">Min (choose best)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>Recurrence</strong></td>
    <td class="border p-2">dp[i] = dp[i-1] + dp[i-2]</td>
    <td class="border p-2">dp[i] = cost[i] + min(dp[i-1], dp[i-2])</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>Values</strong></td>
    <td class="border p-2">No element values</td>
    <td class="border p-2">Each step has cost[i]</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>Goal</strong></td>
    <td class="border p-2">Count possibilities</td>
    <td class="border p-2">Find optimal path</td>
  </tr>
</table>

<h2>Pattern Variations</h2>

<h3>Variation 1: Min/Max Path Sum in Grid</h3>
<div class="pattern-box">
  <p><strong>Problem:</strong> Find minimum path sum from top-left to bottom-right in a grid.</p>
  <p><strong>State:</strong> dp[i][j] = minimum sum to reach cell (i, j)</p>
  <p><strong>Transition:</strong> dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])</p>
</div>

<h3>Variation 2: Jump Game II (Min Jumps)</h3>
<div class="pattern-box">
  <p><strong>Problem:</strong> Find minimum jumps to reach end of array.</p>
  <p><strong>State:</strong> dp[i] = minimum jumps to reach index i</p>
  <p><strong>Transition:</strong> dp[i] = min(dp[j] + 1) for all j where j + arr[j] >= i</p>
</div>

<h3>Variation 3: Coin Change (Min Coins)</h3>
<div class="pattern-box">
  <p><strong>Problem:</strong> Find minimum coins needed to make amount.</p>
  <p><strong>State:</strong> dp[i] = minimum coins to make amount i</p>
  <p><strong>Transition:</strong> dp[i] = min(dp[i - coin] + 1) for all coins</p>
</div>

<h3>Variation 4: Perfect Squares (Min Numbers)</h3>
<div class="pattern-box">
  <p><strong>Problem:</strong> Find minimum perfect squares that sum to n.</p>
  <p><strong>State:</strong> dp[i] = minimum squares to sum to i</p>
  <p><strong>Transition:</strong> dp[i] = min(dp[i - j²] + 1) for all j where j² <= i</p>
</div>

<h2>Recognition Checklist</h2>

<p>A problem follows the Min Cost Path pattern if:</p>

<ul class="list-disc ml-6">
  <li>✓ Sequential stages or positions</li>
  <li>✓ Each stage has an associated cost/weight</li>
  <li>✓ Multiple paths to reach each stage</li>
  <li>✓ Goal is to minimize/maximize total cost</li>
  <li>✓ Optimal substructure: optimal solution uses optimal sub-solutions</li>
  <li>✓ Decisions are about choosing the best among limited options</li>
</ul>

<h2>Common Interview Problems</h2>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <ol>
    <li><strong>Min Cost Climbing Stairs</strong> - LeetCode 746</li>
    <li><strong>Minimum Path Sum</strong> - LeetCode 64 (grid)</li>
    <li><strong>Unique Paths</strong> - LeetCode 62 (counting, similar structure)</li>
    <li><strong>Jump Game II</strong> - LeetCode 45 (minimum jumps)</li>
    <li><strong>Coin Change</strong> - LeetCode 322 (minimum coins)</li>
    <li><strong>Perfect Squares</strong> - LeetCode 279 (minimum squares)</li>
    <li><strong>Minimum Falling Path Sum</strong> - LeetCode 931 (matrix)</li>
  </ol>
</div>

<h2>Problem-Solving Template</h2>

<pre class="bg-gray-100 p-4 rounded">
# Step 1: Identify Min Cost Path pattern
# - Sequential stages? ✓
# - Each stage has cost? ✓
# - Multiple ways to reach each stage? ✓
# - Optimize total cost? ✓

# Step 2: Define state
# dp[i] = minimum cost to reach position i

# Step 3: Identify base cases
# What are the simplest positions we can reach directly?

# Step 4: Find recurrence relation
# dp[i] = cost[i] + min(dp[prev_positions])
# OR
# dp[i] = min(cost_to_reach_i_from_j + dp[j] for all valid j)

# Step 5: Determine computation order
# Process positions in order such that when computing dp[i],
# all previous positions it depends on are already computed

# Step 6: Return answer
# Usually dp[target] or min of final positions
</pre>

<h2>Space Optimization</h2>

<p>Many min cost path problems can be space-optimized:</p>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <p><strong>1D Problems:</strong> If dp[i] only depends on dp[i-1] and dp[i-2], use two variables.</p>
  <p><strong>2D Grid Problems:</strong> If dp[i][j] only depends on current and previous row, use two rows instead of full matrix.</p>
  <p><strong>Rolling Array:</strong> For problems with fixed dependency window, use circular buffer.</p>
</div>

<h2>Debugging Tips</h2>

<ol>
  <li><strong>Verify base cases:</strong> Can you actually reach the initial positions?</li>
  <li><strong>Check infinity handling:</strong> Initialize unreachable positions with infinity</li>
  <li><strong>Validate transitions:</strong> Are all movement options considered?</li>
  <li><strong>Test edge cases:</strong> Single element, all same cost, ascending/descending costs</li>
  <li><strong>Trace small examples:</strong> Manually compute dp table for n=3 or 4</li>
</ol>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <strong>Pro Tip:</strong> The key insight in min cost path problems is recognizing that to optimally reach position i, you must have optimally reached one of its predecessor positions. This is optimal substructure!
</div>

</div>`,
  codeExample: `# ============================================================================
# MIN COST PATH PROBLEMS: Complete Implementation Guide
# ============================================================================

# PROBLEM 1: Min Cost Climbing Stairs - LeetCode 746
# ============================================================================

def min_cost_climbing_stairs(cost):
    """
    Find minimum cost to reach top of stairs.

    State: dp[i] = minimum cost to reach step i
    Base: dp[0] = cost[0], dp[1] = cost[1]
    Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    Answer: min(dp[n-1], dp[n-2]) - can reach top from either

    Time: O(n), Space: O(1) with optimization
    """
    n = len(cost)

    if n <= 1:
        return 0

    # Space-optimized: only track last two costs
    prev2 = cost[0]
    prev1 = cost[1]

    for i in range(2, n):
        current = cost[i] + min(prev1, prev2)
        prev2 = prev1
        prev1 = current

    # Can reach top from either last or second-to-last step
    return min(prev1, prev2)


def min_cost_climbing_with_table(cost):
    """
    Same problem with full DP table for visualization.
    """
    n = len(cost)

    if n <= 1:
        return 0

    dp = [0] * n
    dp[0] = cost[0]
    dp[1] = cost[1]

    print(f"Min Cost Climbing Stairs: cost = {cost}\\n")
    print("=" * 60)
    print(f"dp[0] = {dp[0]} (cost[0])")
    print(f"dp[1] = {dp[1]} (cost[1])\\n")

    for i in range(2, n):
        dp[i] = cost[i] + min(dp[i-1], dp[i-2])
        print(f"dp[{i}] = cost[{i}] + min(dp[{i-1}], dp[{i-2}])")
        print(f"     = {cost[i]} + min({dp[i-1]}, {dp[i-2]})")
        print(f"     = {cost[i]} + {min(dp[i-1], dp[i-2])} = {dp[i]}")

    answer = min(dp[n-1], dp[n-2])
    print(f"\\nAnswer: min(dp[{n-1}], dp[{n-2}]) = {answer}")
    print("=" * 60)

    return answer


# ============================================================================
# PROBLEM 2: Minimum Path Sum in Grid - LeetCode 64
# ============================================================================

def min_path_sum(grid):
    """
    Find minimum path sum from top-left to bottom-right.
    Can only move right or down.

    State: dp[i][j] = minimum sum to reach cell (i, j)
    Base: dp[0][0] = grid[0][0]
          First row: dp[0][j] = dp[0][j-1] + grid[0][j]
          First col: dp[i][0] = dp[i-1][0] + grid[i][0]
    Transition: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

    Time: O(m*n), Space: O(n) with optimization
    """
    if not grid:
        return 0

    m, n = len(grid), len(grid[0])

    # Space-optimized: only keep current and previous row
    prev = [0] * n
    prev[0] = grid[0][0]

    # Initialize first row
    for j in range(1, n):
        prev[j] = prev[j-1] + grid[0][j]

    # Process remaining rows
    for i in range(1, m):
        curr = [0] * n
        curr[0] = prev[0] + grid[i][0]

        for j in range(1, n):
            curr[j] = grid[i][j] + min(prev[j], curr[j-1])

        prev = curr

    return prev[n-1]


def min_path_sum_with_table(grid):
    """
    Same problem with full 2D DP table for understanding.
    """
    if not grid:
        return 0

    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]

    # Base case
    dp[0][0] = grid[0][0]

    # First row
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]

    # First column
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]

    # Fill rest of table
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

    return dp[m-1][n-1]


# ============================================================================
# PROBLEM 3: Jump Game II - Minimum Jumps - LeetCode 45
# ============================================================================

def jump_min_jumps(nums):
    """
    Find minimum number of jumps to reach last index.
    nums[i] = maximum jump length from position i.

    State: dp[i] = minimum jumps to reach index i
    Base: dp[0] = 0
    Transition: For each j < i where j + nums[j] >= i:
                dp[i] = min(dp[i], dp[j] + 1)

    Time: O(n^2), Space: O(n)

    Note: There's an O(n) greedy solution, but DP solution shows the pattern.
    """
    n = len(nums)
    if n <= 1:
        return 0

    dp = [float('inf')] * n
    dp[0] = 0

    for i in range(1, n):
        # Check all positions that can jump to i
        for j in range(i):
            if j + nums[j] >= i:
                dp[i] = min(dp[i], dp[j] + 1)

    return dp[n-1] if dp[n-1] != float('inf') else -1


def jump_greedy_optimal(nums):
    """
    Greedy O(n) solution for comparison.
    Not DP, but optimal for this problem.
    """
    n = len(nums)
    if n <= 1:
        return 0

    jumps = 0
    current_end = 0
    farthest = 0

    for i in range(n - 1):
        farthest = max(farthest, i + nums[i])

        if i == current_end:
            jumps += 1
            current_end = farthest

            if current_end >= n - 1:
                break

    return jumps


# ============================================================================
# PROBLEM 4: Coin Change - Minimum Coins - LeetCode 322
# ============================================================================

def coin_change_min(coins, amount):
    """
    Find minimum number of coins to make amount.

    State: dp[i] = minimum coins to make amount i
    Base: dp[0] = 0 (0 coins for amount 0)
    Transition: dp[i] = min(dp[i - coin] + 1) for all coins <= i

    Time: O(amount * len(coins)), Space: O(amount)
    """
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1


def coin_change_with_trace(coins, amount):
    """
    Same problem, but also returns which coins were used.
    """
    dp = [float('inf')] * (amount + 1)
    parent = [-1] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin and dp[i - coin] + 1 < dp[i]:
                dp[i] = dp[i - coin] + 1
                parent[i] = coin

    if dp[amount] == float('inf'):
        return -1, []

    # Backtrack to find coins used
    coins_used = []
    curr = amount
    while curr > 0:
        coin = parent[curr]
        coins_used.append(coin)
        curr -= coin

    return dp[amount], coins_used


# ============================================================================
# PROBLEM 5: Perfect Squares - LeetCode 279
# ============================================================================

def num_squares(n):
    """
    Find minimum number of perfect square numbers that sum to n.

    Example: n = 12 -> 3 (4 + 4 + 4)
             n = 13 -> 2 (4 + 9)

    State: dp[i] = minimum perfect squares to sum to i
    Base: dp[0] = 0
    Transition: dp[i] = min(dp[i - j²] + 1) for all j where j² <= i

    Time: O(n * sqrt(n)), Space: O(n)
    """
    dp = [float('inf')] * (n + 1)
    dp[0] = 0

    for i in range(1, n + 1):
        j = 1
        while j * j <= i:
            dp[i] = min(dp[i], dp[i - j*j] + 1)
            j += 1

    return dp[n]


def num_squares_with_numbers(n):
    """
    Returns both count and the actual squares used.
    """
    dp = [float('inf')] * (n + 1)
    parent = [-1] * (n + 1)
    dp[0] = 0

    for i in range(1, n + 1):
        j = 1
        while j * j <= i:
            square = j * j
            if dp[i - square] + 1 < dp[i]:
                dp[i] = dp[i - square] + 1
                parent[i] = square
            j += 1

    # Backtrack
    squares = []
    curr = n
    while curr > 0:
        square = parent[curr]
        squares.append(square)
        curr -= square

    return dp[n], squares


# ============================================================================
# PROBLEM 6: Minimum Falling Path Sum - LeetCode 931
# ============================================================================

def min_falling_path_sum(matrix):
    """
    Find minimum sum of falling path through matrix.
    Can move to cell directly below or diagonally adjacent.

    State: dp[i][j] = minimum sum to reach cell (i, j)
    Base: dp[0][j] = matrix[0][j]
    Transition: dp[i][j] = matrix[i][j] + min(dp[i-1][j-1], dp[i-1][j], dp[i-1][j+1])

    Time: O(n²), Space: O(n)
    """
    n = len(matrix)
    if n == 0:
        return 0

    # Space optimized: only keep previous row
    prev = matrix[0][:]

    for i in range(1, n):
        curr = [0] * n
        for j in range(n):
            # Can come from j-1, j, or j+1 in previous row
            left = prev[j-1] if j > 0 else float('inf')
            mid = prev[j]
            right = prev[j+1] if j < n-1 else float('inf')

            curr[j] = matrix[i][j] + min(left, mid, right)

        prev = curr

    return min(prev)


# ============================================================================
# VISUALIZATION AND COMPARISON
# ============================================================================

def visualize_min_cost_patterns():
    """
    Compare different min cost problems side by side.
    """
    print("MIN COST PATH PATTERNS COMPARISON")
    print("=" * 70)

    # Problem 1: Min Cost Climbing Stairs
    cost1 = [10, 15, 20]
    result1 = min_cost_climbing_stairs(cost1)
    print(f"\\n1. Min Cost Climbing Stairs: {cost1}")
    print(f"   Result: {result1}")

    # Problem 2: Coin Change
    coins = [1, 2, 5]
    amount = 11
    result2, coins_used = coin_change_with_trace(coins, amount)
    print(f"\\n2. Coin Change: coins={coins}, amount={amount}")
    print(f"   Min coins: {result2}")
    print(f"   Coins used: {coins_used}")

    # Problem 3: Perfect Squares
    n = 12
    result3, squares = num_squares_with_numbers(n)
    print(f"\\n3. Perfect Squares: n={n}")
    print(f"   Min squares: {result3}")
    print(f"   Squares used: {squares}")

    print("\\n" + "=" * 70)


# Example usage
if __name__ == "__main__":
    visualize_min_cost_patterns()

    print("\\n\\nDETAILED EXAMPLE:")
    cost = [10, 15, 20]
    min_cost_climbing_with_table(cost)`,
  exercises: [
    {
      prompt: 'Implement the Min Cost Climbing Stairs problem with space-optimized DP. Return the minimum cost to reach the top.',
      initialCode: `def min_cost_climbing_stairs(cost):
    """
    Find minimum cost to reach top of stairs.

    - cost[i] = cost of stepping on i-th stair
    - Can start at index 0 or 1
    - From step i, can move to i+1 or i+2
    - Top is beyond the last step

    Args:
        cost: List of costs

    Returns:
        Minimum cost to reach the top

    Examples:
        cost = [10, 15, 20] -> 15
        cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] -> 6
    """
    # Your code here
    pass`,
      solution: `def min_cost_climbing_stairs(cost):
    """
    Min Cost Climbing Stairs with space optimization.

    State: dp[i] = min cost to reach step i
    Base: dp[0] = cost[0], dp[1] = cost[1]
    Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2])
    Answer: min(dp[n-1], dp[n-2])

    Time: O(n), Space: O(1)
    """
    n = len(cost)

    if n <= 1:
        return 0

    # Only track last two costs
    prev2 = cost[0]
    prev1 = cost[1]

    for i in range(2, n):
        current = cost[i] + min(prev1, prev2)
        prev2 = prev1
        prev1 = current

    # Can reach top from either last or second-to-last step
    return min(prev1, prev2)

# Alternative: With DP table
def min_cost_with_table(cost):
    n = len(cost)
    if n <= 1:
        return 0

    dp = [0] * n
    dp[0] = cost[0]
    dp[1] = cost[1]

    for i in range(2, n):
        dp[i] = cost[i] + min(dp[i-1], dp[i-2])

    return min(dp[n-1], dp[n-2])`,
      difficulty: Difficulty.Beginner,
    },
    {
      prompt: 'Solve the Coin Change problem: Find the minimum number of coins needed to make a given amount. Return -1 if impossible.',
      initialCode: `def coin_change(coins, amount):
    """
    Find minimum number of coins to make amount.

    State: dp[i] = minimum coins to make amount i
    Base: dp[0] = 0
    Transition: dp[i] = min(dp[i-coin] + 1) for all coins

    Args:
        coins: List of coin denominations
        amount: Target amount

    Returns:
        Minimum number of coins, or -1 if impossible

    Examples:
        coins=[1,2,5], amount=11 -> 3  # 5+5+1
        coins=[2], amount=3 -> -1  # impossible
        coins=[1], amount=0 -> 0
    """
    # Your code here
    pass`,
      solution: `def coin_change(coins, amount):
    """
    Coin Change using bottom-up DP.

    Time: O(amount * len(coins))
    Space: O(amount)
    """
    # Initialize with infinity (impossible)
    dp = [float('inf')] * (amount + 1)

    # Base case: 0 coins needed for amount 0
    dp[0] = 0

    # Build up from 1 to amount
    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                # Update if using this coin gives fewer coins
                dp[i] = min(dp[i], dp[i - coin] + 1)

    # Return result or -1 if impossible
    return dp[amount] if dp[amount] != float('inf') else -1

# With path reconstruction
def coin_change_with_path(coins, amount):
    """Also returns which coins were used."""
    dp = [float('inf')] * (amount + 1)
    parent = [-1] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin and dp[i - coin] + 1 < dp[i]:
                dp[i] = dp[i - coin] + 1
                parent[i] = coin

    if dp[amount] == float('inf'):
        return -1, []

    # Backtrack to find coins
    coins_used = []
    curr = amount
    while curr > 0:
        coin = parent[curr]
        coins_used.append(coin)
        curr -= coin

    return dp[amount], coins_used`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Solve the Perfect Squares problem: Find the minimum number of perfect square numbers (1, 4, 9, 16, ...) that sum to n.',
      initialCode: `def num_squares(n):
    """
    Find minimum perfect squares that sum to n.

    State: dp[i] = minimum squares to sum to i
    Base: dp[0] = 0
    Transition: dp[i] = min(dp[i - j²] + 1) for all j where j² <= i

    Args:
        n: Target number

    Returns:
        Minimum number of perfect squares

    Examples:
        n = 12 -> 3  # 4 + 4 + 4
        n = 13 -> 2  # 4 + 9
        n = 1 -> 1   # 1
    """
    # Your code here
    pass`,
      solution: `def num_squares(n):
    """
    Perfect Squares using DP.

    Time: O(n * sqrt(n))
    Space: O(n)
    """
    # Initialize with infinity
    dp = [float('inf')] * (n + 1)
    dp[0] = 0

    # For each number from 1 to n
    for i in range(1, n + 1):
        # Try all perfect squares up to i
        j = 1
        while j * j <= i:
            square = j * j
            dp[i] = min(dp[i], dp[i - square] + 1)
            j += 1

    return dp[n]

# With path reconstruction
def num_squares_with_path(n):
    """Also returns which squares were used."""
    dp = [float('inf')] * (n + 1)
    parent = [-1] * (n + 1)
    dp[0] = 0

    for i in range(1, n + 1):
        j = 1
        while j * j <= i:
            square = j * j
            if dp[i - square] + 1 < dp[i]:
                dp[i] = dp[i - square] + 1
                parent[i] = square
            j += 1

    # Backtrack
    squares = []
    curr = n
    while curr > 0:
        square = parent[curr]
        squares.append(square)
        curr -= square

    return dp[n], squares`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the key difference between counting problems (like Climbing Stairs) and min cost problems (like Min Cost Climbing)?',
      options: [
        'Min cost problems are always harder',
        'Counting uses addition, min cost uses min/max operations on values',
        'They use different programming languages',
        'Min cost problems cannot be solved with DP',
      ],
      correctAnswer: 1,
      explanations: [
        'Difficulty varies, but that\'s not the fundamental difference in the pattern.',
        'Correct! Counting problems sum up the number of ways (dp[i] = dp[i-1] + dp[i-2]), while min cost problems optimize a value by choosing the best option (dp[i] = cost[i] + min(dp[i-1], dp[i-2])). Both use DP, but different operations.',
        'The programming language doesn\'t define the problem pattern.',
        'Min cost problems are classic DP problems and work well with dynamic programming.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In the Coin Change problem, why do we initialize dp array with infinity instead of 0?',
      options: [
        'Because infinity is a larger number',
        'To represent impossible states - if a value remains infinity, that amount cannot be made',
        'It makes the code faster',
        'It\'s a programming convention',
      ],
      correctAnswer: 1,
      explanations: [
        'Size isn\'t the reason - it\'s about representing impossible states.',
        'Correct! We initialize with infinity to mark states as "not yet achievable". When we compute dp[i] = min(dp[i], dp[i-coin] + 1), if no coin can reduce dp[i] from infinity, it means that amount cannot be made. This lets us distinguish between "can make with 0 coins" (dp[0] = 0) and "cannot make at all" (stays infinity).',
        'Initialization value doesn\'t affect runtime performance.',
        'While it is conventional for this problem type, there\'s a specific logical reason.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why is the answer to Min Cost Climbing Stairs min(dp[n-1], dp[n-2]) instead of dp[n]?',
      options: [
        'It\'s a bug in the problem definition',
        'Because we want the minimum of all values',
        'The "top" is beyond the last step, reachable from either the last or second-to-last step',
        'We need to check both to be safe',
      ],
      correctAnswer: 2,
      explanations: [
        'This isn\'t a bug - it\'s an intentional part of the problem definition.',
        'We specifically want these two values, not the minimum of all values.',
        'Correct! The problem defines "top" as beyond array bounds. Since we can take 1 or 2 steps, we can reach the top from either step n-1 (one step away) or step n-2 (two steps away). We choose whichever has lower cost. The top itself has no cost, so we don\'t need dp[n].',
        'It\'s not about safety - there\'s a specific reason based on how the problem defines reachability.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'In the Perfect Squares problem, why do we iterate j from 1 while j*j <= i, rather than checking all numbers up to i?',
      options: [
        'To make the code more complex',
        'Because we only care about perfect squares, and we only need to check squares up to i',
        'It\'s a random optimization',
        'To avoid infinite loops',
      ],
      correctAnswer: 1,
      explanations: [
        'The goal is efficiency, not complexity.',
        'Correct! We only need perfect squares (1, 4, 9, 16, ...), which are j² for j = 1, 2, 3, .... If j² > i, that square is too large to be useful for making i, so we stop. For example, when i = 12, we check 1² = 1, 2² = 4, 3² = 9, and stop at 4² = 16 since 16 > 12. This optimization reduces time from O(n²) to O(n√n).',
        'This is a meaningful optimization with mathematical justification.',
        'The condition j*j <= i naturally prevents infinite loops, but that\'s not the main reason for this specific check.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

// ============================================================================

const decodeWaysData: LessonContent = {
  title: 'Decode Ways Pattern',
  content: `<div>
<h1>The Decode Ways Pattern in Dynamic Programming</h1>

<p>The Decode Ways problem is a fascinating variation of the Fibonacci pattern where we count possibilities with conditional transitions. Unlike simple Fibonacci, the transitions depend on the values of elements, introducing validation logic into the recurrence relation.</p>

<h2>The Classic Problem (LeetCode 91)</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem:</strong> A message containing letters from A-Z can be encoded using 'A' = 1, 'B' = 2, ..., 'Z' = 26. Given a string of digits, count the number of ways it can be decoded.</p>
</div>

<p><strong>Examples:</strong></p>
<pre>
Input: "12"
Output: 2
Explanation: "12" can be decoded as "AB" (1 2) or "L" (12)

Input: "226"
Output: 3
Explanation: "226" can be decoded as:
  - "BZ" (2 26)
  - "VF" (22 6)
  - "BBF" (2 2 6)

Input: "06"
Output: 0
Explanation: "06" cannot be decoded (no letter has code "06")
</pre>

<h2>Why This is "Fibonacci with Conditions"</h2>

<p>The structure is similar to Fibonacci, but with validation:</p>

<div class="visualization">
  <pre>
Fibonacci:  ways(n) = ways(n-1) + ways(n-2)
            ALWAYS add both previous states

Decode Ways: ways(i) = ways(i-1) [if s[i-1] is valid]
                     + ways(i-2) [if s[i-2:i] is valid]
            CONDITIONALLY add based on digit validity

Conditions for validity:
  1. Single digit: s[i-1] must be '1'-'9' (not '0')
  2. Two digits: s[i-2:i] must be '10'-'26'
  </pre>
</div>

<h2>DP Framework</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Step</th>
    <th class="border p-2">Decode Ways</th>
  </tr>
  <tr>
    <td class="border p-2"><strong>1. Define State</strong></td>
    <td class="border p-2">dp[i] = number of ways to decode s[0:i]</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>2. Base Cases</strong></td>
    <td class="border p-2">dp[0] = 1 (empty string)<br>dp[1] = 1 if s[0] != '0', else 0</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>3. Transition</strong></td>
    <td class="border p-2">dp[i] = (dp[i-1] if s[i-1] != '0') + (dp[i-2] if 10 <= int(s[i-2:i]) <= 26)</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>4. Order</strong></td>
    <td class="border p-2">i from 2 to n</td>
  </tr>
  <tr>
    <td class="border p-2"><strong>5. Answer</strong></td>
    <td class="border p-2">dp[n]</td>
  </tr>
</table>

<h2>Key Insights</h2>

<h3>1. Conditional Additions</h3>
<p>Unlike pure Fibonacci where we always add both previous values, here we only add a previous value if it forms a valid decode:</p>

<div class="bg-yellow-50 p-4 rounded-lg my-4">
  <ul>
    <li><strong>Single digit (i-1):</strong> Valid if '1' through '9'</li>
    <li><strong>Two digits (i-2 to i-1):</strong> Valid if '10' through '26'</li>
  </ul>
</div>

<h3>2. Zero Handling</h3>
<p>Zero is the tricky case:</p>
<ul class="list-disc ml-6">
  <li>'0' alone is invalid (no letter maps to 0)</li>
  <li>'10' and '20' are valid (J and T)</li>
  <li>'30', '40', etc. are invalid</li>
  <li>Leading zeros like '06' are invalid</li>
</ul>

<h3>3. Edge Cases</h3>
<div class="pattern-box">
  <p><strong>Empty string:</strong> 1 way (do nothing)</p>
  <p><strong>Starts with '0':</strong> 0 ways (invalid)</p>
  <p><strong>Has '00':</strong> 0 ways (cannot decode)</p>
  <p><strong>All '1's:</strong> Fibonacci growth in possibilities</p>
</div>

<h2>Variations of the Pattern</h2>

<h3>Variation 1: Decode Ways II</h3>
<div class="pattern-box">
  <p><strong>Change:</strong> String can contain '*' which represents '1'-'9'.</p>
  <p><strong>Complexity:</strong> Must count all possibilities '*' could represent.</p>
  <p><strong>Solution:</strong> Similar DP but multiply by number of choices '*' gives.</p>
</div>

<h3>Variation 2: Word Break</h3>
<div class="pattern-box">
  <p><strong>Problem:</strong> Can string be segmented into dictionary words?</p>
  <p><strong>Pattern:</strong> dp[i] = OR of dp[j] for all valid word breaks.</p>
  <p><strong>Similar:</strong> Conditional transitions based on validity (word in dict).</p>
</div>

<h3>Variation 3: Number of Ways to Split String</h3>
<div class="pattern-box">
  <p><strong>Problem:</strong> Split numeric string by rules.</p>
  <p><strong>Pattern:</strong> Count ways with conditional validity checks.</p>
  <p><strong>Key:</strong> Same "Fibonacci with conditions" structure.</p>
</div>

<h2>Common Mistakes</h2>

<div class="bg-red-50 p-4 rounded-lg my-4">
  <ol>
    <li><strong>Forgetting to check s[i-1] != '0':</strong> Results in counting invalid decodings</li>
    <li><strong>Wrong range for two-digit check:</strong> Must be 10-26, not 1-26</li>
    <li><strong>Off-by-one errors:</strong> Mixing 0-indexed and 1-indexed thinking</li>
    <li><strong>Not handling leading zeros:</strong> "01" should return 0</li>
    <li><strong>Incorrect base cases:</strong> dp[0] must be 1, not 0</li>
  </ol>
</div>

<h2>Problem-Solving Template</h2>

<pre class="bg-gray-100 p-4 rounded">
# Pattern Recognition:
# - Count number of ways ✓
# - Current state depends on 1-2 previous states ✓
# - Transitions have validity conditions ✓
# - Similar to Fibonacci but with rules ✓

# Implementation Steps:
1. Handle edge cases (empty, starts with '0')
2. Initialize dp[0] = 1 (empty) and dp[1] based on first char
3. For each position i from 2 to n:
   a. Check if single digit s[i-1] is valid ('1'-'9')
      If yes: add dp[i-1]
   b. Check if two digits s[i-2:i] form valid code ('10'-'26')
      If yes: add dp[i-2]
4. Return dp[n]

# Space Optimization:
# Since dp[i] only depends on dp[i-1] and dp[i-2],
# can use two variables instead of array
</pre>

<h2>Complexity Analysis</h2>

<table class="min-w-full border-collapse border border-gray-300">
  <tr class="bg-gray-100">
    <th class="border p-2">Approach</th>
    <th class="border p-2">Time</th>
    <th class="border p-2">Space</th>
  </tr>
  <tr>
    <td class="border p-2">Recursion (no memo)</td>
    <td class="border p-2">O(2^n)</td>
    <td class="border p-2">O(n)</td>
  </tr>
  <tr>
    <td class="border p-2">Recursion + Memo</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(n)</td>
  </tr>
  <tr>
    <td class="border p-2">Tabulation</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(n)</td>
  </tr>
  <tr>
    <td class="border p-2">Space Optimized</td>
    <td class="border p-2">O(n)</td>
    <td class="border p-2">O(1)</td>
  </tr>
</table>

<h2>Interview Tips</h2>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <ol>
    <li><strong>Recognize the pattern:</strong> "Count ways with conditional branching"</li>
    <li><strong>Clarify zero handling:</strong> Ask interviewer about edge cases</li>
    <li><strong>Start with examples:</strong> Trace through "226" to understand transitions</li>
    <li><strong>Write conditions clearly:</strong> Separate single-digit and two-digit checks</li>
    <li><strong>Test edge cases:</strong> "0", "10", "01", "100", "1111"</li>
    <li><strong>Optimize incrementally:</strong> Start with DP table, then optimize space</li>
  </ol>
</div>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <strong>Pro Tip:</strong> This pattern appears whenever you're counting paths/ways and the validity of each step depends on looking at the actual values, not just structure. Think "Fibonacci + validation rules".
</div>

</div>`,
  codeExample: `# ============================================================================
# DECODE WAYS PATTERN: Complete Implementation Guide
# ============================================================================

# PROBLEM: Decode Ways - LeetCode 91
# ============================================================================

def num_decodings_recursive(s, i=0, memo=None):
    """
    Top-down recursive solution with memoization.

    Time: O(n), Space: O(n)
    """
    if memo is None:
        memo = {}

    if i in memo:
        return memo[i]

    # Base case: reached end of string
    if i == len(s):
        return 1

    # If starts with '0', invalid
    if s[i] == '0':
        return 0

    # Single digit decode
    result = num_decodings_recursive(s, i + 1, memo)

    # Two digit decode (if valid)
    if i + 1 < len(s):
        two_digit = int(s[i:i+2])
        if 10 <= two_digit <= 26:
            result += num_decodings_recursive(s, i + 2, memo)

    memo[i] = result
    return result


def num_decodings_tabulation(s):
    """
    Bottom-up DP using table.

    State: dp[i] = ways to decode s[0:i]
    Base: dp[0] = 1 (empty string)
          dp[1] = 1 if s[0] != '0', else 0
    Transition: dp[i] = (dp[i-1] if single digit valid)
                      + (dp[i-2] if two digits valid)

    Time: O(n), Space: O(n)
    """
    if not s or s[0] == '0':
        return 0

    n = len(s)
    dp = [0] * (n + 1)

    # Base cases
    dp[0] = 1  # Empty string
    dp[1] = 1  # First character (already checked it's not '0')

    for i in range(2, n + 1):
        # Check single digit: s[i-1]
        if s[i-1] != '0':
            dp[i] += dp[i-1]

        # Check two digits: s[i-2:i]
        two_digit = int(s[i-2:i])
        if 10 <= two_digit <= 26:
            dp[i] += dp[i-2]

    return dp[n]


def num_decodings_optimized(s):
    """
    Space-optimized solution using two variables.

    Only need dp[i-1] and dp[i-2] to compute dp[i].

    Time: O(n), Space: O(1)
    """
    if not s or s[0] == '0':
        return 0

    # dp[i-2] and dp[i-1]
    prev2 = 1  # dp[0]
    prev1 = 1  # dp[1]

    for i in range(2, len(s) + 1):
        current = 0

        # Single digit decode
        if s[i-1] != '0':
            current += prev1

        # Two digit decode
        two_digit = int(s[i-2:i])
        if 10 <= two_digit <= 26:
            current += prev2

        prev2 = prev1
        prev1 = current

    return prev1


# ============================================================================
# WITH DETAILED VISUALIZATION
# ============================================================================

def num_decodings_with_trace(s):
    """
    Same algorithm but shows step-by-step computation.
    """
    if not s or s[0] == '0':
        print(f"Invalid: String is empty or starts with '0'")
        return 0

    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1

    print(f"Decode Ways for s = '{s}'\\n")
    print("=" * 70)
    print(f"dp[0] = 1 (base: empty string)")
    print(f"dp[1] = 1 (base: first char '{s[0]}' is valid)\\n")

    for i in range(2, n + 1):
        single = s[i-1]
        two = s[i-2:i]

        print(f"Position {i} (s[0:{i}] = '{s[0:i]}'):")

        # Single digit
        if single != '0':
            dp[i] += dp[i-1]
            print(f"  Single digit '{single}' is valid → add dp[{i-1}] = {dp[i-1]}")
        else:
            print(f"  Single digit '{single}' is invalid (0)")

        # Two digits
        two_val = int(two)
        if 10 <= two_val <= 26:
            dp[i] += dp[i-2]
            print(f"  Two digits '{two}' ({two_val}) is valid → add dp[{i-2}] = {dp[i-2]}")
        else:
            print(f"  Two digits '{two}' ({two_val}) is invalid")

        print(f"  dp[{i}] = {dp[i]}\\n")

    print("=" * 70)
    print(f"Final answer: dp[{n}] = {dp[n]}")

    return dp[n]


# ============================================================================
# VARIATION: Decode Ways II (with '*') - LeetCode 639
# ============================================================================

def num_decodings_with_star(s):
    """
    Decode string that can contain '*' where '*' = '1'-'9'.

    This is much more complex due to multiple interpretations of '*'.

    Time: O(n), Space: O(1)
    """
    MOD = 10**9 + 7

    if not s:
        return 0

    n = len(s)
    prev2 = 1  # dp[0]
    prev1 = 9 if s[0] == '*' else (1 if s[0] != '0' else 0)

    for i in range(2, n + 1):
        current = 0

        # Single digit
        if s[i-1] == '*':
            current = prev1 * 9
        elif s[i-1] != '0':
            current = prev1

        # Two digits
        if s[i-2] == '*':
            if s[i-1] == '*':
                current += prev2 * 15  # 11-19, 21-26
            elif s[i-1] <= '6':
                current += prev2 * 2   # 1* or 2*
            else:
                current += prev2       # Only 1*
        elif s[i-2] == '1':
            if s[i-1] == '*':
                current += prev2 * 9   # 11-19
            else:
                current += prev2       # 10-19
        elif s[i-2] == '2':
            if s[i-1] == '*':
                current += prev2 * 6   # 20-26
            elif s[i-1] <= '6':
                current += prev2       # 20-26

        prev2 = prev1
        prev1 = current % MOD

    return prev1


# ============================================================================
# RELATED PROBLEM: Word Break - Similar Pattern
# ============================================================================

def word_break(s, word_dict):
    """
    Can string s be segmented into words from word_dict?

    Similar to Decode Ways but instead of checking numeric validity,
    we check if substring exists in dictionary.

    State: dp[i] = True if s[0:i] can be segmented
    Base: dp[0] = True (empty string)
    Transition: dp[i] = True if any dp[j] is True and s[j:i] in dict

    Time: O(n² * m) where m = average word length
    Space: O(n)
    """
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True

    word_set = set(word_dict)

    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[n]


def word_break_with_path(s, word_dict):
    """
    Returns both whether segmentation is possible and the actual words.
    """
    n = len(s)
    dp = [False] * (n + 1)
    parent = [None] * (n + 1)
    dp[0] = True

    word_set = set(word_dict)

    for i in range(1, n + 1):
        for j in range(i):
            word = s[j:i]
            if dp[j] and word in word_set:
                dp[i] = True
                parent[i] = j
                break

    if not dp[n]:
        return False, []

    # Backtrack to find words
    words = []
    i = n
    while i > 0:
        j = parent[i]
        words.append(s[j:i])
        i = j

    words.reverse()
    return True, words


# ============================================================================
# TESTING AND EXAMPLES
# ============================================================================

def test_decode_ways():
    """
    Test various cases of decode ways.
    """
    test_cases = [
        ("12", 2),
        ("226", 3),
        ("06", 0),
        ("0", 0),
        ("10", 1),
        ("27", 1),
        ("2101", 1),
        ("1111", 5),  # Fibonacci!
        ("11111", 8),  # Fibonacci!
    ]

    print("DECODE WAYS TEST CASES")
    print("=" * 70)

    for s, expected in test_cases:
        result = num_decodings_optimized(s)
        status = "✓" if result == expected else "✗"
        print(f"{status} s = '{s}': expected {expected}, got {result}")

    print("=" * 70)


def demo_decode_ways():
    """
    Detailed demo of interesting case.
    """
    print("\\n\\nDETAILED DECODE WAYS EXAMPLE:\\n")
    num_decodings_with_trace("226")

    print("\\n\\n" + "=" * 70)
    print("FIBONACCI PATTERN IN DECODE WAYS:")
    print("=" * 70)
    print("Notice: When all digits are '1', it becomes Fibonacci!")
    print()

    for n in range(1, 7):
        s = "1" * n
        result = num_decodings_optimized(s)
        print(f"s = {'1' * n} → {result} ways (Fibonacci: {fib(n+1)})")


def fib(n):
    """Helper Fibonacci for comparison."""
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b


if __name__ == "__main__":
    test_decode_ways()
    demo_decode_ways()

    print("\\n\\nWORD BREAK EXAMPLE:")
    print("=" * 70)
    s = "leetcode"
    words = ["leet", "code"]
    can_break, segmentation = word_break_with_path(s, words)
    print(f"s = '{s}'")
    print(f"dict = {words}")
    print(f"Can segment: {can_break}")
    if can_break:
        print(f"Segmentation: {' '.join(segmentation)}")`,
  exercises: [
    {
      prompt: 'Implement the Decode Ways problem using space-optimized DP. Count the number of ways to decode a string of digits where "A"=1, "B"=2, ..., "Z"=26.',
      initialCode: `def num_decodings(s):
    """
    Count ways to decode digit string.

    Rules:
    - Single digit: '1'-'9' (not '0')
    - Two digits: '10'-'26'

    State: dp[i] = ways to decode s[0:i]
    Base: dp[0] = 1, dp[1] = 1 if s[0] != '0'
    Transition: Add dp[i-1] if s[i-1] valid
                Add dp[i-2] if s[i-2:i] valid

    Args:
        s: String of digits

    Returns:
        Number of ways to decode

    Examples:
        "12" -> 2  # "AB" or "L"
        "226" -> 3  # "BZ", "VF", or "BBF"
        "06" -> 0  # invalid
    """
    # Your code here
    pass`,
      solution: `def num_decodings(s):
    """
    Decode Ways with space optimization.
    Time: O(n), Space: O(1)
    """
    if not s or s[0] == '0':
        return 0

    # Only need previous two values
    prev2 = 1  # dp[0]
    prev1 = 1  # dp[1]

    for i in range(2, len(s) + 1):
        current = 0

        # Single digit: s[i-1]
        if s[i-1] != '0':
            current += prev1

        # Two digits: s[i-2:i]
        two_digit = int(s[i-2:i])
        if 10 <= two_digit <= 26:
            current += prev2

        prev2 = prev1
        prev1 = current

    return prev1

# With DP table for understanding
def num_decodings_table(s):
    if not s or s[0] == '0':
        return 0

    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1

    for i in range(2, n + 1):
        if s[i-1] != '0':
            dp[i] += dp[i-1]

        two_digit = int(s[i-2:i])
        if 10 <= two_digit <= 26:
            dp[i] += dp[i-2]

    return dp[n]`,
      difficulty: Difficulty.Intermediate,
    },
    {
      prompt: 'Solve the Word Break problem: Determine if string s can be segmented into a sequence of dictionary words. This follows a similar pattern to Decode Ways.',
      initialCode: `def word_break(s, word_dict):
    """
    Check if s can be segmented into dictionary words.

    State: dp[i] = True if s[0:i] can be segmented
    Base: dp[0] = True (empty string)
    Transition: dp[i] = True if any j where:
                - dp[j] is True AND
                - s[j:i] is in word_dict

    Args:
        s: String to segment
        word_dict: List of valid words

    Returns:
        True if s can be segmented

    Examples:
        s="leetcode", dict=["leet","code"] -> True
        s="applepenapple", dict=["apple","pen"] -> True
        s="catsandog", dict=["cats","dog","sand","and","cat"] -> False
    """
    # Your code here
    pass`,
      solution: `def word_break(s, word_dict):
    """
    Word Break using DP.
    Time: O(n² * m) where m = avg word length
    Space: O(n)
    """
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True  # Empty string

    # Convert to set for O(1) lookup
    word_set = set(word_dict)

    for i in range(1, n + 1):
        # Check all possible previous break points
        for j in range(i):
            # If s[0:j] can be segmented AND s[j:i] is a word
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break  # Found one way, that's enough

    return dp[n]

# Optimized: only check reasonable word lengths
def word_break_optimized(s, word_dict):
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True

    word_set = set(word_dict)
    max_len = max(len(word) for word in word_dict) if word_dict else 0

    for i in range(1, n + 1):
        # Only check j values that could form valid words
        for j in range(max(0, i - max_len), i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[n]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'How is Decode Ways different from the standard Fibonacci pattern?',
      options: [
        'It uses different programming languages',
        'Fibonacci always adds both previous values, but Decode Ways conditionally adds them based on validity checks',
        'Decode Ways is easier than Fibonacci',
        'There is no difference',
      ],
      correctAnswer: 1,
      explanations: [
        'The programming language doesn\'t affect the algorithmic pattern.',
        'Correct! Fibonacci unconditionally computes F(n) = F(n-1) + F(n-2), always summing both. Decode Ways has the same structure but adds conditions: ways(i) = [ways(i-1) if s[i-1] is valid] + [ways(i-2) if s[i-2:i] is valid]. The validity checks (is digit \'1\'-\'9\'?, is two-digit 10-26?) make it "Fibonacci with conditions".',
        'Difficulty is subjective and not the key difference in pattern.',
        'There are significant structural differences in how transitions work.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why is "06" invalid but "10" is valid in Decode Ways?',
      options: [
        'Because 6 is an even number',
        'Because no letter maps to "06" (leading zeros are invalid), but "10" maps to \'J\'',
        'Both are invalid',
        'It\'s a random rule',
      ],
      correctAnswer: 1,
      explanations: [
        'Even/odd doesn\'t determine validity - it\'s about the encoding mapping.',
        'Correct! The mapping is A=1, B=2, ..., Z=26. There is no letter for "06" because we don\'t use leading zeros in our encoding system (it\'s just "6" = F, not "06"). However, "10" is valid and represents the letter J. This is why we check if two_digit >= 10, not just if it exists.',
        '"10" is valid - it represents the letter J.',
        'This follows from the problem\'s encoding definition: A=1 through Z=26, no leading zeros.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What would num_decodings("1111") return, and why?',
      options: [
        '1, because there\'s only one way',
        '4, because there are 4 digits',
        '5, following the Fibonacci pattern',
        '8, because of exponential growth',
      ],
      correctAnswer: 2,
      explanations: [
        'There are actually multiple ways to decode this string.',
        'The number of ways isn\'t equal to the number of digits.',
        'Correct! "1111" can be decoded as: (1) 1-1-1-1, (2) 11-1-1, (3) 1-11-1, (4) 1-1-11, (5) 11-11. When all digits are \'1\', both single-digit (1) and two-digit (11) decodings are always valid, so it becomes pure Fibonacci: F(5) = 5. In general, "1" repeated n times gives F(n+1) ways.',
        'While there is growth, the specific value follows the Fibonacci sequence.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'Why do we initialize dp[0] = 1 for an empty string in Decode Ways?',
      options: [
        'It\'s an arbitrary choice',
        'To make the algorithm work for one-character strings',
        'Because dp[0] represents the base case: one way to decode nothing (do nothing), and it enables dp[2] to correctly accumulate ways',
        'Empty strings should be 0',
      ],
      correctAnswer: 2,
      explanations: [
        'It\'s not arbitrary - there\'s a mathematical reason.',
        'While it does help with one-character strings, that\'s not the fundamental reason.',
        'Correct! dp[0] = 1 represents "there is one way to decode an empty string: do nothing". This is crucial for the recurrence. When computing dp[2], if we decode s[0:2] as a two-digit number, we add dp[0] (ways to decode empty prefix). If dp[0] were 0, we\'d lose these valid decodings. It\'s similar to having 0! = 1 in combinatorics.',
        'Mathematically, there is one way to decode an empty string, not zero.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

// Section 2: 1D DP Complete!

// ============================================================================


export const oneDimensionalDPLessons = {
  'fibonacci-pattern': fibonacciPatternData,
  'climbing-stairs': climbingStairsPatternData,
  'house-robber': houseRobberPatternData,
  'min-cost-climbing': minCostClimbingData,
  'decode-ways': decodeWaysData,
};
