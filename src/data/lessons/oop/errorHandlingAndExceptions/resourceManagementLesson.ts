import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const resourceManagementCurriculum: Curriculum = {
  title: 'Resource Management Curriculum',
  description:
    'Ensure resources like files, network connections, or database handles are properly released.',
  sections: [
    {
      id: 1,
      title: 'Core Techniques',
      topics: [
        {
          id: 'try-with-resources',
          title: 'Try-With-Resources / Using Statement',
          description:
            'Language-specific constructs that automate resource cleanup.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'manual-closers',
          title: 'Manual Closers',
          description:
            'Handling resources in languages without automatic disposal features.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Potential Pitfalls',
      topics: [
        {
          id: 'memory-leaks',
          title: 'Memory Leaks & Zombie Objects',
          description:
            'How unclosed resources can lead to issues in long-running applications.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
