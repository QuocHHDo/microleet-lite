import React, { useState, useEffect, useReducer } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LessonContent, LessonsTab, Section } from '@/common/commonLesson';
import { getCodeForLanguage } from '@/common/commonLanguage';
import { useUserProgress } from '@/hooks/useUserProgress';
import Header from './CurriculumHeader';
import LessonsSidebar from './LessonsSidebar';
import MainContent from './MainContent';

interface MicroLessonProps {
  lessonsTab?: LessonsTab;
  onComplete?: () => void;
  isCompleted?: boolean;
}

const MicroLesson: React.FC<MicroLessonProps> = ({
  lessonsTab,
  onComplete,
  isCompleted,
}) => {
  const { curriculum, lessons } = (lessonsTab || {}) as LessonsTab;
  const { progress } = useUserProgress();
  const language = progress.preferences.language || 'python';

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const firstSection: Section = curriculum?.sections?.[0] as Section;
  const firstTopicId: string = firstSection?.topics?.[0]?.id;

  const [selectedTopicId, setSelectedTopicId] = useState<string>(firstTopicId);
  const [activeTab, setActiveTab] = useState<'learn' | 'exercise' | 'quiz'>(
    'learn',
  );
  const [solutionHeight, setSolutionHeight] = useState('auto');

  const selectedLesson: LessonContent | undefined = lessons?.[selectedTopicId];
  const selectedSection: Section | undefined = curriculum?.sections.find(
    (section) => section.topics.some((topic) => topic.id === selectedTopicId),
  );

  const initialState = {
    userCode:
      selectedLesson?.exercises?.map((exercise) => getCodeForLanguage(exercise.initialCode, language)) || [],
    quizAnswers: new Array(selectedLesson?.quizzes?.length || 0).fill(null),
    showSolution: new Array(selectedLesson?.exercises?.length || 0).fill(false),
    isAnswerCorrect: new Array(selectedLesson?.quizzes?.length || 0).fill(null),
    selectedExplanations: new Array(selectedLesson?.quizzes?.length || 0).fill(
      null,
    ),
    showExplanations: new Array(selectedLesson?.quizzes?.length || 0).fill(
      false,
    ),
    userGotItRight: null,
    isSubmitted: new Array(selectedLesson?.quizzes?.length || 0).fill(false),
  };

  const reducer = (state: any, action: { type: any; payload: any }) => {
    switch (action.type) {
      case 'SET_USER_CODE':
        return { ...state, userCode: action.payload };
      case 'SET_QUIZ_ANSWERS':
        return { ...state, quizAnswers: action.payload };
      case 'SET_SHOW_SOLUTION':
        return { ...state, showSolution: action.payload };
      case 'SET_IS_ANSWER_CORRECT':
        return { ...state, isAnswerCorrect: action.payload };
      case 'SET_SELECTED_EXPLANATIONS':
        return { ...state, selectedExplanations: action.payload };
      case 'SET_SHOW_EXPLANATIONS':
        return { ...state, showExplanations: action.payload };
      case 'SET_USER_GOT_IT_RIGHT':
        return { ...state, userGotItRight: action.payload };
      case 'SET_IS_SUBMITTED':
        return { ...state, isSubmitted: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (selectedLesson?.exercises) {
      // Reset exercises when language changes
      const newCode = selectedLesson.exercises.map(
        (exercise) => getCodeForLanguage(exercise.initialCode, language)
      );
      dispatch({
        type: 'SET_USER_CODE',
        payload: newCode,
      });

      // Also reset show solution state when language changes
      dispatch({
        type: 'SET_SHOW_SOLUTION',
        payload: new Array(selectedLesson.exercises.length).fill(false),
      });
    }
  }, [selectedLesson, language]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopicId(topicId);
    const lesson = lessons?.[topicId];
    if (lesson) {
      dispatch({
        type: 'SET_USER_CODE',
        payload:
          lesson.exercises?.map((exercise) => getCodeForLanguage(exercise.initialCode, language)) || [],
      });
      dispatch({
        type: 'SET_QUIZ_ANSWERS',
        payload: new Array(lesson.quizzes?.length || 0).fill(null),
      });
      dispatch({
        type: 'SET_SHOW_SOLUTION',
        payload: new Array(lesson.exercises?.length || 0).fill(false),
      });
      dispatch({
        type: 'SET_IS_ANSWER_CORRECT',
        payload: new Array(lesson.quizzes?.length || 0).fill(null),
      });
      dispatch({
        type: 'SET_SELECTED_EXPLANATIONS',
        payload: new Array(lesson.quizzes?.length || 0).fill(null),
      });
      dispatch({
        type: 'SET_SHOW_EXPLANATIONS',
        payload: new Array(lesson.quizzes?.length || 0).fill(false),
      });
      dispatch({
        type: 'SET_USER_GOT_IT_RIGHT',
        payload: null,
      });
      dispatch({
        type: 'SET_IS_SUBMITTED',
        payload: new Array(lesson.quizzes?.length || 0).fill(false),
      });
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    dispatch({
      type: 'SET_USER_CODE',
      payload: state.userCode.map((code: any, i: number) =>
        i === index ? value : code,
      ),
    });
  };

  const checkSolution = (exerciseIndex: number) => {
    dispatch({
      type: 'SET_SHOW_SOLUTION',
      payload: state.showSolution.map((show: any, i: number) =>
        i === exerciseIndex ? !show : show,
      ),
    });
  };

  const handleUserResponse = (isCorrect: boolean) => {
    dispatch({
      type: 'SET_USER_GOT_IT_RIGHT',
      payload: isCorrect,
    });
    if (isCorrect && onComplete) {
      onComplete();
    }
  };

  const handleQuizSubmit = (quizIndex: number) => {
    const selectedQuiz = selectedLesson?.quizzes?.[quizIndex];

    if (state.quizAnswers[quizIndex] === null) {
      alert('Please select an answer before submitting!');
      return;
    }

    const isCorrect =
      state.quizAnswers[quizIndex] === selectedQuiz?.correctAnswer;

    dispatch({
      type: 'SET_IS_ANSWER_CORRECT',
      payload: state.isAnswerCorrect.map((correct: any, i: number) =>
        i === quizIndex ? isCorrect : correct,
      ),
    });

    dispatch({
      type: 'SET_SHOW_EXPLANATIONS',
      payload: state.showExplanations.map((show: any, i: number) =>
        i === quizIndex ? true : show,
      ),
    });

    dispatch({
      type: 'SET_IS_SUBMITTED',
      payload: state.isSubmitted.map((submitted: any, i: number) =>
        i === quizIndex ? true : submitted,
      ),
    });

    if (isCorrect && onComplete) {
      onComplete();
    }
  };

  const progressPercentage = 10; // Calculate based on completed topics

  return (
    <Card className="max-w-7xl mx-auto">
      <CardContent className="p-8">
        <Header
          curriculum={curriculum}
          progressPercentage={progressPercentage}
        />
        <div className="grid grid-cols-12 gap-8">
          <LessonsSidebar
            curriculum={curriculum}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            selectedTopicId={selectedTopicId}
            handleTopicSelect={handleTopicSelect}
            isCompleted={isCompleted}
          />
          <MainContent
            selectedTopicId={selectedTopicId}
            selectedLesson={selectedLesson}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            state={state}
            dispatch={dispatch}
            handleCodeChange={handleCodeChange}
            checkSolution={checkSolution}
            handleQuizSubmit={handleQuizSubmit}
            solutionHeight={solutionHeight}
            language={language}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MicroLesson;
