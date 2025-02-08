import React from 'react';
import ModulePage from '@/components/ModulePage';
import { overloadingOverridingLessonsTab } from '@/data/lessons/oop/foundation-of-oop/overloadingOverridingLesson';

const overloadingOverridingPage: React.FC = () => {
  return (
    <ModulePage
      title="Overloading and Overriding"
      description="Learn the differences between method overloading and method overriding"
      lessonsTab={overloadingOverridingLessonsTab}
      progressKey="OverloadingOverriding"
    />
  );
};

export default overloadingOverridingPage;
