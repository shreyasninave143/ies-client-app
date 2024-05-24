import { useRef } from "react";

const CreatePlan = () => {

  const planName = useRef(null);
  const planStartDate = useRef(null);
  const planEndDate = useRef(null);
  const category = useRef(null);

  const handleButtonClick = () => {
    createPlan();
  }

  function createPlan() {
    const data = fetch("http://localhost:8080/addPlan", {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        planName: planName.current.value,
        startDate: planStartDate.current.value,
        endDate: planEndDate.current.value,
        category: category.current.value
      })
    });
  }

  return (
    <div>

      <div className="create-plan-heading">
        <h1>Create Plan</h1>
      </div>

      <div className="input-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-element">
            <label>Plan Name:
              <input ref={planName} type="text" />
            </label>
          </div>
          <div className="form-element">
            <label>Category:</label>
            <select ref={category}>
              <option value="">-----</option>
              <option value="Medical">Medical</option>
              <option value="Employment">Employment</option>
              <option value="Food">Food</option>
            </select>
          </div>
          <div className="form-element">
            <label>Plan Start Date:
              <input ref={planStartDate} type="date" />
            </label>
          </div>
          <div className="form-element">
            <label>Plan End Date:
              <input ref={planEndDate} type="date" />
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

export default CreatePlan;