// components/DataTable/DataTable.jsx
import React, { useState } from "react";
import "./DataTable.css";

const DataTable = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleRowSelect = (id) => {
    const newSelectedRows = selectedRows.includes(id)
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];
    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.length === data.length);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedRows(newSelectAll ? data.map((_, index) => index) : []);
  };

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr className="table-header">
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="select-checkbox"
              />
            </th>
            <th>CUSTOMER NAME</th>
            <th>COMPANY</th>
            <th>ORDER VALUE</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={selectedRows.includes(index) ? "selected-row" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleRowSelect(index)}
                  className="select-checkbox"
                />
              </td>
              <td>
                <div className="cell-with-icon">
                  <img
                    src="/img/Lab_05//Avatar (1).png"
                    alt="Customer"
                    className="row-icon"
                  />
                  {row.customerName}
                </div>
              </td>
              <td>
                <div className="cell-with-icon">{row.company}</div>
              </td>
              <td>
                <div className="cell-with-icon">${row.orderValue}</div>
              </td>
              <td>
                <div className="cell-with-icon">{row.orderDate}</div>
              </td>
              <td>
                <div className="status-with-icon">
                  <span className={`status-badge ${row.status.toLowerCase()}`}>
                    {row.status}
                    
                  </span>
                  <img
                      src="/img/Lab_05/create.png"
                      alt="status icon"
                      className="status-icon right"
                    />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
