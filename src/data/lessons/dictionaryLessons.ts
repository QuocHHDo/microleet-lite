import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const dictionaryCurriculum: Curriculum = {
  title: 'Dictionary/Hash Map Curriculum',
  description:
    'A comprehensive guide to mastering dictionary operations and hash map-based problem solving',
  sections: [
    {
      id: 1,
      title: 'Dictionary Fundamentals',
      topics: [
        {
          id: 'dict-basics',
          title: 'Dictionary Basics',
          description:
            'Understanding key-value pairs and dictionary properties',
        },
        {
          id: 'dict-creation',
          title: 'Creating Dictionaries',
          description: 'Different ways to initialize and create dictionaries',
        },
        {
          id: 'dict-vs-others',
          title: 'Dictionaries vs Other Data Structures',
          description: 'Comparing dictionaries with lists, sets, and arrays',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Dictionary Operations',
      topics: [
        {
          id: 'key-operations',
          title: 'Key Operations',
          description: 'Adding, accessing, updating, and deleting keys',
        },
        {
          id: 'dict-methods',
          title: 'Dictionary Methods',
          description:
            'Using get(), update(), pop(), clear(), and other methods',
        },
        {
          id: 'key-existence',
          title: 'Key Existence Checking',
          description: 'Different ways to check for key presence',
        },
        {
          id: 'dict-iteration',
          title: 'Dictionary Iteration',
          description: 'Iterating over keys, values, and items',
        },
      ],
    },
    {
      id: 3,
      title: 'Dictionary Comprehension',
      topics: [
        {
          id: 'dict-comprehension',
          title: 'Dictionary Comprehension',
          description: 'Creating dictionaries using comprehension syntax',
        },
        {
          id: 'filtering-dict',
          title: 'Filtering Dictionaries',
          description: 'Techniques for filtering dictionary entries',
        },
        {
          id: 'transforming-dict',
          title: 'Transforming Dictionaries',
          description: 'Mapping and transforming dictionary contents',
        },
      ],
    },
    {
      id: 4,
      title: 'Common Dictionary Patterns',
      topics: [
        {
          id: 'frequency-counter',
          title: 'Frequency Counter Pattern',
          description: 'Using dictionaries to count occurrences',
        },
        {
          id: 'grouping-pattern',
          title: 'Grouping Pattern',
          description: 'Grouping elements by common properties',
        },
        {
          id: 'caching-pattern',
          title: 'Caching Pattern',
          description: 'Using dictionaries for memoization and caching',
        },
      ],
    },
    {
      id: 5,
      title: 'Advanced Dictionary Concepts',
      topics: [
        {
          id: 'nested-dict',
          title: 'Nested Dictionaries',
          description: 'Working with multi-level dictionaries',
        },
        {
          id: 'default-dict',
          title: 'DefaultDict',
          description:
            'Using collections.defaultdict for automatic initialization',
        },
        {
          id: 'ordered-dict',
          title: 'OrderedDict',
          description: 'Working with ordered dictionaries',
        },
      ],
    },
    {
      id: 6,
      title: 'Hash Map Implementation',
      topics: [
        {
          id: 'hash-function',
          title: 'Hash Functions',
          description: 'Understanding hash functions and their properties',
        },
        {
          id: 'collision-handling',
          title: 'Collision Resolution',
          description: 'Techniques for handling hash collisions',
        },
        {
          id: 'load-factor',
          title: 'Load Factor and Rehashing',
          description: 'Understanding when and how to resize hash maps',
        },
      ],
    },
    {
      id: 7,
      title: 'Dictionary-based Algorithms',
      topics: [
        {
          id: 'two-sum-pattern',
          title: 'Two Sum Pattern',
          description: 'Using dictionaries for pair finding problems',
        },
        {
          id: 'subarray-sum',
          title: 'Subarray Sum Pattern',
          description: 'Finding subarrays with target sums',
        },
        {
          id: 'isomorphic-pattern',
          title: 'String Pattern Matching',
          description: 'Solving isomorphic strings and pattern matching',
        },
      ],
    },
    {
      id: 8,
      title: 'Time and Space Optimization',
      topics: [
        {
          id: 'space-complexity',
          title: 'Space Complexity Analysis',
          description: 'Understanding dictionary space usage',
        },
        {
          id: 'time-complexity',
          title: 'Time Complexity Optimization',
          description: 'Optimizing dictionary operations',
        },
        {
          id: 'memory-efficient',
          title: 'Memory-Efficient Dictionaries',
          description: 'Techniques for reducing memory usage',
        },
      ],
    },
    {
      id: 9,
      title: 'Advanced Applications',
      topics: [
        {
          id: 'lru-cache',
          title: 'LRU Cache Implementation',
          description: 'Building an LRU cache using dictionaries',
        },
        {
          id: 'graph-representation',
          title: 'Graph Representation',
          description: 'Using dictionaries for graph problems',
        },
        {
          id: 'trie-implementation',
          title: 'Trie Implementation',
          description: 'Implementing tries using dictionaries',
        },
      ],
    },
    {
      id: 10,
      title: 'Dictionary Problem Patterns',
      topics: [
        {
          id: 'sliding-window',
          title: 'Sliding Window with Dictionaries',
          description: 'Using dictionaries in sliding window problems',
        },
        {
          id: 'anagram-problems',
          title: 'Anagram and Permutation',
          description: 'Solving string permutation problems',
        },
        {
          id: 'array-intersection',
          title: 'Array Intersection/Union',
          description: 'Finding common elements using dictionaries',
        },
      ],
    },
    {
      id: 11,
      title: 'Special Dictionary Types',
      topics: [
        {
          id: 'counter-class',
          title: 'Counter Class',
          description: 'Using collections.Counter for counting',
        },
        {
          id: 'bidict',
          title: 'Bidirectional Dictionaries',
          description: 'Working with bidirectional mappings',
        },
        {
          id: 'frozen-dict',
          title: 'Immutable Dictionaries',
          description: 'Working with immutable dictionary types',
        },
      ],
    },
    {
      id: 12,
      title: 'System Design with Dictionaries',
      topics: [
        {
          id: 'consistent-hashing',
          title: 'Consistent Hashing',
          description: 'Understanding distributed hash tables',
        },
        {
          id: 'cache-design',
          title: 'Cache System Design',
          description: 'Designing caching systems with dictionaries',
        },
      ],
    },
  ],
} as const;
const dictionaryLessons: Record<string, LessonContent> = {};
export const dictionaryLessonsTab: LessonsTab = {
  curriculum: dictionaryCurriculum,
  lessons: dictionaryLessons,
};
