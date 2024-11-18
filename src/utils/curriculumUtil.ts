import { Curriculum, PriorityLevel } from '@/common/commonLesson';

export const getTopicsByPriority = (
  curriculum: Curriculum,
  priority: PriorityLevel,
) => {
  return curriculum.sections
    .flatMap((section) => section.topics)
    .filter((topic) => topic.priority === priority);
};

export const getStudyPath = (curriculum: Curriculum, isNewGrad: boolean) => {
  const priorities = isNewGrad
    ? [PriorityLevel.MustKnow, PriorityLevel.Recommended]
    : [
        PriorityLevel.MustKnow,
        PriorityLevel.HighlyRecommended,
        PriorityLevel.Recommended,
      ];

  return curriculum.sections
    .flatMap((section) => section.topics)
    .filter((topic) => priorities.includes(topic.priority as PriorityLevel));
};
