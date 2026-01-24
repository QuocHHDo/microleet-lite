import React from 'react';
import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { dynamicProgrammingLessonsTab } from '@/data/lessons/dsa/dynamicProgramming';
import { dpConcepts } from '@/data/concepts/dpConcepts';
import { dpCheatSheet } from '@/data/cheatsheets/dpCheatSheet';
import { dpProblems } from '@/data/problems/dpProblems';

const DynamicProgrammingPage: React.FC = () => {
  return (
    <ModulePage
      title="Dynamic Programming"
      description="Master dynamic programming from fundamentals to advanced patterns"
      lessonsTab={dynamicProgrammingLessonsTab}
      problems={dpProblems}
      cheatSheetItems={dpCheatSheet}
      concepts={dpConcepts}
      progressKey={TopicName.DynamicProgramming}
    />
  );
};

export default DynamicProgrammingPage;
