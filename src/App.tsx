import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Dashboard from './pages/Dashboard';
import CriteriaManagement from './pages/CriteriaManagement';
import Documents from './pages/Documents';
import Reports from './pages/Reports';
import FacultyManagement from './pages/FacultyManagement';
import OutcomeAssessment from './pages/OutcomeAssessment';
import Login from './pages/Login';

// Providers
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="criteria" element={<CriteriaManagement />} />
            <Route path="documents" element={<Documents />} />
            <Route path="reports" element={<Reports />} />
            <Route path="faculty" element={<FacultyManagement />} />
            <Route path="outcomes" element={<OutcomeAssessment />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;