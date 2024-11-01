import React from 'react';
import { BookOpen } from 'lucide-react';

interface CurriculumHeaderProps {
  curriculum: {
    title: string;
    description: string;
  };
  progressPercentage: number;
}

const CurriculumHeader: React.FC<CurriculumHeaderProps> = ({
  curriculum,
  progressPercentage,
}) => (
  <div className="mb-8">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold">{curriculum?.title}</h1>
          <p className="text-gray-600 mt-1">{curriculum?.description}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-600 mb-1">Overall Progress</div>
        <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default CurriculumHeader;
