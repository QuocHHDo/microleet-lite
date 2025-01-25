import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const decoratorPatternCurriculum: Curriculum = {
  title: 'Decorator Pattern Curriculum',
  description:
    'Attach additional responsibilities to an object dynamically without modifying its structure.',
  sections: [
    {
      id: 1,
      title: 'Key Concepts',
      topics: [
        {
          id: 'decorator-purpose',
          title: 'Purpose',
          description:
            'Enhance functionality at runtime via composition rather than inheritance.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'benefits-tradeoffs',
          title: 'Benefits & Trade-Offs',
          description:
            'Supports open-closed principle, but can lead to many small wrapper classes.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Use Cases & Examples',
      topics: [
        {
          id: 'io-streams',
          title: 'I/O Streams Example',
          description:
            'Java/C# streams as classic Decorator usage (e.g., BufferedStream).',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};
