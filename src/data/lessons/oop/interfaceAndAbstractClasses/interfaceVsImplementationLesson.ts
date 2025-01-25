import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const interfaceVsImplementationCurriculum: Curriculum = {
  title: 'Interface vs. Implementation Inheritance Curriculum',
  description:
    'Delve into the distinction between inheriting signatures (interfaces) and inheriting concrete behavior (classes).',
  sections: [
    {
      id: 1,
      title: 'Core Distinctions',
      topics: [
        {
          id: 'interface-inheritance',
          title: 'Interface Inheritance',
          description: 'Inheritance of method signatures and structure only.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'implementation-inheritance',
          title: 'Implementation Inheritance',
          description:
            'Subclasses adopting concrete code from parent classes, with optional overrides.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
    {
      id: 2,
      title: 'Pros & Cons',
      topics: [
        {
          id: 'flexibility',
          title: 'Flexibility vs. Complexity',
          description:
            'How purely interface-based designs can reduce coupling but sometimes lead to boilerplate code.',
          priority: PriorityLevel.Important,
        },
        {
          id: 'diamond-problem',
          title: 'Multiple Inheritance & Diamond Problem',
          description:
            'Differences between language approaches to multiple interfaces vs. multiple class inheritance.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};
