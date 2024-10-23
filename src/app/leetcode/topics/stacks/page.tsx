import ModulePage from '@/components/ModulePage';
import { stackConcepts } from '@/data/concepts/stackConcepts';
// import { stackLessons } from '@/data/lessons/stackLessons';
import { stackProblems } from '@/data/problems/stackProblems';
import { TopicName } from '../interfaces';
import { stackCheatSheet } from '@/data/cheatsheets/stackCheatSheet';
// import { arrayLessons } from '@/data/lessons/arrayLessons';

const StacksPage: React.FC = () => {
  return (
    <ModulePage
      title="Stacks"
      description="Master the fundamentals of stacks and their operations"
      // lessons={arrayLessons}
      problems={stackProblems}
      cheatSheetItems={stackCheatSheet}
      concepts={stackConcepts}
      progressKey={TopicName.Stacks}
    />
  );
};

export default StacksPage;
