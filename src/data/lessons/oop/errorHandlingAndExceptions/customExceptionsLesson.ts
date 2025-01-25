import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const customExceptionsCurriculum: Curriculum = {
  title: 'Custom Exceptions Curriculum',
  description:
    'Create domain-specific exception classes to signal errors more clearly.',
  sections: [
    {
      id: 1,
      title: 'Why Custom Exceptions',
      topics: [
        {
          id: 'domain-logic',
          title: 'Domain Logic Clarity',
          description:
            'Enhance maintainability by making errors more explicit to the domain.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation & Best Practices',
      topics: [
        {
          id: 'naming-conventions',
          title: 'Naming Conventions',
          description:
            'Convey the nature of the error clearly (e.g., InsufficientFundsException).',
          priority: PriorityLevel.Important,
        },
        {
          id: 'serialization',
          title: 'Serialization & Logging',
          description:
            'Considerations when transferring exceptions across boundaries or logging them.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};
