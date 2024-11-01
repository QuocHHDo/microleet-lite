import ModulePage from '@/components/ModulePage';
import { linkedListConcepts } from '@/data/concepts/linkedListConcepts';
import { linkedListProblems } from '@/data/problems/linkedListProblems';
import { TopicName } from '../interfaces';
import { linkedListCheatSheet } from '@/data/cheatsheets/linkedListCheatSheet';
import { linkedListLessonsTab } from '@/data/lessons/linkedListLessons';

const LinkedListsPage: React.FC = () => {
  return (
    <ModulePage
      title="Linked Lists"
      description="Deep dive into linked lists and their usage"
      lessonsTab={linkedListLessonsTab}
      problems={linkedListProblems}
      cheatSheetItems={linkedListCheatSheet}
      concepts={linkedListConcepts}
      progressKey={TopicName.LinkedLists}
    />
  );
};

export default LinkedListsPage;
