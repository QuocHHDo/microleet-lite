import React from 'react';
import ModulePage from '@/components/ModulePage';
import { resourceManagementLessonsTab } from '@/data/lessons/oop/error-handling-and-exceptions/resourceManagementLesson';

const resourceManagementPage: React.FC = () => {
  return (
    <ModulePage
      title="Resource Management"
      description="Understand how to manage resources effectively and avoid common pitfalls"
      lessonsTab={resourceManagementLessonsTab}
      progressKey="ResourceManagement"
    />
  );
};

export default resourceManagementPage;
