import Navbar from "../components/Navbar";
import "./css/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h2 className="dash-h2s">
          "Save money today to enjoy financial freedom tomorrow!"
        </h2>
        <div className="finance-summary">
          <p>
            <strong>Income:</strong>50,000
          </p>
          <p>
            <strong>Expenditure:</strong> ₹20,000
          </p>
          <p>
            <strong>Invested:</strong> ₹10,000
          </p>
          <p>
            <strong>Left Money:</strong> ₹20,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
