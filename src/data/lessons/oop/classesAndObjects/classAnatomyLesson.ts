import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const classAnatomyCurriculum: Curriculum = {
  title: 'Class Anatomy Curriculum',
  description:
    'Break down the internal structure of a class, covering fields, methods, and nested classes.',
  sections: [
    {
      id: 1,
      title: 'Fundamental Components',
      topics: [
        {
          id: 'class-fields',
          title: 'Fields & Properties',
          description:
            'How variables are declared and managed within the class scope.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'class-methods',
          title: 'Methods',
          description: 'Defining behaviors and logic within classes.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Advanced Structures',
      topics: [
        {
          id: 'nested-classes',
          title: 'Nested & Inner Classes',
          description:
            'Scenarios where classes can exist within other classes, and why that’s useful.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'class-annotations',
          title: 'Annotations & Metadata',
          description:
            'Overview of how metadata can be attached to classes (e.g., @Entity).',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};
