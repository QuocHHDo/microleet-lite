import React from 'react';
import ModulePage from '@/components/ModulePage';
import { dipLessonsTab } from '@/data/lessons/oop/solid-principles/dipLesson';

const dipPage: React.FC = () => {
  return (
    <ModulePage
      title="Dependency Inversion Principle"
      description="Master the Dependency Inversion Principle"
      lessonsTab={dipLessonsTab}
      progressKey="DIP"
    />
  );
};

export default dipPage;
