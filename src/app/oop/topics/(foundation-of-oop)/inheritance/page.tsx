import React from 'react';
import { inheritanceLessonsTab } from '@/data/lessons/oop/foundation-of-oop/inheritanceLesson';
import ModulePage from '@/components/ModulePage';

const InheritancePage: React.FC = () => {
  return (
    <ModulePage
      title="Inheritance"
      description="Master the fundamentals of inheritance"
      lessonsTab={inheritanceLessonsTab}
      progressKey="Inheritance"
    />
  );
};

export default InheritancePage;
