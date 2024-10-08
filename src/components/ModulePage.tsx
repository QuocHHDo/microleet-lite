'use client';
import React, { useState, useMemo } from 'react';
import { BookOpen, Code, List, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import ModuleOverview from '@/components/ModuleOverview';
import Navigation from '@/components/Navigation';
import MicroLesson from '@/components/MicroLesson';
import LeetCodeProblems from '@/components/LeetCodeProblems';
import ProgressTracker from '@/components/ProgressTracker';
import useLocalStorage from '@/hooks/useLocalStorage';
import usePoints from '@/hooks/usePoints';
import Concepts from '@/components/Concepts';
import { Lesson } from '@/common/commonLesson';
import { Problem } from '@/common/commonProblem';
import { Concept } from '@/common/commonConcept';
import { CheatSheetItem } from '@/common/commonCheatSheet';
import CheatSheet from './CheatSheet';

interface ModulePageProps {
  title: string;
  description: string;
  lessons: Lesson[];
  problems: Problem[];
  cheatSheetItems: CheatSheetItem[];
  concepts: Concept[];
  progressKey: string;
}

const ModulePage: React.FC<ModulePageProps> = ({
  title,
  description,
  lessons,
  problems,
  cheatSheetItems,
  concepts,
  progressKey,
}) => {
  const [activeLesson, setActiveLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useLocalStorage<number[]>(
    `${progressKey}LessonsProgress`,
    [],
  );
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

  const handleLessonComplete = (lessonIndex: number) => {
    setCompletedLessons((prev) => {
      const isCompleted = prev.includes(lessonIndex);
      const newCompletedLessons = isCompleted
        ? prev.filter((index) => index !== lessonIndex)
        : [...prev, lessonIndex];

      setPoints((prevPoints) => prevPoints + (isCompleted ? -10 : 10));

      return newCompletedLessons;
    });
  };

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

  const progress = useMemo(() => {
    return (
      (Object.values(completedConcepts).filter(Boolean).length /
        concepts.length) *
      100
    );
  }, [completedConcepts]);

  return (
    <TooltipProvider>
      <div
        className={`max-w-6xl mx-auto p-6 ${
          darkMode ? 'dark bg-gray-900 text-white' : 'bg-white'
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <label className="flex items-center space-x-2">
            <span>{darkMode ? '🌙' : '☀️'}</span>
            <Switch
              checked={darkMode}
              onCheckedChange={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            />
          </label>
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
            <TabsTrigger value="practice">
              <Code className="mr-2" /> Practice
            </TabsTrigger>
            <TabsTrigger value="concepts">
              <List className="mr-2" /> Concepts
            </TabsTrigger>
            <TabsTrigger value="cheatsheet">
              <FileText className="mr-2" /> Cheat Sheet
            </TabsTrigger>
          </TabsList>

          {/* Lessons Tab */}
          <TabsContent value="lessons">
            <Card className="mt-4">
              <CardContent className="pt-6">
                <Navigation
                  lessons={lessons}
                  activeLesson={activeLesson}
                  setActiveLesson={setActiveLesson}
                />
                <MicroLesson
                  lesson={lessons[activeLesson]}
                  onComplete={() => handleLessonComplete(activeLesson)}
                  isCompleted={completedLessons.includes(activeLesson)}
                />
                {activeLesson < lessons.length - 1 && (
                  <Button
                    onClick={() => setActiveLesson((prev) => prev + 1)}
                    className="mt-4"
                  >
                    Next Lesson <ArrowRight className="ml-2" />
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice">
            <Card className="mt-4">
              <CardContent className="pt-6">
                <LeetCodeProblems problems={problems} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Concepts Tab */}
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

          {/* Cheat Sheet Tab */}
          <TabsContent value="cheatsheet">
            <Card className="mt-4">
              <CardContent className="pt-6">
                <CheatSheet items={cheatSheetItems} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <ProgressTracker
          completed={completedLessons.length}
          total={lessons.length}
        />

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {Math.round(progress)}% Completed
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ModulePage;
