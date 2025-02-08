import React from 'react';
import ModulePage from '@/components/ModulePage';
import { decoratorPatternLessonsTab } from '@/data/lessons/oop/oop-design-patterns/decoratorPatternLesson';

const decoratorPatternPage: React.FC = () => {
  return (
    <ModulePage
      title="Decorator Pattern"
      description="Learn how the Decorator Pattern dynamically adds behavior to objects without altering their structure"
      lessonsTab={decoratorPatternLessonsTab}
      progressKey="DecoratorPattern"
    />
  );
};

export default decoratorPatternPage;
