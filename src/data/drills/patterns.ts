export interface Pattern {
  id: string;
  name: string;
  /** What in a problem statement should make you reach for this pattern. */
  cue: string;
  /** Patterns people commonly confuse this one with (used to pick hard distractors). */
  confusableWith?: string[];
  /** Words that would give the answer away if they appear in the problem text. */
  leakWords?: string[];
}

export const PATTERNS: Pattern[] = [
  {
    id: 'hash-map',
    name: 'Hash map / set',
    cue: 'You need O(1) lookup of "have I seen this?", a complement, a count, or a canonical key to group by.',
    confusableWith: ['prefix-sum', 'two-pointers'],
  },
  {
    id: 'two-pointers',
    name: 'Two pointers',
    cue: 'Sorted or symmetric input, or pairs/palindromes where two indices move toward each other (or outward from a center).',
    confusableWith: ['sliding-window', 'fast-slow'],
  },
  {
    id: 'sliding-window',
    name: 'Sliding window',
    cue: 'A contiguous substring/subarray that must satisfy a constraint, and you want the longest, shortest or best one.',
    confusableWith: ['two-pointers', 'prefix-sum'],
  },
  {
    id: 'prefix-sum',
    name: 'Prefix / suffix sums',
    cue: 'Many range or "everything except me" queries; contiguous sums where negatives rule out a window.',
    confusableWith: ['sliding-window', 'hash-map'],
  },
  {
    id: 'fast-slow',
    name: 'Fast & slow pointers',
    cue: 'A sequence that may loop back on itself, or you need the middle/cycle of a linked structure in one pass.',
    confusableWith: ['two-pointers', 'linked-list'],
  },
  {
    id: 'linked-list',
    name: 'Linked-list rewiring',
    cue: 'Reverse or merge nodes in place; a dummy head and careful next-pointer updates.',
    confusableWith: ['fast-slow', 'two-pointers'],
  },
  {
    id: 'stack',
    name: 'Stack',
    cue: 'Nested or paired structure where the most recent unfinished item is the one you resolve next.',
    confusableWith: ['monotonic-stack', 'tree-dfs'],
  },
  {
    id: 'monotonic-stack',
    name: 'Monotonic stack / deque',
    cue: 'For each element you need the next/previous greater or smaller one, or the max of a moving window.',
    confusableWith: ['stack', 'sliding-window', 'heap'],
  },
  {
    id: 'heap',
    name: 'Heap / top-K',
    cue: 'Repeatedly need the smallest/largest item, the K best, a running median, or to merge K sorted sources.',
    confusableWith: ['monotonic-stack', 'hash-map'],
  },
  {
    id: 'tree-dfs',
    name: 'Tree DFS / recursion',
    cue: 'The answer for a node is built from the answers for its children (or from bounds passed down).',
    confusableWith: ['tree-bfs', 'graph-traversal'],
  },
  {
    id: 'tree-bfs',
    name: 'Tree BFS (level order)',
    cue: 'The output is organized by depth/level, or you need the nearest/shallowest of something.',
    confusableWith: ['tree-dfs', 'graph-traversal'],
  },
  {
    id: 'graph-traversal',
    name: 'Graph / grid DFS-BFS',
    cue: 'Cells or nodes with neighbors; count components, copy a structure, or find fewest steps with equal-cost moves.',
    confusableWith: ['union-find', 'shortest-path', 'tree-bfs'],
  },
  {
    id: 'topological-sort',
    name: 'Topological sort',
    cue: 'Tasks with prerequisites; is there a valid order, or does a dependency cycle exist in a directed graph?',
    confusableWith: ['graph-traversal', 'union-find'],
  },
  {
    id: 'shortest-path',
    name: 'Shortest path (Dijkstra / Bellman-Ford)',
    cue: 'Weighted edges and a minimum cost/time from a source, possibly with a limit on the number of hops.',
    confusableWith: ['graph-traversal', 'heap'],
  },
  {
    id: 'union-find',
    name: 'Union-Find',
    cue: 'Undirected connectivity: are these in the same group, merge groups, or does an edge close a cycle?',
    confusableWith: ['graph-traversal', 'topological-sort'],
  },
  {
    id: 'trie',
    name: 'Trie',
    cue: 'Many strings sharing prefixes, prefix lookups, or bitwise questions solved one bit at a time.',
    confusableWith: ['hash-map', 'graph-traversal'],
    leakWords: ['trie', 'prefix tree'],
  },
  {
    id: 'dp-linear',
    name: 'DP: 1D state',
    cue: 'Each position\'s best answer depends on a few earlier positions (take/skip, extend/restart).',
    confusableWith: ['dp-knapsack', 'dp-2d'],
  },
  {
    id: 'dp-2d',
    name: 'DP: 2D table',
    cue: 'Two sequences, or a grid/triangle, where the answer for (i, j) depends on neighbors (i-1, j), (i, j-1).',
    confusableWith: ['dp-linear', 'dp-knapsack'],
  },
  {
    id: 'dp-knapsack',
    name: 'DP: knapsack / subset sum',
    cue: 'Choose items to hit a target amount (count ways, min items, or reachable?).',
    confusableWith: ['dp-linear', 'dp-2d'],
  },
];

export interface PatternTag {
  pattern: string;
  /** The specific phrase or constraint in this problem that gives the pattern away. */
  signal: string;
}

/**
 * Pattern for each problem, keyed by title without the "(Leetcode N)" suffix.
 * Problems that don't have one dominant pattern (design questions, custom exercises) are left out.
 */
export const PROBLEM_PATTERNS: Record<string, PatternTag> = {
  'Two Sum': { pattern: 'hash-map', signal: 'For each x you need to know instantly whether target − x was already seen.' },
  'Valid Anagram': { pattern: 'hash-map', signal: 'Two strings are equal as multisets, so compare character counts.' },
  'Contains Duplicate': { pattern: 'hash-map', signal: '"Appears at least twice" is a seen-before membership check.' },
  'Group Anagrams': { pattern: 'hash-map', signal: 'Group by a canonical key (sorted letters or a count tuple).' },
  'Longest Consecutive Sequence': { pattern: 'hash-map', signal: 'O(n) is required on unsorted input, so use a set and only start counting at sequence starts.' },
  'Word Pattern': { pattern: 'hash-map', signal: 'A consistent one-to-one mapping between two sequences needs maps in both directions.' },
  'Isomorphic Strings': { pattern: 'hash-map', signal: 'A consistent one-to-one character mapping needs maps in both directions.' },
  'First Unique Character in a String': { pattern: 'hash-map', signal: 'Count every character first, then find the first with count 1.' },
  'Intersection of Two Arrays': { pattern: 'hash-map', signal: 'Put one array in a set and test membership of the other.' },
  'Intersection of Two Arrays II': { pattern: 'hash-map', signal: 'Duplicates matter, so keep counts of one array and spend them against the other.' },

  'Valid Palindrome': { pattern: 'two-pointers', signal: 'A palindrome is symmetric, so compare from both ends moving inward.' },
  'Reverse String': { pattern: 'two-pointers', signal: 'In-place reversal swaps the two ends and moves inward.' },
  'Longest Palindromic Substring': { pattern: 'two-pointers', signal: 'Every palindrome grows outward from a center; try each center and expand.' },
  'Palindromic Substrings': { pattern: 'two-pointers', signal: 'Count palindromes by expanding outward from each of the 2n − 1 centers.' },
  'Remove Nth Node From End of List': { pattern: 'two-pointers', signal: 'Keep two pointers n apart so the lead one hits the end as the other reaches the target.' },

  'Longest Substring Without Repeating Characters': { pattern: 'sliding-window', signal: 'Longest contiguous substring with a constraint: grow right, shrink left when it breaks.' },
  'Minimum Window Substring': { pattern: 'sliding-window', signal: 'Shortest contiguous window that satisfies a coverage condition.' },

  'Product of Array Except Self': { pattern: 'prefix-sum', signal: 'Answer at i is (product of everything left) × (product of everything right), and division is not allowed.' },
  'Subarray Sum Equals K': { pattern: 'prefix-sum', signal: 'Contiguous sums with possible negatives rule out a window; store prefix sums and look up (prefix − k).' },

  'Linked List Cycle': { pattern: 'fast-slow', signal: 'If a fast pointer ever catches the slow one, there is a cycle, in O(1) space.' },
  'Reorder List': { pattern: 'fast-slow', signal: 'Find the middle with fast/slow pointers, then reverse the second half and interleave.' },
  'Happy Number': { pattern: 'fast-slow', signal: 'Repeatedly applying a function either reaches 1 or loops; detect the loop like a linked-list cycle.' },

  'Reverse Linked List': { pattern: 'linked-list', signal: 'Flip each next pointer while walking, keeping track of prev.' },
  'Merge Two Sorted Lists': { pattern: 'linked-list', signal: 'Splice nodes onto a dummy head by repeatedly taking the smaller front.' },

  'Valid Parentheses': { pattern: 'stack', signal: 'Each closer must match the most recent unclosed opener.' },
  'Evaluate Reverse Polish Notation': { pattern: 'stack', signal: 'Operands wait on a stack until an operator consumes the top two.' },
  'Decode String': { pattern: 'stack', signal: 'Nested k[...] brackets: save the outer context when you enter, restore it when you leave.' },

  'Daily Temperatures': { pattern: 'monotonic-stack', signal: '"Next warmer day" is a next-greater-element query.' },
  'Largest Rectangle in Histogram': { pattern: 'monotonic-stack', signal: 'For each bar you need the nearest smaller bar on each side.' },
  'Sliding Window Maximum': { pattern: 'monotonic-stack', signal: 'Window max in O(n) needs a deque that drops dominated elements.' },

  'Top K Frequent Elements': { pattern: 'heap', signal: '"K most frequent": count, then keep the top K with a size-K heap (or bucket sort).' },
  'Kth Largest Element in an Array': { pattern: 'heap', signal: 'A size-K min-heap holds the K largest seen so far; its root is the answer.' },
  'Merge k Sorted Lists': { pattern: 'heap', signal: 'Always take the smallest head among K lists, which is what a min-heap gives you.' },
  'Merge K Sorted Linked Lists': { pattern: 'heap', signal: 'Always take the smallest head among K lists, which is what a min-heap gives you.' },
  'Find Median from Data Stream': { pattern: 'heap', signal: 'A running median is the boundary between a max-heap of the lower half and a min-heap of the upper half.' },
  'K Closest Points to Origin': { pattern: 'heap', signal: '"K closest" means keep the K best by distance with a bounded heap.' },
  'Reorganize String': { pattern: 'heap', signal: 'Always place the most frequent remaining character that differs from the last one.' },
  'Minimum Cost to Connect Sticks': { pattern: 'heap', signal: 'Always combine the two cheapest sticks, which a min-heap hands you.' },
  'Task Scheduler': { pattern: 'heap', signal: 'Always run the task with the most remaining work that is off cooldown.' },

  'Binary Tree Inorder Traversal': { pattern: 'tree-dfs', signal: 'Left, node, right is a direct recursion on children.' },
  'Validate Binary Search Tree': { pattern: 'tree-dfs', signal: 'Pass the allowed (low, high) bounds down to each child.' },
  'Lowest Common Ancestor of a Binary Tree': { pattern: 'tree-dfs', signal: 'Each node combines what its left and right subtrees found.' },
  'Binary Tree Maximum Path Sum': { pattern: 'tree-dfs', signal: 'Each node combines its children\'s best downward paths while tracking a global best.' },
  'Construct Binary Tree from Preorder and Inorder Traversal': { pattern: 'tree-dfs', signal: 'Preorder gives the root; its position in inorder splits left and right, then recurse.' },
  'Binary Tree Level Order Traversal': { pattern: 'tree-bfs', signal: 'The output is grouped by depth.' },
  'Binary Tree Zigzag Level Order Traversal': { pattern: 'tree-bfs', signal: 'The output is grouped by depth, alternating direction.' },

  'Clone Graph': { pattern: 'graph-traversal', signal: 'Visit every node once, remembering already-copied nodes in a map.' },
  'Number of Islands': { pattern: 'graph-traversal', signal: 'Flood-fill each unvisited land cell and count the fills.' },
  'Word Ladder': { pattern: 'graph-traversal', signal: 'Fewest transformations with equal-cost moves is BFS over words one letter apart.' },
  'Course Schedule': { pattern: 'topological-sort', signal: 'Prerequisites form a directed graph; you can finish iff it has no cycle.' },
  'Network Delay Time': { pattern: 'shortest-path', signal: 'Weighted edges and minimum time from one source to every node.' },
  'Cheapest Flights Within K Stops': { pattern: 'shortest-path', signal: 'Minimum cost over a weighted graph with a cap on hops.' },

  'Number of Connected Components in an Undirected Graph': { pattern: 'union-find', signal: 'Merge endpoints of every edge; the number of remaining groups is the answer.' },
  'Graph Valid Tree': { pattern: 'union-find', signal: 'It is a tree iff no edge joins two nodes already in the same group and everything ends up connected.' },
  'Redundant Connection': { pattern: 'union-find', signal: 'The first edge whose endpoints are already in the same group closes the cycle.' },

  'Implement Trie (Prefix Tree)': { pattern: 'trie', signal: 'Insert, exact search and prefix search over a set of words.' },
  'Word Search II': { pattern: 'trie', signal: 'Search many words at once on a board and prune any path that is no word\'s prefix.' },
  'Design Add and Search Words Data Structure': { pattern: 'trie', signal: 'Word storage with wildcard search, branching through child nodes.' },
  'Maximum XOR of Two Numbers in an Array': { pattern: 'trie', signal: 'Store numbers bit by bit and greedily follow the opposite bit at each level.' },
  'Replace Words': { pattern: 'trie', signal: 'For each word, find the shortest dictionary root that is its prefix.' },

  'Climbing Stairs': { pattern: 'dp-linear', signal: 'Ways to reach step n = ways(n−1) + ways(n−2).' },
  'House Robber': { pattern: 'dp-linear', signal: 'At each house choose: skip it, or take it and skip the neighbor.' },
  'Decode Ways': { pattern: 'dp-linear', signal: 'Ways for a prefix come from decoding the last one or last two digits.' },
  'Maximum Subarray': { pattern: 'dp-linear', signal: 'At each index either extend the previous subarray or restart here.' },
  'Longest Increasing Subsequence': { pattern: 'dp-linear', signal: 'Best ending at i extends the best ending at any earlier smaller value.' },
  'Best Time to Buy and Sell Stock with Cooldown': { pattern: 'dp-linear', signal: 'Track a small state per day: holding, sold, resting.' },
  'Word Break': { pattern: 'dp-linear', signal: 'A prefix is breakable if some shorter breakable prefix plus one dictionary word reaches it.' },
  'Longest Common Subsequence': { pattern: 'dp-2d', signal: 'Two strings, and the answer for (i, j) depends on (i−1, j−1), (i−1, j) and (i, j−1).' },
  'Edit Distance': { pattern: 'dp-2d', signal: 'Two strings; insert, delete or replace correspond to three neighboring cells.' },
  'Longest Palindromic Subsequence': { pattern: 'dp-2d', signal: 'The answer for substring [i, j] depends on [i+1, j−1], [i+1, j] and [i, j−1].' },
  'Regular Expression Matching': { pattern: 'dp-2d', signal: 'Match prefixes of the string against prefixes of the pattern.' },
  'Unique Paths': { pattern: 'dp-2d', signal: 'Paths into a cell come from the cell above and the cell to the left.' },
  'Minimum Path Sum': { pattern: 'dp-2d', signal: 'Best cost into a cell is its value plus the better of top or left.' },
  'Triangle': { pattern: 'dp-2d', signal: 'Each cell builds on one of two cells in the row below.' },
  'Coin Change': { pattern: 'dp-knapsack', signal: 'Fewest items (reusable) that sum to a target amount.' },
  'Coin Change II': { pattern: 'dp-knapsack', signal: 'Count the combinations of reusable items that sum to a target.' },
  'Partition Equal Subset Sum': { pattern: 'dp-knapsack', signal: 'Can some subset reach exactly half the total?' },
  'Target Sum': { pattern: 'dp-knapsack', signal: 'Assigning +/− signs is choosing a subset that reaches a derived target.' },
};
