import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

interface MicroLessonProps {
  lesson: {
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
  onComplete: () => void;
  isCompleted: boolean;
}

const MicroLesson: React.FC<MicroLessonProps> = ({
  lesson,
  onComplete,
  isCompleted,
}) => {
  const [userCode, setUserCode] = useState(lesson.exercise.initialCode);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  const handleCodeChange = (value: string) => {
    setUserCode(value);
  };

  const checkSolution = () => {
    // This is a simple check. In a real application, you'd want to run tests on the code.
    if (userCode.trim() === lesson.exercise.solution.trim()) {
      alert('Correct solution!');
    } else {
      alert('Not quite right. Try again!');
    }
  };

  const handleQuizSubmit = () => {
    if (quizAnswer === lesson.quiz.correctAnswer) {
      alert('Correct answer!');
      onComplete();
    } else {
      alert('Incorrect. Try again!');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Concept</h3>
        <p>{lesson.content}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Example</h3>
        <CodeMirror
          value={lesson.codeExample}
          extensions={[python()]}
          editable={false}
        />
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Exercise</h3>
        <p className="mb-2">{lesson.exercise.prompt}</p>
        <CodeMirror
          value={userCode}
          extensions={[python()]}
          onChange={handleCodeChange}
        />
        <button
          onClick={checkSolution}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Check Solution
        </button>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Quiz</h3>
        <p className="mb-2">{lesson.quiz.question}</p>
        {lesson.quiz.options.map((option, index) => (
          <div key={index} className="mb-2">
            <input
              type="radio"
              id={`option-${index}`}
              name="quiz"
              value={index}
              checked={quizAnswer === index}
              onChange={() => setQuizAnswer(index)}
            />
            <label htmlFor={`option-${index}`} className="ml-2">
              {option}
            </label>
          </div>
        ))}
        <button
          onClick={handleQuizSubmit}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Answer
        </button>
      </div>
      {isCompleted && (
        <div className="text-green-600 font-semibold">Lesson Completed!</div>
      )}
    </div>
  );
};

export default MicroLesson;
