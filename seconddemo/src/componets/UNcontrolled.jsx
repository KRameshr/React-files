import React, { useRef } from "react";

const uncontrolled = () => {
  const fillref = useRef(null);
  const emailref = useRef(null);
  const mobliref = useRef(null);

  const handlersubmit = (e) => {
    e.preventDefault();
    let fillref = fillref.current.value;
    let emailref = emailref.current.value;
    let mobliref = mobliref.current.value;
    alert(fillref + ":" + emailref + ":" + mobliref);
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
            ref={fillref}
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
            ref={emailref}
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
            ref={mobliref}
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

export default uncontrolled;
