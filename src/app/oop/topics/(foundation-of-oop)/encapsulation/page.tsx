import React from 'react';
import ModulePage from '@/components/ModulePage';
import { encapsulationLessonsTab } from '@/data/lessons/oop/foundation-of-oop/encapsulationLesson';

const encapsulationPage: React.FC = () => {
  return (
    <ModulePage
      title="Encapsulation"
      description="Understand how encapsulation protects data and restricts access to internal details"
      lessonsTab={encapsulationLessonsTab}
      progressKey="Encapsulation"
    />
  );
};

export default encapsulationPage;
