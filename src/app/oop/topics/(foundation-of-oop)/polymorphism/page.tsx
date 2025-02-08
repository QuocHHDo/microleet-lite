import React from 'react';
import { polymorphismLessonsTab } from '@/data/lessons/oop/foundation-of-oop/polymorphismLesson';
import ModulePage from '@/components/ModulePage';

const PolymorphismPage: React.FC = () => {
  return (
    <ModulePage
      title="Polymorphism"
      description="Master the fundamentals of polymorphism"
      lessonsTab={polymorphismLessonsTab}
      progressKey="Polymorphism"
    />
  );
};

export default PolymorphismPage;
