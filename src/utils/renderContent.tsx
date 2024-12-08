import React, { Suspense } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import rehypeRaw from 'rehype-raw';
import { CodeBlockProps as CodeProps } from '../app/leetcode/topics/interfaces';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getVisualizationComponent } from '../components/visualizations/registry';

export const renderContent = (content: string | React.ReactNode) => {
  if (typeof content !== 'string') {
    return content;
  }
  const processContent = () => {
    const segments = content.split(/(<Visualization.*?>)/g);

    return segments.map((segment, index) => {
      const match = segment.match(/<Visualization type="([^"]*)" data="(.*?)">/);

      if (!match) {
        return (
          <ReactMarkdown
            key={`md-${index}`}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ inline, className, children, ...props }: CodeProps) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline ? (
                  <SyntaxHighlighter
                    style={tomorrow as any}
                    language={match ? match[1] : 'text'}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              h3: ({children}) => (
                <h3 className="text-xl font-semibold mt-6 mb-4">{children}</h3>
              ),
              h4: ({children}) => (
                <h4 className="text-lg font-semibold mb-3">{children}</h4>
              ),
              p: ({children}) => (
                <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
              ),
            }}
          >
            {segment}
          </ReactMarkdown>
        );
      }

      try {
        // Extract the visualization type and data
        const [_, type, dataString] = match;
        const VisualizationComponent = getVisualizationComponent(type);

        if (!VisualizationComponent) {
          console.warn(`Visualization type "${type}" not found`);
          return null;
        }
        const visualizationData = JSON.parse(dataString);
        return (
          <Suspense
            key={`vis-${index}`}
            fallback={
              <div className="w-full h-32 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            }
          >
            <div className="my-8">
              <VisualizationComponent {...visualizationData} />
            </div>
          </Suspense>
        );
      } catch (error) {
        console.error('Error processing visualization:', error);
        console.error('Failed segment:', segment);
        console.error('Parsed data:', match ? match[2] : 'No data found');
        return (
          <div key={`error-${index}`} className="p-4 my-4 border border-red-200 rounded-lg">
            <p className="text-red-500">Failed to load visualization</p>
            <p className="text-sm text-red-400">{error.message}</p>
          </div>
        );
      }
    });
  };
  return <>{processContent()}</>;
};