import React from 'react';
import ModulePage from '@/components/ModulePage';
import { factoryPatternLessonsTab } from '@/data/lessons/oop/oop-design-patterns/factoryPatternLesson';

const factoryPatternPage: React.FC = () => {
  return (
    <ModulePage
      title="Factory Pattern"
      description="Learn how the Factory Pattern encapsulates object creation and promotes loose coupling"
      lessonsTab={factoryPatternLessonsTab}
      progressKey="FactoryPattern"
    />
  );
};

export default factoryPatternPage;
