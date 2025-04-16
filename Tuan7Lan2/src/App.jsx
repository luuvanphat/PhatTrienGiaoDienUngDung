import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import MainContent from './components/Shared/MainContent';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import Report from './pages/Report';
import ImportPage from './pages/ImportPage';
import ExportPage from './pages/ExportPage';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex' }}>
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/report" element={<Report />} />
            <Route path="/import" element={<ImportPage />} />
            <Route path="/export" element={<ExportPage />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
}

export default App;
