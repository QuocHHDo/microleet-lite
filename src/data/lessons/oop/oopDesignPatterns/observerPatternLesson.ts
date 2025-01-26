import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const observerPatternCurriculum: Curriculum = {
  title: 'Observer Pattern Curriculum',
  description:
    'Establish a one-to-many dependency so that when one object changes state, its dependents are notified.',
  sections: [
    {
      id: 1,
      title: 'Core Mechanics',
      topics: [
        {
          id: 'observer-subject',
          title: 'Subject & Observers',
          description:
            'Roles of the subject (publisher) and observers (subscribers).',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'push-vs-pull',
          title: 'Push vs. Pull Models',
          description:
            'Different ways the subject can deliver state changes to observers.',
          priority: PriorityLevel.Important,
        },
      ],
    },
    {
      id: 2,
      title: 'Common Implementations',
      topics: [
        {
          id: 'event-listeners',
          title: 'Event Listener Systems',
          description:
            'GUI frameworks and messaging systems that follow the observer principle.',
          priority: PriorityLevel.Essential,
        },
        {
          id: 'reactive-streams',
          title: 'Reactive Streams',
          description:
            'Modern libraries like RxJS and Project Reactor that build on observer fundamentals.',
          priority: PriorityLevel.Beneficial,
        },
      ],
    },
  ],
};
