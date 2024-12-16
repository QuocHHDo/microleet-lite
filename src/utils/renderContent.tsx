import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { CodeBlockProps as CodeProps } from '../app/leetcode/topics/interfaces';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface SVGRendererProps {
  children: string | ReactNode;
}

const SVGRenderer: React.FC<SVGRendererProps> = ({ children }) => {
  if (typeof children === 'string' && children.includes('<svg')) {
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
  }
  return <>{children}</>;
};

const customStyle = {
  ...materialOceanic,
  'code[class*="language-"]': {
    ...materialOceanic['code[class*="language-"]'],
    fontSize: '14px',
    lineHeight: 1.5,
    background: '#1E1E1E',
  },
  'comment': {
    color: '#6A9955',
    fontStyle: 'italic',
  },
};

export const renderContent = (content: string | React.ReactNode) => {
  if (typeof content !== 'string') {
    return content;
  }

  const processContent = () => {
    const segments = content.split(/(<Visualization.*?>)/g);

    return segments.map((segment, index) => {
      const match = segment.match(/<Visualization type="([^"]*)" data="(.*?)">/);

      if (!match) {
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
                const language = match ? match[1] : 'python';
                
                return !inline ? (
                  <div className="my-6 rounded-lg overflow-hidden bg-[#1E2432] p-4">
                    <div className="rounded-md overflow-hidden">
                      <SyntaxHighlighter
                        style={customStyle as any}
                        language={language}
                        PreTag="div"
                        customStyle={{
                          padding: '16px',
                          fontSize: '14px',
                          lineHeight: 1.5,
                          backgroundColor: '#1E1E1E',
                          margin: 0,
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                ) : (
                  <code 
                    className={`${className} bg-gray-100 px-1.5 py-0.5 text-sm rounded font-mono`} 
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              h1: ({children}) => (
                <h1 className="text-2xl font-bold mt-8 mb-6">{children}</h1>
              ),
              h2: ({children}) => (
                <h2 className="text-xl font-semibold mt-8 mb-4">{children}</h2>
              ),
              h3: ({children}) => (
                <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>
              ),
              h4: ({children}) => (
                <h4 className="text-base font-semibold mt-4 mb-2">{children}</h4>
              ),
              p: ({children}) => (
                <p className="mb-4 text-gray-700 leading-relaxed text-base">{children}</p>
              ),
              div: ({children, className}) => {
                if (className === 'visualization') {
                  return <SVGRenderer>{children}</SVGRenderer>;
                }
                return (
                  <div className={`${className} my-4 text-base leading-relaxed`}>
                    {children}
                  </div>
                );
              },
              ul: ({children}) => (
                <ul className="list-disc pl-6 mb-4 text-gray-700">{children}</ul>
              ),
              li: ({children}) => (
                <li className="mb-2 text-base">{children}</li>
              )
            }}
          >
            {segment}
          </ReactMarkdown>
        );
      }
    });
  };
  return (
    <div className="prose max-w-none">
      {processContent()}
    </div>
  );
};