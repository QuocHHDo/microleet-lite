import React from 'react';
import ModulePage from '@/components/ModulePage';
import { interfaceVsImplementationLessonsTab } from '@/data/lessons/oop/interface-and-abstract-classes/interfaceVsImplementationLesson';

const interfaceVsImplementationPage: React.FC = () => {
  return (
    <ModulePage
      title="Interface vs Implementation"
      description="Explore the differences between interfaces and their implementations"
      lessonsTab={interfaceVsImplementationLessonsTab}
      progressKey="InterfaceVsImplementation"
    />
  );
};

export default interfaceVsImplementationPage;
