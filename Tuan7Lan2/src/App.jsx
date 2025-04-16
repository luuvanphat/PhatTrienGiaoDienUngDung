import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Layout/Sidebar';
import MainContent from './components/Shared/MainContent';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
}

export default App;