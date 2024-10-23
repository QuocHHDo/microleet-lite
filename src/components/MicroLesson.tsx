import React, { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen, CheckCircle, Code, BrainCircuit, PenTool } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

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

const arrayInitializationLesson = {
  title: "Defining and Initializing Arrays",
  content: `Arrays are fundamental data structures that store collections of elements in contiguous memory locations. In Python, arrays are typically implemented using lists. There are several ways to initialize arrays:

1. Empty array initialization
2. Array initialization with values
3. Array initialization with repeated elements
4. List comprehension
5. Array initialization from other sequences`,
  codeExample: `# Empty array
empty_array = []

# Array with initial values
numbers = [1, 2, 3, 4, 5]
mixed_types = [1, "hello", 3.14, True]

# Array with repeated elements
zeros = [0] * 5  # Creates [0, 0, 0, 0, 0]

# List comprehension
squares = [x**2 for x in range(5)]  # Creates [0, 1, 4, 9, 16]

# Converting other sequences
from_tuple = list((1, 2, 3))
from_range = list(range(5))  # Creates [0, 1, 2, 3, 4]`,
  exercise: {
    prompt: "Create a list containing the first 5 even numbers (starting from 0) using list comprehension.",
    initialCode: "# Write your solution here\neven_numbers = ",
    solution: "even_numbers = [x * 2 for x in range(5)]"
  },
  quiz: {
    question: "Which of the following is the correct way to create a list of three repeated True values in Python?",
    options: [
      "list(True, True, True)",
      "[True] * 3",
      "list.repeat(True, 3)",
      "list(repeat(True, 3))"
    ],
    correctAnswer: 1
  }
};

const MicroLesson: React.FC<MicroLessonProps> = ({
  onComplete,
  isCompleted,
}) => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [userCode, setUserCode] = useState(arrayInitializationLesson.exercise.initialCode);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'concept' | 'practice' | 'quiz'>('concept');

  const sections = [
    {
      title: "Array Basics",
      topics: [
        "Defining and Initializing Arrays",
        "Accessing and Modifying Array Elements",
        "Iterating Through Arrays"
      ]
    },
    {
      title: "Array Operations",
      topics: [
        "Insertion and Deletion",
        "Searching",
        "Array Slicing",
        "Concatenation and Merging Arrays"
      ]
    },
    {
      title: "Array Sorting",
      topics: [
        "Basic Sorting Algorithms",
        "Built-in Sorting Functions",
        "Sorting by Custom Conditions"
      ]
    },
    {
      title: "Two-pointer Technique",
      topics: [
        "Concept of Two-pointers",
        "Common Two-pointer Problems"
      ]
    },
    {
      title: "Sliding Window",
      topics: [
        "Sliding Window Concept",
        "Fixed and Dynamic Sliding Windows"
      ]
    },
    {
      title: "Prefix Sum and Difference Arrays",
      topics: [
        "Prefix Sum",
        "Difference Array"
      ]
    },
    {
      title: "Matrix as 2D Arrays",
      topics: [
        "Understanding Matrices",
        "Row-wise and Column-wise Operations"
      ]
    },
    {
      title: "Advanced Array Manipulations",
      topics: [
        "Array Rotation",
        "Merging Intervals"
      ]
    },
    {
      title: "In-place Operations",
      topics: [
        "In-place Modifications",
        "Swapping and Rearranging Elements"
      ]
    },
    {
      title: "Multidimensional Arrays",
      topics: [
        "Working with Multidimensional Arrays"
      ]
    }
  ];

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    if (topic === "Defining and Initializing Arrays") {
      setUserCode(arrayInitializationLesson.exercise.initialCode);
      setQuizAnswer(null);
    }
  };

  const handleCodeChange = (value: string) => {
    setUserCode(value);
  };

  const checkSolution = () => {
    if (userCode.trim() === arrayInitializationLesson.exercise.solution.trim()) {
      alert('Correct solution!');
    } else {
      alert('Not quite right. Try again!');
    }
  };

  const handleQuizSubmit = () => {
    if (quizAnswer === arrayInitializationLesson.quiz.correctAnswer) {
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
                <h1 className="text-3xl font-bold">Array Lessons Curriculum</h1>
                <p className="text-gray-600 mt-1">
                  A comprehensive guide to mastering array operations and algorithms
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
            {sections.map((section, index) => (
              <div 
                key={index}
                className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-semibold">
                      {index + 1}
                    </span>
                    <h2 className="text-lg font-semibold">{section.title}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {expandedSections[section.title] ? (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {expandedSections[section.title] && (
                  <div className="bg-gray-50">
                    <ul className="py-2">
                      {section.topics.map((topic, topicIndex) => (
                        <li 
                          key={topicIndex}
                          onClick={() => handleTopicSelect(topic)}
                          className={`
                            flex items-center gap-3 mx-2 px-4 py-3 rounded-lg cursor-pointer
                            transition-all duration-200
                            ${selectedTopic === topic 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'hover:bg-gray-100'
                            }
                          `}
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            selectedTopic === topic ? 'bg-blue-600' : 'bg-gray-400'
                          }`} />
                          <span className="text-sm">{topic}</span>
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
            {!selectedTopic ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-gray-500 bg-gray-50 rounded-xl border-2 border-dashed">
                <BookOpen className="h-12 w-12 mb-4 text-gray-400" />
                <p className="text-lg">Select a topic from the menu to begin learning</p>
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
                        <h3 className="text-xl font-semibold mb-4">Understanding Arrays</h3>
                        <div className="prose">
                          <p className="whitespace-pre-line">{arrayInitializationLesson.content}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Example Code</h4>
                        <CodeMirror
                          value={arrayInitializationLesson.codeExample}
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
                        <h3 className="text-xl font-semibold mb-4">Practice Exercise</h3>
                        <p className="mb-4">{arrayInitializationLesson.exercise.prompt}</p>
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
                        <h3 className="text-xl font-semibold mb-4">Knowledge Check</h3>
                        <p className="mb-4">{arrayInitializationLesson.quiz.question}</p>
                        <div className="space-y-3">
                          {arrayInitializationLesson.quiz.options.map((option, index) => (
                            <div 
                              key={index}
                              onClick={() => setQuizAnswer(index)}
                              className={`
                                p-4 rounded-lg border-2 cursor-pointer transition-all
                                ${quizAnswer === index 
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                                }
                              `}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`
                                  w-5 h-5 rounded-full border-2 flex items-center justify-center
                                  ${quizAnswer === index 
                                    ? 'border-blue-500' 
                                    : 'border-gray-300'
                                  }
                                `}>
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