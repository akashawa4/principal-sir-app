import React, { useState } from 'react';
import { 
  ArrowUpDown,
  CheckCircle,
  Clock,
  FileCheck,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  XCircle 
} from 'lucide-react';

const criteriaList = [
  {
    id: 1,
    name: 'Criterion 1: Vision, Mission & PEOs',
    description: 'Vision, Mission, Program Educational Objectives',
    status: 'completed',
    progress: 100,
    lastUpdated: '2025-05-10'
  },
  {
    id: 2,
    name: 'Criterion 2: Program Curriculum & Teaching',
    description: 'Program Curriculum and Teaching Learning Processes',
    status: 'in-progress',
    progress: 75,
    lastUpdated: '2025-05-12'
  },
  {
    id: 3,
    name: 'Criterion 3: Course Outcomes',
    description: 'Course Outcomes and Program Outcomes',
    status: 'in-progress',
    progress: 65,
    lastUpdated: '2025-05-15'
  },
  {
    id: 4,
    name: 'Criterion 4: Students Performance',
    description: 'Students Performance in the Program',
    status: 'in-progress',
    progress: 80,
    lastUpdated: '2025-05-14'
  },
  {
    id: 5,
    name: 'Criterion 5: Faculty Information',
    description: 'Faculty Information and Contributions',
    status: 'in-progress',
    progress: 60,
    lastUpdated: '2025-05-16'
  },
  {
    id: 6,
    name: 'Criterion 6: Facilities & Technical Support',
    description: 'Facilities and Technical Support',
    status: 'not-started',
    progress: 15,
    lastUpdated: '2025-05-18'
  },
  {
    id: 7,
    name: 'Criterion 7: Continuous Improvement',
    description: 'Continuous Improvement',
    status: 'not-started',
    progress: 10,
    lastUpdated: '2025-05-17'
  },
  {
    id: 8,
    name: 'Criterion 8: First Year Academics',
    description: 'First Year Academics',
    status: 'in-progress',
    progress: 80,
    lastUpdated: '2025-05-13'
  },
  {
    id: 9,
    name: 'Criterion 9: Student Support Systems',
    description: 'Student Support Systems',
    status: 'in-progress',
    progress: 70,
    lastUpdated: '2025-05-11'
  }
];

const CriteriaManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('Computer Science Engineering');
  const [statusFilter, setStatusFilter] = useState('all');

  const programs = [
    'Computer Science Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ];

  const filteredCriteria = criteriaList.filter(criterion => {
    const matchesSearch = criterion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        criterion.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || 
                        (statusFilter === 'completed' && criterion.status === 'completed') ||
                        (statusFilter === 'in-progress' && criterion.status === 'in-progress') ||
                        (statusFilter === 'not-started' && criterion.status === 'not-started');
    
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-amber-500" />;
      case 'not-started':
        return <XCircle className="w-5 h-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Criteria Management</h1>
          <p className="text-gray-500">Manage and track all NBA accreditation criteria</p>
        </div>
        
        <div className="w-full sm:w-auto">
          <label htmlFor="program-select" className="block text-sm font-medium text-gray-700 mb-1">
            Program
          </label>
          <select
            id="program-select"
            value={selectedProgram}
            onChange={(e) => setSelectedProgram(e.target.value)}
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

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search criteria..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#0d9488] focus:border-[#0d9488] sm:text-sm"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 items-center">
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-700 mr-2">Status:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setStatusFilter('all')}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                statusFilter === 'all'
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                statusFilter === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
              Completed
            </button>
            <button
              onClick={() => setStatusFilter('in-progress')}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                statusFilter === 'in-progress'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              In Progress
            </button>
            <button
              onClick={() => setStatusFilter('not-started')}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                statusFilter === 'not-started'
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 mr-1.5" />
              Not Started
            </button>
          </div>
        </div>
      </div>

      {/* Criteria List */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">All Criteria</h2>
          <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1e3a8a] hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3a8a]">
            <Plus className="w-4 h-4 mr-1.5" />
            Add New
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Criteria
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCriteria.map((criterion) => (
                <tr key={criterion.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{criterion.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{criterion.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(criterion.status)}
                      <span className="ml-2 text-sm text-gray-700">{getStatusText(criterion.status)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[150px]">
                      <div 
                        className={`h-2.5 rounded-full ${
                          criterion.status === 'completed' ? 'bg-green-500' : 
                          criterion.status === 'in-progress' ? 'bg-amber-500' : 
                          'bg-gray-400'
                        }`} 
                        style={{ width: `${criterion.progress}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{criterion.progress}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(criterion.lastUpdated).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-[#0d9488] hover:text-[#0f766e] mr-3">
                      <FileCheck className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredCriteria.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No criteria found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CriteriaManagement;