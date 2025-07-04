import React, { useEffect, useState } from "react";

const UseInterval = () => {
  const [seconds, setseconds] = useState(9);
  useEffect(() => {
    const timerID = setInterval(() => setseconds((s) => s + 1), 1000);
    return () => clearInterval(timerID);
  }, []);
  return seconds;
};

export default UseInterval;
