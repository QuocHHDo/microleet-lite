import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const dipCurriculum: Curriculum = {
  title: 'DIP Curriculum',
  description:
    'Depend on abstractions, not on concrete implementations, to create loosely coupled systems.',
  sections: [
    {
      id: 1,
      title: 'Fundamentals',
      topics: [
        {
          id: 'dip-definition',
          title: 'Definition & Purpose',
          description:
            'High-level modules should not depend on low-level modules; both should depend on abstractions.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'benefits',
          title: 'Key Benefits',
          description:
            'How DIP fosters testability, maintainability, and modular design.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Use',
      topics: [
        {
          id: 'frameworks-tools',
          title: 'Frameworks & Tools',
          description: 'Dependency injection containers and their role in DIP.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
