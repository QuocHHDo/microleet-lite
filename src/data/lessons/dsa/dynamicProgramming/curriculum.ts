import {
  Curriculum,
  PriorityLevel,
} from '@/common/commonLesson';

export const dpCurriculum: Curriculum = {
  title: 'Dynamic Programming Curriculum',
  description:
    'Master dynamic programming from fundamentals to advanced patterns - the most important algorithmic technique for coding interviews',
  sections: [
    {
      id: 1,
      title: 'Dynamic Programming Fundamentals',
      topics: [
        {
          id: 'dp-concept',
          title: 'What is Dynamic Programming?',
          description:
            'Understanding the core concept of DP, when to use it, and how it differs from other approaches',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'memoization-vs-tabulation',
          title: 'Memoization vs Tabulation',
          description:
            'Two fundamental approaches to implementing DP solutions',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'dp-pattern-recognition',
          title: 'Recognizing DP Problems',
          description:
            'How to identify when a problem can be solved with dynamic programming',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'state-and-transition',
          title: 'State Definition and Transitions',
          description:
            'Defining DP states and deriving transition relationships',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: '1D Dynamic Programming',
      topics: [
        {
          id: 'fibonacci-pattern',
          title: 'Fibonacci and Basic Sequences',
          description:
            'Classic introduction to DP with Fibonacci-style problems',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'climbing-stairs',
          title: 'Climbing Stairs Pattern',
          description:
            'Understanding the classic climbing stairs problem and variations',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'house-robber',
          title: 'House Robber Pattern',
          description:
            'Non-adjacent selection problems and optimization',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'min-cost-climbing',
          title: 'Min Cost Path Problems',
          description:
            'Finding minimum cost paths in 1D arrays',
          priority: PriorityLevel.Important,
        },
        {
          id: 'decode-ways',
          title: 'Decode Ways Pattern',
          description:
            'Counting ways to decode strings and sequences',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: '2D Dynamic Programming',
      topics: [
        {
          id: 'grid-paths',
          title: 'Grid Path Problems',
          description:
            'Finding unique paths in 2D grids with obstacles',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'longest-common-subsequence',
          title: 'Longest Common Subsequence',
          description:
            'Classic 2D DP for finding LCS between two sequences',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'edit-distance',
          title: 'Edit Distance',
          description:
            'Minimum edits to transform one string to another',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 4,
      title: 'Knapsack Patterns',
      topics: [
        {
          id: '01-knapsack',
          title: '0/1 Knapsack Problem',
          description:
            'Classic knapsack with items that can be taken once',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'unbounded-knapsack',
          title: 'Unbounded Knapsack',
          description:
            'Knapsack where items can be used multiple times',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'subset-sum',
          title: 'Subset Sum Problem',
          description:
            'Finding if a subset with target sum exists',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'partition-equal-subset',
          title: 'Partition Problems',
          description:
            'Partitioning arrays into equal or target sums',
          priority: PriorityLevel.Important,
        },
        {
          id: 'coin-change',
          title: 'Coin Change',
          description:
            'Making change with minimum coins - classic unbounded knapsack variant',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 5,
      title: 'String Dynamic Programming',
      topics: [
        {
          id: 'palindromic-substrings',
          title: 'Palindromic Substrings',
          description:
            'Counting and finding palindromic substrings using DP',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'longest-palindromic-subsequence',
          title: 'Longest Palindromic Subsequence',
          description:
            'Finding the longest palindromic subsequence in a string',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'longest-increasing-subsequence',
          title: 'Longest Increasing Subsequence',
          description:
            'Finding LIS with O(n²) and O(n log n) solutions',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'word-break',
          title: 'Word Break Pattern',
          description:
            'Breaking strings into dictionary words',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 6,
      title: 'Advanced DP Patterns',
      topics: [
        {
          id: 'bitmask-dp',
          title: 'Bitmask DP',
          description:
            'Using bitmasks to represent states - TSP and Assignment problems',
          priority: PriorityLevel.Important,
        },
        {
          id: 'state-machine-dp',
          title: 'State Machine DP',
          description:
            'Modeling valid state transitions - stock trading and House Robber problems',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'digit-dp',
          title: 'Digit DP',
          description:
            'Counting numbers with digit-based constraints',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
} as const;

