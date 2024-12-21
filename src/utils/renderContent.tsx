import React, { ReactNode, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { CodeBlockProps as CodeProps } from '../app/leetcode/topics/interfaces';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    pyodide: any;
    loadPyodide: (config?: {
      indexURL?: string;
      stdout?: (stdout: string) => void;
      stderr?: (stderr: string) => void;
    }) => Promise<any>;
  }
}

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

const CodeBlock = ({ language, children }: { language: string; children: string }) => {
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPyodideReady, setIsPyodideReady] = useState(false);

  useEffect(() => {
    const loadPyodide = async () => {
      if (language === 'python' && !window.pyodide) {
        try {
          setIsLoading(true);
          // Check if script is already loaded
          let script = document.querySelector('script[src*="pyodide.js"]') as HTMLScriptElement | null;
          
          if (!script) {
            script = document.createElement('script') as HTMLScriptElement;
            script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
            script.async = true;
            document.body.appendChild(script);
            
            // Wait for script to load
            await new Promise<void>((resolve, reject) => {
              if (script) {
                script.onload = () => resolve();
                script.onerror = () => reject(new Error('Failed to load Pyodide'));
              }
            });
          }

          // Wait for window.loadPyodide to be available
          while (!window.loadPyodide) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }

          window.pyodide = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
          });
          
          setIsPyodideReady(true);
        } catch (error) {
          console.error('Failed to load Pyodide:', error);
          setOutput('Failed to load Python environment. Please refresh and try again.');
        } finally {
          setIsLoading(false);
        }
      } else if (language === 'python' && window.pyodide) {
        setIsPyodideReady(true);
      }
    };
    
    loadPyodide();
  }, [language]);

  const runCode = async () => {
    if (!window.pyodide || !isPyodideReady) return;
    
    setIsLoading(true);
    setOutput('');
    
    try {
      // Capture stdout
      window.pyodide.setStdout({ batched: (output: string) => {
        setOutput(prev => prev + output + '\n');
      }});
      
      const result = await window.pyodide.runPythonAsync(children);
      if (result !== undefined && result !== null) {
        setOutput(prev => prev + String(result));
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
            disabled={!isPyodideReady || isLoading}
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            {isLoading && <Loader2 className="h-3 w-3 animate-spin" />}
            {!isPyodideReady && !isLoading ? 'Loading Python...' : 
             isLoading ? 'Running...' : 'Run Code'}
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