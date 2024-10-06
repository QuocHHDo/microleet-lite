import ModulePage from '@/components/ModulePage';
import { tupleConcepts } from '@/data/concepts/tupleConcepts';
// import { tupleLessons } from '@/data/lessons/tupleLessons';
import { tupleProblems } from '@/data/problems/tupleProblems';
import { TopicName } from '../interfaces';
import { tupleCheatSheet } from '@/data/cheatsheets/tupleCheatSheet';
import { arrayLessons } from '@/data/lessons/arrayLessons';

const TuplesPage: React.FC = () => {
  return (
    <ModulePage
      title="Stacks"
      description="Master the fundamentals of tuples and their operations"
      lessons={arrayLessons}
      problems={tupleProblems}
      cheatSheetItems={tupleCheatSheet}
      concepts={tupleConcepts}
      progressKey={TopicName.Stacks}
    />
  );
};

export default TuplesPage;
