import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const polymorphismCurriculum: Curriculum = {
  title: 'Polymorphism Curriculum',
  description:
    'Learn how objects can take many forms to enable flexible code and dynamic behavior.',
  sections: [
    {
      id: 1,
      title: 'Fundamentals',
      topics: [
        {
          id: 'compiletime-runtime',
          title: 'Compile-Time vs. Run-Time Polymorphism',
          description:
            'Explains method overloading vs. method overriding, and how dynamic dispatch works.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'polymorphism-benefits',
          title: 'Advantages in Code',
          description:
            'Showcases how polymorphism leads to simpler and more extensible code.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Usage & Best Practices',
      topics: [
        {
          id: 'interfaces-abstract-classes',
          title: 'Using Interfaces & Abstract Classes',
          description:
            'Demonstrates how to properly design polymorphic hierarchies.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'common-pitfalls',
          title: 'Common Pitfalls',
          description:
            'Misusing polymorphism, creating overly complex hierarchies, or performance issues.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Interview Tips',
      topics: [
        {
          id: 'practical-questions',
          title: 'Practical Scenarios',
          description:
            'How to demonstrate polymorphism in whiteboard interviews or coding exercises.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};
