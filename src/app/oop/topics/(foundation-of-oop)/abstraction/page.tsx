import React from 'react';
import ModulePage from '@/components/ModulePage';
import { abstractionLessonsTab } from '@/data/lessons/oop/foundation-of-oop/abstractionLesson';

const AbstractionPage: React.FC = () => {
  return (
    <ModulePage
      title="Abstraction"
      description="Master the fundamentals of abstraction"
      lessonsTab={abstractionLessonsTab}
      progressKey="Abstraction"
    />
  );
};

export default AbstractionPage;
