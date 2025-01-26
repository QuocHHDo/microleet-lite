import ModulePage from '@/components/ModulePage';
import { setConcepts } from '@/data/concepts/setConcepts';
import { setProblems } from '@/data/problems/setProblems';
import { TopicName } from '../interfaces';
import { setCheatSheet } from '@/data/cheatsheets/setCheatSheet';
import { setLessonsTab } from '@/data/lessons/leetcode/setLessons';

const SetsPage: React.FC = () => {
  return (
    <ModulePage
      title="Sets"
      description="Master the fundamentals of sets and their operations"
      lessonsTab={setLessonsTab}
      problems={setProblems}
      cheatSheetItems={setCheatSheet}
      concepts={setConcepts}
      progressKey={TopicName.Stacks}
    />
  );
};

export default SetsPage;
