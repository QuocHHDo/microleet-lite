import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';
const stringCurriculum: Curriculum = {
  title: 'String Curriculum',
  description:
    'A comprehensive guide to mastering string operations and string-based algorithms',
  sections: [
    {
      id: 1,
      title: 'String Fundamentals',
      topics: [
        {
          id: 'string-basics',
          title: 'String Basics',
          description: 'Understanding string properties and characteristics',
        },
        {
          id: 'string-creation',
          title: 'String Creation and Initialization',
          description: 'Different ways to create and initialize strings',
        },
        {
          id: 'string-immutability',
          title: 'String Immutability',
          description: 'Understanding string immutability and its implications',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic String Operations',
      topics: [
        {
          id: 'string-access',
          title: 'Accessing Characters',
          description:
            'Methods for accessing individual characters and substrings',
        },
        {
          id: 'string-methods',
          title: 'Common String Methods',
          description: 'Essential string methods like split(), join(), strip()',
        },
        {
          id: 'string-concatenation',
          title: 'String Concatenation',
          description: 'Different ways to combine strings efficiently',
        },
        {
          id: 'string-comparison',
          title: 'String Comparison',
          description: 'Comparing strings and understanding string equality',
        },
      ],
    },
    {
      id: 3,
      title: 'String Manipulation',
      topics: [
        {
          id: 'string-slicing',
          title: 'String Slicing',
          description: 'Working with substrings and string slicing operations',
        },
        {
          id: 'case-manipulation',
          title: 'Case Manipulation',
          description: 'Converting between upper and lower case',
        },
        {
          id: 'string-formatting',
          title: 'String Formatting',
          description: 'Different methods for formatting strings',
        },
        {
          id: 'string-replacement',
          title: 'String Replacement',
          description: 'Finding and replacing substrings',
        },
      ],
    },
    {
      id: 4,
      title: 'String Searching',
      topics: [
        {
          id: 'basic-searching',
          title: 'Basic String Searching',
          description: 'Finding substrings and characters in strings',
        },
        {
          id: 'pattern-matching',
          title: 'Pattern Matching',
          description: 'Advanced pattern matching techniques',
        },
        {
          id: 'regex-basics',
          title: 'Regular Expressions Basics',
          description: 'Understanding and using basic regular expressions',
        },
      ],
    },
    {
      id: 5,
      title: 'Common String Algorithms',
      topics: [
        {
          id: 'string-reversal',
          title: 'String Reversal',
          description: 'Different approaches to reversing strings',
        },
        {
          id: 'palindrome-check',
          title: 'Palindrome Detection',
          description: 'Techniques for checking palindromes',
        },
        {
          id: 'anagram-check',
          title: 'Anagram Detection',
          description: 'Methods for identifying anagrams',
        },
      ],
    },
    {
      id: 6,
      title: 'Advanced String Algorithms',
      topics: [
        {
          id: 'kmp-algorithm',
          title: 'KMP Algorithm',
          description: 'Understanding and implementing KMP pattern matching',
        },
        {
          id: 'rabin-karp',
          title: 'Rabin-Karp Algorithm',
          description: 'Hash-based pattern matching algorithm',
        },
        {
          id: 'z-algorithm',
          title: 'Z Algorithm',
          description: 'Linear time pattern matching',
        },
        {
          id: 'suffix-arrays',
          title: 'Suffix Arrays',
          description: 'Understanding and using suffix arrays',
        },
      ],
    },
    {
      id: 7,
      title: 'String Pattern Problems',
      topics: [
        {
          id: 'longest-common',
          title: 'Longest Common Substring/Subsequence',
          description: 'Finding common patterns between strings',
        },
        {
          id: 'string-matching',
          title: 'String Matching Variations',
          description: 'Different types of string matching problems',
        },
        {
          id: 'edit-distance',
          title: 'Edit Distance',
          description: 'Computing string similarity and transformations',
        },
      ],
    },
    {
      id: 8,
      title: 'String Compression',
      topics: [
        {
          id: 'basic-compression',
          title: 'Basic String Compression',
          description: 'Simple string compression techniques',
        },
        {
          id: 'run-length',
          title: 'Run-Length Encoding',
          description: 'Implementing run-length encoding and decoding',
        },
      ],
    },
    {
      id: 9,
      title: 'String Windows and Substrings',
      topics: [
        {
          id: 'sliding-window',
          title: 'Sliding Window Technique',
          description: 'Using sliding window for string problems',
        },
        {
          id: 'substring-problems',
          title: 'Substring Problems',
          description: 'Common substring-based problem patterns',
        },
        {
          id: 'window-optimization',
          title: 'Window Optimization',
          description: 'Optimizing sliding window approaches',
        },
      ],
    },
    {
      id: 10,
      title: 'Advanced String Concepts',
      topics: [
        {
          id: 'string-builder',
          title: 'String Builder Pattern',
          description: 'Efficient string concatenation techniques',
        },
        {
          id: 'trie-implementation',
          title: 'Trie Data Structure',
          description: 'Using tries for string problems',
        },
        {
          id: 'suffix-tree',
          title: 'Suffix Trees',
          description: 'Advanced string matching using suffix trees',
        },
      ],
    },
    {
      id: 11,
      title: 'String in Space/Time Optimization',
      topics: [
        {
          id: 'in-place-operations',
          title: 'In-place String Operations',
          description: 'Performing string operations without extra space',
        },
        {
          id: 'memory-efficient',
          title: 'Memory-Efficient Techniques',
          description: 'Optimizing memory usage in string operations',
        },
      ],
    },
    {
      id: 12,
      title: 'Special String Types',
      topics: [
        {
          id: 'unicode-handling',
          title: 'Unicode String Handling',
          description: 'Working with Unicode and special characters',
        },
        {
          id: 'binary-strings',
          title: 'Binary Strings',
          description: 'Operating on binary strings and bit manipulation',
        },
      ],
    },
  ],
} as const;
const stringLessons: Record<string, LessonContent> = {};
export const stringLessonsTab: LessonsTab = {
  curriculum: stringCurriculum,
  lessons: stringLessons,
};
