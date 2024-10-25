import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Circle } from 'lucide-react';
import { LessonContent } from '@/common/commonLesson';

interface QuizTabProps {
  selectedLesson: LessonContent | undefined;
  state: any;
  dispatch: any;
  handleQuizSubmit: (quizIndex: number) => void;
}

const QuizTab: React.FC<QuizTabProps> = ({
  selectedLesson,
  state,
  dispatch,
  handleQuizSubmit,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">Quiz</h3>
    <div className="space-y-6">
      {selectedLesson?.quizzes?.map((quiz, quizIndex) => (
        <div key={quizIndex} className="mb-8">
          <p className="text-lg text-gray-700">{quiz.question}</p>
          <div className="space-y-4">
            {quiz.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200
                  ${
                    state.quizAnswers[quizIndex] === index
                      ? state.isSubmitted[quizIndex]
                        ? state.isAnswerCorrect[quizIndex]
                          ? 'bg-green-100 border-green-400'
                          : 'bg-red-100 border-red-400'
                        : 'bg-blue-100 border-blue-400'
                      : 'hover:bg-gray-100'
                  }
                `}
                onClick={() => {
                  dispatch({
                    type: 'SET_QUIZ_ANSWERS',
                    payload: state.quizAnswers.map((answer: any, i: number) =>
                      i === quizIndex ? index : answer,
                    ),
                  });

                  if (quiz.explanations) {
                    dispatch({
                      type: 'SET_SELECTED_EXPLANATIONS',
                      payload: state.selectedExplanations.map(
                        (explanation: any, i: number) =>
                          i === quizIndex
                            ? (quiz.explanations?.[index] ?? '')
                            : explanation,
                      ),
                    });
                  }
                }}
              >
                {state.quizAnswers[quizIndex] === index ? (
                  state.isSubmitted[quizIndex] ? (
                    state.isAnswerCorrect[quizIndex] ? (
                      <CheckCircle className="mr-4 text-green-600" size={24} />
                    ) : (
                      <XCircle className="mr-4 text-red-600" size={24} />
                    )
                  ) : (
                    <CheckCircle className="mr-4 text-blue-600" size={24} />
                  )
                ) : (
                  <Circle className="mr-4 text-gray-600" size={24} />
                )}
                <span className="text-gray-800">{option}</span>
              </div>
            ))}
          </div>
          {state.showExplanations[quizIndex] &&
            state.selectedExplanations[quizIndex] && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-700">
                  {state.selectedExplanations[quizIndex]}
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
          {state.isSubmitted[quizIndex] && (
            <div
              className={`mt-6 flex items-center justify-center space-x-4 ${
                state.isAnswerCorrect[quizIndex]
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {state.isAnswerCorrect[quizIndex] ? (
                <>
                  <CheckCircle size={32} />
                  <span className="text-lg font-semibold">Correct answer!</span>
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
);

export default QuizTab;
