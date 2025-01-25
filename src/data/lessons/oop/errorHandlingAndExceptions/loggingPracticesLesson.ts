import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const loggingPracticesCurriculum: Curriculum = {
  title: 'Logging Practices Curriculum',
  description:
    'Adopt structured logging practices for better debugging, error analysis, and auditing.',
  sections: [
    {
      id: 1,
      title: 'Why Logging Matters',
      topics: [
        {
          id: 'log-levels',
          title: 'Log Levels & Strategy',
          description:
            'How to choose between DEBUG, INFO, WARN, ERROR, and FATAL levels.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'production-readiness',
          title: 'Production Readiness',
          description:
            'Ensuring logs don’t expose sensitive data while still being informative.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Tools & Frameworks',
      topics: [
        {
          id: 'common-libraries',
          title: 'Common Logging Libraries',
          description:
            'Briefly covers Log4j, SLF4J, Winston, or other platform-specific tools.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
