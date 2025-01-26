import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { trieCheatSheet } from '@/data/cheatsheets/trieCheatSheet';
import { trieProblems } from '@/data/problems/trieProblems';
import { trieConcepts } from '@/data/concepts/trieConcepts';
import { trieLessonsTab } from '@/data/lessons/leetcode/trieLessons';

const TriesPage: React.FC = () => {
  return (
    <ModulePage
      title="Tries"
      description="Deep dive into triess and their usage"
      lessonsTab={trieLessonsTab}
      problems={trieProblems}
      cheatSheetItems={trieCheatSheet}
      concepts={trieConcepts}
      progressKey={TopicName.Tries}
    />
  );
};

export default TriesPage;
