import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const factoryPatternCurriculum: Curriculum = {
  title: 'Factory Pattern Curriculum',
  description:
    'Encapsulate object creation in a dedicated factory method or class.',
  sections: [
    {
      id: 1,
      title: 'Fundamentals',
      topics: [
        {
          id: 'factory-purpose',
          title: 'Purpose & Use Cases',
          description:
            'Centralizing object creation logic for maintainability and abstraction.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'simple-factory-vs-factory-method',
          title: 'Variations',
          description:
            'Differences between Simple Factory, Factory Method, and Abstract Factory.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Interview Prep',
      topics: [
        {
          id: 'mock-questions',
          title: 'Typical Interview Questions',
          description:
            'When to use a factory, code snippets, and real-world scenarios like GUIs or database connectors.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};
