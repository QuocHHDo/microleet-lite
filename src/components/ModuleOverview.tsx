import React from 'react';

export interface ModuleOverviewProps {
  title: string;
  description: string;
  className?: string;
}

const ModuleOverview: React.FC<ModuleOverviewProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ModuleOverview;
