import React, { useEffect, useState } from "react";
import axios from "axios";

const Usefectchdata = (url) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  return data;
};
export default Usefectchdata;
