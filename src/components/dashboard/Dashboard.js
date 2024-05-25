import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {

  const dashboardData = useSelector(store => store.dashboard);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    console.log("useeefeect");
    if (dashboardData) {
      setDashboard(dashboardData);
      console.log("dashboardData - ", dashboardData);
    }
  });

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      {
        dashboard == null ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h4>benefitAmtTotal: {dashboard.benefitAmtTotal}</h4>
            <h4>citizensApprovedCount: {dashboard.citizensApprovedCount}</h4>
            <h4>citizensDeniedCount: {dashboard.citizensDeniedCount}</h4>
            <h4>plansCount: {dashboard.plansCount}</h4>
          </div>
        )
      }
    </div>
  );
};
export default Dashboard;