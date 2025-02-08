import React from 'react';
import { encapsulationLessonsTab } from '@/data/lessons/oop/foundation-of-oop/encapsulationLesson';
import ModulePage from '@/components/ModulePage';

const EncapsulationPage: React.FC = () => {
  return (
    <ModulePage
      title="Encapsulation"
      description="Master the fundamentals of encapsulation"
      lessonsTab={encapsulationLessonsTab}
      progressKey="Encapsulation"
    />
  );
};

export default EncapsulationPage;
