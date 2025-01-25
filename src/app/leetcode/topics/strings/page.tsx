import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { stringCheatSheet } from '@/data/cheatsheets/stringCheatSheet';
import { stringProblems } from '@/data/problems/stringProblems';
import { stringConcepts } from '@/data/concepts/stringConcepts';
import { stringLessonsTab } from '@/data/lessons/leetcode/stringLessons';

const StringsPage: React.FC = () => {
  return (
    <ModulePage
      title="Strings"
      description="Deep dive into strings and their usage"
      lessonsTab={stringLessonsTab}
      problems={stringProblems}
      cheatSheetItems={stringCheatSheet}
      concepts={stringConcepts}
      progressKey={TopicName.Strings}
    />
  );
};

export default StringsPage;
