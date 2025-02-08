import React from 'react';
import ModulePage from '@/components/ModulePage';
import { compositionVsInheritanceLessonsTab } from '@/data/lessons/oop/classes-and-objects/compositionVsInheritanceLesson';

const compositionVsInheritancePage: React.FC = () => {
  return (
    <ModulePage
      title="Composition vs Inheritance"
      description="Understand the differences and use cases of composition and inheritance"
      lessonsTab={compositionVsInheritanceLessonsTab}
      progressKey="CompositionVsInheritance"
    />
  );
};

export default compositionVsInheritancePage;
