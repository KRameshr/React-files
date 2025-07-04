import React, { useEffect, useRef } from 'react'
// uncontrolled is noting but it look like html
const Uncontrolled = () => {

    const fullnameRef = useRef(null);
    const  EmailRef = useRef(null);
    const mobileRef = useRef(null)
    const handlesubmit = ( e) => {
        e.preventDefault();
        let fullname = fullnameRef.current.value;
        let email = EmailRef.current.value;
        let mobile = mobileRef.current.value;
        alert(fullname +"......"+ email +"..."+ mobile);
    }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
        <div className="form-group">
          <label>Full Name :</label> <br />
          <input type="text" className="form-control" name="fullName" ref={fullnameRef} />
        </div>
        <div className="form-group">
          <label>Email:</label> <br />
          <input type="text" className="form-control" name= 'email'   ref={EmailRef} />
        </div>
        <div className="form-group">
          <label>Mobile :</label> <br />
          <input type="text" className="form-control" name='mobile'  ref={mobileRef}/>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary mt-2"/>
      </form>
    </div>
  )
}

export default Uncontrolled