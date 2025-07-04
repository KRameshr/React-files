import React from "react";

const ProductList = ({ product, addcart }) => {
  return (
    <div className="card-sm-3 card" style={{ width: "20rem" }}>
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt="..."
        width={200}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text"> PRice $ {product.price}</p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => addcart(product.id)}
        >
          Add card
        </a>
      </div>
    </div>
  );
};

export default ProductList;
