import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { graphCheatSheet } from '@/data/cheatsheets/graphCheatSheet';
import { graphProblems } from '@/data/problems/graphProblems';
import { graphConcepts } from '@/data/concepts/graphConcepts';
import { graphLessonsTab } from '@/data/lessons/leetcode/graphLessons';

const GraphsPage: React.FC = () => {
  return (
    <ModulePage
      title="Graphs"
      description="Deep dive into graphs and their usage"
      lessonsTab={graphLessonsTab}
      problems={graphProblems}
      cheatSheetItems={graphCheatSheet}
      concepts={graphConcepts}
      progressKey={TopicName.Graphs}
    />
  );
};

export default GraphsPage;
