import React from 'react';
import { overloadingOverridingLessonsTab } from '@/data/lessons/oop/foundation-of-oop/overloadingOverridingLesson';
import ModulePage from '@/components/ModulePage';

const OverloadingOverridingPage: React.FC = () => {
  return (
    <ModulePage
      title="Overloading & Overriding"
      description="Master the fundamentals of overloading & overriding"
      lessonsTab={overloadingOverridingLessonsTab}
      progressKey="OverloadingOverriding"
    />
  );
};

export default OverloadingOverridingPage;
