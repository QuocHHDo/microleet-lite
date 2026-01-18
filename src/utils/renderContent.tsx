import React, { ReactNode, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { CodeBlockProps as CodeProps } from '../app/leetcode/topics/interfaces';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

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
    color: '#D4D4D4', // Default text color
  },
  'pre[class*="language-"]': {
    ...materialOceanic['pre[class*="language-"]'],
    background: '#1E1E1E',
  },
  // VS Code Dark+ theme colors
  comment: {
    color: '#6A9955',
    fontStyle: 'italic',
  },
  prolog: {
    color: '#6A9955',
  },
  doctype: {
    color: '#6A9955',
  },
  cdata: {
    color: '#6A9955',
  },
  punctuation: {
    color: '#D4D4D4',
  },
  property: {
    color: '#9CDCFE',
  },
  tag: {
    color: '#569CD6',
  },
  boolean: {
    color: '#569CD6',
  },
  number: {
    color: '#B5CEA8',
  },
  constant: {
    color: '#4FC1FF',
  },
  symbol: {
    color: '#4FC1FF',
  },
  deleted: {
    color: '#F44747',
  },
  selector: {
    color: '#D7BA7D',
  },
  'attr-name': {
    color: '#9CDCFE',
  },
  string: {
    color: '#CE9178',
  },
  char: {
    color: '#CE9178',
  },
  builtin: {
    color: '#4EC9B0',
  },
  inserted: {
    color: '#B5CEA8',
  },
  operator: {
    color: '#D4D4D4',
  },
  entity: {
    color: '#4EC9B0',
  },
  url: {
    color: '#3794FF',
  },
  variable: {
    color: '#9CDCFE',
  },
  'attr-value': {
    color: '#CE9178',
  },
  keyword: {
    color: '#569CD6',
  },
  'control-flow': {
    color: '#C586C0',
  },
  function: {
    color: '#DCDCAA',
  },
  'function-variable': {
    color: '#DCDCAA',
  },
  'class-name': {
    color: '#4EC9B0',
  },
  regex: {
    color: '#D16969',
  },
  important: {
    color: '#569CD6',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  'template-string': {
    color: '#CE9178',
  },
  'template-punctuation': {
    color: '#569CD6',
  },
  'method': {
    color: '#DCDCAA',
  },
  'parameter': {
    color: '#9CDCFE',
  },
  'type-annotation': {
    color: '#4EC9B0',
  },
  'decorator': {
    color: '#DCDCAA',
  },
};

const CodeBlock = ({
  language,
  children,
}: {
  language: string;
  children: string;
}) => {
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPyodideReady, setIsPyodideReady] = useState(false);

  // Lazy load Pyodide only when user clicks "Run Code"
  const loadPyodideIfNeeded = async () => {
    if (window.pyodide) {
      setIsPyodideReady(true);
      return;
    }

    try {
      setIsLoading(true);
      // Check if script is already loaded
      let script = document.querySelector(
        'script[src*="pyodide.js"]',
      ) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement('script') as HTMLScriptElement;
        script.src =
          'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
        script.async = true;
        document.body.appendChild(script);

        // Wait for script to load
        await new Promise<void>((resolve, reject) => {
          if (script) {
            script.onload = () => resolve();
            script.onerror = () =>
              reject(new Error('Failed to load Pyodide'));
          }
        });
      }

      // Wait for window.loadPyodide to be available
      while (!window.loadPyodide) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      window.pyodide = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
      });

      setIsPyodideReady(true);
    } catch (error) {
      console.error('Failed to load Pyodide:', error);
      setOutput(
        'Failed to load Python environment. Please refresh and try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const runCode = async () => {
    // Load Pyodide on first run
    if (!isPyodideReady) {
      await loadPyodideIfNeeded();
      if (!window.pyodide) return;
    }

    setIsLoading(true);
    setOutput('');

    try {
      const pyodide = window.pyodide;
      if (!pyodide) {
        setOutput('Python environment not loaded');
        return;
      }

      // Capture stdout
      if (pyodide.setStdout) {
        pyodide.setStdout({
          batched: (output: string) => {
            setOutput((prev) => prev + output + '\n');
          },
        });
      }

      const result = await pyodide.runPythonAsync(children);
      if (result !== undefined && result !== null) {
        setOutput((prev) => prev + String(result));
      }
    } catch (error: any) {
      setOutput(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden bg-[#1E2432]">
      {language === 'python' && (
        <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
          <span className="text-sm text-gray-400">Python</span>
          <Button
            onClick={runCode}
            disabled={isLoading}
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            {isLoading && <Loader2 className="h-3 w-3 animate-spin" />}
            {isLoading ? 'Running...' : 'Run Code'}
          </Button>
        </div>
      )}
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
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>

      {language === 'python' && output && (
        <div className="px-4 py-3 border-t border-gray-700">
          <div className="bg-black text-white p-3 rounded-md font-mono text-sm whitespace-pre-wrap">
            {isLoading && !output ? 'Running code...' : output}
          </div>
        </div>
      )}
    </div>
  );
};

export const renderContent = (content: string | React.ReactNode, selectedLanguage?: string) => {
  if (typeof content !== 'string') {
    return content;
  }

  // Parse language-specific text markers: {{python:text}} and {{typescript:text}}
  const parseLanguageMarkers = (text: string, language: string = 'python'): string => {
    return text.replace(/\{\{(python|typescript):(.*?)\}\}/g, (match, lang, content) => {
      return lang === language ? content : '';
    });
  };

  // Apply language markers before processing
  let processedContent = selectedLanguage ? parseLanguageMarkers(content, selectedLanguage) : content;

  // Check if content has HTML tags
  const hasHtmlTags = /<[a-z][\s\S]*>/i.test(processedContent);

  // Check if content has markdown code blocks (triple backticks)
  const hasMarkdownCodeBlocks = /```[\s\S]*?```/.test(processedContent);

  // For content with BOTH HTML and markdown code blocks, use a hybrid approach:
  // Split by code blocks, render HTML with dangerouslySetInnerHTML, render code blocks with CodeBlock
  // This fixes the issue where ReactMarkdown+rehype-raw fails to parse mixed content
  if (hasHtmlTags && hasMarkdownCodeBlocks) {
    // Split content by code blocks while preserving the code blocks
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const parts: { type: 'html' | 'code'; content: string; language?: string }[] = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(processedContent)) !== null) {
      // Add HTML content before this code block
      if (match.index > lastIndex) {
        parts.push({
          type: 'html',
          content: processedContent.slice(lastIndex, match.index),
        });
      }

      const language = match[1] || 'python';
      const code = match[2];

      // Filter code blocks based on selected language
      if (!selectedLanguage || language === selectedLanguage) {
        parts.push({
          type: 'code',
          content: code.replace(/\n$/, ''),
          language,
        });
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining HTML content after last code block
    if (lastIndex < processedContent.length) {
      parts.push({
        type: 'html',
        content: processedContent.slice(lastIndex),
      });
    }

    return (
      <div className="prose max-w-none lesson-content">
        {parts.map((part, index) => {
          if (part.type === 'html') {
            // Convert markdown syntax to HTML for mixed content
            let processedHtml = part.content
              // Convert inline backticks to <code> tags
              .replace(
                /`([^`]+)`/g,
                '<code class="bg-gray-100 px-1.5 py-0.5 text-sm rounded font-mono">$1</code>'
              )
              // Convert bold markdown (**text**) to <strong> tags
              .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
              // Convert italic markdown (*text*) to <em> tags (but not inside **)
              .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
              // Convert markdown numbered lists to HTML <ol><li> tags
              .replace(
                /(?:^|\n)((?:\d+\.\s+.+(?:\n|$))+)/g,
                (match, listContent) => {
                  const items = listContent
                    .split(/\n/)
                    .filter((line: string) => line.trim())
                    .map((line: string) => {
                      const itemContent = line.replace(/^\d+\.\s+/, '');
                      return `<li class="mb-2">${itemContent}</li>`;
                    })
                    .join('');
                  return `<ol class="list-decimal pl-6 mb-4 text-gray-700">${items}</ol>`;
                }
              )
              // Convert markdown bullet lists to HTML <ul><li> tags
              .replace(
                /(?:^|\n)((?:[-*]\s+.+(?:\n|$))+)/g,
                (match, listContent) => {
                  const items = listContent
                    .split(/\n/)
                    .filter((line: string) => line.trim())
                    .map((line: string) => {
                      const itemContent = line.replace(/^[-*]\s+/, '');
                      return `<li class="mb-2">${itemContent}</li>`;
                    })
                    .join('');
                  return `<ul class="list-disc pl-6 mb-4 text-gray-700">${items}</ul>`;
                }
              );
            return (
              <div
                key={`html-${index}`}
                dangerouslySetInnerHTML={{ __html: processedHtml }}
              />
            );
          } else {
            return (
              <CodeBlock key={`code-${index}`} language={part.language || 'python'}>
                {part.content}
              </CodeBlock>
            );
          }
        })}
      </div>
    );
  }

  // Use direct HTML rendering for content with HTML tags but no markdown code blocks
  // This bypasses ReactMarkdown+rehype-raw which has parsing issues for pure HTML
  // HTML content is styled via .lesson-content class in globals.css
  if (hasHtmlTags && !hasMarkdownCodeBlocks) {
    return (
      <div
        className="prose max-w-none lesson-content"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    );
  }

  const processContent = () => {
    const segments = processedContent.split(/(<Visualization.*?>)/g);

    return segments.map((segment, index) => {
      const match = segment.match(
        /<Visualization type="([^"]*)" data="(.*?)">/,
      );

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

                // Filter code blocks based on selected language
                if (!inline && selectedLanguage && language !== selectedLanguage) {
                  return null;  // Hide code blocks that don't match selected language
                }

                return !inline ? (
                  <CodeBlock language={language}>
                    {String(children).replace(/\n$/, '')}
                  </CodeBlock>
                ) : (
                  <code
                    className={`${className} bg-gray-100 px-1.5 py-0.5 text-sm rounded font-mono`}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold mt-8 mb-6">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold mt-8 mb-4">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold mt-6 mb-3">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-base font-semibold mt-4 mb-2">
                  {children}
                </h4>
              ),
              p: ({ children }) => {
                // Check if children contains block-level elements (like code blocks)
                const hasBlockChild = React.Children.toArray(children).some(
                  (child: any) => {
                    // Check if child is a CodeBlock or has props indicating it's a block element
                    return child?.type?.name === 'CodeBlock' ||
                           (child?.props?.className?.includes('language-'));
                  }
                );

                // If it contains block elements, use div instead of p to avoid hydration errors
                if (hasBlockChild) {
                  return (
                    <div className="mb-4 text-gray-700 leading-relaxed text-base">
                      {children}
                    </div>
                  );
                }

                return (
                  <p className="mb-4 text-gray-700 leading-relaxed text-base">
                    {children}
                  </p>
                );
              },
              pre: ({ children, className, ...props }) => (
                <pre className={className} {...props}>
                  {children}
                </pre>
              ),
              div: ({ children, className, ...props }) => {
                if (className === 'visualization') {
                  return <SVGRenderer>{children}</SVGRenderer>;
                }
                return (
                  <div className={className} {...props}>
                    {children}
                  </div>
                );
              },
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 text-gray-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="mb-2 text-base">{children}</li>
              ),
              table: ({ children }) => (
                <table className="min-w-full border-collapse border border-gray-300 my-4">
                  {children}
                </table>
              ),
              thead: ({ children }) => (
                <thead className="bg-gray-100">{children}</thead>
              ),
              tbody: ({ children }) => <tbody>{children}</tbody>,
              tr: ({ children }) => <tr>{children}</tr>,
              th: ({ children }) => (
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-300 px-4 py-2">
                  {children}
                </td>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
              em: ({ children }) => <em>{children}</em>,
              span: ({ children, className, ...props }) => (
                <span className={className} {...props}>
                  {children}
                </span>
              ),
              br: () => <br />,
              hr: () => <hr className="my-4 border-gray-300" />,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
                  {children}
                </blockquote>
              ),
            }}
          >
            {segment}
          </ReactMarkdown>
        );
      }
    });
  };
  return <div className="prose max-w-none">{processContent()}</div>;
};
