import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const inheritanceCurriculum: Curriculum = {
  title: 'Inheritance Curriculum',
  description:
    'Explore how child classes derive properties and behaviors from parent classes.',
  sections: [
    {
      id: 1,
      title: 'Basics of Inheritance',
      topics: [
        {
          id: 'inheritance-purpose',
          title: 'Purpose',
          description:
            'Explains code reuse and hierarchical class relationships.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'inheritance-syntax',
          title: 'Syntax & Mechanisms',
          description:
            'Demonstrates how to extend classes in languages like Java, C#, and TypeScript.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Advanced Concepts',
      topics: [
        {
          id: 'multiple-inheritance',
          title: 'Multiple Inheritance & Alternatives',
          description:
            'Highlights challenges and approaches like interfaces or mixins to simulate multiple inheritance.',
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'inheritance-tradeoffs',
          title: 'Trade-Offs & Best Practices',
          description:
            'When to favor composition over inheritance and how deep inheritance trees can harm readability.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Interview Preparation',
      topics: [
        {
          id: 'inheritance-interview',
          title: 'Common Questions & Examples',
          description:
            'Questions about parent-child relationships, overriding methods, and relevant pitfalls.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};
