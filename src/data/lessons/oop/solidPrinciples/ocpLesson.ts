import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const ocpCurriculum: Curriculum = {
  title: 'OCP Curriculum',
  description:
    'Learn to design modules that are open for extension but closed for modification.',
  sections: [
    {
      id: 1,
      title: 'Core Idea',
      topics: [
        {
          id: 'ocp-definition',
          title: 'Definition & Rationale',
          description:
            'Explains how to extend functionality without altering existing code.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'common-approaches',
          title: 'Common Approaches',
          description:
            'Abstract classes, interfaces, and design patterns like Strategy and Decorator.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
