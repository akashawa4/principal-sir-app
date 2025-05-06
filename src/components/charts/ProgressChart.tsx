import React from 'react';

interface ProgressChartProps {
  value: number;
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ value }) => {
  // Calculate the circumference of the circle
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the dash offset based on the progress value
  const dashOffset = circumference - (value / 100) * circumference;
  
  // Determine color based on value
  const getColor = () => {
    if (value >= 75) return '#10b981'; // Green for good progress
    if (value >= 50) return '#f59e0b'; // Amber for medium progress
    return '#ef4444'; // Red for low progress
  };
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          className="stroke-current text-gray-200"
          strokeWidth="15"
          fill="none"
        />
        
        {/* Progress circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          className="stroke-current"
          strokeWidth="15"
          style={{ 
            stroke: getColor(),
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 1s ease-in-out'
          }}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {/* Percentage text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold" style={{ color: getColor() }}>
          {value}%
        </span>
        <span className="text-sm text-gray-500 mt-1">Completion</span>
      </div>
    </div>
  );
};