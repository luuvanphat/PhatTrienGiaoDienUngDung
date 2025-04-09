import "./App.css";
import DataTable from "react-data-table-component";
import Sidebar from "./components/Sidebar";
import createIcon from "./img/Lab_05/create.png";
import userAvatar1 from "./img/Lab_05/Avatar (1).png";
import userAvatar2 from "./img/Lab_05/Avatar (2).png";
import userAvatar3 from "./img/Lab_05/Avatar (3).png";
import userAvatar4 from "./img/Lab_05/Avatar (4).png";
import userAvatar5 from "./img/Lab_05/Avatar (5).png";
import userAvatar6 from "./img/Lab_05/Avatar.png";
import searchIcon from "./img/Lab_05/Search.png";
import icon1 from "./img/Lab_05/Bell 1.png";
import icon2 from "./img/Lab_05/Question 1.png";
import icon3 from "./img/Lab_05/Avatar 313.png";
import overviewIcon from "./img/Lab_05/Squares four 1.png";
import reportIcon from "./img/Lab_05/File text 1.png";

function App() {
  const data = [
    {
      customerName: "John Doe",
      company: "ABC Corp",
      orderValue: "$2000",
      orderDate: "2025-03-30",
      status: "New",
      avatar: userAvatar1,
    },
    {
      customerName: "Jane Smith",
      company: "XYZ Inc.",
      orderValue: "$3500",
      orderDate: "2025-03-29",
      status: "In-progress",
      avatar: userAvatar2,
    },
    {
      customerName: "Alice Johnson",
      company: "LMN Ltd.",
      orderValue: "$1500",
      orderDate: "2025-03-28",
      status: "Completed",
      avatar: userAvatar3,
    },
    {
      customerName: "Bob Brown",
      company: "OPQ Group",
      orderValue: "$4000",
      orderDate: "2025-03-27",
      status: "In-progress",
      avatar: userAvatar4,
    },
    {
      customerName: "Charlie Black",
      company: "RST Corp",
      orderValue: "$5000",
      orderDate: "2025-03-26",
      status: "New",
      avatar: userAvatar5,
    },
    {
      customerName: "David White",
      company: "UVW LLC",
      orderValue: "$1200",
      orderDate: "2025-03-25",
      status: "Completed",
      avatar: userAvatar6,
    },
  ];

  const columns = [
    {
      name: "",
      cell: () => <input type="checkbox" />,
      width: "60px",
    },
    {
      name: "CUSTOMER NAME",
      selector: (row) => row.customerName,
      cell: (row) => (
        <div className="customer-name">
          <img src={row.avatar} alt={row.customerName} />
          {row.customerName}
        </div>
      ),
      sortable: true,
    },
    {
      name: "COMPANY",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "ORDER VALUE",
      selector: (row) => row.orderValue,
      sortable: true,
    },
    {
      name: "ORDER DATE",
      selector: (row) => row.orderDate,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      cell: (row) => {
        let className = "";
        if (row.status === "New") className = "status status-new";
        else if (row.status === "Completed")
          className = "status status-completed";
        else if (row.status === "In-progress")
          className = "status status-in-progress";

        return <span className={className}>{row.status}</span>;
      },
      sortable: true,
    },
    {
      name: "",
      cell: () => (
        <img
          src={createIcon}
          alt="Action"
          style={{ width: "20px", height: "20px" }}
        />
      ),
      width: "60px",
    },
  ];

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="menu">
        <Sidebar />
      </div>

      {/* Content */}
      <div className="content">
        <div className="header">
          <h2 className="title-header">Dashboard</h2>
          <div className="header-right">
            <div className="search-container">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="search-box"
              />
            </div>
            <div className="action-icons">
              <img src={icon1} alt="Icon1" />
              <img src={icon2} alt="Icon2" />
              <img src={icon3} alt="Icon3" />
            </div>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="section-header">
            <img
              src={overviewIcon}
              alt="Overview Icon"
              className="section-icon"
            />
            <h3>Overview</h3>
          </div>

          <div className="overview-cards">
            {/* Card 1 */}
            <div className="overview-card pink">
              <div className="card-header">
                <span>Turnover</span>
                <img src="src/img/Lab_05/Button 1509.png" alt="Turnover Icon" />
              </div>
              <h2>$92,405</h2>
              <p>
                <span className="up">▲ 5.39%</span> period of change
              </p>
            </div>

            {/* Card 2 */}
            <div className="overview-card blue">
              <div className="card-header">
                <span>Profit</span>
                <img src="src/img/Lab_05/Button 1529.png" alt="Profit Icon" />
              </div>
              <h2>$32,218</h2>
              <p>
                <span className="up">▲ 5.39%</span> period of change
              </p>
            </div>

            {/* Card 3 */}
            <div className="overview-card blue">
              <div className="card-header">
                <span>New customer</span>
                <img src="src/img/Lab_05/Button 1530.png" alt="Customer Icon" />
              </div>
              <h2>298</h2>
              <p>
                <span className="up">▲ 6.84%</span> period of change
              </p>
            </div>
          </div>
        </div>

        <div className="report-section">
          <div className="section-title">
            <img src={reportIcon} alt="Report Icon" className="section-icon" />
            <h3>Detailed Report</h3>
          </div>

          <div className="datatable-wrapper">
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
    </div>
  );
}

export default App;
