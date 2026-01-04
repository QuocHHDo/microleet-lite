import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { heapCheatSheet } from '@/data/cheatsheets/heapCheatSheet';
import { heapConcepts } from '@/data/concepts/heapConcepts';
import { heapProblems } from '@/data/problems/heapProblems';
import { heapLessonsTab } from '@/data/lessons/dsa/heapLessons';

const HeapsPage: React.FC = () => {
  return (
    <ModulePage
      title="Heaps / Priority Queues"
      description="Deep dive into heaps and priority queues, understanding how heaps implement efficient priority queue operations"
      lessonsTab={heapLessonsTab}
      problems={heapProblems}
      cheatSheetItems={heapCheatSheet}
      concepts={heapConcepts}
      progressKey={TopicName.Heaps}
    />
  );
};

export default HeapsPage;
