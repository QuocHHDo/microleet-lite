import React from 'react';
import ModulePage from '@/components/ModulePage';
import { tryCatchFinallyLessonsTab } from '@/data/lessons/oop/error-handling-and-exceptions/tryCatchFinallyLesson';

const tryCatchFinallyPage: React.FC = () => {
  return (
    <ModulePage
      title="Try-Catch-Finally"
      description="Master the use of try-catch-finally blocks for robust error handling"
      lessonsTab={tryCatchFinallyLessonsTab}
      progressKey="TryCatchFinally"
    />
  );
};

export default tryCatchFinallyPage;
