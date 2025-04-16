import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img
          src="/img/Lab_05/Image 1858.png"  
          alt="Company Logo"
          className="logo-img"
          onError={(e) => {
            e.target.style.display = 'none';
            console.error('Failed to load logo image');
          }}
        />
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="nav-item active">
            <img src="/img/Lab_05/Squares four 1.png" alt="Dashboard" className="nav-icon" />
            <span>Dashboard</span>
          </li>
          <li className="nav-item">
            <img src="/img/Lab_05/Folder.png" alt="Overview" className="nav-icon" />
            <span>Overview</span>
          </li>
          <li className="nav-item">
            <img src="/img/Lab_05/Groups.png" alt="Projects" className="nav-icon" />
            <span>Projects</span>
          </li>
          <li className="nav-item">
            <img src="/img/Lab_05/Pie chart.png" alt="Details" className="nav-icon" />
            <span>Details and report</span>
          </li>
          <li className="nav-item">
            <img src="/img/Lab_05/Chat.png" alt="Import" className="nav-icon" />
            <span>Import</span>
          </li>
          <li className="nav-item">
            <img src="/img/Lab_05/Code.png" alt="Export" className="nav-icon" />
            <span>Export</span>
          </li>
        </ul>
      </nav>
            <div className="sidebar-image">
              <img src="/img/Lab_05/Group.png" alt="Illustration" />
              <button className="try-now-button">Try now</button>
            </div>
    </aside>
  );
};

export default Sidebar;