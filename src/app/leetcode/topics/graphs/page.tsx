import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { graphCheatSheet } from '@/data/cheatsheets/graphCheatSheet';
// import { graphLessons } from '@/data/lessons/graphLessons';
import { graphProblems } from '@/data/problems/graphProblems';
import { graphConcepts } from '@/data/concepts/graphConcepts';
// import { arrayLessons } from '@/data/lessons/arrayLessons';

const GraphsPage: React.FC = () => {
  return (
    <ModulePage
      title="Graphs"
      description="Deep dive into graphs and their usage"
      // lessons={arrayLessons}
      problems={graphProblems}
      cheatSheetItems={graphCheatSheet}
      concepts={graphConcepts}
      progressKey={TopicName.Graphs}
    />
  );
};

export default GraphsPage;
