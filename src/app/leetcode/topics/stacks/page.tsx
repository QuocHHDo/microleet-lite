import ModulePage from '@/components/ModulePage';
import { stackConcepts } from '@/data/concepts/stackConcepts';
import { stackProblems } from '@/data/problems/stackProblems';
import { TopicName } from '../interfaces';
import { stackCheatSheet } from '@/data/cheatsheets/stackCheatSheet';
import { stackLessonsTab } from '@/data/lessons/leetcode/stackLessons';

const StacksPage: React.FC = () => {
  return (
    <ModulePage
      title="Stacks"
      description="Master the fundamentals of stacks and their operations"
      lessonsTab={stackLessonsTab}
      problems={stackProblems}
      cheatSheetItems={stackCheatSheet}
      concepts={stackConcepts}
      progressKey={TopicName.Stacks}
    />
  );
};

export default StacksPage;
