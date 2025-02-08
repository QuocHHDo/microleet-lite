import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const constructorsCurriculum: Curriculum = {
  title: 'Constructors Curriculum',
  description:
    'Understand the role of constructors in initializing class instances and enforcing invariants.',
  sections: [
    {
      id: 1,
      title: 'Constructor Basics',
      topics: [
        {
          id: 'default-constructor',
          title: 'Default & Parameterized',
          description:
            'Explains default constructors, constructor overloading, and passing arguments.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'object-initialization',
          title: 'Object Initialization',
          description:
            'Discusses best practices for preparing object state during construction.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Advanced Concepts',
      topics: [
        {
          id: 'copy-constructors',
          title: 'Copy Constructors',
          description:
            'When and how to create a new instance from an existing instance.',
          priority: PriorityLevel.Beneficial,
        },
        {
          id: 'exceptions-in-constructors',
          title: 'Exceptions in Constructors',
          description:
            'How to handle failures or invalid states at construction time.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
