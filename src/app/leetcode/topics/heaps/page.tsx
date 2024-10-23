import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { heapCheatSheet } from '@/data/cheatsheets/heapCheatSheet';
// import { heapLessons } from '@/data/lessons/heapLessons';
import { heapConcepts } from '@/data/concepts/heapConcepts';
// import { arrayLessons } from '@/data/lessons/arrayLessons';
import { heapProblems } from '@/data/problems/heapProblems';

const HeapsPage: React.FC = () => {
  return (
    <ModulePage
      title="Heaps"
      description="Deep dive into heaps and their usage"
      // lessons={arrayLessons}
      problems={heapProblems}
      cheatSheetItems={heapCheatSheet}
      concepts={heapConcepts}
      progressKey={TopicName.Heaps}
    />
  );
};

export default HeapsPage;
