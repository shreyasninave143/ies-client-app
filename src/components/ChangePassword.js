import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBenefitAmtTotal, addCitizensApprovedCount, addCitizensDeniedCount, addPlansCount } from "../utils/dashboardSlice";

const ChangePassword = () => {

  const tempPassword = useRef(null);
  const newPassword = useRef(null);
  const confirmPassword = useRef(null);

  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = async() => {
    const data = fetch("http://localhost:8081/update-Password", {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user ? user.userId : null,
        tempPassword: tempPassword.current.value,
        newPassword: newPassword.current.value,
        confirmPassword: confirmPassword.current.value,
      })
    });
    const response = await data.json();
    console.log("json - ", response);
    // if password updated successfully then navigate to dashboard
    if(response.activeSw === "Yes" && response.dashboardResponse) {
      // add dashboard data to store
      dispatch(addBenefitAmtTotal(response.dashboardResponse.benefitAmtTotal));
      dispatch(addCitizensApprovedCount(response.dashboardResponse.citizensApprovedCount));
      dispatch(addCitizensDeniedCount(response.dashboardResponse.citizensDeniedCount));
      dispatch(addPlansCount(response.dashboardResponse.plansCount));
      navigate("/browse/dashboard")
    }
  }

  return (
    <div>
      <div>
        <h1>Change password</h1>
      </div>
      <div className="input-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-element">
            <label>Temp Password:
              <input ref={tempPassword} type="text" />
            </label>
          </div>
          <div className="form-element">
            <label>New Password:
              <input ref={newPassword} type="text" />
            </label>
          </div>
          <div className="form-element">
            <label>Confirm Password:
              <input ref={confirmPassword} type="text" />
            </label>
          </div>
          <div>
            <button onClick={handleButtonClick}>Change Password</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword;