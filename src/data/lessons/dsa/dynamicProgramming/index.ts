import { LessonsTab } from '@/common/commonLesson';
import { dpCurriculum } from './curriculum';
import { fundamentalsLessons } from './fundamentals';
import { oneDimensionalDPLessons } from './oneDimensionalDP';
import { twoDimensionalDPLessons } from './twoDimensionalDP';
import { knapsackLessons } from './knapsack';
import { stringDPLessons } from './stringDP';
import { advancedDPLessons } from './advancedDP';

// Combine all lessons from different sections
const lessons = {
  ...fundamentalsLessons,
  ...oneDimensionalDPLessons,
  ...twoDimensionalDPLessons,
  ...knapsackLessons,
  ...stringDPLessons,
  ...advancedDPLessons,
};

export const dynamicProgrammingLessonsTab: LessonsTab = {
  curriculum: dpCurriculum,
  lessons: lessons,
};
