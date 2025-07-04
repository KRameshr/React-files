import React, { useEffect, useState } from "react";
import UseInterval from "../custrom_Hook/UseInterval";

const Unmount = () => {
  const [seconds, setseconds] = useState(0);
  useEffect(() => {
    const timerID = setInterval(() => setseconds((s) => s + 1), 1000);
    return () => clearInterval(timerID);
  }, []);
  // let seconds = UseInterval()
  return (
    <div>
      <p>seconds Elappesd : {seconds}</p>
    </div>
  );
};

export default Unmount;
