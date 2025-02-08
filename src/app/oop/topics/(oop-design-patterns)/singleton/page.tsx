import React from 'react';
import ModulePage from '@/components/ModulePage';
import { singletonPatternLessonsTab } from '@/data/lessons/oop/oop-design-patterns/singletonPatternLesson';

const singletonPatternPage: React.FC = () => {
  return (
    <ModulePage
      title="Singleton Pattern"
      description="Understand how the Singleton Pattern ensures a class has only one instance and provides global access"
      lessonsTab={singletonPatternLessonsTab}
      progressKey="SingletonPattern"
    />
  );
};

export default singletonPatternPage;
