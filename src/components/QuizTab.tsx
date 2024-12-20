import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Circle } from 'lucide-react';
import { LessonContent } from '@/common/commonLesson';
import DifficultyBadge from './DifficultyBadge';
import { Difficulty } from '@/common/commonConcept';

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
  <div className="space-y-8">
    {selectedLesson?.quizzes?.map((quiz, quizIndex) => (
      <div key={quizIndex} className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {quiz.question}
            </h3>
            <p className="text-sm text-gray-500">
              Quiz {quizIndex + 1} of {selectedLesson.quizzes.length}
            </p>
          </div>
          <DifficultyBadge difficulty={quiz.difficulty as Difficulty} />
        </div>

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
                if (state.isSubmitted[quizIndex]) {
                  dispatch({
                    type: 'SET_IS_SUBMITTED',
                    payload: state.isSubmitted.map(
                      (submitted: boolean, i: number) =>
                        i === quizIndex ? false : submitted,
                    ),
                  });

                  dispatch({
                    type: 'SET_SHOW_EXPLANATIONS',
                    payload: state.showExplanations.map(
                      (show: boolean, i: number) =>
                        i === quizIndex ? false : show,
                    ),
                  });
                }

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
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
              <p className="text-gray-700">
                {state.selectedExplanations[quizIndex]}
              </p>
            </div>
          )}

        <div className="mt-6 flex justify-end">
          <Button
            onClick={() => handleQuizSubmit(quizIndex)}
            className="transition-all duration-200 hover:shadow-md"
          >
            Submit Answer
          </Button>
        </div>

        {state.isSubmitted[quizIndex] && (
          <div
            className={`mt-6 flex items-center justify-center space-x-4 p-4 rounded-lg ${
              state.isAnswerCorrect[quizIndex]
                ? 'bg-green-50 text-green-600'
                : 'bg-red-50 text-red-600'
            }`}
          >
            {state.isAnswerCorrect[quizIndex] ? (
              <>
                <CheckCircle size={24} />
                <span className="font-semibold">Correct answer!</span>
              </>
            ) : (
              <>
                <XCircle size={24} />
                <span className="font-semibold">Incorrect. Try again!</span>
              </>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default QuizTab;
