import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const objectLifecyclesCurriculum: Curriculum = {
  title: 'Object Lifecycles Curriculum',
  description:
    'Examine how objects are born, live, and die—covering memory management and lifecycle callbacks.',
  sections: [
    {
      id: 1,
      title: 'Lifecycle Stages',
      topics: [
        {
          id: 'instantiation',
          title: 'Instantiation',
          description: 'How objects are allocated and constructed in memory.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'initialization',
          title: 'Initialization',
          description:
            'Steps the runtime or language takes to finalize object creation.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Destruction & Cleanup',
      topics: [
        {
          id: 'garbage-collection',
          title: 'Garbage Collection',
          description:
            'How high-level languages handle deallocation automatically.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'destructors-finalize',
          title: 'Destructors & Finalizers',
          description:
            'Explains finalizers in C++, or .NET/Java equivalents, along with their best practices.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
