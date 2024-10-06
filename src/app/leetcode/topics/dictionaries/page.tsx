import ModulePage from '@/components/ModulePage';
import { dictionaryConcepts } from '@/data/concepts/dictionaryConcepts';
// import { dictionaryLessons } from '@/data/lessons/dictionaryLessons';
import { dictionaryProblems } from '@/data/problems/dictionaryProblems';
import { TopicName } from '../interfaces';
import { dictionaryCheatSheet } from '@/data/cheatsheets/dictionaryCheatSheet';
import { arrayLessons } from '@/data/lessons/arrayLessons';

const DictionariesPage: React.FC = () => {
  return (
    <ModulePage
      title="Dictionaries"
      description="Master the fundamentals of dictionaries and their operations"
      lessons={arrayLessons}
      problems={dictionaryProblems}
      cheatSheetItems={dictionaryCheatSheet}
      concepts={dictionaryConcepts}
      progressKey={TopicName.Dictionaries}
    />
  );
};

export default DictionariesPage;
