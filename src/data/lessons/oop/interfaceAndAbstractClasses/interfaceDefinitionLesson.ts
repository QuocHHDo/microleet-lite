import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const interfaceDefinitionCurriculum: Curriculum = {
  title: 'Interface Definition & Purpose Curriculum',
  description:
    'Explore how interfaces define contracts without dictating implementation details.',
  sections: [
    {
      id: 1,
      title: 'Interface Basics',
      topics: [
        {
          id: 'interface-contracts',
          title: 'Contracts in OOP',
          description:
            'How interfaces enforce a set of methods or properties that must be implemented.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'loose-coupling',
          title: 'Loose Coupling & Testability',
          description:
            'How interfaces make software components more modular and testable.',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
