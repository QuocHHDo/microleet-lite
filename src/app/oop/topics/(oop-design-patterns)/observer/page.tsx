import React from 'react';
import ModulePage from '@/components/ModulePage';
import { observerPatternLessonsTab } from '@/data/lessons/oop/oop-design-patterns/observerPatternLesson';

const observerPatternPage: React.FC = () => {
  return (
    <ModulePage
      title="Observer Pattern"
      description="Learn how the Observer Pattern enables objects to notify and update dependent objects"
      lessonsTab={observerPatternLessonsTab}
      progressKey="ObserverPattern"
    />
  );
};

export default observerPatternPage;
