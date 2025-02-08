import React from 'react';
import ModulePage from '@/components/ModulePage';
import { interfaceDefinitionLessonsTab } from '@/data/lessons/oop/interface-and-abstract-classes/interfaceDefinitionLesson';

const interfaceDefinitionPage: React.FC = () => {
  return (
    <ModulePage
      title="Interface Definition"
      description="Understand how interfaces define contracts for classes to implement"
      lessonsTab={interfaceDefinitionLessonsTab}
      progressKey="InterfaceDefinition"
    />
  );
};

export default interfaceDefinitionPage;
