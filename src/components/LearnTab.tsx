import React from 'react';
import { LessonContent } from '@/common/commonLesson';
import { renderContent } from '@/utils/renderContent';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

interface LearnTabProps {
  selectedLesson: LessonContent | undefined;
}

const LearnTab: React.FC<LearnTabProps> = ({ selectedLesson }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold mb-4">{selectedLesson?.title}</h3>
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
);

export default LearnTab;
