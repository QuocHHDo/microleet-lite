import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const srpCurriculum: Curriculum = {
  title: 'SRP Curriculum',
  description:
    'Focuses on ensuring each class or module has one and only one reason to change.',
  sections: [
    {
      id: 1,
      title: 'SRP Overview',
      topics: [
        {
          id: 'srp-definition',
          title: 'Definition & Origin',
          description:
            'Explains what “one responsibility” means and highlights benefits of SRP.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'violations',
          title: 'Common Violations',
          description:
            'Signs that a class is doing too much, leading to brittle code.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Techniques',
      topics: [
        {
          id: 'refactoring-srp',
          title: 'Refactoring to SRP',
          description:
            'How to split a bloated class into multiple smaller, focused classes.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
