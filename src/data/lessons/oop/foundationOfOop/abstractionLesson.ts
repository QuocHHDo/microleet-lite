import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const abstractionCurriculum: Curriculum = {
  title: 'Abstraction Curriculum',
  description:
    'Deep dive into how abstractions simplify complex systems by modeling relevant details.',
  sections: [
    {
      id: 1,
      title: 'Core Concepts',
      topics: [
        {
          id: 'abstraction-definition',
          title: 'Definition & Purpose',
          description:
            'What is Abstraction and how does it reduce complexity in software design?',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'abstraction-realworld',
          title: 'Real-World Examples',
          description:
            'Everyday analogies, such as using a car interface without knowing its engine details.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Techniques & Implementation',
      topics: [
        {
          id: 'abstracting-data',
          title: 'Abstracting Data & Behavior',
          description:
            'Separating interface from implementation using abstract classes or interfaces (where applicable).',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'effective-abstraction',
          title: 'Effective Abstraction',
          description:
            'How to decide what details to expose and what to hide in complex systems.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 3,
      title: 'Interview Prep',
      topics: [
        {
          id: 'abstraction-questions',
          title: 'Typical Interview Questions',
          description:
            'Common prompts about abstract classes, interfaces, and real-world design usage.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};
