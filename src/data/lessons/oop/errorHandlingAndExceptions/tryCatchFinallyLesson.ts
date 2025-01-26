import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const tryCatchFinallyCurriculum: Curriculum = {
  title: 'Try-Catch-Finally Curriculum',
  description:
    'Master the control flow of exception handling, guaranteeing resource cleanup and stable applications.',
  sections: [
    {
      id: 1,
      title: 'Basic Flow',
      topics: [
        {
          id: 'flow-control',
          title: 'Flow Control',
          description:
            'How exceptions jump to the nearest catch block and finally always executes.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Common Patterns',
      topics: [
        {
          id: 'nested-trycatch',
          title: 'Nested Try-Catch & Multiple Catches',
          description: 'How to handle multiple exception types distinctly.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
