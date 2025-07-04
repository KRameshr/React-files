import React from "react";

const PeoductList = ({ props }) => {
  return (
    <div className="col-sm-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.thumbnail}
          className="card-img-top"
          alt="..."
          style={{ width: "18rem", height: "12rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h3 className="card-title">$ {props.price}</h3>
          <p className="card-text">{props.description}</p>
          <h5 className="card-text">stock {props.stock}</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default PeoductList;
