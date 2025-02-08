import React from 'react';
import ModulePage from '@/components/ModulePage';
import { customExceptionsLessonsTab } from '@/data/lessons/oop/error-handling-and-exceptions/customExceptionsLesson';

const customExceptionPage: React.FC = () => {
  return (
    <ModulePage
      title="Custom Exceptions"
      description="Learn how to create and use custom exceptions for effective error handling"
      lessonsTab={customExceptionsLessonsTab}
      progressKey="CustomException"
    />
  );
};

export default customExceptionPage;
