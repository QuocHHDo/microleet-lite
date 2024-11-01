import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import rehypeRaw from 'rehype-raw';
import { CodeBlockProps as CodeProps } from '../app/leetcode/topics/interfaces';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const renderContent = (content: string | React.ReactNode) => {
  if (typeof content === 'string') {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkHtml]}
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
          table({ children }) {
            return (
              <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                {children}
              </table>
            );
          },
          thead({ children }) {
            return <thead className="bg-gray-200">{children}</thead>;
          },
          th({ children }) {
            return (
              <th className="px-4 py-2 border border-gray-300">{children}</th>
            );
          },
          td({ children }) {
            return (
              <td className="px-4 py-2 border border-gray-300">{children}</td>
            );
          },
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mt-4 mb-2">{children}</h2>
          ),
          ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
          li: ({ children }) => <li className="mb-2">{children}</li>,
        }}
      >
        {content}
      </ReactMarkdown>
    );
  }
  return content;
};
