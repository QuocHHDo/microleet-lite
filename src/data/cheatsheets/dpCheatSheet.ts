import {
  CheatSheetItem,
  createCheatSheet,
  OperationTypes,
} from '@/common/commonCheatSheet';

export const dpCheatSheet: CheatSheetItem[] = [
  // PATTERNS - 1D DP
  createCheatSheet(
    'Fibonacci Pattern (1D DP)',
    'dp[i] = dp[i-1] + dp[i-2]',
    'Classic pattern where current state depends on previous k states. Used in Climbing Stairs, House Robber, Decode Ways.',
    OperationTypes.Pattern,
    'O(n)',
    'Requires careful handling of base cases and array bounds.',
  ),

  createCheatSheet(
    'Maximum Subarray Pattern',
    'dp[i] = max(nums[i], dp[i-1] + nums[i])',
    'Kadane\'s algorithm - track maximum sum ending at each position. Extends to maximum product, circular arrays.',
    OperationTypes.Pattern,
    'O(n)',
    'Fails if all numbers are negative - need special handling.',
  ),

  createCheatSheet(
    'House Robber Pattern',
    'dp[i] = max(dp[i-1], dp[i-2] + nums[i])',
    'Decision pattern: take or skip current element. Cannot take adjacent elements. Used in non-adjacent selection problems.',
    OperationTypes.Pattern,
    'O(n)',
    'Space can be optimized to O(1) by keeping only last 2 values.',
  ),

  createCheatSheet(
    'Longest Increasing Subsequence (O(n²))',
    'dp[i] = max(dp[j] + 1) for all j < i where nums[j] < nums[i]',
    'dp[i] = length of LIS ending at index i. For each position, check all previous positions.',
    OperationTypes.Pattern,
    'O(n²)',
    'Can be optimized to O(n log n) using binary search with patience sorting.',
  ),

  // PATTERNS - 2D DP
  createCheatSheet(
    'Grid Path Pattern',
    'dp[i][j] = dp[i-1][j] + dp[i][j-1]',
    'Count paths or find min/max cost in grid. Can only move right or down. Used in Unique Paths, Min Path Sum.',
    OperationTypes.Pattern,
    'O(m * n)',
    'Space can be optimized to O(n) by using only one row.',
  ),

  createCheatSheet(
    'Longest Common Subsequence',
    'dp[i][j] = dp[i-1][j-1] + 1 if match, else max(dp[i-1][j], dp[i][j-1])',
    'Compare two sequences. dp[i][j] = LCS length using first i of s1, first j of s2.',
    OperationTypes.Pattern,
    'O(m * n)',
    'Requires O(m*n) space but can be optimized to O(min(m,n)).',
  ),

  createCheatSheet(
    'Edit Distance Pattern',
    'dp[i][j] = min(insert, delete, replace) + 1',
    'Transform one string to another with min operations. Three choices: insert, delete, replace.',
    OperationTypes.Pattern,
    'O(m * n)',
    'Must initialize base cases: dp[0][j] = j, dp[i][0] = i.',
  ),

  createCheatSheet(
    '0/1 Knapsack Pattern',
    'dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])',
    'Item selection with capacity constraint. Each item used at most once. Can optimize to 1D with backward iteration.',
    OperationTypes.Pattern,
    'O(n * W)',
    'Pseudo-polynomial time - not polynomial in input size.',
  ),

  createCheatSheet(
    'Unbounded Knapsack Pattern',
    'dp[w] = max(dp[w], dp[w-weight[i]] + value[i])',
    'Items have unlimited supply. Iterate forward (not backward) to allow reuse.',
    OperationTypes.Pattern,
    'O(n * W)',
    'Loop order matters: forward allows item reuse, backward prevents it.',
  ),

  createCheatSheet(
    'Palindrome Substring Pattern',
    'dp[i][j] = (s[i] == s[j]) and dp[i+1][j-1]',
    'Check if substring s[i:j+1] is palindrome. Build from smaller lengths to larger.',
    OperationTypes.Pattern,
    'O(n²)',
    'Must process by increasing length to ensure inner substring computed first.',
  ),

  // TEMPLATES - Memoization
  createCheatSheet(
    'Top-Down DP Template (Memoization)',
    `def dp(state, memo={}):
    if state in memo:
        return memo[state]
    if base_case:
        return base_value
    memo[state] = compute_from_subproblems()
    return memo[state]`,
    'Recursive DP with caching. Add memoization to recursive solution to avoid recomputation.',
    OperationTypes.Template,
    'O(states)',
    'Watch out for mutable default arguments in Python - use memo=None pattern.',
  ),

  createCheatSheet(
    'Bottom-Up DP Template (Tabulation)',
    `dp = [0] * (n + 1)
dp[0] = base_value
for i in range(1, n + 1):
    dp[i] = f(dp[i-1], dp[i-2], ...)
return dp[n]`,
    'Iterative DP building from base cases. Fill table in order ensuring dependencies computed first.',
    OperationTypes.Template,
    'O(states)',
    'Must determine correct iteration order - dependencies must be ready.',
  ),

  createCheatSheet(
    '2D DP Initialization',
    `dp = [[0] * (n + 1) for _ in range(m + 1)]
for i in range(m + 1):
    dp[i][0] = base_value_i
for j in range(n + 1):
    dp[0][j] = base_value_j`,
    'Initialize 2D DP table with base cases for first row and column.',
    OperationTypes.Template,
    'O(m * n)',
    'Don\'t use [[0]*(n+1)]*(m+1) - creates shallow copies!',
  ),

  // OPTIMIZATION TECHNIQUES
  createCheatSheet(
    'Space Optimization - Rolling Array',
    `prev = [0] * n
for i in range(m):
    curr = [0] * n
    for j in range(n):
        curr[j] = f(prev[j], prev[j-1], curr[j-1])
    prev = curr`,
    'Reduce 2D DP to 1D by keeping only previous row. Common in grid/LCS problems.',
    OperationTypes.Optimization,
    'O(min(m, n))',
    'Order of updating matters - may need to iterate backwards.',
  ),

  createCheatSheet(
    'Space Optimization - Two Variables',
    `prev2, prev1 = 0, 1
for i in range(2, n + 1):
    curr = prev1 + prev2
    prev2, prev1 = prev1, curr`,
    'For Fibonacci-like patterns, keep only last k states instead of entire array.',
    OperationTypes.Optimization,
    'O(1)',
    'Only works when state depends on fixed number of previous states.',
  ),

  createCheatSheet(
    'Backward Iteration for 0/1 Knapsack',
    `dp = [0] * (W + 1)
for weight, value in items:
    for w in range(W, weight - 1, -1):
        dp[w] = max(dp[w], dp[w - weight] + value)`,
    'Iterate backward to prevent using same item multiple times when reducing 2D to 1D.',
    OperationTypes.Optimization,
    'O(n * W)',
    'Forward iteration would allow item reuse (Unbounded Knapsack).',
  ),

  // STATE TRANSITIONS
  createCheatSheet(
    'State: Ways to Reach',
    'dp[i] = sum of ways to reach state i from previous states',
    'Counting problem - sum all ways to transition to current state. Example: Climbing Stairs, Coin Change II.',
    OperationTypes.StateTransition,
    'Varies',
    'Initialize dp[0] = 1 (one way to reach start state).',
  ),

  createCheatSheet(
    'State: Minimum/Maximum Cost',
    'dp[i] = min/max cost to reach state i',
    'Optimization problem - take best transition. Example: Min Path Sum, Jump Game II.',
    OperationTypes.StateTransition,
    'Varies',
    'Initialize with infinity (min) or negative infinity (max).',
  ),

  createCheatSheet(
    'State: Boolean Reachability',
    'dp[i] = True if state i is reachable',
    'Feasibility problem - can we reach this state? Example: Subset Sum, Partition Equal Subset.',
    OperationTypes.StateTransition,
    'Varies',
    'Initialize dp[0] = True, rest False.',
  ),

  createCheatSheet(
    'State: Ending At vs Using Up To',
    'Ending at: dp[i] = optimal value ending at index i\nUp to: dp[i] = optimal value using elements 0 to i',
    'Clarify state meaning! "Ending at" requires considering i, "up to" may skip i.',
    OperationTypes.StateTransition,
    'Varies',
    'Common confusion - be explicit about what dp[i] represents.',
  ),

  // KNAPSACK VARIANTS
  createCheatSheet(
    'Subset Sum (Boolean)',
    `dp = [False] * (target + 1)
dp[0] = True
for num in nums:
    for s in range(target, num - 1, -1):
        dp[s] = dp[s] or dp[s - num]`,
    'Check if subset with target sum exists. Special case of 0/1 knapsack where all values = weights.',
    OperationTypes.Pattern,
    'O(n * target)',
    'Iterate backward to prevent using same number twice.',
  ),

  createCheatSheet(
    'Subset Sum (Count Ways)',
    `dp = [0] * (target + 1)
dp[0] = 1
for num in nums:
    for s in range(target, num - 1, -1):
        dp[s] += dp[s - num]`,
    'Count number of subsets with target sum. Change or to += to count instead of check existence.',
    OperationTypes.Pattern,
    'O(n * target)',
    'dp[0] = 1 (one way to make 0: empty subset).',
  ),

  createCheatSheet(
    'Coin Change - Minimum Coins',
    `dp = [float(\'inf\')] * (amount + 1)
dp[0] = 0
for i in range(1, amount + 1):
    for coin in coins:
        if coin <= i:
            dp[i] = min(dp[i], dp[i - coin] + 1)`,
    'Find minimum coins to make amount. Unbounded knapsack variant.',
    OperationTypes.Pattern,
    'O(amount * n)',
    'Return -1 if dp[amount] is still infinity (impossible).',
  ),

  createCheatSheet(
    'Coin Change II - Count Ways',
    `dp = [0] * (amount + 1)
dp[0] = 1
for coin in coins:
    for i in range(coin, amount + 1):
        dp[i] += dp[i - coin]`,
    'Count combinations to make amount. Coins outer loop to avoid counting permutations.',
    OperationTypes.Pattern,
    'O(amount * n)',
    'Loop order matters! Coins first = combinations, amount first = permutations.',
  ),

  // STRING DP
  createCheatSheet(
    'Longest Palindromic Subsequence',
    `for length in range(2, n + 1):
    for i in range(n - length + 1):
        j = i + length - 1
        if s[i] == s[j]:
            dp[i][j] = dp[i+1][j-1] + 2
        else:
            dp[i][j] = max(dp[i+1][j], dp[i][j-1])`,
    'Find longest subsequence that is a palindrome. Can also solve as LCS(s, reverse(s)).',
    OperationTypes.Pattern,
    'O(n²)',
    'Process by increasing substring length to ensure dependencies ready.',
  ),

  createCheatSheet(
    'Word Break',
    `dp = [False] * (n + 1)
dp[0] = True
for i in range(1, n + 1):
    for j in range(i):
        if dp[j] and s[j:i] in word_set:
            dp[i] = True
            break`,
    'Check if string can be segmented into dictionary words. dp[i] = can segment s[0:i].',
    OperationTypes.Pattern,
    'O(n² * m)',
    'Use set for word_dict for O(1) lookup. m = average word length.',
  ),

  // ADVANCED PATTERNS
  createCheatSheet(
    'Bitmask DP Template',
    `dp = [INF] * (1 << n)
dp[0] = 0
for mask in range(1 << n):
    for i in range(n):
        if not (mask & (1 << i)):
            new_mask = mask | (1 << i)
            dp[new_mask] = min(dp[new_mask], dp[mask] + cost)`,
    'Use integer as bitmask to represent subset state. Limited to n ≤ 20 due to 2^n states.',
    OperationTypes.Pattern,
    'O(2^n * n)',
    'Check bit: mask & (1<<i), Set bit: mask | (1<<i), Count bits: bin(mask).count(\'1\').',
  ),

  createCheatSheet(
    'State Machine DP - Stock Trading',
    `hold = -prices[0]
cash = 0
for price in prices[1:]:
    prev_hold, prev_cash = hold, cash
    hold = max(prev_hold, prev_cash - price)
    cash = max(prev_cash, prev_hold + price)`,
    'Model states (holding stock, not holding) and valid transitions. Save previous state to avoid overwriting.',
    OperationTypes.Pattern,
    'O(n)',
    'Number of states depends on problem constraints (cooldown, transaction limit, etc.).',
  ),

  createCheatSheet(
    'Digit DP Template',
    `def dp(pos, tight, started, memo={}):
    if pos == len(digits):
        return 1 if started else 0
    if (pos, tight, started) in memo:
        return memo[...]
    limit = digits[pos] if tight else 9
    result = 0
    for d in range(0, limit + 1):
        result += dp(pos+1, tight and d==limit, started or d>0)
    return result`,
    'Count numbers with digit constraints. tight = bounded by limit, started = no leading zeros.',
    OperationTypes.Pattern,
    'O(n * 2 * 2)',
    'Common states: pos, tight, started, plus problem-specific (digit_sum, last_digit, etc.).',
  ),

  // COMMON PITFALLS
  createCheatSheet(
    'Base Case Initialization',
    'dp[0] = base_value based on problem',
    'Choose base case carefully: 0 for sum, 1 for product/count, True/False for boolean, inf/-inf for min/max.',
    OperationTypes.BaseCase,
    'O(1)',
    'Wrong base case is a common bug - verify with small examples.',
  ),

  createCheatSheet(
    'Array Size and Indexing',
    'dp = [0] * (n + 1)  # Note: n+1, not n',
    'Common to use n+1 size to make dp[i] represent first i elements (dp[0] = empty, dp[n] = all elements).',
    OperationTypes.BaseCase,
    'O(n)',
    'Off-by-one errors are common - be careful with array bounds.',
  ),
];
