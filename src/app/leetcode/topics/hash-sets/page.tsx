import ModulePage from '@/components/ModulePage';
import { setConcepts } from '@/data/concepts/setConcepts';
import { setProblems } from '@/data/problems/setProblems';
import { TopicName } from '../interfaces';
import { setCheatSheet } from '@/data/cheatsheets/setCheatSheet';
import { setLessonsTab } from '@/data/lessons/dsa/setLessons';

const HashSetsPage: React.FC = () => {
  return (
    <ModulePage
      title="Hash Sets"
      description="Master the fundamentals of hash sets and their operations"
      lessonsTab={setLessonsTab}
      problems={setProblems}
      cheatSheetItems={setCheatSheet}
      concepts={setConcepts}
      progressKey={TopicName.HashSets}
    />
  );
};

export default HashSetsPage;
