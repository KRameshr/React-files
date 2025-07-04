import React, { useState } from "react";
// controlled components
// componets that contains data which is maneged and controlled by its inter state is a controlled component

const Home = () => {
  const [state, setState] = useState({ fullname: "", email: "", mobile: "" });
  const [error, setError] = useState(null);
  const handler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  function getvalidationErrors() {
    let validationErrors = [];
    let fregex = /^[a-zA-Z]+$/;
    let mregex = /^[0-9]{1}[0-9]{10}$/;

    if (state.fullname.trim() === "")
      validationErrors.push("fullName cannot be blank");

    if (!fregex.test(state.fullname))
      validationErrors.push("Only alphabet are allowed");

    if (state.email.trim() === "") {
      validationErrors.push("email cannot be blank");
    }
    if (state.mobile.trim() === "") {
      validationErrors.push("mobile cannot be blank");
    }
    if (!mregex.test(state.mobile))
      validationErrors.push("10 dgitNumber is allowed");

    return validationErrors;
  }
  const handlersubmit = (e) => {
    e.preventDefault();
    const validationErrors = getvalidationErrors();
    if (validationErrors.length > 0) {
      setError(validationErrors);
      return;
    }
    setError(null);
    console.log(state);
  };
  return (
    <div className="d-grid gap-2 d-md-block">
      <h2>form validation</h2>
      <ul>
        {error ? error.map((val, ind) => <li key={ind}>{val}</li>) : null}
      </ul>
      <form action="#" onSubmit={handlersubmit}>
        <div classNameName="form-group">
          <label for="validationCustom03" className="form-label">
            Full Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            name="fullname"
            onChange={handler}
          />
        </div>
        <div classNameName="form-group">
          <label for="validationCustom03" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="validationCustom03"
            name="email"
            onChange={handler}
          />
        </div>
        <div classNameName="form-group p-3">
          <label for="validationCustom03" className="form-label">
            mobile :
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom03"
            name="mobile"
            onChange={handler}
          />
          <div>
            <input
              type="submit"
              className="btn btn-primary "
              id="validationCustom03"
              value="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
