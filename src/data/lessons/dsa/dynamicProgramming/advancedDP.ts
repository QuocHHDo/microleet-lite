import { LessonContent } from '@/common/commonLesson';
import { Difficulty } from '@/common/commonConcept';
import { CodeContent } from '@/common/commonLanguage';


// SECTION 6: ADVANCED DP PATTERNS
// ============================================================================

const bitmaskDPData: LessonContent = {
  title: 'Bitmask DP: Subsets and Permutations',
  content: `<h1>Bitmask DP: Encoding State with Bits</h1>

<p>Bitmask DP uses binary numbers to represent subsets, allowing efficient state compression for problems with up to ~20 items.</p>

<h2>Key Concept</h2>

<p>A bitmask is an integer where each bit represents whether an element is included (1) or excluded (0).</p>

<div class="bg-gray-50 p-4 rounded-lg my-4">
<pre class="text-gray-800">
For set {A, B, C}:
- 000 (0) = empty set
- 001 (1) = {A}
- 010 (2) = {B}
- 011 (3) = {A, B}
- 111 (7) = {A, B, C}
</pre>
</div>

<h2>Traveling Salesman Problem (TSP)</h2>

<p>Visit all cities exactly once with minimum cost. Classic bitmask DP problem!</p>

\`\`\`python
def tsp(dist):
    """
    Traveling Salesman using Bitmask DP.
    dp[mask][i] = min cost to visit cities in mask, ending at city i

    Time: O(n² * 2ⁿ), Space: O(n * 2ⁿ)
    """
    n = len(dist)
    ALL_VISITED = (1 << n) - 1
    dp = [[float('inf')] * n for _ in range(1 << n)]

    # Start from city 0
    dp[1][0] = 0

    for mask in range(1 << n):
        for last in range(n):
            if not (mask & (1 << last)):
                continue

            for next_city in range(n):
                if mask & (1 << next_city):
                    continue

                new_mask = mask | (1 << next_city)
                dp[new_mask][next_city] = min(
                    dp[new_mask][next_city],
                    dp[mask][last] + dist[last][next_city]
                )

    # Return to starting city
    return min(dp[ALL_VISITED][i] + dist[i][0] for i in range(1, n))
\`\`\`

\`\`\`typescript
function tsp(dist: number[][]): number {
    /**
     * Traveling Salesman using Bitmask DP.
     * dp[mask][i] = min cost to visit cities in mask, ending at city i
     *
     * Time: O(n² * 2ⁿ), Space: O(n * 2ⁿ)
     */
    const n = dist.length;
    const ALL_VISITED = (1 << n) - 1;
    const dp: number[][] = Array.from(
        { length: 1 << n },
        () => Array(n).fill(Infinity)
    );

    // Start from city 0
    dp[1][0] = 0;

    for (let mask = 0; mask < (1 << n); mask++) {
        for (let last = 0; last < n; last++) {
            if (!(mask & (1 << last))) {
                continue;
            }

            for (let nextCity = 0; nextCity < n; nextCity++) {
                if (mask & (1 << nextCity)) {
                    continue;
                }

                const newMask = mask | (1 << nextCity);
                dp[newMask][nextCity] = Math.min(
                    dp[newMask][nextCity],
                    dp[mask][last] + dist[last][nextCity]
                );
            }
        }
    }

    // Return to starting city
    let minCost = Infinity;
    for (let i = 1; i < n; i++) {
        minCost = Math.min(minCost, dp[ALL_VISITED][i] + dist[i][0]);
    }
    return minCost;
}
\`\`\`

<h2>Assignment Problem</h2>

<p>Assign n tasks to n people with minimum cost:</p>

\`\`\`python
def min_cost_assignment(cost):
    """
    Assign n tasks to n people.
    dp[mask] = min cost to assign tasks in mask
    """
    n = len(cost)
    dp = [float('inf')] * (1 << n)
    dp[0] = 0

    for mask in range(1 << n):
        person = bin(mask).count('1')  # Next person to assign
        if person >= n:
            continue

        for task in range(n):
            if not (mask & (1 << task)):
                new_mask = mask | (1 << task)
                dp[new_mask] = min(dp[new_mask], dp[mask] + cost[person][task])

    return dp[(1 << n) - 1]
\`\`\`

\`\`\`typescript
function minCostAssignment(cost: number[][]): number {
    /**
     * Assign n tasks to n people.
     * dp[mask] = min cost to assign tasks in mask
     */
    const n = cost.length;
    const dp: number[] = Array(1 << n).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < (1 << n); mask++) {
        const person = mask.toString(2).split('1').length - 1;  // Count set bits
        if (person >= n) {
            continue;
        }

        for (let task = 0; task < n; task++) {
            if (!(mask & (1 << task))) {
                const newMask = mask | (1 << task);
                dp[newMask] = Math.min(dp[newMask], dp[mask] + cost[person][task]);
            }
        }
    }

    return dp[(1 << n) - 1];
}
\`\`\`

<h2>Bit Manipulation Cheat Sheet</h2>

<table class="w-full border-collapse my-4">
  <thead>
    <tr class="bg-gray-200">
      <th class="border p-3">Operation</th>
      <th class="border p-3">Code</th>
      <th class="border p-3">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-3">Check if i-th bit set</td>
      <td class="border p-3">\`mask & (1 << i)\`</td>
      <td class="border p-3">Is element i included?</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">Set i-th bit</td>
      <td class="border p-3">\`mask | (1 << i)\`</td>
      <td class="border p-3">Include element i</td>
    </tr>
    <tr>
      <td class="border p-3">Clear i-th bit</td>
      <td class="border p-3">\`mask & ~(1 << i)\`</td>
      <td class="border p-3">Exclude element i</td>
    </tr>
    <tr class="bg-gray-50">
      <td class="border p-3">Count set bits</td>
      <td class="border p-3">\`bin(mask).count('1')\`</td>
      <td class="border p-3">How many elements?</td>
    </tr>
  </tbody>
</table>`,
  codeExample: {
    python: `# Bitmask DP - Assignment Problem

def min_cost_assignment(cost):
    """
    Assign n tasks to n people with minimum cost.
    dp[mask] = min cost for tasks in mask
    """
    n = len(cost)
    dp = [float('inf')] * (1 << n)
    dp[0] = 0

    for mask in range(1 << n):
        person = bin(mask).count('1')
        if person >= n:
            continue

        for task in range(n):
            if not (mask & (1 << task)):
                new_mask = mask | (1 << task)
                dp[new_mask] = min(
                    dp[new_mask],
                    dp[mask] + cost[person][task]
                )

    return dp[(1 << n) - 1]

# Example
cost = [[9, 2, 7], [6, 4, 3], [5, 8, 1]]
print(min_cost_assignment(cost))  # 13 (person 0->task 1, person 1->task 2, person 2->task 0)`,
    typescript: `// Bitmask DP - Assignment Problem

function minCostAssignment(cost: number[][]): number {
    /**
     * Assign n tasks to n people with minimum cost.
     * dp[mask] = min cost for tasks in mask
     */
    const n = cost.length;
    const dp: number[] = Array(1 << n).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < (1 << n); mask++) {
        const person = mask.toString(2).split('1').length - 1;
        if (person >= n) {
            continue;
        }

        for (let task = 0; task < n; task++) {
            if (!(mask & (1 << task))) {
                const newMask = mask | (1 << task);
                dp[newMask] = Math.min(
                    dp[newMask],
                    dp[mask] + cost[person][task]
                );
            }
        }
    }

    return dp[(1 << n) - 1];
}

// Example
const cost = [[9, 2, 7], [6, 4, 3], [5, 8, 1]];
console.log(minCostAssignment(cost));  // 13 (person 0->task 1, person 1->task 2, person 2->task 0)`
  },
  exercises: [
    {
      prompt: 'Implement the Assignment Problem using bitmask DP to minimize total cost.',
      initialCode: {
        python: `def min_cost_assignment(cost):
    """
    Assign n tasks to n people with minimum cost.
    cost[i][j] = cost for person i to do task j

    Args:
        cost: 2D array of costs
    Returns:
        Minimum total cost
    """
    # Your code here
    pass`,
        typescript: `function minCostAssignment(cost: number[][]): number {
    /**
     * Assign n tasks to n people with minimum cost.
     * cost[i][j] = cost for person i to do task j
     *
     * @param cost - 2D array of costs
     * @returns Minimum total cost
     */
    // Your code here
    return 0;
}`
      },
      solution: {
        python: `def min_cost_assignment(cost):
    """Assignment Problem using bitmask DP."""
    n = len(cost)
    dp = [float('inf')] * (1 << n)
    dp[0] = 0

    for mask in range(1 << n):
        person = bin(mask).count('1')
        if person >= n:
            continue

        for task in range(n):
            if not (mask & (1 << task)):
                new_mask = mask | (1 << task)
                dp[new_mask] = min(dp[new_mask], dp[mask] + cost[person][task])

    return dp[(1 << n) - 1]`,
        typescript: `function minCostAssignment(cost: number[][]): number {
    /** Assignment Problem using bitmask DP. */
    const n = cost.length;
    const dp: number[] = Array(1 << n).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < (1 << n); mask++) {
        const person = mask.toString(2).split('1').length - 1;
        if (person >= n) {
            continue;
        }

        for (let task = 0; task < n; task++) {
            if (!(mask & (1 << task))) {
                const newMask = mask | (1 << task);
                dp[newMask] = Math.min(dp[newMask], dp[mask] + cost[person][task]);
            }
        }
    }

    return dp[(1 << n) - 1];
}`
      },
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Count the number of ways to partition a set of n elements into k non-empty subsets.',
      initialCode: `def count_partitions(n, k):
    """
    Count ways to partition n elements into k subsets.

    Args:
        n: Number of elements
        k: Number of subsets
    Returns:
        Number of ways to partition
    """
    # Your code here
    pass`,
      solution: `def count_partitions(n, k):
    """Count partitions using bitmask DP."""
    if k > n or k == 0:
        return 0
    if k == 1 or k == n:
        return 1

    # dp[mask][j] = ways to partition elements in mask into j subsets
    dp = [[0] * (k + 1) for _ in range(1 << n)]
    dp[0][0] = 1

    for mask in range(1 << n):
        num_elements = bin(mask).count('1')
        for j in range(min(num_elements, k) + 1):
            if dp[mask][j] == 0:
                continue

            # Find first unset bit (next element to add)
            first_unset = 0
            while first_unset < n and (mask & (1 << first_unset)):
                first_unset += 1

            if first_unset == n:
                continue

            # Add to existing subset
            if j > 0:
                new_mask = mask | (1 << first_unset)
                dp[new_mask][j] += dp[mask][j] * j

            # Create new subset
            new_mask = mask | (1 << first_unset)
            dp[new_mask][j + 1] += dp[mask][j]

    return dp[(1 << n) - 1][k]`,
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What does a bitmask represent in Bitmask DP?',
      options: [
        'A binary number',
        'A subset of elements (each bit indicates inclusion)',
        'A permutation of elements',
        'An array index',
      ],
      correctAnswer: 1,
      explanations: [
        'While it is a binary number, that\'s not what it represents.',
        'Correct! Each bit in the bitmask represents whether an element is included (1) or excluded (0) in the subset.',
        'Bitmasks represent subsets, not orderings.',
        'Bitmasks encode subset information, not indices.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'How do you check if the i-th bit is set in a mask?',
      options: [
        'mask[i]',
        'mask & (1 << i)',
        'mask | (1 << i)',
        'mask >> i',
      ],
      correctAnswer: 1,
      explanations: [
        'Bitmask is an integer, not an array.',
        'Correct! Using AND with (1 << i) checks if the i-th bit is set. Non-zero result means bit is set.',
        'This SETS the i-th bit, doesn\'t check it.',
        'This shifts the mask but doesn\'t check a specific bit.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'What is the time complexity of TSP using Bitmask DP with n cities?',
      options: [
        'O(n!)',
        'O(2ⁿ)',
        'O(n² * 2ⁿ)',
        'O(n³)',
      ],
      correctAnswer: 2,
      explanations: [
        'Bitmask DP avoids the exponential factorial complexity!',
        'We also iterate over cities (O(n²) factor).',
        'Correct! We have 2ⁿ possible subsets (masks) and for each we try n² city pairs, giving O(n² * 2ⁿ).',
        'This is too optimistic for TSP.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'When is Bitmask DP most suitable?',
      options: [
        'When n can be up to 1000',
        'When n is small (typically ≤ 20) and we need to track subsets',
        'For string problems',
        'When we need O(n log n) complexity',
      ],
      correctAnswer: 1,
      explanations: [
        '2¹⁰⁰⁰ states is impossibly large!',
        'Correct! Bitmask DP requires O(2ⁿ) space/time, so n must be small (typically ≤ 20). Perfect for subset/permutation problems.',
        'Bitmask is for subset/permutation, not strings.',
        'Bitmask DP is exponential, not log-linear.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const stateMachineDPData: LessonContent = {
  title: 'State Machine DP: Modeling States',
  content: `<h1>State Machine DP: Tracking Valid State Transitions</h1>

<p>Many DP problems involve transitioning between states with certain rules. State Machine DP explicitly models these states and transitions.</p>

<h2>Best Time to Buy and Sell Stock (LeetCode 121-123, 309, 714)</h2>

<p>Classic example: at each day, you can be in different states (holding stock, not holding stock, cooldown, etc.)</p>

<h3>With Cooldown (LeetCode 309)</h3>

<p>After selling, must wait one day before buying again:</p>

\`\`\`python
def max_profit_with_cooldown(prices):
    """
    States:
    - hold: currently holding stock
    - sold: just sold stock (cooldown tomorrow)
    - rest: not holding, not in cooldown
    """
    if not prices:
        return 0

    hold = -prices[0]  # Buy on day 0
    sold = 0           # Can't sell on day 0
    rest = 0           # Start in rest state

    for price in prices[1:]:
        prev_hold, prev_sold, prev_rest = hold, sold, rest

        hold = max(prev_hold, prev_rest - price)  # Keep holding or buy
        sold = prev_hold + price                  # Sell
        rest = max(prev_rest, prev_sold)          # Rest or exit cooldown

    return max(sold, rest)
\`\`\`

\`\`\`typescript
function maxProfitWithCooldown(prices: number[]): number {
    /**
     * States:
     * - hold: currently holding stock
     * - sold: just sold stock (cooldown tomorrow)
     * - rest: not holding, not in cooldown
     */
    if (prices.length === 0) {
        return 0;
    }

    let hold = -prices[0];  // Buy on day 0
    let sold = 0;           // Can't sell on day 0
    let rest = 0;           // Start in rest state

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        const prevHold = hold;
        const prevSold = sold;
        const prevRest = rest;

        hold = Math.max(prevHold, prevRest - price);  // Keep holding or buy
        sold = prevHold + price;                      // Sell
        rest = Math.max(prevRest, prevSold);          // Rest or exit cooldown
    }

    return Math.max(sold, rest);
}
\`\`\`

<h3>With Transaction Fee (LeetCode 714)</h3>

\`\`\`python
def max_profit_with_fee(prices, fee):
    """
    Two states: holding or not holding stock
    Pay fee when selling
    """
    hold = -prices[0]
    cash = 0

    for price in prices[1:]:
        hold = max(hold, cash - price)
        cash = max(cash, hold + price - fee)

    return cash
\`\`\`

\`\`\`typescript
function maxProfitWithFee(prices: number[], fee: number): number {
    /**
     * Two states: holding or not holding stock
     * Pay fee when selling
     */
    let hold = -prices[0];
    let cash = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        hold = Math.max(hold, cash - price);
        cash = Math.max(cash, hold + price - fee);
    }

    return cash;
}
\`\`\`

<h2>House Robber III (LeetCode 337)</h2>

<p>Rob houses in a binary tree (can't rob parent and child):</p>

\`\`\`python
def rob_tree(root):
    """
    State: (rob_this, skip_this)
    Returns tuple: (max if rob this node, max if skip this node)
    """
    def dp(node):
        if not node:
            return (0, 0)

        left_rob, left_skip = dp(node.left)
        right_rob, right_skip = dp(node.right)

        # If rob this node, must skip children
        rob_this = node.val + left_skip + right_skip

        # If skip this node, can choose best for children
        skip_this = max(left_rob, left_skip) + max(right_rob, right_skip)

        return (rob_this, skip_this)

    return max(dp(root))
\`\`\`

\`\`\`typescript
interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function robTree(root: TreeNode | null): number {
    /**
     * State: [robThis, skipThis]
     * Returns tuple: [max if rob this node, max if skip this node]
     */
    function dp(node: TreeNode | null): [number, number] {
        if (!node) {
            return [0, 0];
        }

        const [leftRob, leftSkip] = dp(node.left);
        const [rightRob, rightSkip] = dp(node.right);

        // If rob this node, must skip children
        const robThis = node.val + leftSkip + rightSkip;

        // If skip this node, can choose best for children
        const skipThis = Math.max(leftRob, leftSkip) + Math.max(rightRob, rightSkip);

        return [robThis, skipThis];
    }

    const [rob, skip] = dp(root);
    return Math.max(rob, skip);
}
\`\`\``,
  codeExample: {
    python: `# State Machine DP - Stock with Cooldown

def max_profit_with_cooldown(prices):
    """
    Buy/sell stock with cooldown period.
    States: hold, sold (cooldown), rest
    """
    if not prices:
        return 0

    hold = -prices[0]
    sold = 0
    rest = 0

    for price in prices[1:]:
        prev_hold, prev_sold, prev_rest = hold, sold, rest

        hold = max(prev_hold, prev_rest - price)
        sold = prev_hold + price
        rest = max(prev_rest, prev_sold)

    return max(sold, rest)

# Example
prices = [1, 2, 3, 0, 2]
print(max_profit_with_cooldown(prices))  # 3`,
    typescript: `// State Machine DP - Stock with Cooldown

function maxProfitWithCooldown(prices: number[]): number {
  /**
   * Buy/sell stock with cooldown period.
   * States: hold, sold (cooldown), rest
   */
  if (prices.length === 0) {
    return 0;
  }

  let hold = -prices[0];
  let sold = 0;
  let rest = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    const prevHold = hold;
    const prevSold = sold;
    const prevRest = rest;

    hold = Math.max(prevHold, prevRest - price);
    sold = prevHold + price;
    rest = Math.max(prevRest, prevSold);
  }

  return Math.max(sold, rest);
}

// Example
const prices = [1, 2, 3, 0, 2];
console.log(maxProfitWithCooldown(prices));  // 3`,
  },
  exercises: [
    {
      prompt: 'Implement Best Time to Buy and Sell Stock with Cooldown using state machine DP.',
      initialCode: {
        python: `def max_profit_with_cooldown(prices):
    """
    Max profit with cooldown period after selling.
    States: hold, sold (cooldown), rest

    Args:
        prices: List of stock prices
    Returns:
        Maximum profit
    """
    # Your code here
    pass`,
        typescript: `function maxProfitWithCooldown(prices: number[]): number {
    /**
     * Max profit with cooldown period after selling.
     * States: hold, sold (cooldown), rest
     *
     * @param prices - List of stock prices
     * @returns Maximum profit
     */
    // Your code here
    return 0;
}`
      },
      solution: {
        python: `def max_profit_with_cooldown(prices):
    """Stock with cooldown using state machine DP."""
    if not prices:
        return 0

    hold = -prices[0]
    sold = 0
    rest = 0

    for price in prices[1:]:
        prev_hold, prev_sold, prev_rest = hold, sold, rest

        hold = max(prev_hold, prev_rest - price)
        sold = prev_hold + price
        rest = max(prev_rest, prev_sold)

    return max(sold, rest)`,
        typescript: `function maxProfitWithCooldown(prices: number[]): number {
    /**Stock with cooldown using state machine DP.*/
    if (prices.length === 0) {
        return 0;
    }

    let hold = -prices[0];
    let sold = 0;
    let rest = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        const prevHold = hold;
        const prevSold = sold;
        const prevRest = rest;

        hold = Math.max(prevHold, prevRest - price);
        sold = prevHold + price;
        rest = Math.max(prevRest, prevSold);
    }

    return Math.max(sold, rest);
}`
      },
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Implement Best Time to Buy and Sell Stock with Transaction Fee.',
      initialCode: {
        python: `def max_profit_with_fee(prices, fee):
    """
    Max profit with transaction fee on each sale.

    Args:
        prices: List of stock prices
        fee: Transaction fee
    Returns:
        Maximum profit
    """
    # Your code here
    pass`,
        typescript: `function maxProfitWithFee(prices: number[], fee: number): number {
    /**
     * Max profit with transaction fee on each sale.
     *
     * @param prices - List of stock prices
     * @param fee - Transaction fee
     * @returns Maximum profit
     */
    // Your code here
    return 0;
}`
      },
      solution: {
        python: `def max_profit_with_fee(prices, fee):
    """Stock with transaction fee."""
    if not prices:
        return 0

    hold = -prices[0]
    cash = 0

    for price in prices[1:]:
        hold = max(hold, cash - price)
        cash = max(cash, hold + price - fee)

    return cash`,
        typescript: `function maxProfitWithFee(prices: number[], fee: number): number {
    /**Stock with transaction fee.*/
    if (prices.length === 0) {
        return 0;
    }

    let hold = -prices[0];
    let cash = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        hold = Math.max(hold, cash - price);
        cash = Math.max(cash, hold + price - fee);
    }

    return cash;
}`
      },
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What does State Machine DP model?',
      options: [
        'Physical machines and their operations',
        'Valid states and transitions between them',
        'Machine learning algorithms',
        'State-level geography data',
      ],
      correctAnswer: 1,
      explanations: [
        'It\'s a DP pattern, not about physical machines.',
        'Correct! State Machine DP explicitly models different states a system can be in and the valid transitions between states.',
        'Unrelated to machine learning.',
        'Unrelated to geography.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'In the Stock with Cooldown problem, what are the three states?',
      options: [
        'Buy, sell, wait',
        'Hold, sold (cooldown), rest',
        'Profit, loss, neutral',
        'Day 1, day 2, day 3',
      ],
      correctAnswer: 1,
      explanations: [
        'These are actions, not states.',
        'Correct! The three states are: hold (holding stock), sold (just sold, in cooldown), rest (not holding, not in cooldown).',
        'These are outcomes, not states.',
        'Days are not the states we model.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why do we save previous state values (prev_hold, prev_sold, prev_rest) in the cooldown problem?',
      options: [
        'To save memory',
        'For debugging',
        'To prevent using updated values from the same iteration',
        'It\'s not necessary',
      ],
      correctAnswer: 2,
      explanations: [
        'This doesn\'t save memory, it uses more variables.',
        'Not for debugging purposes.',
        'Correct! We need previous iteration values because updating hold affects sold calculation. Saving prevents using the new hold value when computing sold.',
        'It\'s critical for correctness!',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'Which problem type is best suited for State Machine DP?',
      options: [
        'Sorting algorithms',
        'Problems with discrete states and transition rules',
        'Graph shortest path',
        'String matching',
      ],
      correctAnswer: 1,
      explanations: [
        'Sorting doesn\'t involve state transitions.',
        'Correct! State Machine DP excels when problem has clear states (like holding/not holding stock) with rules governing transitions.',
        'Use Dijkstra or BFS for shortest paths.',
        'Use KMP or other string algorithms.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

const digitDPData: LessonContent = {
  title: 'Digit DP: Counting Numbers with Constraints',
  content: `<h1>Digit DP: Working with Digit Constraints</h1>

<p>Digit DP is used to count numbers in a range that satisfy certain digit-based constraints.</p>

<h2>Count Numbers Without Digit 4</h2>

<p>Count numbers from 1 to N that don't contain digit 4:</p>

\`\`\`python
def count_without_digit_4(n):
    """
    Count numbers from 1 to n without digit 4.
    """
    if n < 0:
        return 0

    digits = [int(d) for d in str(n)]
    length = len(digits)

    memo = {}

    def dp(pos, tight, started):
        """
        pos: current position
        tight: whether we're still bounded by n
        started: have we placed a non-zero digit?
        """
        if pos == length:
            return 1 if started else 0

        if (pos, tight, started) in memo:
            return memo[(pos, tight, started)]

        limit = digits[pos] if tight else 9
        result = 0

        for digit in range(0, limit + 1):
            if digit == 4:
                continue

            new_started = started or (digit > 0)
            new_tight = tight and (digit == limit)

            result += dp(pos + 1, new_tight, new_started)

        memo[(pos, tight, started)] = result
        return result

    return dp(0, True, False)
\`\`\`

\`\`\`typescript
function countWithoutDigit4(n: number): number {
    /**
     * Count numbers from 1 to n without digit 4.
     */
    if (n < 0) {
        return 0;
    }

    const digits = n.toString().split('').map(Number);
    const length = digits.length;
    const memo = new Map<string, number>();

    function dp(pos: number, tight: boolean, started: boolean): number {
        /**
         * pos: current position
         * tight: whether we're still bounded by n
         * started: have we placed a non-zero digit?
         */
        if (pos === length) {
            return started ? 1 : 0;
        }

        const key = \`\${pos},\${tight},\${started}\`;
        if (memo.has(key)) {
            return memo.get(key)!;
        }

        const limit = tight ? digits[pos] : 9;
        let result = 0;

        for (let digit = 0; digit <= limit; digit++) {
            if (digit === 4) {
                continue;
            }

            const newStarted = started || digit > 0;
            const newTight = tight && digit === limit;

            result += dp(pos + 1, newTight, newStarted);
        }

        memo.set(key, result);
        return result;
    }

    return dp(0, true, false);
}
\`\`\`

<h2>Pattern</h2>

<p>Digit DP typically uses:</p>
<ul>
  <li><strong>pos:</strong> Current position in number</li>
  <li><strong>tight:</strong> Are we still bounded by the limit?</li>
  <li><strong>started:</strong> Have we started placing non-zero digits?</li>
  <li>Additional states based on problem constraints</li>
</ul>`,
  codeExample: {
    python: `# Digit DP - Count without digit 4

def count_without_4(n):
    """Count numbers 1 to n without digit 4."""
    if n < 0:
        return 0

    digits = [int(d) for d in str(n)]
    memo = {}

    def dp(pos, tight, started):
        if pos == len(digits):
            return 1 if started else 0

        if (pos, tight, started) in memo:
            return memo[(pos, tight, started)]

        limit = digits[pos] if tight else 9
        result = 0

        for d in range(0, limit + 1):
            if d == 4:
                continue
            result += dp(
                pos + 1,
                tight and (d == limit),
                started or (d > 0)
            )

        memo[(pos, tight, started)] = result
        return result

    return dp(0, True, False)`,
    typescript: `// Digit DP - Count without digit 4

function countWithout4(n: number): number {
  /**Count numbers 1 to n without digit 4.*/
  if (n < 0) {
    return 0;
  }

  const digits = n.toString().split('').map(Number);
  const memo = new Map<string, number>();

  function dp(pos: number, tight: boolean, started: boolean): number {
    if (pos === digits.length) {
      return started ? 1 : 0;
    }

    const key = \`\${pos},\${tight},\${started}\`;
    if (memo.has(key)) {
      return memo.get(key)!;
    }

    const limit = tight ? digits[pos] : 9;
    let result = 0;

    for (let d = 0; d <= limit; d++) {
      if (d === 4) {
        continue;
      }
      result += dp(
        pos + 1,
        tight && (d === limit),
        started || (d > 0)
      );
    }

    memo.set(key, result);
    return result;
  }

  return dp(0, true, false);
}`,
  },
  exercises: [
    {
      prompt: 'Count numbers from 1 to n that do not contain the digit 4.',
      initialCode: {
        python: `def count_without_4(n):
    """
    Count numbers 1 to n without digit 4.

    Args:
        n: Upper limit
    Returns:
        Count of valid numbers
    """
    # Your code here
    pass`,
        typescript: `function countWithout4(n: number): number {
    /**
     * Count numbers 1 to n without digit 4.
     *
     * @param n - Upper limit
     * @returns Count of valid numbers
     */
    // Your code here
    return 0;
}`
      },
      solution: {
        python: `def count_without_4(n):
    """Count without digit 4 using digit DP."""
    if n < 0:
        return 0

    digits = [int(d) for d in str(n)]
    memo = {}

    def dp(pos, tight, started):
        if pos == len(digits):
            return 1 if started else 0

        if (pos, tight, started) in memo:
            return memo[(pos, tight, started)]

        limit = digits[pos] if tight else 9
        result = 0

        for d in range(0, limit + 1):
            if d == 4:
                continue
            result += dp(
                pos + 1,
                tight and (d == limit),
                started or (d > 0)
            )

        memo[(pos, tight, started)] = result
        return result

    return dp(0, True, False)`,
        typescript: `function countWithout4(n: number): number {
    /**Count without digit 4 using digit DP.*/
    if (n < 0) {
        return 0;
    }

    const digits = n.toString().split('').map(Number);
    const memo = new Map<string, number>();

    function dp(pos: number, tight: boolean, started: boolean): number {
        if (pos === digits.length) {
            return started ? 1 : 0;
        }

        const key = \`\${pos},\${tight},\${started}\`;
        if (memo.has(key)) {
            return memo.get(key)!;
        }

        const limit = tight ? digits[pos] : 9;
        let result = 0;

        for (let d = 0; d <= limit; d++) {
            if (d === 4) {
                continue;
            }
            result += dp(
                pos + 1,
                tight && (d === limit),
                started || (d > 0)
            );
        }

        memo.set(key, result);
        return result;
    }

    return dp(0, true, false);
}`
      },
      difficulty: Difficulty.Advanced,
    },
    {
      prompt: 'Count numbers from 1 to n where the sum of digits is divisible by k.',
      initialCode: {
        python: `def count_divisible_digit_sum(n, k):
    """
    Count numbers where digit sum is divisible by k.

    Args:
        n: Upper limit
        k: Divisor
    Returns:
        Count of valid numbers
    """
    # Your code here
    pass`,
        typescript: `function countDivisibleDigitSum(n: number, k: number): number {
    /**
     * Count numbers where digit sum is divisible by k.
     *
     * @param n - Upper limit
     * @param k - Divisor
     * @returns Count of valid numbers
     */
    // Your code here
    return 0;
}`
      },
      solution: {
        python: `def count_divisible_digit_sum(n, k):
    """Count with digit sum divisible by k."""
    if n < 0:
        return 0

    digits = [int(d) for d in str(n)]
    memo = {}

    def dp(pos, tight, digit_sum, started):
        if pos == len(digits):
            return 1 if started and digit_sum % k == 0 else 0

        if (pos, tight, digit_sum, started) in memo:
            return memo[(pos, tight, digit_sum, started)]

        limit = digits[pos] if tight else 9
        result = 0

        for d in range(0, limit + 1):
            result += dp(
                pos + 1,
                tight and (d == limit),
                (digit_sum + d) % k,
                started or (d > 0)
            )

        memo[(pos, tight, digit_sum, started)] = result
        return result

    return dp(0, True, 0, False)`,
        typescript: `function countDivisibleDigitSum(n: number, k: number): number {
    /**Count with digit sum divisible by k.*/
    if (n < 0) {
        return 0;
    }

    const digits = n.toString().split('').map(Number);
    const memo = new Map<string, number>();

    function dp(pos: number, tight: boolean, digitSum: number, started: boolean): number {
        if (pos === digits.length) {
            return started && digitSum % k === 0 ? 1 : 0;
        }

        const key = \`\${pos},\${tight},\${digitSum},\${started}\`;
        if (memo.has(key)) {
            return memo.get(key)!;
        }

        const limit = tight ? digits[pos] : 9;
        let result = 0;

        for (let d = 0; d <= limit; d++) {
            result += dp(
                pos + 1,
                tight && (d === limit),
                (digitSum + d) % k,
                started || (d > 0)
            );
        }

        memo.set(key, result);
        return result;
    }

    return dp(0, true, 0, false);
}`
      },
      difficulty: Difficulty.Advanced,
    },
  ],
  quizzes: [
    {
      question: 'What is Digit DP primarily used for?',
      options: [
        'Performing arithmetic operations',
        'Counting numbers in a range that satisfy digit-based constraints',
        'Converting between number bases',
        'Sorting digits',
      ],
      correctAnswer: 1,
      explanations: [
        'Digit DP is not for basic arithmetic.',
        'Correct! Digit DP counts numbers from 1 to N that satisfy constraints like "no digit 4" or "digit sum divisible by k".',
        'Not for base conversion.',
        'Not for sorting.',
      ],
      difficulty: Difficulty.Beginner,
    },
    {
      question: 'What does the "tight" parameter represent in Digit DP?',
      options: [
        'Whether memory is constrained',
        'Whether we are still bounded by the upper limit N',
        'Whether the number is even',
        'Whether we found a valid number',
      ],
      correctAnswer: 1,
      explanations: [
        'Not related to memory constraints.',
        'Correct! tight=True means we cannot place digits larger than the corresponding digit in N. Once tight becomes False, we can use any digit 0-9.',
        'Parity is not what tight tracks.',
        'Validity is determined at the end, not by tight.',
      ],
      difficulty: Difficulty.Intermediate,
    },
    {
      question: 'Why do we need the "started" parameter in Digit DP?',
      options: [
        'To track if we began the recursion',
        'To handle leading zeros (distinguish 007 from 7)',
        'To know when to stop',
        'For performance optimization',
      ],
      correctAnswer: 1,
      explanations: [
        'Not about recursion initiation.',
        'Correct! started=False until we place a non-zero digit. This prevents counting numbers with leading zeros (e.g., 007 should be 7).',
        'We stop when pos reaches the end.',
        'Not primarily for optimization.',
      ],
      difficulty: Difficulty.Advanced,
    },
    {
      question: 'What are the typical state parameters in Digit DP?',
      options: [
        'Only position',
        'Position, tight, started, and problem-specific constraints',
        'Position and value',
        'Tight and started only',
      ],
      correctAnswer: 1,
      explanations: [
        'We need more than just position.',
        'Correct! Common states: pos (position), tight (bounded?), started (leading zeros?), plus constraint-specific like digit_sum, last_digit, etc.',
        'We need tight and started for correctness.',
        'We also need position to traverse digits.',
      ],
      difficulty: Difficulty.Intermediate,
    },
  ],
};

// ============================================================================

export const advancedDPLessons = {
  'bitmask-dp': bitmaskDPData,
  'state-machine-dp': stateMachineDPData,
  'digit-dp': digitDPData,
};
