import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { addBenefitAmtTotal, addCitizensApprovedCount, addCitizensDeniedCount, addPlansCount } from "../utils/dashboardSlice";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async () => {
    const data = await fetch("http://localhost:8081/login", {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      })
    });
    const loginResp = await data.json();
    console.log("json - ", loginResp);

    // set dashboard
    if(loginResp.acctiveSw === "Yes" && loginResp.dashboardResponse) {
      console.log("setting dashboard in store");
      // add dashboard data to store
      dispatch(addBenefitAmtTotal(loginResp.dashboardResponse.benefitAmtTotal));
      dispatch(addCitizensApprovedCount(loginResp.dashboardResponse.citizensApprovedCount));
      dispatch(addCitizensDeniedCount(loginResp.dashboardResponse.citizensDeniedCount));
      dispatch(addPlansCount(loginResp.dashboardResponse.plansCount));
    }

    if (loginResp.validLogin === true) {
      // add valid logged-in user to store
      dispatch(addUser({
        userId: loginResp.userId,
        acctiveSw: loginResp.acctiveSw,
        validLogin: loginResp.validLogin
      }));
    }

    // on successful login
    // if user is logged in 1st time then navigate to change password screen
    if (loginResp.acctiveSw === "No" && loginResp.validLogin === true) {
      console.log("adding to store - userId - " + loginResp.userId);
      navigate("/change-password");
    } else {
      
      navigate("/browse/dashboard");
    }
    // else navigate to dashboard


  }

  return (
    <div>
      <div>
        <h1>Login Component</h1>
      </div>
      <div className="input-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-element">
            <label>Email:
              <input ref={email} type="text" />
            </label>
          </div>
          <div className="form-element">
            <label>Password:
              <input ref={password} type="password" />
            </label>
          </div>
          <div>
            <button onClick={handleButtonClick}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;