import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const strategyPatternCurriculum: Curriculum = {
  title: 'Strategy Pattern Curriculum',
  description:
    'Define a family of algorithms and make them interchangeable at runtime.',
  sections: [
    {
      id: 1,
      title: 'Overview',
      topics: [
        {
          id: 'strategy-intro',
          title: 'Introduction & Motivation',
          description:
            'Why encapsulating algorithms behind an interface fosters flexibility.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'common-use-cases',
          title: 'Common Use Cases',
          description:
            'Real-world scenarios like payment processing or sorting strategies.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Implementation & Interview',
      topics: [
        {
          id: 'strategy-implementation',
          title: 'Implementation Details',
          description:
            'How to define a context class and strategy interface with concrete strategies.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'comparison-other-patterns',
          title: 'Comparison with Other Patterns',
          description:
            'Distinguish from State, Template Method, and other related patterns.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};
