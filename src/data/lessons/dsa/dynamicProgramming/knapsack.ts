import { LessonContent } from '@/common/commonLesson';
import { Difficulty } from '@/common/commonConcept';


// SECTION 4: KNAPSACK PATTERNS
// ============================================================================

const zeroOneKnapsackData: LessonContent = {
  title: '0/1 Knapsack: The Foundation',
  content: `The 0/1 Knapsack problem is one of the most fundamental optimization problems in computer science. It forms the foundation for understanding a whole category of DP problems involving resource allocation and decision-making.

<h2>Problem Definition</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem:</strong> Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.</p>

  <p><strong>Constraint:</strong> Each item can be taken at most once (0 or 1 times). You cannot break an item.</p>
</div>

<p><strong>Example:</strong></p>
<pre>
Items:     weights = [1, 3, 4, 5]
           values  = [1, 4, 5, 7]
Capacity:  W = 7

Output: 9
Explanation: Take items with weights 3 and 4 (values 4 + 5 = 9)
</pre>

<h2>The Greedy Approach Fails!</h2>

<p>You might think: "Just take items with highest value-to-weight ratio!" But this greedy approach doesn't work:</p>

<pre>
weights = [10, 20, 30]
values  = [60, 100, 120]
W = 50

Greedy (by value/weight ratio): Take item 1 (ratio 6) and item 2 (ratio 5) = 60 + 100 = 160 ✗ (total weight = 30, can add item 3!)
Optimal DP: Take item 2 and item 3 = 100 + 120 = 220 ✓
</pre>

<h2>DP State Definition</h2>

<div class="bg-green-50 p-4 rounded-lg my-4">
  <p><strong>State:</strong> \`dp[i][w]\` = maximum value achievable using first \`i\` items with weight limit \`w\`</p>

  <p><strong>Decision at each item:</strong> Take it or leave it (0 or 1)</p>
</div>

<h2>The Recurrence Relation</h2>

\`\`\`python
dp[i][w] = max(
    dp[i-1][w],                    # Don't take item i
    dp[i-1][w - weight[i]] + value[i]  # Take item i (if it fits)
)
\`\`\`

<h2>Complete Implementation</h2>

\`\`\`python
def knapsack_01(weights, values, W):
    """
    0/1 Knapsack - each item taken at most once.

    Time: O(n * W)
    Space: O(n * W)
    """
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(W + 1):
            # Option 1: Don't take item i-1
            dp[i][w] = dp[i-1][w]

            # Option 2: Take item i-1 (if it fits)
            if weights[i-1] <= w:
                dp[i][w] = max(
                    dp[i][w],
                    dp[i-1][w - weights[i-1]] + values[i-1]
                )

    return dp[n][W]
\`\`\`

<h2>Space Optimization: O(W)</h2>

\`\`\`python
def knapsack_01_optimized(weights, values, W):
    """
    Space-optimized: O(W) space using 1D array.
    IMPORTANT: Iterate backwards to avoid using updated values!
    """
    n = len(weights)
    dp = [0] * (W + 1)

    for i in range(n):
        # MUST iterate backwards!
        for w in range(W, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])

    return dp[W]
\`\`\`

<h2>Finding Which Items to Take</h2>

\`\`\`python
def knapsack_with_items(weights, values, W):
    """
    Return max value AND which items to take.
    """
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]

    # Build DP table
    for i in range(1, n + 1):
        for w in range(W + 1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1])

    # Backtrack to find items
    items = []
    w = W
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i-1][w]:
            items.append(i-1)
            w -= weights[i-1]

    return dp[n][W], items[::-1]
\`\`\`

<h2>Key Insights</h2>

<div class="bg-purple-50 p-4 rounded-lg my-4">
  <ul>
    <li><strong>Binary Choice:</strong> Each item is either taken (1) or not taken (0)</li>
    <li><strong>Order Matters:</strong> Process items sequentially to avoid taking same item twice</li>
    <li><strong>Space Optimization:</strong> Iterate backwards when using 1D array</li>
    <li><strong>Pattern:</strong> Many problems reduce to 0/1 Knapsack (Subset Sum, Partition, Target Sum)</li>
  </ul>
</div>`,
  codeExample: `# 0/1 Knapsack - Complete Implementation

def knapsack_01(weights, values, W):
    """Classic 0/1 Knapsack with 2D DP."""
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(W + 1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1])

    return dp[n][W]


def knapsack_01_optimized(weights, values, W):
    """Space-optimized O(W) version."""
    dp = [0] * (W + 1)
    for i in range(len(weights)):
        for w in range(W, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    return dp[W]


# Test
weights = [1, 3, 4, 5]
values = [1, 4, 5, 7]
W = 7
print(knapsack_01(weights, values, W))  # 9`,
  exercises: [
    {
      prompt: 'Implement 0/1 Knapsack using 2D DP.',
      initialCode: `def knapsack_01(weights, values, W):
    """
    0/1 Knapsack - return maximum value.
    """
    # Your code here
    pass`,
      solution: `def knapsack_01(weights, values, W):
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(W + 1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1])

    return dp[n][W]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'Why must we iterate backwards in the space-optimized 1D version?',
      options: [
        'For better performance',
        'To avoid using updated values from current iteration',
        'It doesn\'t matter which direction',
        'To save memory',
      ],
      correctAnswer: 1,
      explanations: [
        'Direction doesn\'t affect performance.',
        'Correct! Iterating backwards ensures we use values from the previous iteration (previous row in 2D version), not values already updated in current iteration.',
        'Direction is critical for correctness!',
        'Both directions use same memory.',
      ],
      difficulty: Difficulty.Advanced,
    },
  ],
};

const unboundedKnapsackData: LessonContent = {
  title: 'Unbounded Knapsack: Unlimited Supply',
  content: `Unlike 0/1 Knapsack where each item can be taken at most once, Unbounded Knapsack allows taking each item unlimited times. This changes our DP approach!

<h2>Problem Definition</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem:</strong> Given weights and values of n items with UNLIMITED supply, maximize value in knapsack of capacity W.</p>
  <p><strong>Key Difference:</strong> Each item can be taken 0, 1, 2, ... unlimited times!</p>
</div>

<h2>The Key Difference in Recurrence</h2>

<table class="w-full border-collapse my-4">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Knapsack Type</th>
      <th class="border p-3">Recurrence</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3">0/1 Knapsack</td>
      <td class="border p-3">\`dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt[i]] + val[i])\`</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">Unbounded</td>
      <td class="border p-3">\`dp[i][w] = max(dp[i-1][w], dp[i][w-wt[i]] + val[i])\`</td>
    </tr>
  </tbody>
</table>

<p><strong>Notice:</strong> For unbounded, we use \`dp[i][...]\` not \`dp[i-1][...]\` when taking an item, allowing same item to be taken again!</p>

<h2>Implementation</h2>

\`\`\`python
def unbounded_knapsack(weights, values, W):
    """
    Unbounded Knapsack - unlimited items.
    """
    n = len(weights)
    dp = [0] * (W + 1)

    for w in range(W + 1):
        for i in range(n):
            if weights[i] <= w:
                dp[w] = max(dp[w], dp[w - weights[i]] + values[i])

    return dp[W]
\`\`\``,
  codeExample: `def unbounded_knapsack(weights, values, W):
    """Unbounded Knapsack - O(n*W) time, O(W) space."""
    dp = [0] * (W + 1)
    for w in range(W + 1):
        for i in range(len(weights)):
            if weights[i] <= w:
                dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    return dp[W]`,
  exercises: [
    {
      prompt: 'Implement Unbounded Knapsack.',
      initialCode: `def unbounded_knapsack(weights, values, W):
    # Your code here
    pass`,
      solution: `def unbounded_knapsack(weights, values, W):
    dp = [0] * (W + 1)
    for w in range(W + 1):
        for i in range(len(weights)):
            if weights[i] <= w:
                dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    return dp[W]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the key difference between 0/1 Knapsack and Unbounded Knapsack?',
      options: [
        'Unbounded uses more memory',
        'In Unbounded, items can be taken unlimited times',
        'Unbounded is always faster',
        'They use different data structures',
      ],
      correctAnswer: 1,
      explanations: [
        'Both can be optimized to similar memory usage.',
        'Correct! Unbounded Knapsack allows taking each item multiple times, while 0/1 Knapsack allows each item at most once.',
        'Time complexity is similar for both.',
        'Both typically use DP arrays.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why can we iterate forward in Unbounded Knapsack\'s 1D optimization?',
      options: [
        'Forward is faster than backward',
        'It saves memory',
        'We WANT to use updated values from current iteration',
        'Direction doesn\'t matter',
      ],
      correctAnswer: 2,
      explanations: [
        'Direction doesn\'t affect performance.',
        'Memory usage is same either way.',
        'Correct! In Unbounded Knapsack, forward iteration lets us reuse items - dp[w] can use dp[w-weight] from the SAME iteration because items are unlimited.',
        'Direction is critical for correctness!',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Which real-world problem is best modeled as Unbounded Knapsack?',
      options: [
        'Selecting unique candidates for a team',
        'Making change with coins (unlimited of each denomination)',
        'Choosing items from a one-time sale',
        'Packing different boxes exactly once',
      ],
      correctAnswer: 1,
      explanations: [
        'This requires each candidate once - use 0/1 Knapsack.',
        'Correct! Coin change is classic Unbounded Knapsack - we have unlimited coins of each denomination.',
        'One-time selection - use 0/1 Knapsack.',
        'Exactly once - use 0/1 Knapsack.',
      ],
      difficulty: Difficulty.Beginner,
    },
  ],
};

const subsetSumData: LessonContent = {
  title: 'Subset Sum Problem',
  content: `Subset Sum is a classic NP-complete problem that asks: given a set of numbers, can we find a subset that sums to a target?

<h2>Problem Definition</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem:</strong> Given a set of non-negative integers and a target sum, determine if there exists a subset with sum equal to target.</p>
</div>

<p><strong>Example:</strong></p>
<pre>
nums = [3, 34, 4, 12, 5, 2], target = 9
Output: True (subset [4, 5] sums to 9)

nums = [3, 34, 4, 12, 5, 2], target = 30
Output: False
</pre>

<h2>DP State</h2>

<p><strong>\`dp[i][sum]\`</strong> = true if we can achieve sum using first i numbers</p>

<h2>Implementation</h2>

\`\`\`python
def subset_sum(nums, target):
    """
    Check if subset with target sum exists.
    Time: O(n * target), Space: O(target)
    """
    dp = [False] * (target + 1)
    dp[0] = True  # Empty subset has sum 0

    for num in nums:
        # Iterate backwards (0/1 knapsack pattern)
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]

    return dp[target]
\`\`\`

<h2>Count Subsets with Given Sum</h2>

\`\`\`python
def count_subsets_with_sum(nums, target):
    """
    Count number of subsets that sum to target.
    """
    dp = [0] * (target + 1)
    dp[0] = 1  # One way to make 0: empty subset

    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] += dp[s - num]

    return dp[target]
\`\`\`
`,
  codeExample: `def subset_sum(nums, target):
    """Check if subset with target sum exists."""
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

def count_subsets_with_sum(nums, target):
    """Count subsets with target sum."""
    dp = [0] * (target + 1)
    dp[0] = 1
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] += dp[s - num]
    return dp[target]`,
  exercises: [
    {
      prompt: 'Implement Subset Sum.',
      initialCode: `def subset_sum(nums, target):
    # Your code here
    pass`,
      solution: `def subset_sum(nums, target):
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What does dp[i] represent in the Subset Sum problem?',
      options: [
        'The i-th number in the array',
        'Whether a sum of i can be achieved',
        'The maximum sum possible up to index i',
        'The number of subsets with sum i',
      ],
      correctAnswer: 1,
      explanations: [
        'dp[i] is about sums, not array elements.',
        'Correct! dp[i] = True if we can make sum i using some subset of numbers.',
        'We\'re checking possibility, not maximizing.',
        'We\'re checking existence, not counting.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'Why must we iterate backwards when optimizing Subset Sum to 1D?',
      options: [
        'For better cache performance',
        'To avoid using numbers multiple times',
        'It\'s faster than forward iteration',
        'To save memory',
      ],
      correctAnswer: 1,
      explanations: [
        'Cache performance is not the reason.',
        'Correct! Backward iteration ensures each number is used at most once - prevents dp[s-num] from being updated in the same iteration.',
        'Performance is same either direction.',
        'Both directions use same memory.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of Subset Sum?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n * target)',
        'O(2^n)',
      ],
      correctAnswer: 2,
      explanations: [
        'We need nested loops for DP.',
        'No binary search or divide-and-conquer.',
        'Correct! We have n numbers and iterate through sums up to target, giving O(n * target) pseudo-polynomial time.',
        'DP avoids exponential time!',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const partitionEqualSubsetData: LessonContent = {
  title: 'Partition Equal Subset Sum',
  content: `Can we partition an array into two subsets with equal sum? This is a direct application of Subset Sum!

<h2>Problem (LeetCode 416)</h2>

<div class="bg-blue-50 p-4 rounded-lg my-4">
  <p><strong>Problem:</strong> Given an array, return true if it can be partitioned into two subsets with equal sum.</p>
</div>

<p><strong>Key Insight:</strong> If total sum is odd, impossible. Otherwise, find subset with sum = total/2!</p>

<h2>Implementation</h2>

\`\`\`python
def can_partition(nums):
    """
    Partition into two equal sum subsets.
    """
    total = sum(nums)

    # If odd sum, can't partition equally
    if total % 2 != 0:
        return False

    target = total // 2

    # Now it's subset sum problem!
    dp = [False] * (target + 1)
    dp[0] = True

    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]

    return dp[target]
\`\`\`

`,
  codeExample: `def can_partition(nums):
    """Partition into equal sum subsets."""
    total = sum(nums)
    if total % 2 != 0:
        return False

    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True

    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]

    return dp[target]`,
  exercises: [
    {
      prompt: 'Implement Partition Equal Subset Sum.',
      initialCode: `def can_partition(nums):
    # Your code here
    pass`,
      solution: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]`,
      difficulty: Difficulty.Intermediate,
    },
  ],
  quizzes: [
    {
      question: 'What is the key insight for solving Partition Equal Subset Sum?',
      options: [
        'Use binary search to find the partition point',
        'If total sum is odd, return false; otherwise find subset with sum = total/2',
        'Sort the array first',
        'Use greedy algorithm to balance the subsets',
      ],
      correctAnswer: 1,
      explanations: [
        'Binary search doesn\'t help here.',
        'Correct! If sum is odd, equal partition is impossible. If even, finding a subset with sum = total/2 automatically gives us two equal subsets.',
        'Sorting doesn\'t solve the problem.',
        'Greedy doesn\'t work for this problem.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'When is it impossible to partition an array into two equal sum subsets?',
      options: [
        'When the array has odd length',
        'When the array has even length',
        'When the total sum is odd',
        'When the array contains zeros',
      ],
      correctAnswer: 2,
      explanations: [
        'Array length doesn\'t determine if partition is possible.',
        'Even length doesn\'t guarantee impossibility.',
        'Correct! If total sum is odd, we cannot split it into two equal integer sums.',
        'Zeros don\'t affect partition possibility.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How does Partition Equal Subset Sum relate to Subset Sum?',
      options: [
        'They are completely different problems',
        'Partition is just Subset Sum with target = sum(nums) / 2',
        'Partition is easier than Subset Sum',
        'Partition requires a different DP approach',
      ],
      correctAnswer: 1,
      explanations: [
        'They are directly related!',
        'Correct! Partition reduces to Subset Sum by checking if we can make target = total_sum / 2.',
        'Same difficulty, just a reduction.',
        'Same DP approach as Subset Sum.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const coinChangeData: LessonContent = {
  title: 'Coin Change: Unbounded Knapsack Variant',
  content: `Given coins of different denominations and a total amount, find the fewest number of coins needed to make up that amount. This is a classic unbounded knapsack problem.

<h2>Problem (LeetCode 322)</h2>

<div class="example-box">
  <h3>Example 1:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> coins = [1, 2, 5], amount = 11</p>
    <p><strong>Output:</strong> 3</p>
    <p><strong>Explanation:</strong> 11 = 5 + 5 + 1 (3 coins)</p>
  </div>

  <h3>Example 2:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> coins = [2], amount = 3</p>
    <p><strong>Output:</strong> -1</p>
    <p><strong>Explanation:</strong> Impossible to make amount 3 with only coin value 2</p>
  </div>

  <h3>Example 3:</h3>
  <div class="bg-gray-50 p-3 rounded my-2">
    <p><strong>Input:</strong> coins = [1], amount = 0</p>
    <p><strong>Output:</strong> 0</p>
    <p><strong>Explanation:</strong> No coins needed to make amount 0</p>
  </div>
</div>

<h2>DP Solution - Minimum Coins</h2>

<p><strong>State:</strong> dp[i] = minimum coins needed to make amount i</p>

\`\`\`python
def coin_change(coins: list[int], amount: int) -> int:
    """
    Find minimum coins to make amount.
    dp[i] = min coins needed for amount i

    Time: O(amount * len(coins))
    Space: O(amount)
    """
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins needed for amount 0

    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1
\`\`\`

<h2>Coin Change II: Count Number of Ways</h2>

<p>Count the number of combinations that make up an amount (LeetCode 518):</p>

\`\`\`python
def coin_change_2(amount: int, coins: list[int]) -> int:
    """
    Count number of ways to make amount.
    dp[i] = number of ways to make amount i

    Time: O(amount * len(coins))
    Space: O(amount)
    """
    dp = [0] * (amount + 1)
    dp[0] = 1  # One way to make 0: use no coins

    # Important: iterate coins first to avoid counting permutations
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]

    return dp[amount]
\`\`\`

<h2>Key Difference: Combinations vs Permutations</h2>

<table class="w-full border-collapse my-4">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Approach</th>
      <th class="border p-3">Loop Order</th>
      <th class="border p-3">Counts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3">Combinations</td>
      <td class="border p-3">Coins outer, amount inner</td>
      <td class="border p-3">[1,2] and [2,1] as same</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">Permutations</td>
      <td class="border p-3">Amount outer, coins inner</td>
      <td class="border p-3">[1,2] and [2,1] as different</td>
    </tr>
  </tbody>
</table>

<h2>Example Walkthrough</h2>

<p>For coins = [1, 2, 5] and amount = 5:</p>

<pre>
dp[0] = 0

For coin = 1:
  dp[1] = dp[0] + 1 = 1
  dp[2] = dp[1] + 1 = 2
  dp[3] = dp[2] + 1 = 3
  dp[4] = dp[3] + 1 = 4
  dp[5] = dp[4] + 1 = 5

For coin = 2:
  dp[2] = min(dp[2], dp[0] + 1) = min(2, 1) = 1
  dp[3] = min(dp[3], dp[1] + 1) = min(3, 2) = 2
  dp[4] = min(dp[4], dp[2] + 1) = min(4, 2) = 2
  dp[5] = min(dp[5], dp[3] + 1) = min(5, 3) = 3

For coin = 5:
  dp[5] = min(dp[5], dp[0] + 1) = min(3, 1) = 1

Final: dp[5] = 1
</pre>

<h2>Space Optimization</h2>

<p>The solution already uses O(amount) space. We cannot optimize further as we need all previous values.</p>

<h2>Related Problems</h2>

<ul>
  <li><strong>LeetCode 322:</strong> Coin Change (minimum coins)</li>
  <li><strong>LeetCode 518:</strong> Coin Change II (count ways)</li>
  <li><strong>LeetCode 377:</strong> Combination Sum IV (permutations)</li>
  <li><strong>LeetCode 983:</strong> Minimum Cost For Tickets</li>
</ul>`,
  codeExample: `# Coin Change - Minimum coins needed

def coin_change(coins, amount):
    """
    Find minimum coins to make amount.
    dp[i] = min coins for amount i
    """
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

# Example
coins = [1, 2, 5]
amount = 11
print(coin_change(coins, amount))  # 3 (5+5+1)

# Coin Change II - Count ways
def coin_change_2(amount, coins):
    """Count number of ways to make amount."""
    dp = [0] * (amount + 1)
    dp[0] = 1

    # Coins first to avoid permutations
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]

    return dp[amount]

print(coin_change_2(5, [1, 2, 5]))  # 4 ways`,
  exercises: [],
  quizzes: [
    {
      question: 'What is the main difference between Coin Change I and Coin Change II?',
      options: [
        'Coin Change I uses BFS, Coin Change II uses DP',
        'Coin Change I minimizes coins needed, Coin Change II counts number of ways',
        'Coin Change I is faster than Coin Change II',
        'They are the same problem',
      ],
      correctAnswer: 1,
      explanations: [
        'Both can use DP efficiently.',
        'Correct! Coin Change I (LeetCode 322) finds minimum coins needed. Coin Change II (LeetCode 518) counts the number of combinations.',
        'Time complexity is similar for both.',
        'They solve different objectives!',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In Coin Change II, why do we iterate coins in the outer loop and amount in the inner loop?',
      options: [
        'For better performance',
        'To count combinations instead of permutations',
        'To save memory',
        'It doesn\'t matter',
      ],
      correctAnswer: 1,
      explanations: [
        'Performance is the same either way.',
        'Correct! Outer coin loop ensures we count [1,2] and [2,1] as the same combination. Reversing loops would count permutations (different orderings as different).',
        'Memory usage is same either way.',
        'Loop order is critical for correct counting!',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'Why is Coin Change considered an Unbounded Knapsack variant?',
      options: [
        'Because coins have weights and values',
        'Because we can use each coin unlimited times',
        'Because we use the same DP array structure',
        'It\'s not related to Knapsack',
      ],
      correctAnswer: 1,
      explanations: [
        'Coins have denominations and count, not weights/values.',
        'Correct! We have unlimited coins of each denomination, just like unbounded knapsack has unlimited supply of each item.',
        'DP structure is similar but that\'s not the defining characteristic.',
        'It\'s a classic unbounded knapsack application!',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// ============================================================================

export const knapsackLessons = {
  '01-knapsack': zeroOneKnapsackData,
  'unbounded-knapsack': unboundedKnapsackData,
  'subset-sum': subsetSumData,
  'partition-equal-subset': partitionEqualSubsetData,
  'coin-change': coinChangeData,
};
