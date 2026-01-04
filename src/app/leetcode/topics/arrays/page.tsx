import ModulePage from '@/components/ModulePage';
import { arrayConcepts } from '@/data/concepts/arrayConcepts';
import { arrayProblems } from '@/data/problems/arrayProblems';
import { TopicName } from '../interfaces';
import { arrayCheatSheet } from '@/data/cheatsheets/arrayCheatSheet';
import { arrayLessonsTab } from '@/data/lessons/dsa/arrayLessons';

const ArraysPage: React.FC = () => {
  return (
    <ModulePage
      title="Arrays"
      description="Master the fundamentals of arrays and their operations"
      lessonsTab={arrayLessonsTab}
      problems={arrayProblems}
      cheatSheetItems={arrayCheatSheet}
      concepts={arrayConcepts}
      progressKey={TopicName.Arrays}
    />
  );
};

export default ArraysPage;
