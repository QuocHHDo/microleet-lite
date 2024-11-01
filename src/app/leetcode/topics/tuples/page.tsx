import ModulePage from '@/components/ModulePage';
import { tupleConcepts } from '@/data/concepts/tupleConcepts';
import { tupleProblems } from '@/data/problems/tupleProblems';
import { TopicName } from '../interfaces';
import { tupleCheatSheet } from '@/data/cheatsheets/tupleCheatSheet';
import { tupleLessonsTab } from '@/data/lessons/tupleLessons';

const TuplesPage: React.FC = () => {
  return (
    <ModulePage
      title="Tuples"
      description="Master the fundamentals of tuples and their operations"
      lessonsTab={tupleLessonsTab}
      problems={tupleProblems}
      cheatSheetItems={tupleCheatSheet}
      concepts={tupleConcepts}
      progressKey={TopicName.Stacks}
    />
  );
};

export default TuplesPage;
