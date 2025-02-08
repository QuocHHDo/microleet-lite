import React from 'react';
import ModulePage from '@/components/ModulePage';
import { abstractionLessonsTab } from '@/data/lessons/oop/foundation-of-oop/abstractionLesson';

const abstractionPage: React.FC = () => {
  return (
    <ModulePage
      title="Abstraction"
      description="Learn how abstraction simplifies complex systems by hiding unnecessary details"
      lessonsTab={abstractionLessonsTab}
      progressKey="Abstraction"
    />
  );
};

export default abstractionPage;
