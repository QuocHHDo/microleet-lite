import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const lspCurriculum: Curriculum = {
  title: 'LSP Curriculum',
  description:
    'Ensure that subclasses can substitute for their base classes without altering correct behavior.',
  sections: [
    {
      id: 1,
      title: 'Definition & Examples',
      topics: [
        {
          id: 'lsp-definition',
          title: 'Definition',
          description:
            'Objects of a superclass should be replaceable with objects of a subclass.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'violations',
          title: 'Violation Examples',
          description:
            'Square vs. Rectangle example, and other real-world scenarios.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Best Practices',
      topics: [
        {
          id: 'designing-subclasses',
          title: 'Designing Subclasses',
          description: 'How to avoid breaking the contract of the base class.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
