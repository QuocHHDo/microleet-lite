import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const compositePatternCurriculum: Curriculum = {
  title: 'Composite Pattern Curriculum',
  description:
    'Compose objects into tree structures to represent part-whole hierarchies, enabling uniform treatment of individual and composite objects.',
  sections: [
    {
      id: 1,
      title: 'Overview',
      topics: [
        {
          id: 'composite-structure',
          title: 'Structure',
          description:
            'How leaf objects and composite objects implement the same interface.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'hierarchical-data',
          title: 'Hierarchical Data Handling',
          description:
            'Tree-like data such as file systems, UI components, or organizational charts.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation',
      topics: [
        {
          id: 'implementation-details',
          title: 'Implementation Details',
          description:
            'Defining component, leaf, and composite classes with typical methods like add, remove, and display.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};
