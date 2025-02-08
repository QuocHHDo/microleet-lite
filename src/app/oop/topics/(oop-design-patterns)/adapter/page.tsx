import React from 'react';
import ModulePage from '@/components/ModulePage';
import { adapterPatternLessonsTab } from '@/data/lessons/oop/oop-design-patterns/adapterPatternLesson';

const adapterPatternPage: React.FC = () => {
  return (
    <ModulePage
      title="Adapter Pattern"
      description="Learn how the Adapter Pattern allows incompatible interfaces to work together"
      lessonsTab={adapterPatternLessonsTab}
      progressKey="AdapterPattern"
    />
  );
};

export default adapterPatternPage;
