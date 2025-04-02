import { useState } from 'react';
import './App.css';
import logo from './img/Lab_05/Image 1858.png';  // Thêm đường dẫn logo
import bellIcon from './img/Lab_05/Bell 1.png';  
import questionIcon from './img/Lab_05/Question 1.png';  
import avatarIcon from './img/Lab_05/Avatar 313.png';
import createIcon from './img/Lab_05/create.png';
import userAvatar1 from './img/Lab_05/Avatar (1).png';  
import userAvatar2 from './img/Lab_05/Avatar (2).png';  
import userAvatar3 from './img/Lab_05/Avatar (3).png';  
import userAvatar4 from './img/Lab_05/Avatar (4).png'; 
import userAvatar5 from './img/Lab_05/Avatar (5).png';  
import userAvatar6 from './img/Lab_05/Avatar.png'; 

function App() {
  const [count, setCount] = useState(0);

  // Dữ liệu ngẫu nhiên cho bảng
  const data = [
    {
      customerName: "John Doe",
      company: "ABC Corp",
      orderValue: "$2000",
      orderDate: "2025-03-30",
      status: "Pending",
      avatar: userAvatar1
    },
    {
      customerName: "Jane Smith",
      company: "XYZ Inc.",
      orderValue: "$3500",
      orderDate: "2025-03-29",
      status: "Shipped",
      avatar: userAvatar2
    },
    {
      customerName: "Alice Johnson",
      company: "LMN Ltd.",
      orderValue: "$1500",
      orderDate: "2025-03-28",
      status: "Delivered",
      avatar: userAvatar3
    },
    {
      customerName: "Bob Brown",
      company: "OPQ Group",
      orderValue: "$4000",
      orderDate: "2025-03-27",
      status: "Shipped",
      avatar: userAvatar4
    },
    {
      customerName: "Charlie Black",
      company: "RST Corp",
      orderValue: "$5000",
      orderDate: "2025-03-26",
      status: "Pending",
      avatar: userAvatar5
    },
    {
      customerName: "David White",
      company: "UVW LLC",
      orderValue: "$1200",
      orderDate: "2025-03-25",
      status: "Delivered",
      avatar: userAvatar6
    }
  ];

  return (
    <> 
      <div className="container">
        
        {/* Menu */}
        <div className="menu">
          {/* Thêm logo vào menu */}
          <img src={logo} alt="Logo" className="menu-logo" />
          <a href="#">Link 1</a><br />
          <a href="#">Link 2</a><br />
          <a href="#">Link 3</a>
        </div>
        
        {/* Content */}
        <div className="content">
          {/* Part 1: Header */}
          <div className="header">
            <h2>Dashboard</h2>
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search-box" />
            </div>
          </div>

          {/* Part 2: Overview */}
          <div>
            <h3>Overview</h3>
          </div>

          {/* Part 3: Detailed Report with Table */}
          <div>
            <h3>Detailed Report</h3>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>CUSTOMER NAME</th>
                  <th>COMPANY</th>
                  <th>ORDER VALUE</th>
                  <th>ORDER DATE</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <div className="customer-name">
                        <img src={row.avatar} alt={row.customerName} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        {row.customerName}
                      </div>
                    </td>
                    <td>{row.company}</td>
                    <td>{row.orderValue}</td>
                    <td>{row.orderDate}</td>
                    <td>{row.status}</td>
                    <td>
                      <img src={createIcon} alt="Action" style={{ width: '20px', height: '20px' }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default App;
