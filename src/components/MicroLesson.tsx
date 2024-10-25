import React, { useState } from 'react';
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
  const [userCode, setUserCode] = useState('');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'concept' | 'exercise' | 'quiz'>(
    'concept',
  );
  const [solutionHeight, setSolutionHeight] = useState('auto');

  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [userGotItRight, setUserGotItRight] = useState<boolean | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [selectedExplanation, setSelectedExplanation] = useState<string | null>(
    null,
  );
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const selectedLesson: LessonContent | undefined = lessons?.[selectedTopicId];
  const selectedSection: Section | undefined = curriculum?.sections.find(
    (section) => section.topics.some((topic) => topic.id === selectedTopicId),
  );

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
      setUserCode(lesson.exercise.initialCode);
      setQuizAnswer(null);
      setShowSolution(false);
      setUserGotItRight(null);
    }
  };

  const handleCodeChange = (value: string) => {
    setUserCode(value);
  };

  const checkSolution = () => {
    setShowSolution((prevShowSolution) => !prevShowSolution);
  };

  const handleUserResponse = (isCorrect: boolean) => {
    setUserGotItRight(isCorrect);
    if (isCorrect && onComplete) {
      onComplete();
    }
  };

  // const handleQuizSubmit = () => {
  //   if (quizAnswer === selectedLesson?.quiz.correctAnswer) {
  //     alert('Correct answer!');
  //     if (onComplete) onComplete();
  //   } else {
  //     alert('Incorrect. Try again!');
  //   }
  // };
  const handleQuizSubmit = () => {
    if (quizAnswer === selectedLesson?.quiz.correctAnswer) {
      setIsAnswerCorrect(true);
      if (onComplete) onComplete();
    } else {
      setIsAnswerCorrect(false);
    }
    setShowExplanation(true); // Show the explanation after submitting the answer
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
                    </div>
                  )}

                  {activeTab === 'exercise' && (
                    <div>
                      <h3 className="mb-2">
                        {selectedLesson?.exercise.prompt}
                      </h3>
                      <CodeMirror
                        value={userCode}
                        height="150px"
                        theme="light"
                        extensions={[python()]}
                        onChange={handleCodeChange}
                      />
                      <div className="mt-4 flex justify-end">
                        <Button onClick={checkSolution}>Check Solution</Button>
                      </div>

                      {showSolution && (
                        <div className="mt-6 transition-all duration-300 ease-in-out">
                          <h4 className="font-semibold mb-2">Solution</h4>
                          <CodeMirror
                            value={selectedLesson?.exercise?.solution}
                            height={solutionHeight}
                            theme="light"
                            extensions={[python()]}
                            readOnly
                            className="transition-height duration-300 ease-in-out"
                          />
                          {/* <div className="mt-4">
                            <p>Did you get it right?</p>
                            <div className="flex flex-col md:flex-row gap-4 mt-4">
                              <Button
                                variant="default"
                                onClick={() => handleUserResponse(true)}
                                className="transition-colors duration-200 hover:bg-green-500"
                              >
                                Yes, I got it right
                              </Button>
                              <Button
                                variant="destructive"
                                onClick={() => handleUserResponse(false)}
                                className="transition-colors duration-200 hover:bg-red-500"
                              >
                                No, I got it wrong
                              </Button>
                            </div>
                          </div> */}
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'quiz' && (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold mb-6 text-gray-800">
                        Quiz
                      </h3>
                      <div className="space-y-6">
                        <p className="text-lg text-gray-700">
                          {selectedLesson?.quiz.question}
                        </p>
                        <div className="space-y-4">
                          {selectedLesson?.quiz.options.map((option, index) => (
                            <div
                              key={index}
                              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200
                                ${
                                  quizAnswer === index
                                    ? isAnswerCorrect !== null
                                      ? isAnswerCorrect
                                        ? 'bg-green-100 border-green-400'
                                        : 'bg-red-100 border-red-400'
                                      : 'bg-blue-100 border-blue-400'
                                    : 'hover:bg-gray-100'
                                }
                              `}
                              onClick={() => {
                                setQuizAnswer(index);
                                if (selectedLesson?.quiz.explanations) {
                                  setSelectedExplanation(
                                    selectedLesson.quiz.explanations[index],
                                  );
                                }
                              }}
                            >
                              {quizAnswer === index ? (
                                isAnswerCorrect !== null ? (
                                  isAnswerCorrect ? (
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
                              <span className="text-gray-800">{option}</span>
                            </div>
                          ))}
                        </div>
                        {showExplanation && selectedExplanation && (
                          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                            <p className="text-gray-700">
                              {selectedExplanation}
                            </p>
                          </div>
                        )}
                        <div className="mt-6 flex justify-end">
                          <Button
                            onClick={handleQuizSubmit}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                          >
                            Submit Answer
                          </Button>
                        </div>
                        {isAnswerCorrect !== null && (
                          <div
                            className={`mt-6 flex items-center justify-center space-x-4 ${isAnswerCorrect ? 'text-green-600' : 'text-red-600'}`}
                          >
                            {isAnswerCorrect ? (
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
