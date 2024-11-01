import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const setCurriculum: Curriculum = {
  title: 'Set Curriculum',
  description:
    'A comprehensive guide to mastering set operations and their applications in problem solving',
  sections: [
    {
      id: 1,
      title: 'Set Fundamentals',
      topics: [
        {
          id: 'set-introduction',
          title: 'Introduction to Sets',
          description: 'Understanding sets and their unique characteristics',
        },
        {
          id: 'set-creation',
          title: 'Creating and Initializing Sets',
          description: 'Different ways to create sets and add initial elements',
        },
        {
          id: 'set-properties',
          title: 'Set Properties',
          description:
            'Understanding uniqueness, unordered nature, and mutability',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Set Operations',
      topics: [
        {
          id: 'element-operations',
          title: 'Element Operations',
          description: 'Adding, removing, and checking for element existence',
        },
        {
          id: 'set-methods',
          title: 'Built-in Set Methods',
          description: 'Using add(), remove(), discard(), pop(), and clear()',
        },
        {
          id: 'membership-testing',
          title: 'Membership Testing',
          description: 'Efficient element lookup using "in" operator',
        },
      ],
    },
    {
      id: 3,
      title: 'Set Mathematics',
      topics: [
        {
          id: 'set-union',
          title: 'Union Operations',
          description: 'Combining sets using union() and | operator',
        },
        {
          id: 'set-intersection',
          title: 'Intersection Operations',
          description:
            'Finding common elements using intersection() and & operator',
        },
        {
          id: 'set-difference',
          title: 'Difference Operations',
          description:
            'Finding unique elements using difference() and - operator',
        },
        {
          id: 'symmetric-difference',
          title: 'Symmetric Difference',
          description: 'Finding elements in either set but not both',
        },
      ],
    },
    {
      id: 4,
      title: 'Set Relationships',
      topics: [
        {
          id: 'subset-superset',
          title: 'Subsets and Supersets',
          description: 'Understanding set containment relationships',
        },
        {
          id: 'disjoint-sets',
          title: 'Disjoint Sets',
          description: 'Working with sets that have no elements in common',
        },
        {
          id: 'set-equality',
          title: 'Set Equality',
          description: 'Comparing sets and understanding equality',
        },
      ],
    },
    {
      id: 5,
      title: 'Set Implementations',
      topics: [
        {
          id: 'hashset',
          title: 'HashSet Implementation',
          description:
            'Understanding how sets are implemented using hash tables',
        },
        {
          id: 'set-complexity',
          title: 'Time Complexity Analysis',
          description:
            'Understanding performance characteristics of set operations',
        },
        {
          id: 'ordered-sets',
          title: 'Ordered Sets',
          description: 'Working with sorted sets and their applications',
        },
      ],
    },
    {
      id: 6,
      title: 'Common Set Patterns',
      topics: [
        {
          id: 'duplicate-detection',
          title: 'Duplicate Detection',
          description: 'Using sets to find and handle duplicates',
        },
        {
          id: 'unique-elements',
          title: 'Unique Element Problems',
          description: 'Solving problems involving unique values',
        },
        {
          id: 'set-conversion',
          title: 'Set Conversion Techniques',
          description: 'Converting between sets and other data structures',
        },
      ],
    },
    {
      id: 7,
      title: 'Advanced Set Applications',
      topics: [
        {
          id: 'multisets',
          title: 'Multisets and Counting',
          description: 'Handling duplicate elements with Counter objects',
        },
        {
          id: 'frozen-sets',
          title: 'Immutable Sets',
          description: 'Working with frozenset and immutable set operations',
        },
        {
          id: 'set-comprehension',
          title: 'Set Comprehensions',
          description: 'Creating sets using comprehension syntax',
        },
      ],
    },
    {
      id: 8,
      title: 'Set-based Algorithms',
      topics: [
        {
          id: 'set-cover',
          title: 'Set Cover Problems',
          description: 'Solving minimum set cover and related problems',
        },
        {
          id: 'set-partitioning',
          title: 'Set Partitioning',
          description: 'Dividing elements into distinct sets',
        },
      ],
    },
    {
      id: 9,
      title: 'Performance Optimization',
      topics: [
        {
          id: 'memory-efficiency',
          title: 'Memory Optimization',
          description: 'Optimizing memory usage with sets',
        },
        {
          id: 'set-vs-list',
          title: 'Sets vs Lists Performance',
          description:
            'Choosing between sets and lists for optimal performance',
        },
      ],
    },
    {
      id: 10,
      title: 'Real-world Applications',
      topics: [
        {
          id: 'deduplication',
          title: 'Data Deduplication',
          description: 'Using sets for efficient data deduplication',
        },
        {
          id: 'set-operations-algorithms',
          title: 'Set-based Algorithms',
          description: 'Implementing algorithms using set operations',
        },
      ],
    },
  ],
} as const;

const setLessons: Record<string, LessonContent> = {};
export const setLessonsTab: LessonsTab = {
  curriculum: setCurriculum,
  lessons: setLessons,
};
