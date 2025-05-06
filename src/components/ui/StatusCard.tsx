import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({ title, value, icon: Icon, color }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'teal':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'amber':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'rose':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };
  
  const getIconColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500';
      case 'teal':
        return 'text-teal-500';
      case 'amber':
        return 'text-amber-500';
      case 'rose':
        return 'text-rose-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className={`flex items-center p-4 rounded-lg border ${getColorClasses(color)}`}>
      <div className={`flex-shrink-0 ${getIconColorClass(color)}`}>
        <Icon className="w-8 h-8" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};