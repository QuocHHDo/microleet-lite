import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  PenTool,
  Circle,
  XCircle,
  FileCode,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { LessonContent, LessonsTab, Section } from '@/common/commonLesson';
import { renderContent } from '@/utils/renderContent';

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
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const firstSection: Section = curriculum?.sections?.[0] as Section;
  const firstTopicId: string = firstSection?.topics?.[0]?.id;

  const [selectedTopicId, setSelectedTopicId] = useState<string>(firstTopicId);
  const [userCode, setUserCode] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'concept' | 'exercise' | 'quiz'>(
    'concept',
  );
  const [solutionHeight, setSolutionHeight] = useState('auto');

  const [showSolution, setShowSolution] = useState<boolean[]>([]);
  const [userGotItRight, setUserGotItRight] = useState<boolean | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean[]>([]);
  const [selectedExplanations, setSelectedExplanations] = useState<string[]>(
    [],
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean[]>([]);

  const [showExplanations, setShowExplanations] = useState<boolean[]>([]);

  const selectedLesson: LessonContent | undefined = lessons?.[selectedTopicId];
  const selectedSection: Section | undefined = curriculum?.sections.find(
    (section) => section.topics.some((topic) => topic.id === selectedTopicId),
  );

  useEffect(() => {
    if (selectedLesson?.exercises) {
      const initialCodes =
        selectedLesson.exercises.map((exercise) => exercise.initialCode) || [];
      setUserCode(initialCodes);
    }
  }, [selectedLesson]);

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev: any) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopicId(topicId);

    const lesson = lessons?.[topicId];
    if (lesson) {
      setUserCode(
        lesson.exercises?.map((exercise) => exercise.initialCode) || [],
      );
      setQuizAnswers(new Array(lesson.quizzes?.length || 0).fill(null));
      setShowSolution(new Array(lesson.exercises?.length || 0).fill(false));
      setIsAnswerCorrect(new Array(lesson.quizzes?.length || 0).fill(null));
      setSelectedExplanations(
        new Array(lesson.quizzes?.length || 0).fill(null),
      );
      setShowExplanations(new Array(lesson.quizzes?.length || 0).fill(false));
      setUserGotItRight(null);
      setIsSubmitted(new Array(lesson.quizzes?.length || 0).fill(false));
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    setUserCode((prevUserCode) => {
      const newUserCode = [...prevUserCode];
      newUserCode[index] = value;
      return newUserCode;
    });
  };

  const checkSolution = (exerciseIndex: number) => {
    setShowSolution((prevShowSolution) => {
      const newShowSolution = [...prevShowSolution];
      newShowSolution[exerciseIndex] = !newShowSolution[exerciseIndex];
      return newShowSolution;
    });
  };

  const handleUserResponse = (isCorrect: boolean) => {
    setUserGotItRight(isCorrect);
    if (isCorrect && onComplete) {
      onComplete();
    }
  };

  const handleQuizSubmit = (quizIndex: number) => {
    const selectedQuiz = selectedLesson?.quizzes?.[quizIndex];

    // Check if the user has selected an answer
    if (quizAnswers[quizIndex] === null) {
      alert('Please select an answer before submitting!');
      return;
    }

    // Proceed with checking the answer if one is selected
    const isCorrect = quizAnswers[quizIndex] === selectedQuiz?.correctAnswer;

    setIsAnswerCorrect((prevIsAnswerCorrect) => {
      const newIsAnswerCorrect = [...prevIsAnswerCorrect];
      newIsAnswerCorrect[quizIndex] = isCorrect;
      return newIsAnswerCorrect;
    });

    setShowExplanations((prevShowExplanations) => {
      const newShowExplanations = [...prevShowExplanations];
      newShowExplanations[quizIndex] = true;
      return newShowExplanations;
    });

    setIsSubmitted((prevIsSubmitted) => {
      const newIsSubmitted = [...prevIsSubmitted];
      newIsSubmitted[quizIndex] = true;
      return newIsSubmitted;
    });

    if (isCorrect && onComplete) {
      onComplete();
    }
  };

  const progressPercentage = 10; // Calculate based on completed topics

  return (
    <Card className="max-w-7xl mx-auto">
      <CardContent className="p-8">
        {/* Header with Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold">{curriculum?.title}</h1>
                <p className="text-gray-600 mt-1">{curriculum?.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Overall Progress</div>
              <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-4 space-y-4">
            {curriculum?.sections.map((section: Section) => (
              <div
                key={section.id}
                className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-semibold">
                      {section.id}
                    </span>
                    <h2 className="text-lg font-semibold">{section.title}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {expandedSections[section.title] ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedSections[section.id] && (
                  <div className="bg-gray-50">
                    <ul className="py-2">
                      {section.topics.map((topic) => (
                        <li
                          key={topic.id}
                          onClick={() => handleTopicSelect(topic.id)}
                          className={`
                            flex items-center gap-3 mx-2 px-4 py-3 rounded-lg cursor-pointer
                            transition-all duration-200
                            ${
                              selectedTopicId === topic.id
                                ? 'bg-blue-100 text-blue-700'
                                : 'hover:bg-gray-100'
                            }
                          `}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              selectedTopicId === topic.id
                                ? 'bg-blue-600'
                                : 'bg-gray-400'
                            }`}
                          />
                          <span className="text-sm">{topic.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Main Content */}
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
                {/* Content Tabs */}
                <div className="border-b">
                  <div className="flex gap-1 p-1">
                    <Button
                      variant={activeTab === 'concept' ? 'default' : 'ghost'}
                      onClick={() => setActiveTab('concept')}
                      className="gap-2"
                    >
                      <GraduationCap className="h-4 w-4" />
                      Learn
                    </Button>
                    <Button
                      variant={activeTab === 'exercise' ? 'default' : 'ghost'}
                      onClick={() => setActiveTab('exercise')}
                      className="gap-2"
                    >
                      <FileCode className="h-4 w-4" />
                      Exercise
                    </Button>
                    <Button
                      variant={activeTab === 'quiz' ? 'default' : 'ghost'}
                      onClick={() => setActiveTab('quiz')}
                      className="gap-2"
                    >
                      <PenTool className="h-4 w-4" />
                      Quiz
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  {activeTab === 'concept' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          {selectedLesson?.title}
                        </h3>
                        <div className="prose">
                          <p className="text-base whitespace-pre-line">
                            {renderContent(selectedLesson?.content)}
                          </p>
                        </div>
                      </div>

                      {/* Display Code Example if it exists */}
                      {selectedLesson?.codeExample && (
                        <div className="mt-6">
                          <h4 className="font-semibold mb-2">Code Example</h4>
                          <CodeMirror
                            value={selectedLesson.codeExample}
                            height="150px"
                            theme="light"
                            extensions={[python()]}
                            readOnly
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'exercise' && (
                    <div>
                      {selectedLesson?.exercises?.map((exercise, index) => (
                        <div key={index} className="mb-8">
                          <h3 className="mb-2">{exercise.prompt}</h3>
                          <CodeMirror
                            value={userCode[index]}
                            height="150px"
                            theme="light"
                            extensions={[python()]}
                            onChange={(value) => handleCodeChange(index, value)}
                          />
                          <div className="mt-4 flex justify-end">
                            <Button onClick={() => checkSolution(index)}>
                              Check Solution
                            </Button>
                          </div>

                          {showSolution[index] && (
                            <div className="mt-6 transition-all duration-300 ease-in-out">
                              <h4 className="font-semibold mb-2">Solution</h4>
                              <CodeMirror
                                value={exercise.solution}
                                height={solutionHeight}
                                theme="light"
                                extensions={[python()]}
                                readOnly
                                className="transition-height duration-300 ease-in-out"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'quiz' && (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold mb-6 text-gray-800">
                        Quiz
                      </h3>
                      <div className="space-y-6">
                        {selectedLesson?.quizzes?.map((quiz, quizIndex) => (
                          <div key={quizIndex} className="mb-8">
                            <p className="text-lg text-gray-700">
                              {quiz.question}
                            </p>
                            <div className="space-y-4">
                              {quiz.options.map((option, index) => (
                                <div
                                  key={index}
                                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200
                                    ${
                                      quizAnswers[quizIndex] === index
                                        ? isSubmitted[quizIndex]
                                          ? isAnswerCorrect[quizIndex]
                                            ? 'bg-green-100 border-green-400'
                                            : 'bg-red-100 border-red-400'
                                          : 'bg-blue-100 border-blue-400'
                                        : 'hover:bg-gray-100'
                                    }
                                  `}
                                  onClick={() => {
                                    setQuizAnswers((prevQuizAnswers) => {
                                      const newQuizAnswers = [
                                        ...prevQuizAnswers,
                                      ];
                                      newQuizAnswers[quizIndex] = index;
                                      return newQuizAnswers;
                                    });

                                    if (quiz.explanations) {
                                      setSelectedExplanations(
                                        (prevSelectedExplanations) => {
                                          const newSelectedExplanations = [
                                            ...prevSelectedExplanations,
                                          ];
                                          newSelectedExplanations[quizIndex] =
                                            quiz.explanations?.[index] ?? '';
                                          return newSelectedExplanations;
                                        },
                                      );
                                    }
                                  }}
                                >
                                  {quizAnswers[quizIndex] === index ? (
                                    isSubmitted[quizIndex] ? (
                                      isAnswerCorrect[quizIndex] ? (
                                        <CheckCircle
                                          className="mr-4 text-green-600"
                                          size={24}
                                        />
                                      ) : (
                                        <XCircle
                                          className="mr-4 text-red-600"
                                          size={24}
                                        />
                                      )
                                    ) : (
                                      <CheckCircle
                                        className="mr-4 text-blue-600"
                                        size={24}
                                      />
                                    )
                                  ) : (
                                    <Circle
                                      className="mr-4 text-gray-600"
                                      size={24}
                                    />
                                  )}
                                  <span className="text-gray-800">
                                    {option}
                                  </span>
                                </div>
                              ))}
                            </div>
                            {showExplanations[quizIndex] &&
                              selectedExplanations[quizIndex] && (
                                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                                  <p className="text-gray-700">
                                    {selectedExplanations[quizIndex]}
                                  </p>
                                </div>
                              )}
                            <div className="mt-6 flex justify-end">
                              <Button
                                onClick={() => handleQuizSubmit(quizIndex)}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                              >
                                Submit Answer
                              </Button>
                            </div>
                            {/* Only show feedback if submitted */}
                            {isSubmitted[quizIndex] && (
                              <div
                                className={`mt-6 flex items-center justify-center space-x-4 ${
                                  isAnswerCorrect[quizIndex]
                                    ? 'text-green-600'
                                    : 'text-red-600'
                                }`}
                              >
                                {isAnswerCorrect[quizIndex] ? (
                                  <>
                                    <CheckCircle size={32} />
                                    <span className="text-lg font-semibold">
                                      Correct answer!
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <XCircle size={32} />
                                    <span className="text-lg font-semibold">
                                      Incorrect. Try again!
                                    </span>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MicroLesson;