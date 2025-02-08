import React from 'react';
import ModulePage from '@/components/ModulePage';
import { abstractClassesLessonsTab } from '@/data/lessons/oop/interface-and-abstract-classes/abstractClassesLesson';

const abstractClassesPage: React.FC = () => {
  return (
    <ModulePage
      title="Abstract Classes"
      description="Learn how abstract classes provide a blueprint for other classes and enforce structure"
      lessonsTab={abstractClassesLessonsTab}
      progressKey="AbstractClasses"
    />
  );
};

export default abstractClassesPage;
