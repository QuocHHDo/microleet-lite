import React from 'react';
import ModulePage from '@/components/ModulePage';
import { interfaceSegregationLessonsTab } from '@/data/lessons/oop/interface-and-abstract-classes/interfaceSegregationLesson';

const interfaceSegregationPage: React.FC = () => {
  return (
    <ModulePage
      title="Interface Segregation"
      description="Learn how to design smaller, more specific interfaces to avoid unnecessary dependencies"
      lessonsTab={interfaceSegregationLessonsTab}
      progressKey="InterfaceSegregation"
    />
  );
};

export default interfaceSegregationPage;
