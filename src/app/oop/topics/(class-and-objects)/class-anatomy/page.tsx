import React from 'react';
import ModulePage from '@/components/ModulePage';
import { classAnnotationsLessonsTab } from '@/data/lessons/oop/classes-and-objects/classAnatomyLesson';

const classAnatomyPage: React.FC = () => {
  return (
    <ModulePage
      title="Class Anatomy"
      description="Master the fundamentals of class anatomy"
      lessonsTab={classAnnotationsLessonsTab}
      progressKey="ClassAnatomy"
    />
  );
};

export default classAnatomyPage;
