import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Brain, Lightbulb, Rocket } from 'lucide-react';
import { Difficulty } from '@/common/commonConcept';

const difficultyConfig = {
  [Difficulty.Beginner]: {
    label: 'Beginner',
    icon: Lightbulb,
    baseClass: 'bg-emerald-100 hover:bg-emerald-200',
    textClass: 'text-emerald-800',
    description:
      'Perfect for getting started - focuses on fundamental concepts',
  },
  [Difficulty.Intermediate]: {
    label: 'Intermediate',
    icon: Brain,
    baseClass: 'bg-amber-100 hover:bg-amber-200',
    textClass: 'text-amber-800',
    description: 'Builds on basic concepts with more complex challenges',
  },
  [Difficulty.Advanced]: {
    label: 'Advanced',
    icon: Rocket,
    baseClass: 'bg-rose-100 hover:bg-rose-200',
    textClass: 'text-rose-800',
    description: 'Challenging exercises for experienced programmers',
  },
};

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty }) => {
  const config = difficultyConfig[difficulty];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <Badge
      variant="outline"
      className={`${config.baseClass} ${config.textClass} transition-colors duration-200 flex items-center gap-1 px-3 py-1`}
    >
      <Icon size={20} className="inline-block" />
      <span className="font-medium" style={{ userSelect: 'none' }}>
        {config.label}
      </span>
    </Badge>
  );
};

export default DifficultyBadge;
