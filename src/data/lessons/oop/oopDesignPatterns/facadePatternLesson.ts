import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const facadePatternCurriculum: Curriculum = {
  title: 'Facade Pattern Curriculum',
  description:
    'Provide a simplified interface to a complex subsystem, making it easier to use.',
  sections: [
    {
      id: 1,
      title: 'Concept & Rationale',
      topics: [
        {
          id: 'facade-definition',
          title: 'Definition',
          description:
            'Why a single entry point to a complex library or subsystem is valuable.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation Nuances',
      topics: [
        {
          id: 'api-wrapping',
          title: 'Wrapping APIs',
          description:
            'Combining multiple function calls into a single, high-level method for the client.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
