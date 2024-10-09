import ModulePage from '@/components/ModulePage';
import { setConcepts } from '@/data/concepts/setConcepts';
// import { setLessons } from '@/data/lessons/setLessons';
import { setProblems } from '@/data/problems/setProblems';
import { TopicName } from '../interfaces';
import { setCheatSheet } from '@/data/cheatsheets/setCheatSheet';
import { arrayLessons } from '@/data/lessons/arrayLessons';

const SetsPage: React.FC = () => {
  return (
    <ModulePage
      title="Sets"
      description="Master the fundamentals of sets and their operations"
      lessons={arrayLessons}
      problems={setProblems}
      cheatSheetItems={setCheatSheet}
      concepts={setConcepts}
      progressKey={TopicName.Stacks}
    />
  );
};

export default SetsPage;
