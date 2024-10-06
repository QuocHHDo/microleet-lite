'use client';
import React, { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeBlockProps as CodeProps } from '../app/leetcode/topics/interfaces';
import { filterConcepts } from '@/utils/filterConcepts';
import useDebounce from '../hooks/useDebounce';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import rehypeRaw from 'rehype-raw';
import { Concept } from '@/common/commonConcept';

interface ConceptsTabProps {
  concepts: Concept[];
  completedConcepts: Record<number, boolean>;
  expandedConcepts: Record<number, boolean>;
  filter: 'all' | 'completed' | 'uncompleted';
  setFilter: (filter: 'all' | 'completed' | 'uncompleted') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  toggleConcept: (id: number) => void;
  markAsCompleted: (id: number) => void;
  darkMode: boolean;
}

const Concepts: React.FC<ConceptsTabProps> = ({
  concepts,
  completedConcepts,
  expandedConcepts,
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  toggleConcept,
  markAsCompleted,
}) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const filteredConcepts: Concept[] = useMemo(() => {
    return filterConcepts(
      concepts,
      filter,
      completedConcepts,
      debouncedSearchTerm,
    );
  }, [filter, completedConcepts, debouncedSearchTerm]);

  const renderContent = (content: string | React.ReactNode) => {
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
            ul: ({ children }) => (
              <ul className="list-disc pl-5">{children}</ul>
            ),
            li: ({ children }) => <li className="mb-2">{children}</li>,
          }}
        >
          {content}
        </ReactMarkdown>
      );
    }
    return content;
  };

  return (
    <Card className="mt-4">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search concepts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full"
            />
          </div>
          <div className="flex space-x-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'uncompleted' ? 'default' : 'outline'}
              onClick={() => setFilter('uncompleted')}
            >
              To Do
            </Button>
            <Button
              variant={filter === 'completed' ? 'default' : 'outline'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </Button>
          </div>
        </div>

        {filteredConcepts.map((concept) => (
          <Card
            key={concept.id}
            className={`mb-4 ${expandedConcepts[concept.id] ? 'border-blue-500' : ''}`}
          >
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleConcept(concept.id)}
            >
              <CardTitle className="flex justify-between items-center">
                <span>{concept.title}</span>
                {expandedConcepts[concept.id] ? <ChevronUp /> : <ChevronDown />}
              </CardTitle>
            </CardHeader>
            {expandedConcepts[concept.id] && (
              <CardContent className="p-4">
                {renderContent(concept.description)}
                <div className="mt-4">
                  <Button
                    variant={
                      completedConcepts[concept.id] ? 'default' : 'outline'
                    }
                    onClick={() => markAsCompleted(concept.id)}
                    className="complete-button"
                  >
                    {completedConcepts[concept.id] ? (
                      <>
                        <CheckCircle className="mr-2" /> Completed
                      </>
                    ) : (
                      'Mark as Completed'
                    )}
                  </Button>

                  {completedConcepts[concept.id] && (
                    <div className="p-2 bg-green-200 rounded-md text-green-800 mt-4">
                      Lesson marked as completed! 🎉
                    </div>
                  )}
                </div>
              </CardContent>
            )}
          </Card>
        ))}

        {filteredConcepts.length === 0 && (
          <div className="text-center text-gray-600">
            No concepts found. Try adjusting your search or filter.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Concepts;
