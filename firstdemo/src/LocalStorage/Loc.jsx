import React from "react";

const Loc = () => {
  const setData = () => {
    if (localStorage.getItem("Mydata") != undefined) {
      alert("data is allready present");
    } else {
      localStorage.setItem("Mydata", "Good Morning");
      alert("data is filled in localstorage");
    }
  };
  const getData = () => {
    if (localStorage.getItem("Mydata") != undefined) {
      alert(localStorage.getItem("Mydata"));
    } else {
      alert("NO found");
    }
  };
  const removeData = () => {
    if (localStorage.getItem("Mydata") != undefined) {
      alert(localStorage.removeItem("Mydata"));
      alert("rmocede");
    } else {
      alert("NO found");
    }
  };
  return (
    <div>
      <h1>LocalStorage</h1>
      <button onClick={setData}>setData</button>
      <button onClick={getData}>getData</button>
      <button onClick={removeData}>removeData</button>
    </div>
  );
};

export default Loc;
