import React from 'react';
import ModulePage from '@/components/ModulePage';
import { loggingPracticesLessonsTab } from '@/data/lessons/oop/error-handling-and-exceptions/loggingPracticesLesson';

const loggingPracticesPage: React.FC = () => {
  return (
    <ModulePage
      title="Logging Practices"
      description="Learn best practices for logging and monitoring in your applications"
      lessonsTab={loggingPracticesLessonsTab}
      progressKey="LoggingPractices"
    />
  );
};

export default loggingPracticesPage;
