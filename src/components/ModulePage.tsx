'use client';
import React, { useState } from 'react';
import { BookOpen, Code, List, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import ModuleOverview from '@/components/ModuleOverview';
import MicroLesson from '@/components/MicroLesson';
import LeetCodeProblems from '@/components/LeetCodeProblems';
import useLocalStorage from '@/hooks/useLocalStorage';
import usePoints from '@/hooks/usePoints';
import Concepts from '@/components/Concepts';
import { LessonsTab } from '@/common/commonLesson';
import { Problem } from '@/common/commonProblem';
import { Concept } from '@/common/commonConcept';
import { CheatSheetItem } from '@/common/commonCheatSheet';
import CheatSheet from './CheatSheet';

interface ModulePageProps {
  title: string;
  description: string;
  lessonsTab: LessonsTab;
  progressKey: string;
  problems?: Problem[];
  cheatSheetItems?: CheatSheetItem[];
  concepts?: Concept[];
}

const ModulePage: React.FC<ModulePageProps> = ({
  title,
  description,
  lessonsTab,
  problems,
  cheatSheetItems,
  concepts,
  progressKey,
}) => {
  const [expandedConcepts, setExpandedConcepts] = useLocalStorage<
    Record<number, boolean>
  >(`${progressKey}ExpandedConcepts`, {});
  const [completedConcepts, setCompletedConcepts] = useLocalStorage<
    Record<number, boolean>
  >(`${progressKey}ConceptProgress`, {});
  const [filter, setFilter] = useState<'all' | 'completed' | 'uncompleted'>(
    'all',
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('darkMode', false);
  const [points, setPoints] = usePoints();

  const markAsCompleted = (id: number) => {
    setCompletedConcepts((prev) => {
      const isCompleted = prev[id];
      const newCompletedTopics = { ...prev, [id]: !isCompleted };

      setPoints((prevPoints) => prevPoints + (isCompleted ? -5 : 5));

      return newCompletedTopics;
    });
  };

  const toggleConcept = (id: number) => {
    setExpandedConcepts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <TooltipProvider>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          darkMode ? 'dark bg-gray-900 text-white' : 'bg-white'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="secondary" className="text-lg">
                🏆 {points} pts
              </Badge>
            </TooltipTrigger>
            <TooltipContent>Your learning points</TooltipContent>
          </Tooltip>
        </div>

        <ModuleOverview
          title={title}
          description={description}
          className="mb-8"
        />

        <Tabs defaultValue="lessons" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="lessons">
              <BookOpen className="mr-2" /> Lessons
            </TabsTrigger>
            {problems && (
              <TabsTrigger value="practice">
                <Code className="mr-2" /> Practice
              </TabsTrigger>
            )}
            {concepts && (
              <TabsTrigger value="concepts">
                <List className="mr-2" /> Concepts
              </TabsTrigger>
            )}
            {cheatSheetItems && (
              <TabsTrigger value="cheatsheet">
                <FileText className="mr-2" /> Cheat Sheet
              </TabsTrigger>
            )}
          </TabsList>

          {/* Lessons Tab */}
          <TabsContent value="lessons">
            <Card className="mt-4">
              <CardContent className="pt-6">
                <MicroLesson lessonsTab={lessonsTab} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practice Tab */}
          {problems && (
            <TabsContent value="practice">
              <Card className="mt-4">
                <CardContent className="pt-6">
                  <LeetCodeProblems problems={problems} />
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Concepts Tab */}
          {concepts && (
            <TabsContent value="concepts">
              <Concepts
                concepts={concepts}
                completedConcepts={completedConcepts}
                expandedConcepts={expandedConcepts}
                filter={filter}
                setFilter={setFilter}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                toggleConcept={toggleConcept}
                markAsCompleted={markAsCompleted}
                darkMode={darkMode}
              />
            </TabsContent>
          )}

          {/* Cheat Sheet Tab */}
          {cheatSheetItems && (
            <TabsContent value="cheatsheet">
              <Card className="mt-4">
                <CardContent className="pt-6">
                  <CheatSheet items={cheatSheetItems} />
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </TooltipProvider>
  );
};

export default ModulePage;
