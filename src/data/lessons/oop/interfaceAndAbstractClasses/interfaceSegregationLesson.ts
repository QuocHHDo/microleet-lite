import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const interfaceSegregationCurriculum: Curriculum = {
  title: 'Interface Segregation Principle Curriculum',
  description:
    'A deeper look into designing small, specific interfaces to avoid forcing dependencies on unused methods.',
  sections: [
    {
      id: 1,
      title: 'ISP Basics',
      topics: [
        {
          id: 'isp-definition',
          title: 'Definition & Reasoning',
          description:
            'Ensuring that no client is forced to implement methods it doesn’t use.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'benefits-examples',
          title: 'Benefits & Examples',
          description:
            'Real-life scenarios showing how segregated interfaces enhance maintainability.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Implementation',
      topics: [
        {
          id: 'splitting-interfaces',
          title: 'Splitting Interfaces',
          description:
            'How to refactor large interfaces into smaller, more coherent ones.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'common-mistakes',
          title: 'Common Mistakes',
          description:
            'Creating too many tiny interfaces or misunderstanding interface separation.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
