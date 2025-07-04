import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Nav = () => {
  const { count } = useSelector((state) => state.counter);
  const { cart } = useSelector((state) => state.product);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Cart {cart.length > 0 && <span> ({cart.length})</span>}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter">
                Count {count > 0 && <span> ({count}) </span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
