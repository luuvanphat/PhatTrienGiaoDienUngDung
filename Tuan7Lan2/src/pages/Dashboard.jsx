import React from "react";
import Overview from "../components/Overview/Overview";
import "./Dashboard.css";
import DataTable from "../components/DataTable/DataTable";
import { mockTableData } from "../components/DataTable/utils";
import AddUserModal from "../components/AddUserModal/AddUserModal";
import { useState } from "react";
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="dashboard-container">
      <div className="header">
        <h2 className="title-header">Dashboard</h2>
        <div className="header-right">
          <div className="search-container">
            <img
              src="/img/Lab_05/Search.png"
              alt="Search"
              className="search-icon"
            />
            <input type="text" placeholder="Search..." className="search-box" />
          </div>
          <div className="action-icons">
            <img src="/img/Lab_05/Bell 1.png" alt="Icon1" />
            <img src="/img/Lab_05/Question 1.png" alt="Icon2" />
            <img src="/img/Lab_05/Avatar 313.png" alt="Icon3" />
          </div>
        </div>
      </div>
      <div class="overview-title">
        <img src="/img/Lab_05/Squares four 1.png" alt="icon" />
        <span>Overview</span>
      </div>

      <Overview />
      <div className="datatable-title">
        <img src="/img/Lab_05/File text 1.png" alt="icon" />
        <span>DataTable</span>
        <div className="button-container">
          <button className="button" onClick={openModal}>
            <img
              src="/img/Lab_05/Download.png"
              alt="Icon 1"
              className="button-icon"
            />
            Add User
          </button>
          <button className="button">
            <img
              src="/img/Lab_05/Move up.png"
              alt="Icon 2"
              className="button-icon"
            />
            Export
          </button>
        </div>
      </div>

      <DataTable data={mockTableData} />
      <AddUserModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Dashboard;
