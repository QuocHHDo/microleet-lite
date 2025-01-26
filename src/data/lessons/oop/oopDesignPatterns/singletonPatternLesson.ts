import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const singletonPatternCurriculum: Curriculum = {
  title: 'Singleton Pattern Curriculum',
  description:
    'Restrict a class to a single global instance, often used for centralized management.',
  sections: [
    {
      id: 1,
      title: 'Core Principles',
      topics: [
        {
          id: 'singleton-definition',
          title: 'Definition & Implementation',
          description:
            'Common ways to enforce a single instance in various languages.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'thread-safety',
          title: 'Thread Safety & Lazy Loading',
          description:
            'Approaches to ensure singletons work correctly in multithreaded environments.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Critiques & Alternatives',
      topics: [
        {
          id: 'testability-issues',
          title: 'Testability Concerns',
          description:
            'How singletons can hinder testing and what patterns can help (e.g., DIP).',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
