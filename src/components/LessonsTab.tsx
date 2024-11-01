import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, FileCode, PenTool } from 'lucide-react';

interface LessonsTabsProps {
  activeTab: 'learn' | 'exercise' | 'quiz';
  setActiveTab: (tab: 'learn' | 'exercise' | 'quiz') => void;
}

const LessonsTabs: React.FC<LessonsTabsProps> = ({
  activeTab,
  setActiveTab,
}) => (
  <div className="border-b">
    <div className="flex gap-1 p-1">
      <Button
        variant={activeTab === 'learn' ? 'default' : 'ghost'}
        onClick={() => setActiveTab('learn')}
        className="gap-2"
      >
        <GraduationCap className="h-4 w-4" />
        Learn
      </Button>
      <Button
        variant={activeTab === 'exercise' ? 'default' : 'ghost'}
        onClick={() => setActiveTab('exercise')}
        className="gap-2"
      >
        <FileCode className="h-4 w-4" />
        Exercise
      </Button>
      <Button
        variant={activeTab === 'quiz' ? 'default' : 'ghost'}
        onClick={() => setActiveTab('quiz')}
        className="gap-2"
      >
        <PenTool className="h-4 w-4" />
        Quiz
      </Button>
    </div>
  </div>
);

export default LessonsTabs;
