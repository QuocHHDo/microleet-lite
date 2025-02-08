import React from 'react';
import ModulePage from '@/components/ModulePage';
import { methodPropertiesLessonsTab } from '@/data/lessons/oop/classes-and-objects/methodPropertiesLesson';

const methodPropertiesPage: React.FC = () => {
  return (
    <ModulePage
      title="Method & Properties"
      description="Explore how methods and properties are defined and used within classes"
      lessonsTab={methodPropertiesLessonsTab}
      progressKey="MethodProperties"
    />
  );
};

export default methodPropertiesPage;
