import React, { useState } from 'react';
import { ArrowUpRight, BarChart3, Building, Calendar, FileText, Users } from 'lucide-react';
import { ProgressChart } from '../components/charts/ProgressChart';
import { StatusCard } from '../components/ui/StatusCard';
import { TimelineCard } from '../components/ui/TimelineCard';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const [program, setProgram] = useState('Computer Science Engineering');
  
  const overallProgress = 68;
  const criteriaProgress = [
    { name: 'Criterion 1: Vision, Mission & PEOs', progress: 90 },
    { name: 'Criterion 2: Program Curriculum & Teaching', progress: 75 },
    { name: 'Criterion 3: Course Outcomes', progress: 65 },
    { name: 'Criterion 4: Students Performance', progress: 80 },
    { name: 'Criterion 5: Faculty Information', progress: 60 },
    { name: 'Criterion 6: Facilities & Technical Support', progress: 55 },
    { name: 'Criterion 7: Continuous Improvement', progress: 40 },
    { name: 'Criterion 8: First Year Academics', progress: 80 },
    { name: 'Criterion 9: Student Support Systems', progress: 70 }
  ];

  const statusCards = [
    { title: 'Overall Completion', value: `${overallProgress}%`, icon: BarChart3, color: 'blue' },
    { title: 'Faculty Profiles', value: '32/40', icon: Users, color: 'teal' },
    { title: 'Documents Uploaded', value: '128', icon: FileText, color: 'amber' },
    { title: 'Days to Deadline', value: '45', icon: Calendar, color: 'rose' }
  ];

  const programs = [
    'Computer Science Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ];

  return (
    <div className="space-y-6">
      {/* Header with Program Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">NBA Accreditation Status Overview</p>
        </div>
        
        <div className="w-full sm:w-auto">
          <label htmlFor="program-select" className="block text-sm font-medium text-gray-700 mb-1">
            Select Program
          </label>
          <select
            id="program-select"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#0d9488] focus:border-[#0d9488] sm:text-sm rounded-md"
          >
            {programs.map((prog) => (
              <option key={prog} value={prog}>
                {prog}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statusCards.map((card, index) => (
          <StatusCard 
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Progress */}
        <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Criteria-wise Progress</h2>
            <button className="text-sm text-[#0d9488] hover:text-[#0f766e] flex items-center">
              View Details <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="space-y-4">
            {criteriaProgress.map((criterion, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 truncate">
                    {criterion.name}
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {criterion.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#1e3a8a] h-2 rounded-full transition-all duration-500 ease-in-out" 
                    style={{ width: `${criterion.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Accreditation Readiness</h2>
          <div className="flex justify-center">
            <div className="w-60 h-60">
              <ProgressChart value={overallProgress} />
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <Building className="w-5 h-5 text-[#1e3a8a] mr-2" />
                <span className="text-sm font-medium">{program}</span>
              </div>
              <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                overallProgress >= 75 ? 'bg-green-100 text-green-800' : 
                overallProgress >= 50 ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {overallProgress >= 75 ? 'Ready' : 
                 overallProgress >= 50 ? 'In Progress' : 'Needs Attention'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h2>
          <button className="text-sm text-[#0d9488] hover:text-[#0f766e] flex items-center">
            View All <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TimelineCard 
            title="Criteria 3 & 4 Data Submission"
            date="June 15, 2025"
            description="Complete the Course Outcomes and Student Performance sections"
            status="upcoming"
          />
          <TimelineCard 
            title="Faculty Data Verification"
            date="June 30, 2025"
            description="Verify all faculty information for accuracy and completeness"
            status="upcoming"
          />
          <TimelineCard 
            title="Final SAR Submission"
            date="July 31, 2025"
            description="Submit the complete Self Assessment Report to NBA"
            status="upcoming"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;