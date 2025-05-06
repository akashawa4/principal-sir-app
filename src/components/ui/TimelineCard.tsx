import React from 'react';
import { Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

interface TimelineCardProps {
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'upcoming' | 'overdue';
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  date,
  description,
  status
}) => {
  const getStatusClasses = () => {
    switch (status) {
      case 'completed':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: <CheckCircle className="w-5 h-5 text-green-500" />,
          text: 'text-green-700'
        };
      case 'upcoming':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: <Clock className="w-5 h-5 text-blue-500" />,
          text: 'text-blue-700'
        };
      case 'overdue':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
          text: 'text-red-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: <Clock className="w-5 h-5 text-gray-500" />,
          text: 'text-gray-700'
        };
    }
  };
  
  const statusClasses = getStatusClasses();

  return (
    <div className={`p-4 rounded-lg border ${statusClasses.border} ${statusClasses.bg}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-900">{title}</h3>
        {statusClasses.icon}
      </div>
      
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar className="w-4 h-4 mr-1.5" />
        {date}
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      
      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses.text}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    </div>
  );
};