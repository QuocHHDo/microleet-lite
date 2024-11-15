import React from 'react';
import { Button } from '@/components/ui/button';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { LessonContent } from '@/common/commonLesson';
import { Difficulty } from '@/common/commonConcept';
import DifficultyBadge from './DifficultyBadge';

interface ExerciseTabProps {
  selectedLesson: LessonContent | undefined;
  state: any;
  handleCodeChange: (index: number, value: string) => void;
  checkSolution: (exerciseIndex: number) => void;
  solutionHeight: string;
}

const ExerciseTab: React.FC<ExerciseTabProps> = ({
  selectedLesson,
  state,
  handleCodeChange,
  checkSolution,
  solutionHeight,
}) => (
  <div className="space-y-8">
    {selectedLesson?.exercises?.map((exercise, index) => (
      <div key={index} className="rounded-lg border p-6 bg-white shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              {exercise.prompt}
            </h3>
            <p className="text-sm text-gray-500">
              Exercise {index + 1} of {selectedLesson.exercises.length}
            </p>
          </div>
          <DifficultyBadge difficulty={exercise.difficulty as Difficulty} />
        </div>

        <div className="mt-4 rounded-md overflow-hidden border">
          <CodeMirror
            value={state.userCode[index]}
            // height="150px"
            theme="light"
            extensions={[python()]}
            onChange={(value) => handleCodeChange(index, value)}
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button
            onClick={() => checkSolution(index)}
            className="transition-all duration-200 hover:shadow-md"
          >
            Check Solution
          </Button>
        </div>

        {state.showSolution[index] && (
          <div className="mt-6 space-y-2">
            <h4 className="font-semibold text-gray-900">Solution</h4>
            <div className="rounded-md overflow-hidden border">
              <CodeMirror
                value={exercise.solution}
                height={solutionHeight}
                theme="light"
                extensions={[python()]}
                readOnly
                className="transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default ExerciseTab;
