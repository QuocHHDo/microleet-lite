import { Curriculum, LessonContent, LessonsTab } from '@/common/commonLesson';

const tupleCurriculum: Curriculum = {
  title: 'Tuple Curriculum',
  description:
    'A comprehensive guide to mastering tuple operations and their applications',
  sections: [
    {
      id: 1,
      title: 'Tuple Fundamentals',
      topics: [
        {
          id: 'tuple-basics',
          title: 'Introduction to Tuples',
          description:
            'Understanding what tuples are and their immutable nature',
        },
        {
          id: 'tuple-creation',
          title: 'Creating and Initializing Tuples',
          description: 'Different ways to define and create tuples in Python',
        },
        {
          id: 'tuple-vs-lists',
          title: 'Tuples vs Lists',
          description: 'Understanding key differences and when to use each',
        },
      ],
    },
    {
      id: 2,
      title: 'Basic Tuple Operations',
      topics: [
        {
          id: 'tuple-accessing',
          title: 'Accessing Tuple Elements',
          description: 'Indexing and accessing elements in tuples',
        },
        {
          id: 'tuple-unpacking',
          title: 'Tuple Unpacking',
          description: 'Destructuring and unpacking tuple elements',
        },
        {
          id: 'tuple-methods',
          title: 'Built-in Tuple Methods',
          description:
            'Understanding count(), index(), and other tuple methods',
        },
      ],
    },
    {
      id: 3,
      title: 'Tuple Applications',
      topics: [
        {
          id: 'multiple-returns',
          title: 'Multiple Return Values',
          description:
            'Using tuples for returning multiple values from functions',
        },
        {
          id: 'tuple-as-key',
          title: 'Tuples as Dictionary Keys',
          description: 'Utilizing tuples as immutable dictionary keys',
        },
        {
          id: 'named-tuples',
          title: 'Named Tuples',
          description: 'Working with collections.namedtuple for readable code',
        },
      ],
    },
    {
      id: 4,
      title: 'Advanced Tuple Concepts',
      topics: [
        {
          id: 'tuple-performance',
          title: 'Performance Considerations',
          description: 'Understanding memory usage and performance benefits',
        },
        {
          id: 'nested-tuples',
          title: 'Nested Tuples',
          description: 'Working with tuples within tuples',
        },
        {
          id: 'tuple-conversion',
          title: 'Type Conversion',
          description: 'Converting between tuples and other data structures',
        },
      ],
    },
    {
      id: 5,
      title: 'Tuple Algorithms',
      topics: [
        {
          id: 'tuple-sorting',
          title: 'Sorting Tuples',
          description: 'Techniques for sorting lists of tuples',
        },
        {
          id: 'tuple-comparison',
          title: 'Tuple Comparison',
          description: 'Understanding how tuples are compared and ordered',
        },
      ],
    },
    {
      id: 6,
      title: 'Common Tuple Patterns',
      topics: [
        {
          id: 'coordinate-systems',
          title: 'Coordinate Systems',
          description: 'Using tuples for representing points and coordinates',
        },
        {
          id: 'state-representation',
          title: 'State Representation',
          description: 'Representing state and transitions using tuples',
        },
      ],
    },
    {
      id: 7,
      title: 'Tuple Optimization',
      topics: [
        {
          id: 'memory-efficiency',
          title: 'Memory Optimization',
          description: 'Techniques for efficient tuple usage in large programs',
        },
        {
          id: 'tuple-caching',
          title: 'Tuple Caching',
          description: 'Understanding tuple internals and caching behavior',
        },
      ],
    },
    {
      id: 8,
      title: 'Tuples in Data Processing',
      topics: [
        {
          id: 'data-aggregation',
          title: 'Data Aggregation',
          description: 'Using tuples for grouping and aggregating data',
        },
        {
          id: 'tuple-streams',
          title: 'Processing Tuple Streams',
          description: 'Working with streams of tuple data',
        },
      ],
    },
  ],
} as const;

const tupleLessons: Record<string, LessonContent> = {};

export const tupleLessonsTab: LessonsTab = {
  curriculum: tupleCurriculum,
  lessons: tupleLessons,
};
