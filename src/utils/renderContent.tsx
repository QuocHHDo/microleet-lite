import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { CodeBlockProps as CodeProps } from '../app/leetcode/topics/interfaces';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface SVGRendererProps {
  children: string | ReactNode;
}

const SVGRenderer: React.FC<SVGRendererProps> = ({ children }) => {
  // If the content includes an SVG, render it directly
  if (typeof children === 'string' && children.includes('<svg')) {
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
  }
  return <>{children}</>;
};

export const renderContent = (content: string | React.ReactNode) => {
  if (typeof content !== 'string') {
    return content;
  }

  const processContent = () => {
    // Split content by visualization tags first
    const segments = content.split(/(<Visualization.*?>)/g);

    return segments.map((segment, index) => {
      const match = segment.match(/<Visualization type="([^"]*)" data="(.*?)">/);

      if (!match) {
        // Check if the segment contains a visualization div
        if (segment.includes('<div class="visualization">')) {
          return <SVGRenderer key={`svg-${index}`}>{segment}</SVGRenderer>;
        }

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
              // Add special handling for div elements that contain SVGs
              div: ({children, className}) => {
                if (className === 'visualization') {
                  return <SVGRenderer>{children}</SVGRenderer>;
                }
                return <div className={className}>{children}</div>;
              }
            }}
          >
            {segment}
          </ReactMarkdown>
        );
      }
    });
  };
  return <>{processContent()}</>;
};