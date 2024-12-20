import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from '@/components/ui/card';

interface SVGRendererProps {
  children: string | ReactNode;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface MarkdownComponentProps {
  children: ReactNode;
  className?: string;
}

// Constants
const SYNTAX_HIGHLIGHT_THEME = {
  ...materialOceanic,
  'code[class*="language-"]': {
    ...materialOceanic['code[class*="language-"]'],
    fontSize: '0.875rem',
    lineHeight: 1.6,
    background: 'transparent',
  },
  'comment': {
    color: '#6A9955',
    fontStyle: 'italic',
  },
};

// Utility Components
const SVGRenderer: React.FC<SVGRendererProps> = ({ children }) => {
  if (typeof children === 'string' && children.includes('<svg')) {
    return <div dangerouslySetInnerHTML={{ __html: children }} />;
  }
  return <>{children}</>;
};

// Markdown Components
const MarkdownComponents = {
  code: ({ inline, className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'python';
    
    if (inline) {
      return (
        <code 
          className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-sm rounded-md font-mono text-gray-800 dark:text-gray-200" 
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <Card className="my-6 overflow-hidden bg-gray-950">
        <div className="rounded-md overflow-hidden">
          <SyntaxHighlighter
            language={language}
            style={SYNTAX_HIGHLIGHT_THEME as any}
            PreTag="div"
            customStyle={{
              padding: '1rem',
              margin: 0,
            }}
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      </Card>
    );
  },

  // Heading Components
  h1: ({ children }: MarkdownComponentProps) => (
    <h1 className="text-3xl lg:text-4xl font-bold mt-8 mb-6 text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  ),
  h2: ({ children }: MarkdownComponentProps) => (
    <h2 className="text-2xl lg:text-3xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">
      {children}
    </h2>
  ),
  h3: ({ children }: MarkdownComponentProps) => (
    <h3 className="text-xl lg:text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  ),
  h4: ({ children }: MarkdownComponentProps) => (
    <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-gray-100">
      {children}
    </h4>
  ),

  // Content Components
  p: ({ children }: MarkdownComponentProps) => (
    <p className="mb-4 text-gray-700 dark:text-gray-300 leading-7 text-base lg:text-lg">
      {children}
    </p>
  ),
  div: ({ children, className }: MarkdownComponentProps) => {
    if (className === 'visualization') {
      return <SVGRenderer>{children}</SVGRenderer>;
    }
    return (
      <div className={`${className} my-4 text-base lg:text-lg leading-7 text-gray-700 dark:text-gray-300`}>
        {children}
      </div>
    );
  },
  ul: ({ children }: MarkdownComponentProps) => (
    <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
      {children}
    </ul>
  ),
  li: ({ children }: MarkdownComponentProps) => (
    <li className="text-base lg:text-lg leading-7">
      {children}
    </li>
  ),
};

const processVisualizationContent = (segment: string, index: number) => {
  const visualizationMatch = segment.match(/<Visualization type="([^"]*)" data="(.*?)">/);
  
  if (!visualizationMatch) {
    if (segment.includes('<div class="visualization">')) {
      return <SVGRenderer key={`svg-${index}`}>{segment}</SVGRenderer>;
    }

    return (
      <ReactMarkdown
        key={`md-${index}`}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={MarkdownComponents as any}
        className="prose dark:prose-invert max-w-none"
      >
        {segment}
      </ReactMarkdown>
    );
  }
  
  return null;
};

// Main Export
export const renderContent = (content: string | React.ReactNode) => {
  if (typeof content !== 'string') {
    return content;
  }

  const segments = content.split(/(<Visualization.*?>)/g);
  const processedContent = segments.map((segment, index) => 
    processVisualizationContent(segment, index)
  );

  return (
    <div className="prose dark:prose-invert max-w-none">
      {processedContent}
    </div>
  );
};