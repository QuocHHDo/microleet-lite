import ModulePage from '@/components/ModulePage';
import { unionFindConcepts } from '@/data/concepts/unionFindConcepts';
import { unionFindProblems } from '@/data/problems/unionFindProblems';
import { TopicName } from '../interfaces';
import { unionFindCheatSheet } from '@/data/cheatsheets/unionFindCheatSheet';
import { unionFindLessonsTab } from '@/data/lessons/dsa/unionFindLessons';

const UnionFindPage: React.FC = () => {
  return (
    <ModulePage
      title="Union-Find"
      description="Master the Union-Find (Disjoint Set Union) data structure for connectivity problems"
      lessonsTab={unionFindLessonsTab}
      problems={unionFindProblems}
      cheatSheetItems={unionFindCheatSheet}
      concepts={unionFindConcepts}
      progressKey={TopicName.UnionFind}
    />
  );
};

export default UnionFindPage;
