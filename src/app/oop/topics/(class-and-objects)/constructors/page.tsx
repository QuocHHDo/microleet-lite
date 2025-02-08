import React from 'react';
import ModulePage from '@/components/ModulePage';
import { constructorsLessonsTab } from '@/data/lessons/oop/classes-and-objects/constructorsLesson';

const constructorsPage: React.FC = () => {
  return (
    <ModulePage
      title="Constructors"
      description="Learn how constructors work and how to use them effectively in your classes"
      lessonsTab={constructorsLessonsTab}
      progressKey="Constructors"
    />
  );
};

export default constructorsPage;
