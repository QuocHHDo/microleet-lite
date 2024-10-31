import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { heapCheatSheet } from '@/data/cheatsheets/heapCheatSheet';
import { heapConcepts } from '@/data/concepts/heapConcepts';
import { heapProblems } from '@/data/problems/heapProblems';
import { heapLessonsTab } from '@/data/lessons/heapLessons';

const HeapsPage: React.FC = () => {
  return (
    <ModulePage
      title="Heaps"
      description="Deep dive into heaps and their usage"
      lessonsTab={heapLessonsTab}
      problems={heapProblems}
      cheatSheetItems={heapCheatSheet}
      concepts={heapConcepts}
      progressKey={TopicName.Heaps}
    />
  );
};

export default HeapsPage;
