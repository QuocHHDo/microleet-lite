import React from 'react';

interface ProgressTrackerProps {
  completed: number;
  total: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  completed,
  total,
}) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="mt-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700">Progress</span>
        <span className="text-sm font-medium text-blue-700">
          {completed}/{total} completed ({percentage.toFixed(0)}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;
