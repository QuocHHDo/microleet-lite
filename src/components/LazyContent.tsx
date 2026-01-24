import React, { Suspense, lazy } from 'react';

const ContentRenderer = lazy(() => import('@/utils/renderContent').then(module => ({
  default: ({ content, language }: { content?: string | React.ReactNode; language?: string }) => (
    <>{module.renderContent(content, language)}</>
  )
})));

interface LazyContentProps {
  content?: string | React.ReactNode;
  language?: string;
}

export const LazyContent: React.FC<LazyContentProps> = ({ content, language }) => {
  return (
    <Suspense fallback={
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    }>
      <ContentRenderer content={content} language={language} />
    </Suspense>
  );
};

export default LazyContent;
