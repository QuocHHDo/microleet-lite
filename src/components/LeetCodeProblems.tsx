import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import {
  ChevronRight,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Code,
  Clock,
  Database,
  CheckCircle,
  XCircle,
  HelpCircle,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Problem } from '@/common/commonProblem';
interface LeetCodeProblemsProps {
  problems: Problem[];
}

const LeetCodeProblems: React.FC<LeetCodeProblemsProps> = ({ problems }) => {
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);
  const [showSolutionIndex, setShowSolutionIndex] = useState<number | null>(
    null,
  );
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState<number>(0);
  const [showHintIndex, setShowHintIndex] = useState<number | null>(null);
  const [expandedExplanationIndex, setExpandedExplanationIndex] = useState<
    number | null
  >(null);
  const [solvedProblems, setSolvedProblems] = useState<{
    [key: number]: boolean;
  }>({});
  const [understandingLevels, setUnderstandingLevels] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const savedSolvedProblems = JSON.parse(
      localStorage.getItem('solvedProblems') || '{}',
    );
    const savedUnderstandingLevels = JSON.parse(
      localStorage.getItem('understandingLevels') || '{}',
    );
    setSolvedProblems(savedSolvedProblems);
    setUnderstandingLevels(savedUnderstandingLevels);
  }, []);

  const toggleSolution = (index: number) => {
    setShowSolutionIndex(showSolutionIndex === index ? null : index);
  };

  const toggleHint = (index: number) => {
    setShowHintIndex(showHintIndex === index ? null : index);
  };

  const toggleExplanation = (index: number) => {
    setExpandedExplanationIndex(
      expandedExplanationIndex === index ? null : index,
    );
  };

  const handleSolvedChange = (index: number, value: boolean) => {
    const newSolvedProblems = { ...solvedProblems, [index]: value };
    setSolvedProblems(newSolvedProblems);
    localStorage.setItem('solvedProblems', JSON.stringify(newSolvedProblems));
  };

  const handleUnderstandingChange = (index: number, value: string) => {
    const newUnderstandingLevels = { ...understandingLevels, [index]: value };
    setUnderstandingLevels(newUnderstandingLevels);
    localStorage.setItem(
      'understandingLevels',
      JSON.stringify(newUnderstandingLevels),
    );
  };

  const getTitleColor = (index: number) => {
    const isSolved = solvedProblems[index] || false;
    const understandingLevel = understandingLevels[index] || 'fully';

    if (isSolved) {
      if (understandingLevel === 'fully') return 'text-green-600';
      if (understandingLevel === 'partially') return 'text-yellow-600';
      return 'text-red-600';
    }
    return 'text-gray-800';
  };

  const getDifficultyBadge = (difficulty: string) => {
    const colors = {
      Easy: 'bg-green-100 text-green-800',
      Medium: 'bg-yellow-100 text-yellow-800',
      Hard: 'bg-red-100 text-red-800',
    };
    return (
      <Badge
        variant="outline"
        className={colors[difficulty as keyof typeof colors]}
      >
        {difficulty}
      </Badge>
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          LeetCode Problems
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion
          type="single"
          collapsible
          value={expandedProblem as string}
          onValueChange={setExpandedProblem}
        >
          {problems.map((problem, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full">
                  <h3
                    className={`text-xl font-semibold ${getTitleColor(index)}`}
                  >
                    {problem.title}
                  </h3>
                  {getDifficultyBadge(problem.difficulty)}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-gray-700">{problem.description}</p>
                  <div className="flex space-x-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={problem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              View on LeetCode
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Opens in a new tab</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {problem.hint && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleHint(index)}
                      >
                        <BookOpen size={16} className="mr-2" />
                        {showHintIndex === index ? 'Hide Hint' : 'Show Hint'}
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleSolution(index)}
                    >
                      <Code size={16} className="mr-2" />
                      {showSolutionIndex === index
                        ? 'Hide Solution'
                        : 'Show Solution'}
                    </Button>
                  </div>
                  {showHintIndex === index && problem.hint && (
                    <Card>
                      <CardContent className="p-4 bg-yellow-50">
                        <p className="text-yellow-800">{problem.hint}</p>
                      </CardContent>
                    </Card>
                  )}
                  {showSolutionIndex === index && (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <label className="text-gray-700 text-sm">
                          Choose Solution:
                        </label>
                        <Select
                          value={selectedSolutionIndex.toString()}
                          onValueChange={(value) =>
                            setSelectedSolutionIndex(Number(value))
                          }
                        >
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a solution" />
                          </SelectTrigger>
                          <SelectContent>
                            {problem.solutions.map((_, solIndex) => (
                              <SelectItem
                                key={solIndex}
                                value={solIndex.toString()}
                              >
                                Solution {solIndex + 1}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <CodeMirror
                        value={problem.solutions[selectedSolutionIndex].code}
                        extensions={[python()]}
                        editable={false}
                        className="border rounded-lg overflow-hidden"
                      />
                      <div className="flex space-x-4 text-sm text-gray-600">
                        <p className="flex items-center">
                          <Clock size={16} className="mr-1" />
                          <strong>Time Complexity:</strong>{' '}
                          {
                            problem.solutions[selectedSolutionIndex]
                              .timeComplexity
                          }
                        </p>
                        <p className="flex items-center">
                          <Database size={16} className="mr-1" />
                          <strong>Space Complexity:</strong>{' '}
                          {
                            problem.solutions[selectedSolutionIndex]
                              .spaceComplexity
                          }
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExplanation(index)}
                      >
                        {expandedExplanationIndex === index ? (
                          <ChevronDown size={16} className="mr-2" />
                        ) : (
                          <ChevronRight size={16} className="mr-2" />
                        )}
                        {expandedExplanationIndex === index
                          ? 'Hide Explanation'
                          : 'Show Explanation'}
                      </Button>
                      {expandedExplanationIndex === index && (
                        <Card>
                          <CardContent className="p-4 bg-gray-50">
                            <p className="text-gray-700">
                              {
                                problem.solutions[selectedSolutionIndex]
                                  .explanation
                              }
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  )}
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={solvedProblems[index] || false}
                        onChange={(e) =>
                          handleSolvedChange(index, e.target.checked)
                        }
                        className="mr-2"
                      />
                      Attempted
                    </label>
                    <label className="flex items-center">
                      Understanding:
                      <Select
                        value={understandingLevels[index] || 'fully'}
                        onValueChange={(value) =>
                          handleUnderstandingChange(index, value)
                        }
                      >
                        <SelectTrigger className="w-[180px] ml-2">
                          <SelectValue placeholder="Select understanding level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fully">
                            <div className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                              Fully Understand
                            </div>
                          </SelectItem>
                          <SelectItem value="partially">
                            <div className="flex items-center">
                              <HelpCircle className="mr-2 h-4 w-4 text-yellow-500" />
                              Partially Understand
                            </div>
                          </SelectItem>
                          <SelectItem value="not">
                            <div className="flex items-center">
                              <XCircle className="mr-2 h-4 w-4 text-red-500" />
                              Not Understand
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default LeetCodeProblems;
