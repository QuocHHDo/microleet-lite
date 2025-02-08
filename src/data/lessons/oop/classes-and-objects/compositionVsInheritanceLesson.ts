import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const compositionVsInheritanceCurriculum: Curriculum = {
  title: 'Composition vs. Inheritance Curriculum',
  description:
    'Know when to embed objects within a class (composition) vs. extend a class\'s functionality (inheritance).',
  sections: [
    {
      id: 1,
      title: 'Fundamental Differences',
      topics: [
        {
          id: 'relationship-types',
          title: 'Has-A vs. Is-A',
          description:
            'Explains when composition (has-a) is preferable over inheritance (is-a).',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'coupling-tradeoffs',
          title: 'Coupling & Complexity Trade-Offs',
          description:
            'How each approach impacts code reusability and complexity.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Guidance',
      topics: [
        {
          id: 'refactoring-inheritance',
          title: 'Refactoring Inheritance to Composition',
          description:
            'Detecting inheritance misuse and converting it into composition properly.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'design-examples',
          title: 'Design Patterns & Examples',
          description:
            'Real-world cases where composition or inheritance is most suitable (e.g., Strategy pattern).',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};
