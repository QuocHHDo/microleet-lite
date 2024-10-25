import React from 'react';
import { Button } from '@/components/ui/button';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { LessonContent } from '@/common/commonLesson';

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
  <div>
    {selectedLesson?.exercises?.map((exercise, index) => (
      <div key={index} className="mb-8">
        <h3 className="mb-2">{exercise.prompt}</h3>
        <CodeMirror
          value={state.userCode[index]}
          height="150px"
          theme="light"
          extensions={[python()]}
          onChange={(value) => handleCodeChange(index, value)}
        />
        <div className="mt-4 flex justify-end">
          <Button onClick={() => checkSolution(index)}>Check Solution</Button>
        </div>

        {state.showSolution[index] && (
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
);

export default ExerciseTab;
