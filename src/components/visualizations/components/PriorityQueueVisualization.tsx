import React from 'react';

const PriorityQueueVisualization: React.FC = () => {
  const colors = {
    taskBackground: '#E3F2FD',    // Light blue for task backgrounds
    taskBorder: '#1976D2',        // Darker blue for borders
    heapNode: '#2196F3',          // Blue for heap nodes
    timelineNode: '#4CAF50',      // Green for timeline events
    textDark: '#333333',          // Dark gray for primary text
    textLight: '#FFFFFF',         // White for contrast text
  };

  return (
    <div className="visualization-container bg-white p-6 rounded-lg shadow-md">
      <svg viewBox="0 0 800 300" className="w-full">
        {/* Task Queue Section */}
        <g transform="translate(50,20)">
          <text x="0" y="0" fontSize="14" fontWeight="500" fill={colors.textDark}>
            Incoming Tasks
          </text>
          
          {/* Task Cards with Better Visual Design */}
          {[
            { name: 'Debug', priority: 'High', y: 20 },
            { name: 'Deploy', priority: 'Medium', y: 70 },
            { name: 'Test', priority: 'Low', y: 120 }
          ].map((task, index) => (
            <g key={index} transform={`translate(0,${task.y})`}>
              <rect
                width="140"
                height="45"
                fill={colors.taskBackground}
                stroke={colors.taskBorder}
                strokeWidth="1"
                rx="4"  // Rounded corners
              />
              <text x="10" y="20" fontSize="12" fill={colors.textDark} fontWeight="500">
                {`Task: ${task.name}`}
              </text>
              <text x="10" y="35" fontSize="12" fill={colors.textDark}>
                {`Priority: ${task.priority}`}
              </text>
            </g>
          ))}
        </g>

        {/* Priority Queue (Max Heap) */}
        <g transform="translate(300,20)">
          <text x="70" y="0" fontSize="14" fontWeight="500" fill={colors.textDark}>
            Priority Queue (Max Heap)
          </text>
          
          {/* Root Node */}
          <g transform="translate(100,40)">
            <circle r="25" fill={colors.heapNode}>
              <title>Highest Priority Task</title>
            </circle>
            <text x="-15" y="0" fontSize="12" fill={colors.textLight} fontWeight="500">Debug</text>
            <text x="-15" y="15" fontSize="10" fill={colors.textLight}>High</text>
          </g>

          {/* Left Child */}
          <g transform="translate(60,110)">
            <circle r="25" fill={colors.heapNode}>
              <title>Medium Priority Task</title>
            </circle>
            <text x="-15" y="0" fontSize="12" fill={colors.textLight} fontWeight="500">Deploy</text>
            <text x="-20" y="15" fontSize="10" fill={colors.textLight}>Medium</text>
          </g>

          {/* Right Child */}
          <g transform="translate(140,110)">
            <circle r="25" fill={colors.heapNode}>
              <title>Low Priority Task</title>
            </circle>
            <text x="-10" y="0" fontSize="12" fill={colors.textLight} fontWeight="500">Test</text>
            <text x="-10" y="15" fontSize="10" fill={colors.textLight}>Low</text>
          </g>

          {/* Connecting Lines with Directional Indicators */}
          <path
            d="M100,65 L60,85"
            stroke={colors.taskBorder}
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <path
            d="M100,65 L140,85"
            stroke={colors.taskBorder}
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        </g>

        {/* Execution Timeline */}
        <g transform="translate(550,20)">
          <text x="0" y="0" fontSize="14" fontWeight="500" fill={colors.textDark}>
            Execution Timeline
          </text>
          
          {/* Timeline Base */}
          <line
            x1="0"
            y1="50"
            x2="200"
            y2="50"
            stroke="#666"
            strokeWidth="2"
            strokeDasharray="4"
          />

          {/* Timeline Events */}
          {[
            { task: 'Debug', x: 20 },
            { task: 'Deploy', x: 80 },
            { task: 'Test', x: 140 }
          ].map((event, index) => (
            <g key={index} transform={`translate(${event.x},50)`}>
              <circle r="6" fill={colors.timelineNode}>
                <title>{`Executing: ${event.task}`}</title>
              </circle>
              <text
                x="-15"
                y="20"
                fontSize="11"
                fill={colors.textDark}
                fontWeight="500"
              >
                {event.task}
              </text>
            </g>
          ))}
        </g>

        {/* Arrow Marker Definition */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill={colors.taskBorder}
            />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default PriorityQueueVisualization;