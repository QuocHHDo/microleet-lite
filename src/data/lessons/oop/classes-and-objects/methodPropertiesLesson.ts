import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const methodsPropertiesCurriculum: Curriculum = {
  title: 'Methods & Properties Curriculum',
  description:
    'Dive into how methods encapsulate behavior and properties hold data, with best-practice approaches.',
  sections: [
    {
      id: 1,
      title: 'Defining Methods & Properties',
      topics: [
        {
          id: 'method-signatures',
          title: 'Method Signatures',
          description: 'Return types, parameter lists, and naming conventions.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'property-getset',
          title: 'Getter/Setter Patterns',
          description:
            'When to use direct property access vs. encapsulated getters and setters.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Best Practices & Performance',
      topics: [
        {
          id: 'method-pitfalls',
          title: 'Common Pitfalls',
          description:
            'Long parameter lists, side effects, and performance considerations.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'immutability',
          title: 'Encouraging Immutability',
          description:
            'Strategies to reduce side effects, especially in functional OOP hybrids.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};
