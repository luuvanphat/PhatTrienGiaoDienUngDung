import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { to: "/dashboard", icon: "/img/Lab_05/Squares four 1.png", label: "Dashboard" },
    { to: "/overview", icon: "/img/Lab_05/Folder.png", label: "Overview" },
    { to: "/projects", icon: "/img/Lab_05/Groups.png", label: "Projects" },
    { to: "/report", icon: "/img/Lab_05/Pie chart.png", label: "Details and report" },
    { to: "/import", icon: "/img/Lab_05/Chat.png", label: "Import" },
    { to: "/export", icon: "/img/Lab_05/Code.png", label: "Export" },
  ];

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
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                <img src={item.icon} alt={item.label} className="nav-icon" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
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
