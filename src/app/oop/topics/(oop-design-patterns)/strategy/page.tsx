import React from 'react';
import ModulePage from '@/components/ModulePage';
import { strategyPatternLessonsTab } from '@/data/lessons/oop/oop-design-patterns/strategyPatternLesson';

const strategyPatternPage: React.FC = () => {
  return (
    <ModulePage
      title="Strategy Pattern"
      description="Learn how the Strategy Pattern allows you to define a family of algorithms and make them interchangeable"
      lessonsTab={strategyPatternLessonsTab}
      progressKey="StrategyPattern"
    />
  );
};

export default strategyPatternPage;
