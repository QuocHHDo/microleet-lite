import ModulePage from '@/components/ModulePage';
import { dictionaryConcepts } from '@/data/concepts/dictionaryConcepts';
import { dictionaryProblems } from '@/data/problems/dictionaryProblems';
import { TopicName } from '../interfaces';
import { dictionaryCheatSheet } from '@/data/cheatsheets/dictionaryCheatSheet';
import { dictionaryLessonsTab } from '@/data/lessons/dictionaryLessons';

const DictionariesPage: React.FC = () => {
  return (
    <ModulePage
      title="Dictionaries"
      description="Master the fundamentals of dictionaries and their operations"
      lessonsTab={dictionaryLessonsTab}
      problems={dictionaryProblems}
      cheatSheetItems={dictionaryCheatSheet}
      concepts={dictionaryConcepts}
      progressKey={TopicName.Dictionaries}
    />
  );
};

export default DictionariesPage;
