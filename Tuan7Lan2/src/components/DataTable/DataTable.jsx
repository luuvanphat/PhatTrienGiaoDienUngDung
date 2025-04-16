import React, { useState, useEffect } from "react";
import "./DataTable.css";
import { fetchData } from "../../api/data";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Số item mỗi trang

  useEffect(() => {
    const getData = async () => {
      const apiData = await fetchData();
      setData(apiData);
    };
    getData();
  }, []);

  // Tính toán dữ liệu phân trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Hàm xử lý chuyển trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleRowSelect = (index) => {
    const absoluteIndex = indexOfFirstItem + index;
    const newSelectedRows = selectedRows.includes(absoluteIndex)
      ? selectedRows.filter((i) => i !== absoluteIndex)
      : [...selectedRows, absoluteIndex];
    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.length === currentItems.length);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedRows(
      newSelectAll 
        ? currentItems.map((_, index) => indexOfFirstItem + index)
        : []
    );
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

      {/* Phần Pagination */}
      <div className="pagination-container">
        <div className="pagination-info">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, data.length)} of {data.length} entries
        </div>
        <div className="pagination-controls">
          <button 
            onClick={() => paginate(1)} 
            disabled={currentPage === 1}
            className="pagination-button"
          >
            First
          </button>
          <button 
            onClick={goToPrevPage} 
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          
          {/* Hiển thị số trang */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`pagination-button ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          ))}
          
          <button 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
          <button 
            onClick={() => paginate(totalPages)} 
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;