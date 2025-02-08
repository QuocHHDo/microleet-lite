import React from 'react';
import ModulePage from '@/components/ModulePage';
import { lspLessonsTab } from '@/data/lessons/oop/solid-principles/lspLesson';

const lspPage: React.FC = () => {
  return (
    <ModulePage
      title="Liskov Substitution Principle"
      description="Master the Liskov Substitution Principle"
      lessonsTab={lspLessonsTab}
      progressKey="LSP"
    />
  );
};

export default lspPage;
