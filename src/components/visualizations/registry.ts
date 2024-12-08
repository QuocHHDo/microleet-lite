import React from 'react';

const visualizationComponents = {
  kClosest: React.lazy(() => import('./components/KClosestVisualization')),
  priorityQueue: React.lazy(() => import('./components/PriorityQueueVisualization'))

} as const;

export const getVisualizationComponent = (type: string) => {
  if (type in visualizationComponents) {
    return visualizationComponents[type as keyof typeof visualizationComponents];
  }
  console.warn(`Visualization type "${type}" not found in registry`);
  return undefined;
};