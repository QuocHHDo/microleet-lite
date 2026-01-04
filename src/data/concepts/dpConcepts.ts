import { Concept, createConcept, Difficulty } from '@/common/commonConcept';

export const dpConcepts: Concept[] = [
  createConcept(
    1,
    'What is Dynamic Programming? How does it differ from other problem-solving techniques?',
    `
**Definition:** Dynamic Programming (DP) is an algorithmic paradigm that solves complex problems by breaking them down into simpler overlapping subproblems and storing their solutions to avoid redundant computation.

**Basic Principle:** If you can solve a problem by solving smaller instances of the same problem, and those instances overlap, DP can optimize the solution.

**Example (Fibonacci):**
\`\`\`python
# Without DP - O(2^n)
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# With DP - O(n)
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
\`\`\`

**Key Characteristics:**
- **Optimal Substructure:** Optimal solution contains optimal solutions to subproblems
- **Overlapping Subproblems:** Same subproblems are solved multiple times
- **Trade Space for Time:** Uses memory to store solutions for reuse

**When to Use DP:**
- Problem asks for optimization (min/max/count)
- Problem can be broken into similar subproblems
- Naive recursive solution has overlapping subproblems
    `,
    Difficulty.Beginner,
  ),

  createConcept(
    2,
    'What are Overlapping Subproblems and Optimal Substructure?',
    `
**Overlapping Subproblems:** A problem has overlapping subproblems if the same smaller problems are solved multiple times during recursion.

**Example (Fibonacci):**
\`\`\`
fib(5)
├─ fib(4)
│  ├─ fib(3)
│  │  ├─ fib(2)  ← Computed multiple times
│  │  └─ fib(1)
│  └─ fib(2)     ← Same as above
└─ fib(3)        ← Entire subtree recomputed
   ├─ fib(2)
   └─ fib(1)
\`\`\`

**Optimal Substructure:** A problem exhibits optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

**Example (Shortest Path):**
- If shortest path from A to C goes through B
- Then A→B and B→C must also be shortest paths

**Why Both Matter:**
- **Overlapping Subproblems** → Justifies caching (memoization/tabulation)
- **Optimal Substructure** → Guarantees DP gives correct answer

**Counter-Example (Longest Simple Path):**
- Has optimal substructure? **NO** - longest path from A to C through B doesn't guarantee A→B is longest
- Cannot use DP for longest simple path!

**Key Points:**
- Both properties must be present for DP to work
- Overlapping subproblems → efficiency gain
- Optimal substructure → correctness guarantee
    `,
    Difficulty.Intermediate,
  ),

  createConcept(
    3,
    'Explain Memoization vs Tabulation approaches in Dynamic Programming.',
    `
**Memoization (Top-Down):** Store results of function calls to avoid recomputation. Start from original problem and recurse down.

**Tabulation (Bottom-Up):** Build solution iteratively from smallest subproblems up. Fill a table systematically.

## Comparison Table:

| Aspect | Memoization | Tabulation |
|--------|-------------|------------|
| **Approach** | Recursive (Top-Down) | Iterative (Bottom-Up) |
| **Computation** | Lazy - only solves needed subproblems | Eager - solves all subproblems |
| **Overhead** | Function call stack overhead | No recursion overhead |
| **Space** | O(n) recursion stack + O(n) cache | O(n) table only |
| **When to Use** | Complex recursion, not all states needed | Simple iteration order, all states needed |

**Example (Fibonacci):**

**Memoization:**
\`\`\`python
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]
\`\`\`

**Tabulation:**
\`\`\`python
def fib_tab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
\`\`\`

**Key Points:**
- Memoization is easier to write (just add caching to recursion)
- Tabulation is often faster (no function call overhead)
- Tabulation easier to optimize space (rolling array)
- Choose based on problem structure and constraints
    `,
    Difficulty.Intermediate,
  ),

  createConcept(
    4,
    'What is the difference between Top-Down and Bottom-Up DP?',
    `
**Top-Down (Memoization):** Start with the original problem, break it into subproblems recursively, and cache results.

**Bottom-Up (Tabulation):** Start with the smallest subproblems, solve them first, and build up to the original problem.

**Top-Down Example (Climbing Stairs):**
\`\`\`python
def climb_stairs_topdown(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 2:
        return n
    memo[n] = climb_stairs_topdown(n-1, memo) + climb_stairs_topdown(n-2, memo)
    return memo[n]
\`\`\`

**Bottom-Up Example (Climbing Stairs):**
\`\`\`python
def climb_stairs_bottomup(n):
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
\`\`\`

## Pros and Cons:

**Top-Down:**
- ✅ More intuitive (follows natural recursion)
- ✅ Only computes needed subproblems
- ✅ Easier to write from recursive solution
- ❌ Recursion stack overhead
- ❌ Risk of stack overflow for deep recursion

**Bottom-Up:**
- ✅ No recursion overhead
- ✅ Better cache locality (sequential access)
- ✅ Easier to optimize space
- ❌ Must compute all subproblems
- ❌ Must figure out correct iteration order

**Key Points:**
- Both solve the same problem with same time complexity
- Choose based on problem structure and personal preference
- Bottom-up preferred in competitive programming (no stack overflow)
- Top-down better when not all states are reachable
    `,
    Difficulty.Intermediate,
  ),

  createConcept(
    5,
    'When should you use Dynamic Programming vs Greedy vs Divide & Conquer?',
    `
Understanding when to apply each paradigm is crucial for efficient problem-solving.

## Dynamic Programming
**Use When:**
- Optimal substructure + overlapping subproblems
- Problem asks for optimization (min/max/count ways)
- Greedy doesn't work (need to explore all options)

**Examples:** Longest Common Subsequence, 0/1 Knapsack, Edit Distance

**Time:** Often O(n²) or O(n·m)

## Greedy
**Use When:**
- Locally optimal choices lead to globally optimal solution
- Can prove greedy choice property
- No need to reconsider choices

**Examples:** Activity Selection, Huffman Coding, Dijkstra's Algorithm

**Time:** Often O(n log n) due to sorting

## Divide & Conquer
**Use When:**
- Problem splits into independent subproblems (no overlap)
- Subproblems are similar to original
- Can combine solutions efficiently

**Examples:** Merge Sort, Quick Sort, Binary Search

**Time:** Often O(n log n)

## Decision Framework:

\`\`\`
Is there optimal substructure?
├─ NO → Try different approach
└─ YES
    ├─ Are subproblems independent?
    │   └─ YES → Divide & Conquer
    └─ NO (overlapping subproblems)
        ├─ Does greedy work?
        │   └─ YES → Greedy (faster!)
        └─ NO → Dynamic Programming
\`\`\`

## Example Comparisons:

**Coin Change (Minimum Coins):**
- Greedy FAILS: coins=[1,3,4], target=6 → greedy gives 4+1+1=3, optimal is 3+3=2
- DP WORKS: Must try all options

**Activity Selection:**
- DP WORKS but overkill
- Greedy WORKS: Sort by end time, greedily pick non-overlapping
- Greedy is O(n log n) vs DP's O(n²)

**Key Points:**
- Try greedy first if problem has greedy choice property
- Use DP when greedy fails or for counting/optimization problems
- Use D&C when subproblems don't overlap
    `,
    Difficulty.Advanced,
  ),

  createConcept(
    6,
    'How do you analyze time and space complexity in Dynamic Programming?',
    `
**Time Complexity = (Number of States) × (Time per State)**

**Space Complexity = (States Stored) + (Recursion Stack if top-down)**

## Examples:

**1. Fibonacci (1D DP):**
\`\`\`python
def fib(n):
    dp = [0] * (n + 1)  # n+1 states
    dp[1] = 1
    for i in range(2, n + 1):  # n iterations
        dp[i] = dp[i-1] + dp[i-2]  # O(1) per state
    return dp[n]
\`\`\`
- **States:** n + 1 (dp[0] to dp[n])
- **Time per state:** O(1)
- **Time:** O(n)
- **Space:** O(n) for dp array

**2. Longest Common Subsequence (2D DP):**
\`\`\`python
def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]  # (m+1)×(n+1) states
    for i in range(1, m + 1):
        for j in range(1, n + 1):  # Nested loops
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1  # O(1) per state
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]
\`\`\`
- **States:** (m + 1) × (n + 1)
- **Time per state:** O(1)
- **Time:** O(m × n)
- **Space:** O(m × n)

**3. 0/1 Knapsack (2D DP):**
- **States:** n items × W capacity = O(n × W)
- **Time per state:** O(1)
- **Time:** O(n × W)
- **Space:** O(n × W), optimizable to O(W)

## Space Optimization Techniques:

**Rolling Array (Reduce dimensions):**
\`\`\`python
# 2D → 1D for Fibonacci
def fib_optimized(n):
    if n <= 1:
        return n
    prev2, prev1 = 0, 1
    for i in range(2, n + 1):
        curr = prev1 + prev2
        prev2, prev1 = prev1, curr
    return prev1
# Space: O(n) → O(1)
\`\`\`

**Key Points:**
- Count unique states (parameters that change)
- DP time complexity is pseudo-polynomial if state depends on value (like W in knapsack)
- Space can often be optimized by using only previous row/column
- Memoization adds O(depth) recursion stack space
    `,
    Difficulty.Advanced,
  ),

  createConcept(
    7,
    'What are common 1D Dynamic Programming patterns?',
    `
1D DP problems have a single changing parameter (usually index i or value n).

## Common Patterns:

**1. Fibonacci-like (Current depends on previous k states)**

**Template:**
\`\`\`python
dp[i] = f(dp[i-1], dp[i-2], ..., dp[i-k])
\`\`\`

**Examples:**
- Climbing Stairs: dp[i] = dp[i-1] + dp[i-2]
- House Robber: dp[i] = max(dp[i-1], dp[i-2] + nums[i])
- Decode Ways: dp[i] = dp[i-1] + dp[i-2] (conditional)

**2. Prefix/Suffix Pattern (Accumulation)**

**Template:**
\`\`\`python
for i in range(n):
    dp[i] = dp[i-1] + contribution[i]
\`\`\`

**Examples:**
- Maximum Subarray: dp[i] = max(nums[i], dp[i-1] + nums[i])
- Buy/Sell Stock: track min_price, max_profit so far

**3. Decision Pattern (Take or Skip)**

**Template:**
\`\`\`python
for i in range(n):
    dp[i] = max(
        skip[i],    # Don't take element i
        take[i]     # Take element i
    )
\`\`\`

**Examples:**
- Longest Increasing Subsequence: dp[i] = max LIS ending at i
- Jump Game: dp[i] = can reach index i

**4. Target Sum Pattern (Knapsack-like)**

**Template:**
\`\`\`python
dp = [False] * (target + 1)
dp[0] = True
for num in nums:
    for val in range(target, num - 1, -1):
        dp[val] |= dp[val - num]
\`\`\`

**Examples:**
- Subset Sum
- Partition Equal Subset Sum
- Coin Change

## Example (House Robber):

\`\`\`python
def rob(nums):
    """Can't rob adjacent houses. Max money?"""
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        dp[i] = max(
            dp[i-1],           # Skip house i
            dp[i-2] + nums[i]  # Rob house i
        )

    return dp[-1]
\`\`\`

**Key Points:**
- Identify the state (usually index)
- Define recurrence relation
- Handle base cases
- Optimize space if only last k states needed
    `,
    Difficulty.Intermediate,
  ),

  createConcept(
    8,
    'What are common 2D Dynamic Programming patterns?',
    `
2D DP problems have two changing parameters (usually two indices i, j or index + value).

## Common Patterns:

**1. Grid Path Problems**

**Template:**
\`\`\`python
dp[i][j] = ways/cost to reach cell (i, j)
dp[i][j] = f(dp[i-1][j], dp[i][j-1])
\`\`\`

**Examples:**
- Unique Paths: dp[i][j] = dp[i-1][j] + dp[i][j-1]
- Minimum Path Sum: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

**2. Two Sequence DP (Matching/Alignment)**

**Template:**
\`\`\`python
dp[i][j] = optimal value using first i of seq1, first j of seq2
if seq1[i-1] == seq2[j-1]:
    dp[i][j] = dp[i-1][j-1] + 1
else:
    dp[i][j] = max/min(dp[i-1][j], dp[i][j-1])
\`\`\`

**Examples:**
- Longest Common Subsequence
- Edit Distance
- Distinct Subsequences

**3. Interval DP (Subproblems on ranges)**

**Template:**
\`\`\`python
dp[i][j] = optimal value for range [i, j]
for length in range(2, n + 1):
    for i in range(n - length + 1):
        j = i + length - 1
        dp[i][j] = best of splitting [i, j]
\`\`\`

**Examples:**
- Palindromic Substrings
- Burst Balloons
- Matrix Chain Multiplication

**4. Knapsack Pattern (Index + Capacity)**

**Template:**
\`\`\`python
dp[i][w] = max value using first i items with capacity w
dp[i][w] = max(
    dp[i-1][w],                    # Don't take item i
    dp[i-1][w-weight[i]] + value[i] # Take item i
)
\`\`\`

**Examples:**
- 0/1 Knapsack
- Target Sum
- Partition Equal Subset Sum

## Example (Longest Common Subsequence):

\`\`\`python
def lcs(text1, text2):
    """Length of longest common subsequence."""
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                # Characters match - extend LCS
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                # Take best of skipping either character
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]
\`\`\`

## Space Optimization:

Most 2D DP can be optimized to 1D:
\`\`\`python
# Instead of dp[i][j], use dp[j]
# Update in reverse if needed to avoid overwriting
dp = [0] * (n + 1)
for i in range(m):
    for j in range(n, -1, -1):  # Reverse!
        dp[j] = f(dp[j], dp[j-1])
\`\`\`

**Key Points:**
- Identify both dimensions (two strings, grid, index+capacity, etc.)
- Define what dp[i][j] represents clearly
- Fill table in correct order (dependencies must be computed first)
- Consider space optimization (often 2D → 1D)
    `,
    Difficulty.Advanced,
  ),

  createConcept(
    9,
    'How do you define DP state and transitions?',
    `
Defining the state correctly is the hardest and most important part of DP.

## State Definition Process:

**1. Identify What Changes**
- What parameters change in your recursion?
- What information do you need to make decisions?

**2. Define State Meaning**
- Be precise: "dp[i] = ?" must have clear meaning
- Common patterns:
  - dp[i] = optimal value using/ending at index i
  - dp[i][j] = optimal value for range [i, j]
  - dp[state] = ways to reach this state

**3. Write Recurrence Relation**
- How does dp[i] relate to smaller subproblems?
- Consider all possible decisions/transitions

**4. Handle Base Cases**
- What are the smallest subproblems?
- Ensure recurrence doesn't access invalid indices

## Examples:

**Example 1: Coin Change (Minimum Coins)**

**State:** dp[amount] = minimum coins to make this amount

**Transition:**
\`\`\`python
for coin in coins:
    if coin <= amount:
        dp[amount] = min(dp[amount], dp[amount - coin] + 1)
\`\`\`

**Base Case:** dp[0] = 0 (0 coins for amount 0)

**Example 2: Longest Increasing Subsequence**

**State:** dp[i] = length of LIS ending at index i

**Transition:**
\`\`\`python
for j in range(i):
    if nums[j] < nums[i]:
        dp[i] = max(dp[i], dp[j] + 1)
\`\`\`

**Base Case:** dp[i] = 1 (each element is LIS of length 1)

**Example 3: Edit Distance**

**State:** dp[i][j] = min operations to convert s1[0:i] to s2[0:j]

**Transition:**
\`\`\`python
if s1[i-1] == s2[j-1]:
    dp[i][j] = dp[i-1][j-1]  # No operation needed
else:
    dp[i][j] = 1 + min(
        dp[i-1][j],      # Delete from s1
        dp[i][j-1],      # Insert into s1
        dp[i-1][j-1]     # Replace
    )
\`\`\`

**Base Cases:**
- dp[0][j] = j (insert j characters)
- dp[i][0] = i (delete i characters)

## Common State Design Mistakes:

❌ **Ambiguous state:** "dp[i] = best value at i" (ending at i? using i? up to i?)

✅ **Clear state:** "dp[i] = maximum sum of subarray ending at index i"

❌ **Missing information:** Greedy stock trading needs to track holding state

✅ **Complete state:** dp[i][holding] = max profit at day i, holding stock or not

## State Validation Checklist:

- [ ] Can I express answer in terms of state?
- [ ] Can I write recurrence relating states?
- [ ] Are base cases well-defined?
- [ ] Do I have enough information to make decisions?
- [ ] Is the number of states reasonable? (not exponential)

**Key Points:**
- State definition is the hardest part - spend time on it
- Write out the meaning explicitly
- Validate with small examples
- Adjust state if you can't write clean recurrence
    `,
    Difficulty.Advanced,
  ),

  createConcept(
    10,
    'What are common Dynamic Programming optimization techniques?',
    `
Once you have a working DP solution, these techniques can optimize time and space.

## 1. Space Optimization (Dimension Reduction)

**When:** DP[i] only depends on DP[i-1], DP[i-2], ... DP[i-k]

**Technique:** Keep only last k states instead of entire array

**Example (Fibonacci):**
\`\`\`python
# O(n) space
dp = [0] * (n + 1)
for i in range(2, n + 1):
    dp[i] = dp[i-1] + dp[i-2]

# O(1) space - only need last 2 values
prev2, prev1 = 0, 1
for i in range(2, n + 1):
    curr = prev1 + prev2
    prev2, prev1 = prev1, curr
\`\`\`

**Example (Knapsack 2D → 1D):**
\`\`\`python
# 2D: O(n × W)
dp = [[0] * (W + 1) for _ in range(n + 1)]

# 1D: O(W) - iterate backwards!
dp = [0] * (W + 1)
for item in items:
    for w in range(W, weight - 1, -1):  # Reverse!
        dp[w] = max(dp[w], dp[w - weight] + value)
\`\`\`

## 2. Monotonic Queue/Deque Optimization

**When:** Sliding window maximum/minimum problems

**Technique:** Use deque to track candidates in O(1) per element

**Example:** Sliding Window Maximum becomes O(n) instead of O(n log k)

## 3. Convex Hull Trick (CHT)

**When:** Recurrence like dp[i] = min/max(a[j] × b[i] + dp[j]) for all j < i

**Technique:** Maintain convex hull of lines, query in O(log n) or O(1)

**Use Case:** Optimize O(n²) DP to O(n log n) or O(n)

## 4. Divide and Conquer Optimization

**When:**
- dp[i][j] = min/max(dp[i-1][k] + cost[k][j]) for k < j
- cost[][] satisfies quadrangle inequality

**Benefit:** O(n³) → O(n² log n)

**Example:** Optimal Binary Search Tree

## 5. Knuth Optimization

**When:** Similar to D&C but tighter conditions

**Benefit:** O(n³) → O(n²)

**Example:** Stone Game, Optimal BST

## 6. State Compression (Bitmask)

**When:** Need to track subset of items (≤20 items)

**Technique:** Use integer as bitmask representing subset

**Example:**
\`\`\`python
# Instead of dp[item1][item2][item3]...
# Use dp[mask] where mask = binary representation
visited = 0b00000  # None visited
visited |= (1 << 3)  # Visit item 3
visited = 0b01000
\`\`\`

## 7. Matrix Exponentiation

**When:** Linear recurrence with large n (like fib(10^18))

**Technique:** Express recurrence as matrix multiplication, use fast exponentiation

**Benefit:** O(n) → O(log n)

**Example (Fibonacci):**
\`\`\`python
# [F(n+1)]   [1 1]^n   [1]
# [F(n)  ] = [1 0]   × [0]
\`\`\`

## 8. Memoization with Hashing

**When:** State is complex object (tuple, frozenset)

**Technique:** Use dict/hashmap for memo instead of array

**Example:**
\`\`\`python
memo = {}
def dp(state_tuple):
    if state_tuple in memo:
        return memo[state_tuple]
    # ... compute result
    memo[state_tuple] = result
    return result
\`\`\`

## Priority of Optimizations:

1. **First:** Get correct DP solution (don't optimize prematurely!)
2. **Space:** Reduce dimensions if simple (big impact, easy)
3. **Time:** Apply advanced techniques only if needed
4. **Readability:** Keep code maintainable

**Key Points:**
- Most important: Space reduction (2D → 1D is common)
- Advanced optimizations (CHT, D&C) rarely needed in interviews
- Always profile/test before optimizing
- Correctness > Optimization
    `,
    Difficulty.Advanced,
  ),
];
