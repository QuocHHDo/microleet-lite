import { createProblem, Problem } from '@/common/commonProblem';

export const dpProblems: Problem[] = [
  createProblem(
    'Climbing Stairs (LeetCode 70)',
    'Easy',
    'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    [
      {
        code: `def climb_stairs(n):
    """
    Classic Fibonacci pattern DP.
    dp[i] = number of ways to reach step i
    """
    if n <= 2:
        return n

    # dp[i] = dp[i-1] + dp[i-2]
    # Can reach step i from step i-1 (1 step) or step i-2 (2 steps)
    dp = [0] * (n + 1)
    dp[1] = 1  # One way to reach step 1
    dp[2] = 2  # Two ways to reach step 2 (1+1 or 2)

    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]

# Space optimized version - O(1) space
def climb_stairs_optimized(n):
    if n <= 2:
        return n

    prev2, prev1 = 1, 2
    for i in range(3, n + 1):
        curr = prev1 + prev2
        prev2, prev1 = prev1, curr

    return prev1`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n) or O(1) optimized',
        explanation:
          'This is a classic Fibonacci pattern. The number of ways to reach step i equals the sum of ways to reach step i-1 and step i-2. Space can be optimized to O(1) by keeping only the last two values.',
      },
    ],
    'Think about how you can reach the nth step - from which previous steps can you come from?',
    'https://leetcode.com/problems/climbing-stairs/',
  ),

  createProblem(
    'House Robber (LeetCode 198)',
    'Medium',
    'You are a robber planning to rob houses along a street. Each house has a certain amount of money. Adjacent houses have security systems connected - if you rob two adjacent houses, the alarm will go off. Return the maximum amount of money you can rob without alerting the police.',
    [
      {
        code: `def rob(nums):
    """
    Decision DP: rob current house or skip it.
    dp[i] = max money robbing houses 0..i
    """
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    # dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    # Either skip house i (take dp[i-1]) or rob it (dp[i-2] + nums[i])
    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])

    for i in range(2, len(nums)):
        # Don't rob house i: take previous max
        skip = dp[i-1]
        # Rob house i: can't rob i-1, so take dp[i-2]
        rob_current = dp[i-2] + nums[i]
        dp[i] = max(skip, rob_current)

    return dp[-1]

# Space optimized
def rob_optimized(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]

    prev2, prev1 = nums[0], max(nums[0], nums[1])

    for i in range(2, len(nums)):
        curr = max(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, curr

    return prev1`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n) or O(1) optimized',
        explanation:
          'At each house, we have two choices: rob it (and skip previous) or skip it (and keep previous max). The recurrence dp[i] = max(dp[i-1], dp[i-2] + nums[i]) captures this decision.',
      },
    ],
    'For each house, consider two options: rob it or skip it. What\'s the constraint?',
    'https://leetcode.com/problems/house-robber/',
  ),

  createProblem(
    'Coin Change (LeetCode 322)',
    'Medium',
    'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up by any combination of coins, return -1.',
    [
      {
        code: `def coin_change(coins, amount):
    """
    Unbounded knapsack - minimize coins needed.
    dp[i] = minimum coins needed for amount i
    """
    # Initialize with infinity (impossible to make)
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins needed for amount 0

    # For each amount from 1 to target
    for i in range(1, amount + 1):
        # Try each coin
        for coin in coins:
            if coin <= i:
                # Take this coin and add to solution for (i - coin)
                dp[i] = min(dp[i], dp[i - coin] + 1)

    # If still infinity, amount cannot be made
    return dp[amount] if dp[amount] != float('inf') else -1`,
        timeComplexity: 'O(amount × n) where n is number of coins',
        spaceComplexity: 'O(amount)',
        explanation:
          'This is an unbounded knapsack problem. For each amount, we try all coins and take the minimum. We can use each coin unlimited times, so we look at dp[i-coin] (not a 2D array). Initialize with infinity to detect impossible cases.',
      },
    ],
    'For each amount, try using each coin denomination and find the minimum.',
    'https://leetcode.com/problems/coin-change/',
  ),

  createProblem(
    'Longest Common Subsequence (LeetCode 1143)',
    'Medium',
    'Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.',
    [
      {
        code: `def longest_common_subsequence(text1, text2):
    """
    2D DP comparing two sequences.
    dp[i][j] = LCS length using first i chars of text1, first j of text2
    """
    m, n = len(text1), len(text2)

    # Create DP table with (m+1) x (n+1) size
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                # Characters match - extend LCS from previous
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                # Characters don't match - take best from skipping either
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]`,
        timeComplexity: 'O(m × n)',
        spaceComplexity: 'O(m × n)',
        explanation:
          'Classic 2D DP for two sequences. If characters match, extend the LCS from previous positions. If they don\'t match, take the maximum of skipping either character. Can be space-optimized to O(min(m,n)) using rolling array.',
      },
    ],
    'Compare characters at each position. If they match, extend previous LCS. If not, try skipping each.',
    'https://leetcode.com/problems/longest-common-subsequence/',
  ),

  createProblem(
    'Unique Paths (LeetCode 62)',
    'Medium',
    'A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner. How many possible unique paths are there?',
    [
      {
        code: `def unique_paths(m, n):
    """
    Grid path DP - count paths from top-left to bottom-right.
    dp[i][j] = number of ways to reach cell (i, j)
    """
    # Create DP table
    dp = [[0] * n for _ in range(m)]

    # Base cases: first row and column have only 1 way
    for i in range(m):
        dp[i][0] = 1
    for j in range(n):
        dp[0][j] = 1

    # Fill rest of table
    for i in range(1, m):
        for j in range(1, n):
            # Ways to reach (i,j) = ways from top + ways from left
            dp[i][j] = dp[i-1][j] + dp[i][j-1]

    return dp[m-1][n-1]

# Space optimized - O(n) space
def unique_paths_optimized(m, n):
    dp = [1] * n  # First row all 1s

    for i in range(1, m):
        for j in range(1, n):
            dp[j] = dp[j] + dp[j-1]  # dp[j] = from top, dp[j-1] = from left

    return dp[n-1]`,
        timeComplexity: 'O(m × n)',
        spaceComplexity: 'O(m × n) or O(n) optimized',
        explanation:
          'Classic grid DP. Each cell can be reached from top or left, so dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row and column can only be reached one way (all right or all down). Space can be optimized to O(n) by using 1D array.',
      },
    ],
    'Each cell can be reached from the cell above or the cell to the left.',
    'https://leetcode.com/problems/unique-paths/',
  ),

  createProblem(
    'Longest Increasing Subsequence (LeetCode 300)',
    'Medium',
    'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
    [
      {
        code: `def length_of_lis(nums):
    """
    O(n²) DP solution.
    dp[i] = length of LIS ending at index i
    """
    if not nums:
        return 0

    n = len(nums)
    dp = [1] * n  # Each element is LIS of length 1

    for i in range(1, n):
        # Check all previous elements
        for j in range(i):
            # If nums[j] < nums[i], we can extend LIS ending at j
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)

    # Answer is max of all dp values
    return max(dp)

# O(n log n) solution using binary search
from bisect import bisect_left

def length_of_lis_fast(nums):
    """
    Binary search solution - patience sorting.
    tails[i] = smallest tail of all LIS of length i+1
    """
    tails = []

    for num in nums:
        # Find position where num should be inserted
        pos = bisect_left(tails, num)

        if pos == len(tails):
            # num is larger than all tails - extend LIS
            tails.append(num)
        else:
            # Replace to keep smallest possible tail
            tails[pos] = num

    return len(tails)`,
        timeComplexity: 'O(n²) or O(n log n) optimized',
        spaceComplexity: 'O(n)',
        explanation:
          'O(n²): For each position i, check all previous positions j where nums[j] < nums[i] and extend that LIS. O(n log n): Maintain array of smallest tails for each LIS length. Use binary search to find where to place each number.',
      },
    ],
    'For each position, what\'s the longest sequence ending here? Check all previous smaller elements.',
    'https://leetcode.com/problems/longest-increasing-subsequence/',
  ),

  createProblem(
    'Maximum Subarray (LeetCode 53)',
    'Medium',
    'Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.',
    [
      {
        code: `def max_subarray(nums):
    """
    Kadane's Algorithm - classic DP.
    dp[i] = maximum sum of subarray ending at index i
    """
    if not nums:
        return 0

    # dp[i] = max(nums[i], dp[i-1] + nums[i])
    # Either start new subarray or extend previous
    max_ending_here = nums[0]
    max_so_far = nums[0]

    for i in range(1, len(nums)):
        # Extend previous subarray or start fresh
        max_ending_here = max(nums[i], max_ending_here + nums[i])
        max_so_far = max(max_so_far, max_ending_here)

    return max_so_far`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'Kadane\'s algorithm: At each position, decide whether to extend the previous subarray or start a new one. If adding current element to previous sum makes it worse than just the current element alone, start fresh. Track global maximum.',
      },
    ],
    'At each position, should you extend the previous subarray or start a new one?',
    'https://leetcode.com/problems/maximum-subarray/',
  ),

  createProblem(
    'Edit Distance (LeetCode 72)',
    'Medium',
    'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You can insert, delete, or replace a character.',
    [
      {
        code: `def min_distance(word1, word2):
    """
    2D DP - transform one string to another.
    dp[i][j] = min operations to convert word1[0:i] to word2[0:j]
    """
    m, n = len(word1), len(word2)

    # Create DP table
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base cases
    for i in range(m + 1):
        dp[i][0] = i  # Delete all characters from word1
    for j in range(n + 1):
        dp[0][j] = j  # Insert all characters to match word2

    # Fill table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                # Characters match - no operation needed
                dp[i][j] = dp[i-1][j-1]
            else:
                # Try all three operations and take minimum
                dp[i][j] = 1 + min(
                    dp[i-1][j],      # Delete from word1
                    dp[i][j-1],      # Insert into word1
                    dp[i-1][j-1]     # Replace
                )

    return dp[m][n]`,
        timeComplexity: 'O(m × n)',
        spaceComplexity: 'O(m × n)',
        explanation:
          'Classic 2D string DP. If characters match, no operation needed. Otherwise, try insert, delete, or replace and take minimum. Base cases: converting empty string requires inserting all characters, converting to empty string requires deleting all.',
      },
    ],
    'Compare characters. If they match, no operation. Otherwise try insert, delete, replace.',
    'https://leetcode.com/problems/edit-distance/',
  ),

  createProblem(
    'Partition Equal Subset Sum (LeetCode 416)',
    'Medium',
    'Given an array of positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.',
    [
      {
        code: `def can_partition(nums):
    """
    Reduce to subset sum problem.
    If total sum is odd, impossible. Otherwise find subset with sum = total/2
    """
    total = sum(nums)

    # If odd sum, can't partition equally
    if total % 2 != 0:
        return False

    target = total // 2

    # Subset sum DP
    # dp[i] = True if we can make sum i
    dp = [False] * (target + 1)
    dp[0] = True  # Can always make sum 0 (empty subset)

    for num in nums:
        # Iterate backward to avoid using same number twice
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]

    return dp[target]`,
        timeComplexity: 'O(n × sum)',
        spaceComplexity: 'O(sum)',
        explanation:
          'Key insight: partition into equal sums means finding subset with sum = total/2. This becomes a subset sum problem. Iterate backward to ensure each number used at most once (0/1 knapsack pattern).',
      },
    ],
    'If you can partition into equal sums, what must be the sum of each partition?',
    'https://leetcode.com/problems/partition-equal-subset-sum/',
  ),

  createProblem(
    'Word Break (LeetCode 139)',
    'Medium',
    'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.',
    [
      {
        code: `def word_break(s, word_dict):
    """
    DP string segmentation.
    dp[i] = True if s[0:i] can be segmented
    """
    n = len(s)
    word_set = set(word_dict)  # O(1) lookup

    dp = [False] * (n + 1)
    dp[0] = True  # Empty string can be segmented

    for i in range(1, n + 1):
        # Try all possible last words ending at position i
        for j in range(i):
            # Check if s[0:j] can be segmented AND s[j:i] is a word
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break  # Found one way, no need to continue

    return dp[n]`,
        timeComplexity: 'O(n² × m) where m is average word length',
        spaceComplexity: 'O(n)',
        explanation:
          'For each position i, try all possible positions j < i as the start of the last word. If s[0:j] can be segmented and s[j:i] is in dictionary, then s[0:i] can be segmented. Convert word_dict to set for O(1) lookup.',
      },
    ],
    'For each position, try splitting the string and check if both parts are valid.',
    'https://leetcode.com/problems/word-break/',
  ),

  createProblem(
    'Decode Ways (LeetCode 91)',
    'Medium',
    'A message containing letters from A-Z can be encoded into numbers using the mapping A=1, B=2, ..., Z=26. Given a string containing only digits, determine the total number of ways to decode it.',
    [
      {
        code: `def num_decodings(s):
    """
    DP - count ways to decode.
    dp[i] = number of ways to decode s[0:i]
    """
    if not s or s[0] == '0':
        return 0

    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1  # Empty string
    dp[1] = 1  # First character (already checked not '0')

    for i in range(2, n + 1):
        # Single digit (1-9)
        one_digit = int(s[i-1:i])
        if 1 <= one_digit <= 9:
            dp[i] += dp[i-1]

        # Two digits (10-26)
        two_digits = int(s[i-2:i])
        if 10 <= two_digits <= 26:
            dp[i] += dp[i-2]

    return dp[n]`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        explanation:
          'Similar to Fibonacci but conditional. At each position, we can decode as single digit (1-9) or two digits (10-26). If single digit is valid, add dp[i-1]. If two digits valid, add dp[i-2]. Watch out for \'0\' which is invalid as single digit.',
      },
    ],
    'At each position, can you decode one digit or two digits? Add the ways for each valid option.',
    'https://leetcode.com/problems/decode-ways/',
  ),

  createProblem(
    'Minimum Path Sum (LeetCode 64)',
    'Medium',
    'Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right.',
    [
      {
        code: `def min_path_sum(grid):
    """
    Grid DP - find minimum cost path.
    dp[i][j] = minimum path sum to reach cell (i, j)
    """
    if not grid or not grid[0]:
        return 0

    m, n = len(grid), len(grid[0])

    # Can modify grid in-place to save space
    # Or create separate dp table
    dp = [[0] * n for _ in range(m)]

    # Start position
    dp[0][0] = grid[0][0]

    # First row - can only come from left
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]

    # First column - can only come from top
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]

    # Rest of grid
    for i in range(1, m):
        for j in range(1, n):
            # Come from top or left, whichever is smaller
            dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])

    return dp[m-1][n-1]`,
        timeComplexity: 'O(m × n)',
        spaceComplexity: 'O(m × n) or O(1) if modifying grid in-place',
        explanation:
          'Similar to Unique Paths but tracking minimum cost instead of count. Each cell can be reached from top or left, so take the minimum of those two plus current cell value. Can modify grid in-place to achieve O(1) space.',
      },
    ],
    'Each cell can be reached from top or left. What\'s the minimum cost from each direction?',
    'https://leetcode.com/problems/minimum-path-sum/',
  ),

  createProblem(
    'Triangle (LeetCode 120)',
    'Medium',
    'Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below.',
    [
      {
        code: `def minimum_total(triangle):
    """
    Bottom-up DP on triangle.
    dp[i][j] = minimum path sum to reach position (i, j)
    """
    if not triangle:
        return 0

    n = len(triangle)

    # Start from second-to-last row and work up
    # Modify triangle in-place to save space
    for i in range(n - 2, -1, -1):
        for j in range(len(triangle[i])):
            # Can go to position j or j+1 in next row
            triangle[i][j] += min(triangle[i+1][j], triangle[i+1][j+1])

    return triangle[0][0]

# Alternative: top-down approach
def minimum_total_topdown(triangle):
    n = len(triangle)
    dp = [[0] * len(row) for row in triangle]
    dp[0][0] = triangle[0][0]

    for i in range(1, n):
        for j in range(len(triangle[i])):
            # Can come from position j-1 or j in previous row
            if j == 0:
                dp[i][j] = dp[i-1][j] + triangle[i][j]
            elif j == len(triangle[i]) - 1:
                dp[i][j] = dp[i-1][j-1] + triangle[i][j]
            else:
                dp[i][j] = min(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]

    return min(dp[n-1])`,
        timeComplexity: 'O(n²) where n is number of rows',
        spaceComplexity: 'O(1) if modifying in-place, O(n²) otherwise',
        explanation:
          'Can solve bottom-up or top-down. Bottom-up is cleaner: start from second-to-last row and add minimum of two adjacent values from row below. Top-down needs to handle edge cases where you can only come from one direction.',
      },
    ],
    'Start from bottom and work your way up, or carefully handle edges when going top-down.',
    'https://leetcode.com/problems/triangle/',
  ),

  createProblem(
    'Best Time to Buy and Sell Stock with Cooldown (LeetCode 309)',
    'Medium',
    'You are given an array prices where prices[i] is the price of a given stock on the ith day. You can complete as many transactions as you like, but after you sell, you must wait one day (cooldown) before buying again. Return the maximum profit.',
    [
      {
        code: `def max_profit(prices):
    """
    State Machine DP - track states: hold, sold, rest.
    hold: currently holding stock
    sold: just sold (cooldown tomorrow)
    rest: not holding, not in cooldown
    """
    if not prices:
        return 0

    hold = -prices[0]  # Buy on day 0
    sold = 0           # Can't sell on day 0
    rest = 0           # Start in rest state

    for price in prices[1:]:
        # Save previous state values to avoid overwriting
        prev_hold, prev_sold, prev_rest = hold, sold, rest

        # Update states
        hold = max(prev_hold, prev_rest - price)  # Keep holding or buy
        sold = prev_hold + price                  # Sell today
        rest = max(prev_rest, prev_sold)          # Rest or exit cooldown

    # Can't be holding stock at the end
    return max(sold, rest)`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
        explanation:
          'Model as state machine with three states: holding stock, just sold (cooldown), and resting. Track transitions: can only buy from rest state (not from sold due to cooldown), can sell from hold state, can rest from rest or sold states. Save previous values to avoid overwriting.',
      },
    ],
    'Model the different states you can be in (holding, just sold, resting) and valid transitions.',
    'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
  ),

  createProblem(
    'Palindromic Substrings (LeetCode 647)',
    'Medium',
    'Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward.',
    [
      {
        code: `def count_substrings(s):
    """
    2D DP - count palindromic substrings.
    dp[i][j] = True if s[i:j+1] is palindrome
    """
    n = len(s)
    dp = [[False] * n for _ in range(n)]
    count = 0

    # Every single character is palindrome
    for i in range(n):
        dp[i][i] = True
        count += 1

    # Check length 2
    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            count += 1

    # Check length 3 and above
    for length in range(3, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            if s[i] == s[j] and dp[i + 1][j - 1]:
                dp[i][j] = True
                count += 1

    return count

# Space-optimized expand-around-center approach
def count_substrings_optimized(s):
    def expand(left, right):
        count = 0
        while left >= 0 and right < len(s) and s[left] == s[right]:
            count += 1
            left -= 1
            right += 1
        return count

    total = 0
    for i in range(len(s)):
        total += expand(i, i)      # Odd length
        total += expand(i, i + 1)  # Even length

    return total`,
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(n²) or O(1) optimized',
        explanation:
          'DP: Build palindrome table by increasing length. A substring is palindrome if first and last chars match AND inner substring is palindrome. Optimized: For each center, expand outward while characters match, counting palindromes found.',
      },
    ],
    'A substring is palindrome if ends match and inner part is palindrome. Or expand from each center.',
    'https://leetcode.com/problems/palindromic-substrings/',
  ),

  createProblem(
    'Longest Palindromic Subsequence (LeetCode 516)',
    'Medium',
    'Given a string s, find the longest palindromic subsequence\'s length in s. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order.',
    [
      {
        code: `def longest_palindrome_subseq(s):
    """
    2D DP on ranges - interval DP.
    dp[i][j] = LPS length in s[i:j+1]
    """
    n = len(s)
    dp = [[0] * n for _ in range(n)]

    # Base case: single character
    for i in range(n):
        dp[i][i] = 1

    # Fill by increasing substring length
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1

            if s[i] == s[j]:
                # Characters match - include both in LPS
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                # Take max of skipping either end
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])

    return dp[0][n - 1]`,
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(n²)',
        explanation:
          'Interval DP: Process by increasing substring length. If ends match, include both and add 2 to inner LPS. If not, try skipping each end and take maximum. Can also solve as LCS(s, reverse(s)).',
      },
    ],
    'If ends match, include both. Otherwise try skipping each end. Or use LCS with reversed string.',
    'https://leetcode.com/problems/longest-palindromic-subsequence/',
  ),

  createProblem(
    'Coin Change II (LeetCode 518)',
    'Medium',
    'You are given an integer array coins representing coins of different denominations and an integer amount. Return the number of combinations that make up that amount.',
    [
      {
        code: `def change(amount, coins):
    """
    Unbounded knapsack - count combinations.
    dp[i] = number of ways to make amount i

    IMPORTANT: Coins in outer loop to count combinations (not permutations)
    """
    dp = [0] * (amount + 1)
    dp[0] = 1  # One way to make 0: use no coins

    # Iterate coins first to avoid counting permutations
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]

    return dp[amount]

# If we iterate amount first, we get permutations (wrong!)
def change_permutations(amount, coins):
    dp = [0] * (amount + 1)
    dp[0] = 1

    # This counts [1,2] and [2,1] as different
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] += dp[i - coin]

    return dp[amount]`,
        timeComplexity: 'O(amount × n)',
        spaceComplexity: 'O(amount)',
        explanation:
          'Critical: Loop order matters! Coins in outer loop counts combinations ([1,2] = [2,1]). Amount in outer loop counts permutations ([1,2] ≠ [2,1]). For this problem, we want combinations, so coins must be outer loop.',
      },
    ],
    'Loop order determines combinations vs permutations. Which one do we want?',
    'https://leetcode.com/problems/coin-change-ii/',
  ),

  createProblem(
    'Target Sum (LeetCode 494)',
    'Medium',
    'You are given an integer array nums and an integer target. You want to build an expression by adding + or - before each integer and concatenating them. Return the number of different expressions you can build that evaluate to target.',
    [
      {
        code: `def find_target_sum_ways(nums, target):
    """
    Reduce to subset sum problem.

    Key insight:
    Let P = subset with + sign, N = subset with - sign
    sum(P) - sum(N) = target
    sum(P) + sum(N) = sum(nums)
    Therefore: 2 * sum(P) = target + sum(nums)
    So: sum(P) = (target + sum(nums)) / 2

    Problem becomes: count subsets with sum = (target + sum(nums)) / 2
    """
    total = sum(nums)

    # Check if solution exists
    if abs(target) > total or (target + total) % 2 != 0:
        return 0

    # Find number of subsets with this sum
    subset_sum = (target + total) // 2

    # Subset sum DP - count ways
    dp = [0] * (subset_sum + 1)
    dp[0] = 1  # One way to make 0

    for num in nums:
        for s in range(subset_sum, num - 1, -1):
            dp[s] += dp[s - num]

    return dp[subset_sum]`,
        timeComplexity: 'O(n × sum)',
        spaceComplexity: 'O(sum)',
        explanation:
          'Clever reduction to subset sum! Realize that choosing + or - for each number is equivalent to partitioning into two subsets. Use algebra to find that we need subset with sum = (target + total_sum) / 2. Then it\'s standard subset sum counting problem.',
      },
    ],
    'Can you reduce this to a subset sum problem? Think about positive and negative subsets.',
    'https://leetcode.com/problems/target-sum/',
  ),
];
