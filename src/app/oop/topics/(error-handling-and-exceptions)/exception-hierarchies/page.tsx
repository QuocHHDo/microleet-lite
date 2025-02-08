import React from 'react';
import ModulePage from '@/components/ModulePage';
import { exceptionHierarchiesLessonsTab } from '@/data/lessons/oop/error-handling-and-exceptions/exceptionHierarchiesLesson';

const ExceptionHierarchiesPage: React.FC = () => {
  return (
    <ModulePage
      title="Exception Hierarchies"
      description="Master the fundamentals of exception hierarchies"
      lessonsTab={exceptionHierarchiesLessonsTab}
      progressKey="ExceptionHierarchies"
    />
  );
};

export default ExceptionHierarchiesPage;
