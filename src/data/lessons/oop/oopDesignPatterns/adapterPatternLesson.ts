import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const adapterPatternCurriculum: Curriculum = {
  title: 'Adapter Pattern Curriculum',
  description:
    'Convert the interface of a class into another interface clients expect, facilitating compatibility.',
  sections: [
    {
      id: 1,
      title: 'Purpose & Motivation',
      topics: [
        {
          id: 'adapter-intro',
          title: 'Intro to Adapter',
          description:
            'Why adapters are useful for integrating legacy code or third-party libraries.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation',
      topics: [
        {
          id: 'wrapper-class',
          title: 'Wrapper Class Concept',
          description:
            'Wrapping an incompatible interface with one that is compatible.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
