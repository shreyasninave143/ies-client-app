import { useEffect, useState } from "react";

const ViewAccounts = () => {

  const [usersList, setUsersList] = useState([]);

  useEffect(function() {
    console.log("useEffect");
    fetchAllUsers();
  }, []);

  const fetchAllUsers = async() => {
    const data = await fetch("http://localhost:8080/allUsers");
    const json = await data.json();
    console.log("All Users - ",json);
    setUsersList(json);
  }

  return usersList.length === 0 ? (
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
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Gender</th>
              <th>SSN</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
      {
        usersList.map((user,index) => (
          
            <tr>
              <td>{index}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
              <td>{user.gender}</td>
              <td>{user.ssnNumber}</td>
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

export default ViewAccounts;