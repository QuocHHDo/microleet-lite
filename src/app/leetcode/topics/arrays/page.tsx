import ModulePage from '@/components/ModulePage';
import { arrayConcepts } from '@/data/concepts/arrayConcepts';
import { arrayLessons } from '@/data/lessons/arrayLessons';
import { arrayProblems } from '@/data/problems/arrayProblems';
import { TopicName } from '../interfaces';
import { arrayCheatSheet } from '@/data/cheatsheets/arrayCheatSheet';

const ArraysPage: React.FC = () => {
  return (
    <ModulePage
      title="Arrays"
      description="Master the fundamentals of arrays and their operations"
      lessons={arrayLessons}
      problems={arrayProblems}
      cheatSheetItems={arrayCheatSheet}
      concepts={arrayConcepts}
      progressKey={TopicName.Arrays}
    />
  );
};

export default ArraysPage;
