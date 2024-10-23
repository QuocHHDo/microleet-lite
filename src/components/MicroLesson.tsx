import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
  CheckCircle,
  Code,
  BrainCircuit,
  PenTool,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import {
  arrayCurriculum,
  arrayLessons,
} from '@/data/lessons/arrays/curriculum';

interface MicroLessonProps {
  lesson?: {
    title: string;
    content: string;
    codeExample: string;
    exercise: {
      prompt: string;
      initialCode: string;
      solution: string;
    };
    quiz: {
      question: string;
      options: string[];
      correctAnswer: number;
    };
  };
  onComplete?: () => void;
  isCompleted?: boolean;
}

const MicroLesson: React.FC<MicroLessonProps> = ({
  onComplete,
  isCompleted,
}) => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [userCode, setUserCode] = useState('');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'concept' | 'practice' | 'quiz'>(
    'concept',
  );
  const selectedLesson = selectedTopicId ? arrayLessons[selectedTopicId] : null;

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopicId(topicId);
    const lesson = arrayLessons[topicId];
    if (lesson) {
      setUserCode(lesson.exercise.initialCode);
      setQuizAnswer(null);
    }
  };

  const handleCodeChange = (value: string) => {
    setUserCode(value);
  };

  const checkSolution = () => {
    if (userCode.trim() === selectedLesson?.exercise.solution.trim()) {
      alert('Correct solution!');
    } else {
      alert('Not quite right. Try again!');
    }
  };

  const handleQuizSubmit = () => {
    if (quizAnswer === selectedLesson?.quiz.correctAnswer) {
      alert('Correct answer!');
      if (onComplete) onComplete();
    } else {
      alert('Incorrect. Try again!');
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
                <h1 className="text-3xl font-bold">{arrayCurriculum.title}</h1>
                <p className="text-gray-600 mt-1">
                  {arrayCurriculum.description}
                </p>
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
            {arrayCurriculum.sections.map((section) => (
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
                      <BrainCircuit className="h-4 w-4" />
                      Learn
                    </Button>
                    <Button
                      variant={activeTab === 'practice' ? 'default' : 'ghost'}
                      onClick={() => setActiveTab('practice')}
                      className="gap-2"
                    >
                      <Code className="h-4 w-4" />
                      Practice
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
                          Understanding Arrays
                        </h3>
                        <div className="prose">
                          <p className="whitespace-pre-line">
                            {selectedLesson?.content}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3">
                          Example Code
                        </h4>
                        <CodeMirror
                          value={selectedLesson?.codeExample}
                          extensions={[python()]}
                          editable={false}
                          className="border rounded-lg overflow-hidden"
                          theme="light"
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === 'practice' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Practice Exercise
                        </h3>
                        <p className="mb-4">
                          {selectedLesson?.exercise.prompt}
                        </p>
                        <CodeMirror
                          value={userCode}
                          extensions={[python()]}
                          onChange={handleCodeChange}
                          className="border rounded-lg overflow-hidden"
                          theme="light"
                        />
                        <Button onClick={checkSolution} className="mt-4">
                          Check Solution
                        </Button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'quiz' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">
                          Knowledge Check
                        </h3>
                        <p className="mb-4">{selectedLesson?.quiz.question}</p>
                        <div className="space-y-3">
                          {selectedLesson?.quiz.options.map((option, index) => (
                            <div
                              key={index}
                              onClick={() => setQuizAnswer(index)}
                              className={`
                                p-4 rounded-lg border-2 cursor-pointer transition-all
                                ${
                                  quizAnswer === index
                                    ? 'border-blue-500 bg-blue-50'
                                    : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                                }
                              `}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`
                                  w-5 h-5 rounded-full border-2 flex items-center justify-center
                                  ${
                                    quizAnswer === index
                                      ? 'border-blue-500'
                                      : 'border-gray-300'
                                  }
                                `}
                                >
                                  {quizAnswer === index && (
                                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                                  )}
                                </div>
                                <span>{option}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button
                          onClick={handleQuizSubmit}
                          className="mt-6"
                          disabled={quizAnswer === null}
                        >
                          Submit Answer
                        </Button>
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
