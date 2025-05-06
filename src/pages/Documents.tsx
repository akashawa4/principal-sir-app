import React, { useState } from 'react';
import { 
  ArrowUpDown,
  Clock,
  Download,
  File,
  FileCheck,
  FilePlus,
  FileText,
  Filter,
  FolderOpen,
  Search,
  Upload
} from 'lucide-react';

const documentsData = [
  {
    id: 1,
    name: 'Vision_Mission_Statement.pdf',
    category: 'Criterion 1',
    type: 'PDF',
    status: 'verified',
    uploadedBy: 'Dr. Sharma',
    uploadDate: '2025-05-01',
    size: '1.2 MB'
  },
  {
    id: 2,
    name: 'Program_Educational_Objectives.docx',
    category: 'Criterion 1',
    type: 'DOCX',
    status: 'pending',
    uploadedBy: 'Prof. Gupta',
    uploadDate: '2025-05-12',
    size: '845 KB'
  },
  {
    id: 3,
    name: 'Course_Curriculum_CSE_2025.pdf',
    category: 'Criterion 2',
    type: 'PDF',
    status: 'verified',
    uploadedBy: 'Dr. Sharma',
    uploadDate: '2025-05-08',
    size: '3.4 MB'
  },
  {
    id: 4,
    name: 'Teaching_Methodologies.pptx',
    category: 'Criterion 2',
    type: 'PPTX',
    status: 'verified',
    uploadedBy: 'Dr. Patel',
    uploadDate: '2025-05-10',
    size: '5.7 MB'
  },
  {
    id: 5,
    name: 'Course_Outcomes_Analysis.xlsx',
    category: 'Criterion 3',
    type: 'XLSX',
    status: 'pending',
    uploadedBy: 'Prof. Singh',
    uploadDate: '2025-05-14',
    size: '1.8 MB'
  },
  {
    id: 6,
    name: 'Student_Performance_Data.xlsx',
    category: 'Criterion 4',
    type: 'XLSX',
    status: 'pending',
    uploadedBy: 'Dr. Kumar',
    uploadDate: '2025-05-11',
    size: '2.3 MB'
  },
  {
    id: 7,
    name: 'Faculty_Qualification_Details.pdf',
    category: 'Criterion 5',
    type: 'PDF',
    status: 'verified',
    uploadedBy: 'Prof. Gupta',
    uploadDate: '2025-05-09',
    size: '4.1 MB'
  },
  {
    id: 8,
    name: 'Laboratory_Facilities.pdf',
    category: 'Criterion 6',
    type: 'PDF',
    status: 'verified',
    uploadedBy: 'Dr. Sharma',
    uploadDate: '2025-05-07',
    size: '6.2 MB'
  }
];

const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isUploading, setIsUploading] = useState(false);

  const categories = [
    'all',
    'Criterion 1',
    'Criterion 2',
    'Criterion 3',
    'Criterion 4',
    'Criterion 5',
    'Criterion 6',
    'Criterion 7',
    'Criterion 8',
    'Criterion 9'
  ];

  const filteredDocuments = documentsData.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || doc.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || doc.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'docx':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'xlsx':
        return <FileText className="w-5 h-5 text-green-500" />;
      case 'pptx':
        return <FileText className="w-5 h-5 text-orange-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  const handleUploadClick = () => {
    setIsUploading(true);
    // In a real app, this would trigger a file upload dialog
    setTimeout(() => {
      setIsUploading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-500">Manage all documents related to NBA accreditation</p>
        </div>
        
        <button
          onClick={handleUploadClick}
          disabled={isUploading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#1e3a8a] hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3a8a] disabled:opacity-70 transition-all duration-200"
        >
          {isUploading ? (
            <>
              <Clock className="w-4 h-4 mr-2 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </>
          )}
        </button>
      </div>

      {/* Filters and Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#0d9488] focus:border-[#0d9488] sm:text-sm"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#0d9488] focus:border-[#0d9488] sm:text-sm rounded-md"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <FileCheck className="h-5 w-5 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-[#0d9488] focus:border-[#0d9488] sm:text-sm rounded-md"
          >
            <option value="all">All Statuses</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-5 sm:px-6 border-b border-gray-200">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Document Repository</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {filteredDocuments.length} documents found
            </p>
          </div>
          
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d9488]">
              <FolderOpen className="w-4 h-4 mr-2" />
              Folders
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-[#0d9488] text-sm font-medium rounded-md text-[#0d9488] bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d9488]">
              <FilePlus className="w-4 h-4 mr-2" />
              New Folder
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    Document Name
                    <ArrowUpDown className="w-4 h-4 ml-1" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uploaded By
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Uploaded
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDocuments.map((document) => (
                <tr key={document.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getFileIcon(document.type)}
                      <span className="ml-2 text-sm font-medium text-gray-900">
                        {document.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{document.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      document.status === 'verified' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{document.uploadedBy}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(document.uploadDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{document.size}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-[#0d9488] hover:text-[#0f766e]">
                      <Download className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No documents found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents;