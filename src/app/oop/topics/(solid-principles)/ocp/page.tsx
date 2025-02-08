import React from 'react';
import ModulePage from '@/components/ModulePage';
import { ocpLessonsTab } from '@/data/lessons/oop/solid-principles/ocpLesson';

const ocpPage: React.FC = () => {
  return (
    <ModulePage
      title="Open-Closed Principle"
      description="Master the Open-Closed Principle"
      lessonsTab={ocpLessonsTab}
      progressKey="OCP"
    />
  );
};

export default ocpPage;
