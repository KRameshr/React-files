import React, { useMemo, useState } from "react";

const Mymeno = () => {
  const [counter, setcounter] = useState(0);
  const Increment = () => {
    setcounter((s) => s + 1);
  };

  const [number, setnumber] = useState(0);
  const sqNum = useMemo(() => {
    return squareNumber(number);
  }, [number]);
  return (
    <div>
      <h5>the meno hook are used </h5>
      Number : <input
        onChange={(event) => setnumber(event.target.value)}
      />{" "}
      <br />
      the Number is {number} square {sqNum} <br />
      <button onClick={Increment}>++</button>
      <br />
      The number is {counter}
    </div>
  );
};
function squareNumber(number) {
  return Math.pow(number, 2);
  console.log(number);
}
export default Mymeno;
