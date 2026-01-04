import React, { Suspense, lazy } from 'react';
import { LessonContent } from '@/common/commonLesson';
import { renderContent } from '@/utils/renderContent';
import { python } from '@codemirror/lang-python';
import { getCodeForLanguage } from '@/common/commonLanguage';
import { useUserProgress } from '@/hooks/useUserProgress';

const CodeMirror = lazy(() => import('@uiw/react-codemirror'));

interface LearnTabProps {
  selectedLesson: LessonContent | undefined;
}

const LearnTab: React.FC<LearnTabProps> = ({ selectedLesson }) => {
  const { progress } = useUserProgress();
  const language = progress.preferences.language || 'python';
  const codeExample = selectedLesson?.codeExample
    ? getCodeForLanguage(selectedLesson.codeExample, language)
    : '';

  // Determine the actual language of the code example
  // If codeExample is a string (legacy), it's Python
  const codeLanguage = typeof selectedLesson?.codeExample === 'string' ? 'python' : language;

  return (
  <div className="space-y-6 max-w-4xl mx-auto">
    <div>
      <h3 className="text-2xl font-semibold mb-6">{selectedLesson?.title}</h3>
      <div className="prose prose-lg max-w-none">
        {renderContent(selectedLesson?.content, language)}
      </div>
    </div>

    {/* Display Code Example if it exists */}
    {codeExample && (
      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4">Code Example</h4>
        <div className="rounded-lg overflow-hidden border border-gray-200 p-4">
          {renderContent(`\`\`\`${codeLanguage}\n${codeExample}\n\`\`\``, codeLanguage)}
        </div>
      </div>
    )}
  </div>
  );
};

// Remove memo to ensure re-rendering when language changes
export default LearnTab;
