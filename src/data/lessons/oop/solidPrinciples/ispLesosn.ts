import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const ispCurriculum: Curriculum = {
  title: 'ISP Curriculum',
  description:
    'Stay consistent with small, specialized interfaces to prevent implementing unneeded functionalities.',
  sections: [
    {
      id: 1,
      title: 'ISP Overview',
      topics: [
        {
          id: 'isp-definition2',
          title: 'Definition & Reasoning',
          description:
            'Ensuring no client should be forced to depend on methods it does not use.',
          priority: PriorityLevel.Essential,
        },
      ],
    },
  ],
};
