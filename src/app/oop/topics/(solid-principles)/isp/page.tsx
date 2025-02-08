import React from 'react';
import ModulePage from '@/components/ModulePage';
import { ispLessonsTab } from '@/data/lessons/oop/solid-principles/ispLesson';

const ispPage: React.FC = () => {
  return (
    <ModulePage
      title="Interface Segregation Principle"
      description="Master the Interface Segregation Principle"
      lessonsTab={ispLessonsTab}
      progressKey="ISP"
    />
  );
};

export default ispPage;
