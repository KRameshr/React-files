import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-subtitle">Page Not Found</p>
      <p className="notfound-description">
        Sorry, the page you are looking for doesn't exist.
      </p>
      <Link to="/" className="notfound-button">
        Go to Home
      </Link>
    </div>
  );
};

export default Notfound;
