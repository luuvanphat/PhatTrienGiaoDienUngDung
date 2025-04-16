// components/DataTable/DataTable.jsx
import React, { useState, useEffect } from "react";
import "./DataTable.css";
import { fetchData } from "../../api/data"; // Đường dẫn có thể tùy dự án

const DataTable = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchData();
      setData(apiData);
    };
    getData();
  }, []);

  const handleRowSelect = (index) => {
    const newSelectedRows = selectedRows.includes(index)
      ? selectedRows.filter((i) => i !== index)
      : [...selectedRows, index];
    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.length === data.length);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedRows(newSelectAll ? data.map((_, i) => i) : []);
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
            <tr key={index} className={selectedRows.includes(index) ? "selected-row" : ""}>
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
                  <img src="/img/Lab_05/Avatar (1).png" alt="Customer" className="row-icon" />
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
                  <span className={`status-badge ${row.status.toLowerCase()}`}>{row.status}</span>
                  <img src="/img/Lab_05/create.png" alt="status icon" className="status-icon" />
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
