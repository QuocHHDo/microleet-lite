import React from 'react';
import ModulePage from '@/components/ModulePage';
import { srpLessonsTab } from '@/data/lessons/oop/solid-principles/srpLesson';

const srpPage: React.FC = () => {
  return (
    <ModulePage
      title="Single Responsibility Principle"
      description="Master the Single Responsibility Principle"
      lessonsTab={srpLessonsTab}
      progressKey="SRP"
    />
  );
};

export default srpPage;
