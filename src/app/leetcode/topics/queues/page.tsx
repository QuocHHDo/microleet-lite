import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { queueCheatSheet } from '@/data/cheatsheets/queueCheatSheet';
import { queueProblems } from '@/data/problems/queueProblems';
import { queueConcepts } from '@/data/concepts/queueConcepts';
import { queueLessonsTab } from '@/data/lessons/dsa/queueLessons';

const QueuesPage: React.FC = () => {
  return (
    <ModulePage
      title="Queues"
      description="Deep dive into queues and their usage"
      lessonsTab={queueLessonsTab}
      problems={queueProblems}
      cheatSheetItems={queueCheatSheet}
      concepts={queueConcepts}
      progressKey={TopicName.Queues}
    />
  );
};

export default QueuesPage;
