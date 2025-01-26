import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const abstractClassesCurriculum: Curriculum = {
  title: 'Abstract Classes vs. Concrete Classes Curriculum',
  description:
    'Distinguish between partially implemented (abstract) classes and fully implemented (concrete) classes.',
  sections: [
    {
      id: 1,
      title: 'When to Use Abstract Classes',
      topics: [
        {
          id: 'partial-implementation',
          title: 'Partial Implementation',
          description:
            'Shared logic and enforced contracts without requiring full implementations.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'inheritance-constraints',
          title: 'Inheritance Constraints',
          description:
            'Why abstract classes can only be extended, not instantiated.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Concrete Classes & Polymorphism',
      topics: [
        {
          id: 'full-implementation',
          title: 'Full Implementation',
          description:
            'Classes with all details implemented, ready for instantiation.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'extension',
          title: 'Extension vs. Final',
          description:
            'When to allow further inheritance and when to mark classes as final (sealed).',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
