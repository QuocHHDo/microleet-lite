import React from 'react';
import ModulePage from '@/components/ModulePage';
import { objectLifecyclesLessonsTab } from '@/data/lessons/oop/classes-and-objects/objectLifecyclesLesson';

const objectLifecyclesPage: React.FC = () => {
  return (
    <ModulePage
      title="Object Lifecycles"
      description="Understand the lifecycle of objects, from creation to destruction"
      lessonsTab={objectLifecyclesLessonsTab}
      progressKey="ObjectLifecycles"
    />
  );
};

export default objectLifecyclesPage;
