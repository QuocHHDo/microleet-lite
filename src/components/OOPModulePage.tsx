'use client';
import React from 'react';

interface ProblemItem {
  name: string;
  description: string;
  difficulty: string;
}

interface QuizItem {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

interface CheatSheetItem {
  label: string;
  details: string;
}

interface ResourceItem {
  title: string;
  url: string;
}

interface OOPModulePageProps {
  title: string; // e.g. "Encapsulation"
  description: string; // Brief overview of this concept
  keyConcepts: string[]; // Bullet points or key takeaways
  detailedLessons?: string; // Long-form explanation or multiple paragraphs
  codeExamples?: string[]; // Array of code snippets
  practiceProblems?: ProblemItem[];
  quizzes?: QuizItem[];
  cheatSheetItems?: CheatSheetItem[];
  designPatterns?: string[]; // Patterns relevant to this concept
  additionalResources?: ResourceItem[];
  progressKey?: string; // Track user progress
  interviewInsights?: string[]; // Tips or Q&A for interviews
}

const OOPModulePage: React.FC<OOPModulePageProps> = ({
  title,
  description,
  keyConcepts,
  detailedLessons,
  codeExamples = [],
  practiceProblems = [],
  quizzes = [],
  cheatSheetItems = [],
  designPatterns = [],
  additionalResources = [],
  progressKey,
  interviewInsights = [],
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Title & Description */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            {title}
          </h1>
          <p className="text-gray-700 mt-2">{description}</p>
        </header>

        {/* Key Concepts */}
        {keyConcepts.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Key Concepts
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {keyConcepts.map((concept, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">{concept}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Detailed Lessons */}
        {detailedLessons && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Detailed Explanation
            </h2>
            <div className="bg-white p-4 rounded-md shadow-sm space-y-2">
              {detailedLessons.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Code Examples */}
        {codeExamples.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Code Examples
            </h2>
            <div className="space-y-4">
              {codeExamples.map((snippet, index) => (
                <pre
                  key={index}
                  className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto"
                >
                  {snippet}
                </pre>
              ))}
            </div>
          </section>
        )}

        {/* Practice Problems */}
        {practiceProblems.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Practice Problems
            </h2>
            <div className="space-y-4">
              {practiceProblems.map((problem, index) => (
                <article
                  key={index}
                  className="p-4 bg-white rounded-md shadow-sm"
                >
                  <h3 className="font-bold text-gray-900">
                    {problem.name}
                    <span className="ml-2 text-sm text-gray-500">
                      ({problem.difficulty})
                    </span>
                  </h3>
                  <p className="text-gray-700 mt-2">{problem.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Quizzes */}
        {quizzes.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Quiz
            </h2>
            <div className="space-y-4">
              {quizzes.map((quiz, index) => (
                <div key={index} className="p-4 bg-white rounded-md shadow-sm">
                  <p className="font-medium text-gray-900">{quiz.question}</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    {quiz.options.map((option, optIndex) => (
                      <li key={optIndex} className="text-gray-700">
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cheat Sheet */}
        {cheatSheetItems.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cheat Sheet
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {cheatSheetItems.map((item, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-bold text-gray-900">{item.label}</p>
                  <p className="text-gray-700 mt-1">{item.details}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Design Patterns */}
        {designPatterns.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Related Design Patterns
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {designPatterns.map((pattern, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium text-gray-700">{pattern}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Additional Resources */}
        {additionalResources.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Additional Resources
            </h2>
            <ul className="list-inside space-y-2">
              {additionalResources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Interview Insights */}
        {interviewInsights.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Interview Insights
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {interviewInsights.map((insight, index) => (
                <li key={index} className="bg-white p-4 rounded-md shadow-sm">
                  <p className="text-gray-700">{insight}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Progress Key (Optional) */}
        {progressKey && (
          <div className="text-sm text-gray-500 text-right mt-8">
            <p>Progress Key: {progressKey}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OOPModulePage;
