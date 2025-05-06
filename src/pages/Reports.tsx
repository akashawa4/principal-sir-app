import React, { useState } from 'react';
import { 
  ArrowRight, 
  BarChart3, 
  Clock, 
  Download, 
  Eye, 
  FileText, 
  Printer, 
  Share2 
} from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState('Computer Science Engineering');
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const programs = [
    'Computer Science Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering'
  ];

  const reportTypes = [
    {
      id: 'complete-sar',
      name: 'Complete SAR Report',
      description: 'Full Self Assessment Report as per NBA guidelines',
      lastGenerated: '2025-05-12',
      icon: FileText,
      sections: 9,
      pages: 120
    },
    {
      id: 'criteria-summary',
      name: 'Criteria-wise Summary',
      description: 'Summary of each criterion with compliance status',
      lastGenerated: '2025-05-15',
      icon: BarChart3,
      sections: 9,
      pages: 18
    },
    {
      id: 'faculty-report',
      name: 'Faculty Qualification Report',
      description: 'Detailed report on faculty qualifications and contributions',
      lastGenerated: '2025-05-10',
      icon: FileText,
      sections: 1,
      pages: 24
    },
    {
      id: 'outcome-assessment',
      name: 'Outcome Assessment Report',
      description: 'Analysis of Program Outcomes and Course Outcomes',
      lastGenerated: '2025-05-14',
      icon: BarChart3,
      sections: 2,
      pages: 32
    }
  ];

  const handleGenerateReport = (reportId: string) => {
    setSelectedReport(reportId);
    setIsGenerating(true);
    
    // Simulate report generation delay
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-500">Generate and view NBA accreditation reports</p>
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

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report) => (
          <div 
            key={report.id} 
            className={`bg-white rounded-lg shadow-sm overflow-hidden border ${
              selectedReport === report.id ? 'border-[#0d9488]' : 'border-gray-200'
            }`}
          >
            <div className="p-5">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <report.icon className="h-6 w-6 text-[#1e3a8a]" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{report.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{report.description}</p>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Last Generated</p>
                  <p className="font-medium text-gray-700">
                    {new Date(report.lastGenerated).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Report Size</p>
                  <p className="font-medium text-gray-700">
                    {report.sections} sections, {report.pages} pages
                  </p>
                </div>
              </div>
              
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleGenerateReport(report.id)}
                  disabled={isGenerating && selectedReport === report.id}
                  className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1e3a8a] hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3a8a] disabled:opacity-70"
                >
                  {isGenerating && selectedReport === report.id ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Report
                    </>
                  )}
                </button>
                
                <button className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d9488]">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </button>
              </div>
            </div>
            
            {selectedReport === report.id && !isGenerating && (
              <div className="bg-gray-50 px-5 py-3 flex flex-wrap gap-3 items-center justify-between border-t border-gray-200">
                <span className="text-sm text-green-600 font-medium flex items-center">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Report Generated Successfully
                </span>
                <div className="flex space-x-2">
                  <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                  <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <Printer className="w-4 h-4 mr-1" />
                    Print
                  </button>
                  <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* SAR Section Breakdown */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">SAR Report Sections</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Section-wise breakdown of the Self Assessment Report
          </p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-[#1e3a8a] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-medium mr-3">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      Criterion {i + 1}: {getNameByCriterion(i + 1)}
                    </h4>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {getSectionSummary(i + 1)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    getCompletionStatus(i + 1) === 'Complete' ? 'bg-green-100 text-green-800' : 
                    getCompletionStatus(i + 1) === 'Partial' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {getCompletionStatus(i + 1)}
                  </span>
                  <button className="ml-4 text-[#0d9488] hover:text-[#0f766e]">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper functions for SAR Report Sections
const getNameByCriterion = (criterionNumber: number): string => {
  const criteriaNames = [
    'Vision, Mission & PEOs',
    'Program Curriculum & Teaching Learning Processes',
    'Course Outcomes and Program Outcomes',
    'Students Performance',
    'Faculty Information and Contributions',
    'Facilities and Technical Support',
    'Continuous Improvement',
    'First Year Academics',
    'Student Support Systems'
  ];
  
  return criteriaNames[criterionNumber - 1];
};

const getSectionSummary = (criterionNumber: number): string => {
  const summaries = [
    'Vision, Mission statements and Program Educational Objectives',
    'Program curriculum, teaching methodologies and assessment practices',
    'Definition and mapping of COs, POs, PSOs and their attainment levels',
    'Student admission, success rate, academic performance and placements',
    'Faculty qualifications, retention, research and professional activities',
    'Classroom, laboratory, computing and library facilities',
    'Actions taken based on results of evaluation of POs and PSOs',
    'First year student performance and academic support',
    'Career guidance, training, counseling and student activities'
  ];
  
  return summaries[criterionNumber - 1];
};

const getCompletionStatus = (criterionNumber: number): string => {
  // Mock statuses - in a real app, this would come from actual data
  const statuses = [
    'Complete',    // Criterion 1
    'Complete',    // Criterion 2
    'Partial',     // Criterion 3
    'Complete',    // Criterion 4
    'Partial',     // Criterion 5
    'Incomplete',  // Criterion 6
    'Incomplete',  // Criterion 7
    'Complete',    // Criterion 8
    'Partial'      // Criterion 9
  ];
  
  return statuses[criterionNumber - 1];
};

export default Reports;