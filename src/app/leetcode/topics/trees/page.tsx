import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { treeCheatSheet } from '@/data/cheatsheets/treeCheatSheet';
// import { treeLessons } from '@/data/lessons/treeLessons';
import { treeProblems } from '@/data/problems/treeProblems';
import { treeConcepts } from '@/data/concepts/treeConcepts';
import { arrayLessons } from '@/data/lessons/arrayLessons';

const TreesPage: React.FC = () => {
  return (
    <ModulePage
      title="Trees"
      description="Deep dive into trees and their usage"
      lessons={arrayLessons}
      problems={treeProblems}
      cheatSheetItems={treeCheatSheet}
      concepts={treeConcepts}
      progressKey={TopicName.Trees}
    />
  );
};

export default TreesPage;
