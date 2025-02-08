import React from 'react';
import ModulePage from '@/components/ModulePage';
import { polymorphismLessonsTab } from '@/data/lessons/oop/foundation-of-oop/polymorphismLesson';

const polymorphismPage: React.FC = () => {
  return (
    <ModulePage
      title="Polymorphism"
      description="Understand how polymorphism allows objects to take on multiple forms"
      lessonsTab={polymorphismLessonsTab}
      progressKey="Polymorphism"
    />
  );
};

export default polymorphismPage;
