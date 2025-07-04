import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateContext from "../context/CartContext";
import "./index.css";
const Navbar = () => {
  const { cartData } = useContext(CreateContext);
  const [cart, setcartItem] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("mylist") != undefined) {
      let arr = JSON.parse(localStorage.getItem("mylist"));
      setcartItem(arr.length);
    }
  }, []);

  //
  const [Lookingp, setLookingp] = useState("");
  const navigate = useNavigate();
  const looking = () => {
    if (Lookingp != "") {
      navigate("gallery?Lookingp=" + Lookingp);
    }
  };
  const catogory = ["Ui Design ", "Asd", "Digital Market"];
  return (
    <div className="nav-container">
      <nav className="navbar  navbar-expand-lg bg-body-tertiary fs-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TexLey
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  catogory
                </a>
                <ul className="dropdown-menu">
                  <li>
                    {catogory.map((val, ind) => (
                      <Link
                        key={ind}
                        className="dropdown-item"
                        to={`/products/${val}`}
                      >
                        {val}
                      </Link>
                    ))}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/infopro">
                  ProductCart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/infopro">
                  ShoppingCart{" "}
                  {cartData.length > 0 && <span>({cartData.length})</span>}
                </Link>
              </li>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setLookingp(e.target.value)}
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={looking}
                >
                  Search
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
