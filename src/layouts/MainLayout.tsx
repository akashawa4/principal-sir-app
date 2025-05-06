import React, { useState } from 'react';
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  FolderArchive, 
  FileText, 
  Users, 
  BarChartBig, 
  Menu, 
  X, 
  LogOut,
  GraduationCap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const MainLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Criteria Management', href: '/criteria', icon: ClipboardList },
    { name: 'Documents', href: '/documents', icon: FolderArchive },
    { name: 'Reports', href: '/reports', icon: FileText },
    { name: 'Faculty Management', href: '/faculty', icon: Users },
    { name: 'Outcome Assessment', href: '/outcomes', icon: BarChartBig },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#1e3a8a] text-white transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:w-64 flex-shrink-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and name */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-blue-800">
            <GraduationCap className="w-8 h-8 text-blue-200" />
            <span className="ml-2 text-xl font-semibold">NBA Accredit</span>
            
            {/* Close button (mobile only) */}
            <button 
              className="absolute right-4 top-4 lg:hidden" 
              onClick={toggleSidebar}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-800'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          {/* User info and logout */}
          <div className="p-4 border-t border-blue-800">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3">
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-blue-200">{user.role}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="flex items-center w-full px-4 py-2 text-sm text-blue-100 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 lg:px-6">
          {/* Mobile menu button */}
          <button 
            className="p-1 text-gray-500 rounded-md lg:hidden" 
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <h1 className="text-xl font-semibold text-gray-800 lg:ml-0">
            NBA Accreditation System
          </h1>
          
          <div className="text-sm text-gray-500">
            <span className="hidden md:inline">Last updated: </span>
            {new Date().toLocaleDateString()}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;