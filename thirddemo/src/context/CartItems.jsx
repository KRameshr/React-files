import React, { useState } from "react";
import CreateContext from "./CartContext";
const CartItems = ({ children }) => {
  const [cartData, setcartData] = useState(
    localStorage.getItem("myshop") != undefined
      ? JSON.parse(localStorage.getItem("myshop"))
      : []
  );
  const addIncart = (data) => {
    setcartData(data);
  };
  return (
    <CreateContext.Provider
      value={{ cartData: cartData, addIncart: addIncart }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default CartItems;
