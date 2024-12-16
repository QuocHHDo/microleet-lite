import React, { Suspense, lazy } from 'react';
import { LessonContent } from '@/common/commonLesson';
import { renderContent } from '@/utils/renderContent';
import { python } from '@codemirror/lang-python';

const CodeMirror = lazy(() => import('@uiw/react-codemirror'));

interface LearnTabProps {
  selectedLesson: LessonContent | undefined;
}

const LearnTab: React.FC<LearnTabProps> = ({ selectedLesson }) => (
  <div className="space-y-6 max-w-4xl mx-auto">
    <div>
      <h3 className="text-2xl font-semibold mb-6">{selectedLesson?.title}</h3>
      <div className="prose prose-lg max-w-none">
        {renderContent(selectedLesson?.content)}
      </div>
    </div>


    {/* Display Code Example if it exists */}
    {selectedLesson?.codeExample && (
      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <Suspense fallback={<div className="p-4">Loading code example...</div>}>
            <CodeMirror
              value={selectedLesson.codeExample}
              maxHeight="600px"
              theme="light"
              extensions={[python()]}
              readOnly
              className="text-sm"
            />
          </Suspense>
        </div>
      </div>
    )}
  </div>
);

export default React.memo(LearnTab);
