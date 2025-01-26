import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const overloadingOverridingCurriculum: Curriculum = {
  title: 'Overloading & Overriding Curriculum',
  description:
    'Differentiate between compile-time method overloading and run-time method overriding for flexible OOP designs.',
  sections: [
    {
      id: 1,
      title: 'Core Definitions',
      topics: [
        {
          id: 'method-overloading',
          title: 'Method Overloading',
          description:
            'Creating methods with the same name but different signatures or parameter types.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'method-overriding',
          title: 'Method Overriding',
          description:
            'Subclasses providing a specific implementation of a parent class method.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Practical Insights',
      topics: [
        {
          id: 'usecases',
          title: 'Use Cases & Examples',
          description:
            'Shows typical patterns where overloading and overriding are beneficial.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'common-confusions',
          title: 'Common Confusions',
          description:
            'Discusses naming, parameter mismatch, and annotation usage (e.g., @Override).',
          priority: PriorityLevel.Important,
        },
      ],
    },
  ],
};
