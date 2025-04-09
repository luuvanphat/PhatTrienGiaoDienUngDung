// src/components/Sidebar.jsx
import React from "react";
import "../App.css";
import logo from "../img/Lab_05/Image 1858.png"; // ✅ Thêm logo
import dashboardIcon from "../img/Lab_05/Squares four 1.png";
import projectsIcon from "../img/Lab_05/Folder.png";
import teamsIcon from "../img/Lab_05/Groups.png";
import analyticsIcon from "../img/Lab_05/Pie chart.png";
import messagesIcon from "../img/Lab_05/Chat.png";
import integrationsIcon from "../img/Lab_05/Code.png";
import bottomImage from "../img/Lab_05/Group.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* ✅ Logo nằm trên cùng */}
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" className="menu-logo" />
      </div>

      <ul className="sidebar-menu">
        <li className="active">
          <img src={dashboardIcon} alt="Dashboard" />
          <span>Dashboard</span>
        </li>
        <li>
          <img src={projectsIcon} alt="Projects" />
          <span>Projects</span>
        </li>
        <li>
          <img src={teamsIcon} alt="Teams" />
          <span>Teams</span>
        </li>
        <li>
          <img src={analyticsIcon} alt="Analytics" />
          <span>Analytics</span>
        </li>
        <li>
          <img src={messagesIcon} alt="Messages" />
          <span>Messages</span>
        </li>
        <li>
          <img src={integrationsIcon} alt="Integrations" />
          <span>Integrations</span>
        </li>
      </ul>

      <div className="sidebar-image">
  <img src={bottomImage} alt="Illustration" />
  <button className="try-now-button">Try now</button>
</div>

    </div>
  );
};

export default Sidebar;
