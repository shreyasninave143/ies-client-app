import { useEffect, useState } from "react";

const ViewPlans = () => {

  const [plansList, setPlansList] = useState([]);

  useEffect(function() {
    fetchAllPlans();
  },[]);

  const fetchAllPlans = async() => {
    const data = await fetch("http://localhost:8080/allPlans");
    const json = await data.json();
    console.log("All Plans - ",json);
    setPlansList(json);
  }

  return plansList.length === 0 ? (
    <h3>Loading...</h3>
  ) : (
    <div>
    <div>
      <h1>View Accounts</h1>
    </div>
    <div className="view-accounts">
          <table>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Plan Name</th>
              <th>Plan Start Date</th>
              <th>Plan End date</th>
              <th>Plan category</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
      {
        plansList.map((plan,index) => (
          
            <tr>
              <td>{index}</td>
              <td>{plan.planName}</td>
              <td>{plan.startDate}</td>
              <td>{plan.endDate}</td>
              <td>{plan.category}</td>
              <td>Edit</td>
              <td>Activate/Deactivate</td>
            </tr>
        ))
      }
      </tbody>
      </table>
    </div>
    </div>
  );
};

export default ViewPlans;