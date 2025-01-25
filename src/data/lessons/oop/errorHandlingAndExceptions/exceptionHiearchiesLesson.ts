import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const exceptionHierarchiesCurriculum: Curriculum = {
  title: 'Exception Hierarchies Curriculum',
  description:
    'Understand how exceptions inherit from base classes and how to structure custom hierarchies effectively.',
  sections: [
    {
      id: 1,
      title: 'Core Concepts',
      topics: [
        {
          id: 'checked-vs-unchecked',
          title: 'Checked vs. Unchecked Exceptions (where applicable)',
          description:
            'Differences in languages like Java, and how it impacts error handling.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'hierarchy-design',
          title: 'Designing Exception Classes',
          description:
            'Creating meaningful exception hierarchies that reflect domain errors.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
