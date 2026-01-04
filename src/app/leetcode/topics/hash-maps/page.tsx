import ModulePage from '@/components/ModulePage';
import { dictionaryConcepts } from '@/data/concepts/dictionaryConcepts';
import { dictionaryProblems } from '@/data/problems/dictionaryProblems';
import { TopicName } from '../interfaces';
import { dictionaryCheatSheet } from '@/data/cheatsheets/dictionaryCheatSheet';
import { dictionaryLessonsTab } from '@/data/lessons/dsa/dictionaryLessons';

const HashMapsPage: React.FC = () => {
  return (
    <ModulePage
      title="Hash Maps"
      description="Master the fundamentals of hash maps and their operations"
      lessonsTab={dictionaryLessonsTab}
      problems={dictionaryProblems}
      cheatSheetItems={dictionaryCheatSheet}
      concepts={dictionaryConcepts}
      progressKey={TopicName.HashMaps}
    />
  );
};

export default HashMapsPage;
