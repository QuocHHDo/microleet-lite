import ModulePage from '@/components/ModulePage';
import { TopicName } from '../interfaces';
import { treeCheatSheet } from '@/data/cheatsheets/treeCheatSheet';
import { treeProblems } from '@/data/problems/treeProblems';
import { treeConcepts } from '@/data/concepts/treeConcepts';
import { treeLessonsTab } from '@/data/lessons/treeLessons';

const TreesPage: React.FC = () => {
  return (
    <ModulePage
      title="Trees"
      description="Deep dive into trees and their usage"
      lessonsTab={treeLessonsTab}
      problems={treeProblems}
      cheatSheetItems={treeCheatSheet}
      concepts={treeConcepts}
      progressKey={TopicName.Trees}
    />
  );
};

export default TreesPage;
