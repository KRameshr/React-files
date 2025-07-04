import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const ProductInfo = () => {
  const [ProductData, setProductData] = useState([]);
  useEffect(() => {
    const api = "https://dummyjson.com/products";
    axios
      .get(api)
      .then((res) => {
        console.log(res.data.products);
        setProductData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  const addcart = (id) => {
    if (localStorage.getItem("mylist") != undefined) {
      let arrlistDate = JSON.parse(localStorage.getItem("mylist"));
      if (arrlistDate.includes(id)) {
        alert("Data is Allready is Present");
      } else {
        arrlistDate.push(id);
        localStorage.setItem("mylist", JSON.stringify(arrlistDate));
        alert("Product add to cart!");
        window.location.reload();
      }
    } else {
      let arrlistDate = [];
      arrlistDate.push(id);
      localStorage.setItem("mylist", JSON.stringify(arrlistDate));
      alert("Product add to cart!");
      window.location.reload();
    }
  };
  return (
    <div>
      <h2>product list</h2>
      <div className="row">
        {ProductData.map((pro) => (
          <ProductList key={pro.id} product={pro} addcart={addcart} />
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
