import React from 'react';
import ModulePage from '@/components/ModulePage';
import { compositePatternLessonsTab } from '@/data/lessons/oop/oop-design-patterns/compositePatternLesson';

const compositePatternPage: React.FC = () => {
  return (
    <ModulePage
      title="Composite Pattern"
      description="Understand how the Composite Pattern allows you to treat individual objects and compositions uniformly"
      lessonsTab={compositePatternLessonsTab}
      progressKey="CompositePattern"
    />
  );
};

export default compositePatternPage;
