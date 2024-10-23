import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { queueCheatSheet } from '@/data/cheatsheets/queueCheatSheet';
// import { queueLessons } from '@/data/lessons/queueLessons';
import { queueProblems } from '@/data/problems/queueProblems';
import { queueConcepts } from '@/data/concepts/queueConcepts';
// import { arrayLessons } from '@/data/lessons/arrayLessons';

const QueuesPage: React.FC = () => {
  return (
    <ModulePage
      title="Queues"
      description="Deep dive into queues and their usage"
      // lessons={arrayLessons}
      problems={queueProblems}
      cheatSheetItems={queueCheatSheet}
      concepts={queueConcepts}
      progressKey={TopicName.Queues}
    />
  );
};

export default QueuesPage;
