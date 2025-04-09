import './App.css';
import DataTable from 'react-data-table-component';
import logo from './img/Lab_05/Image 1858.png';
import createIcon from './img/Lab_05/create.png';
import userAvatar1 from './img/Lab_05/Avatar (1).png';
import userAvatar2 from './img/Lab_05/Avatar (2).png';
import userAvatar3 from './img/Lab_05/Avatar (3).png';
import userAvatar4 from './img/Lab_05/Avatar (4).png';
import userAvatar5 from './img/Lab_05/Avatar (5).png';
import userAvatar6 from './img/Lab_05/Avatar.png';

function App() {
  const data = [
    {
      customerName: "John Doe",
      company: "ABC Corp",
      orderValue: "$2000",
      orderDate: "2025-03-30",
      status: "New",
      avatar: userAvatar1
    },
    {
      customerName: "Jane Smith",
      company: "XYZ Inc.",
      orderValue: "$3500",
      orderDate: "2025-03-29",
      status: "In-progress",
      avatar: userAvatar2
    },
    {
      customerName: "Alice Johnson",
      company: "LMN Ltd.",
      orderValue: "$1500",
      orderDate: "2025-03-28",
      status: "Completed",
      avatar: userAvatar3
    },
    {
      customerName: "Bob Brown",
      company: "OPQ Group",
      orderValue: "$4000",
      orderDate: "2025-03-27",
      status: "In-progress",
      avatar: userAvatar4
    },
    {
      customerName: "Charlie Black",
      company: "RST Corp",
      orderValue: "$5000",
      orderDate: "2025-03-26",
      status: "New",
      avatar: userAvatar5
    },
    {
      customerName: "David White",
      company: "UVW LLC",
      orderValue: "$1200",
      orderDate: "2025-03-25",
      status: "Completed",
      avatar: userAvatar6
    }
  ];

  const columns = [
    {
      name: '',
      cell: () => <input type="checkbox" />,
      width: '60px'
    },
    {
      name: 'CUSTOMER NAME',
      selector: row => row.customerName,
      cell: row => (
        <div className="customer-name">
          <img src={row.avatar} alt={row.customerName} />
          {row.customerName}
        </div>
      ),
      sortable: true
    },
    {
      name: 'COMPANY',
      selector: row => row.company,
      sortable: true
    },
    {
      name: 'ORDER VALUE',
      selector: row => row.orderValue,
      sortable: true
    },
    {
      name: 'ORDER DATE',
      selector: row => row.orderDate,
      sortable: true
    },
    {
      name: 'STATUS',
      selector: row => row.status,
      cell: row => {
        let className = '';
        if (row.status === 'New') className = 'status status-new';
        else if (row.status === 'Completed') className = 'status status-completed';
        else if (row.status === 'In-progress') className = 'status status-in-progress';

        return <span className={className}>{row.status}</span>;
      },
      sortable: true
    },
    {
      name: '',
      cell: () => <img src={createIcon} alt="Action" style={{ width: '20px', height: '20px' }} />,
      width: '60px'
    }
  ];

  return (
    <div className="container">
      {/* Menu */}
      <div className="menu">
        <img src={logo} alt="Logo" className="menu-logo" />
        <a href="#">Link 1</a><br />
        <a href="#">Link 2</a><br />
        <a href="#">Link 3</a>
      </div>

      {/* Content */}
      <div className="content">
        {/* Header */}
        <div className="header">
          <h2>Dashboard</h2>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-box" />
          </div>
        </div>

        {/* Overview */}
        <div>
          <h3>Overview</h3>
        </div>

        {/* DataTable */}
        <div>
          <h3>Detailed Report</h3>
          <DataTable
            columns={columns}
            data={data}
            highlightOnHover
            pagination
            responsive
            className="rdtd-table"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
