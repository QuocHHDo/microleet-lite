import React from 'react';
import { BookOpen } from 'lucide-react';
import { LessonContent } from '@/common/commonLesson';
import QuizTab from './QuizTab';
import LessonsTab from './LessonsTab';
import LearnTab from './LearnTab';
import ExerciseTab from './ExerciseTab';

interface MainContentProps {
  selectedTopicId: string;
  selectedLesson: LessonContent | undefined;
  activeTab: 'learn' | 'exercise' | 'quiz';
  setActiveTab: (tab: 'learn' | 'exercise' | 'quiz') => void;
  state: any;
  dispatch: any;
  handleCodeChange: (index: number, value: string) => void;
  checkSolution: (exerciseIndex: number) => void;
  handleQuizSubmit: (quizIndex: number) => void;
  solutionHeight: string;
  language?: string;
}

const MainContent: React.FC<MainContentProps> = ({
  selectedTopicId,
  selectedLesson,
  activeTab,
  setActiveTab,
  state,
  dispatch,
  handleCodeChange,
  checkSolution,
  handleQuizSubmit,
  solutionHeight,
  language = 'python',
}) => (
  <div className="col-span-8">
    {!selectedTopicId ? (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed">
        <BookOpen className="h-12 w-12 mb-4 text-gray-400" />
        <p className="text-lg">
          Select a topic from the menu to begin learning
        </p>
      </div>
    ) : (
      <div className="bg-white rounded-xl border shadow-sm">
        <LessonsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="p-6">
          {activeTab === 'learn' && (
            <LearnTab key={language} selectedLesson={selectedLesson} />
          )}
          {activeTab === 'exercise' && (
            <ExerciseTab
              key={language}
              selectedLesson={selectedLesson}
              state={state}
              handleCodeChange={handleCodeChange}
              checkSolution={checkSolution}
              solutionHeight={solutionHeight}
            />
          )}
          {activeTab === 'quiz' && (
            <QuizTab
              selectedLesson={selectedLesson}
              state={state}
              dispatch={dispatch}
              handleQuizSubmit={handleQuizSubmit}
            />
          )}
        </div>
      </div>
    )}
  </div>
);

export default MainContent;
