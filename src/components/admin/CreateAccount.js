import { useRef } from "react";

const CreateAccount = () => {


  // form references
  const fullname = useRef(null);
  const email = useRef(null);
  const mobileNumber = useRef(null);
  const gender = useRef(null);
  const ssnNumber = useRef(null);
  const dob = useRef(null);

  const handleButtonClick = () => {
    fetchData();
  }
  const fetchData = async () => {
    // API call to insert case worker
    const data = await fetch("http://localhost:8080/addUser", {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fullname.current.value,
        email: email.current.value,
        mobileNumber: mobileNumber.current.value,
        gender: gender.current.value,
        ssnNumber: ssnNumber.current.value,
        dob: dob.current.value
      })
    });
    // const json = await JSON.parse(mdata);
    console.log("json data - ", data);
  }

  return (
    <div>

      <div className="heading">
        <h1>Create Account for Case Worker</h1>
      </div>

      <div className="input-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-element">
            <label>Full Name:
              <input ref={fullname} type="text" />
            </label>
          </div>
          <div className="form-element">
            <label>Email Id:
              <input ref={email} type="text" />
            </label>
          </div>
          <div className="form-element">
            <label>Mobile Number:
              <input ref={mobileNumber} type="text" />
            </label>
          </div>
          <div className="form-element">
            <label>Gender:</label>
            <select ref={gender}>
              <option value="">-----</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-element">
            <label>Date of Birth:
              <input ref={dob} type="date" />
            </label>
          </div>
          <div className="form-element">
            <label>SSN Number:
              <input ref={ssnNumber} type="text" />
            </label>
          </div>
          <div>
            <button onClick={handleButtonClick}>Submit</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default CreateAccount;