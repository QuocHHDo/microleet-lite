import React from 'react';
import ModulePage from '@/components/ModulePage';
import { facadePatternLessonsTab } from '@/data/lessons/oop/oop-design-patterns/facadePatternLesson';

const facadePatternPage: React.FC = () => {
  return (
    <ModulePage
      title="Facade Pattern"
      description="Understand how the Facade Pattern simplifies complex systems by providing a unified interface"
      lessonsTab={facadePatternLessonsTab}
      progressKey="FacadePattern"
    />
  );
};

export default facadePatternPage;
