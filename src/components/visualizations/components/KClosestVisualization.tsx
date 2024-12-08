import React, { useMemo } from 'react';

interface Point {
  x: number;
  y: number;
  distance: number;
}

interface KClosestVisualizationProps {
  points: Point[];         // All points in the dataset
  kClosest: Point[];       // The k points that are closest to origin
  width?: number;          // Optional width of the visualization
  height?: number;         // Optional height of the visualization
}

const KClosestVisualization: React.FC<KClosestVisualizationProps> = ({
  points,
  kClosest,
  width = 800,
  height = 400,
}) => {
  const colors = {
    origin: '#E64A19',      // Orange-red for the origin point
    point: '#1976D2',       // Blue for regular points
    selected: '#4CAF50',    // Green for selected (k-closest) points
    axis: '#333333',        // Dark gray for axes
    text: '#666666',        // Medium gray for text
    background: '#FFFFFF',  // White background
  };
  const origin = useMemo(() => {
    return {
      x: Math.min(width / 4, 300), // Limit center position for larger screens
      y: height / 2,               // Center vertically
    };
  }, [width, height]);

  const scale = useMemo(() => {
    // Find the maximum absolute coordinates to determine required scale
    const maxX = Math.max(...points.map(p => Math.abs(p.x))) || 5;
    const maxY = Math.max(...points.map(p => Math.abs(p.y))) || 5;
    
    // Calculate scale factors for both axes
    const scaleX = (width / 2 - origin.x - 50) / maxX;
    const scaleY = (height - 100) / (2 * maxY);
    
    // Use the smaller scale to maintain aspect ratio
    return Math.min(scaleX, scaleY, 40); // Cap at 40 pixels per unit
  }, [points, width, height, origin]);

  // Transform a data point to screen coordinates
  const transformPoint = (point: Point) => ({
    x: origin.x + point.x * scale,
    y: origin.y - point.y * scale, // Flip Y axis to match mathematical convention
  });

  // Format distance values for display
  const formatDistance = (distance: number) => distance.toFixed(1);

  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-8 p-4 bg-white rounded-lg shadow-md">
      {/* Coordinate System Visualization */}
      <div className="relative">
        <svg 
          width={width/2} 
          height={height} 
          className="border border-gray-200"
          role="img"
          aria-label="Coordinate system showing points and their distances from origin"
        >
          {/* Draw coordinate axes */}
          <g className="coordinate-system">
            {/* Y axis */}
            <line
              x1={origin.x}
              y1={50}
              x2={origin.x}
              y2={height - 50}
              stroke={colors.axis}
              strokeWidth="1"
            />
            {/* X axis */}
            <line
              x1={50}
              y1={origin.y}
              x2={width/2 - 50}
              y2={origin.y}
              stroke={colors.axis}
              strokeWidth="1"
            />
            {/* Axis labels */}
            <text
              x={origin.x + 10}
              y={60}
              fill={colors.text}
              fontSize="12"
              className="font-medium"
            >
              y
            </text>
            <text
              x={width/2 - 70}
              y={origin.y + 20}
              fill={colors.text}
              fontSize="12"
              className="font-medium"
            >
              x
            </text>
          </g>

          {/* Origin point */}
          <g className="origin-point">
            <circle
              cx={origin.x}
              cy={origin.y}
              r="5"
              fill={colors.origin}
            />
            <text
              x={origin.x + 8}
              y={origin.y + 15}
              fill={colors.text}
              fontSize="12"
            >
              Origin
            </text>
          </g>

          {/* Draw all points and their connections if selected */}
          <g className="points">
            {points.map((point, index) => {
              const transformed = transformPoint(point);
              const isSelected = kClosest.includes(point);

              return (
                <g key={`point-${index}`}>
                  {/* Draw distance line for selected points */}
                  {isSelected && (
                    <line
                      x1={origin.x}
                      y1={origin.y}
                      x2={transformed.x}
                      y2={transformed.y}
                      stroke={colors.selected}
                      strokeDasharray="4"
                      strokeWidth="1"
                    />
                  )}
                  {/* Draw the point */}
                  <circle
                    cx={transformed.x}
                    cy={transformed.y}
                    r="3"
                    fill={isSelected ? colors.selected : colors.point}
                  />
                  {/* Show distance for selected points */}
                  {isSelected && (
                    <text
                      x={transformed.x + 5}
                      y={transformed.y - 5}
                      fill={colors.text}
                      fontSize="10"
                    >
                      d = {formatDistance(point.distance)}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Max Heap Visualization */}
      <div className="relative">
        <svg 
          width={width/2} 
          height={height/2}
          role="img"
          aria-label="Max heap showing k-closest points ordered by distance"
        >
          <text
            x="0"
            y="20"
            fontSize="14"
            fill={colors.text}
            className="font-semibold"
          >
            Max Heap of K Closest
          </text>

          {/* Render heap nodes */}
          {kClosest.slice(0, 3).map((point, index) => {
            // Calculate positions for heap visualization
            const level = index === 0 ? 0 : 1;
            const position = index === 0 ? 0 : index - 1;
            const x = width/4 + (position - 0.5) * 80;
            const y = 40 + level * 50;

            return (
              <g key={`heap-node-${index}`}>
                {/* Draw connections between parent and children */}
                {index > 0 && (
                  <line
                    x1={width/4}
                    y1={50}
                    x2={x}
                    y2={y - 10}
                    stroke={colors.axis}
                    strokeWidth="1"
                  />
                )}
                {/* Draw heap node */}
                <circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill={colors.point}
                />
                {/* Show distance in node */}
                <text
                  x={x - 10}
                  y={y + 5}
                  fill="white"
                  fontSize="10"
                  className="font-medium"
                >
                  {formatDistance(point.distance)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default React.memo(KClosestVisualization);