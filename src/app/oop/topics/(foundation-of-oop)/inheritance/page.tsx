import React from 'react';
import ModulePage from '@/components/ModulePage';
import { inheritanceLessonsTab } from '@/data/lessons/oop/foundation-of-oop/inheritanceLesson';

const inheritancePage: React.FC = () => {
  return (
    <ModulePage
      title="Inheritance"
      description="Explore how inheritance allows classes to inherit properties and methods from other classes"
      lessonsTab={inheritanceLessonsTab}
      progressKey="Inheritance"
    />
  );
};

export default inheritancePage;
