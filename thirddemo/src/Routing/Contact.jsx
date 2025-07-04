import React from "react";
import Footage from "./Footage";
import "./index.css";
import { Link, Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <div className="hero-button">
        <ul>
          <li className="list-contact">
            {/* / will be represent by parent componet , with out  will be represent by child componet */}{" "}
            <Link to="nodia">Nodia</Link>
          </li>
          <li className="list-contact">
            {" "}
            <Link to="delhi">Delhi</Link>
          </li>
          <li className="list-contact">
            {" "}
            <Link to="hydrabad">Hydrabad</Link>
          </li>
        </ul>
        <section>
          <Outlet />
        </section>
      </div>
      <div>
        <p className="privacy-note">
          🔒 Your information is safe with us. We respect your privacy and will
          never share your personal data with third parties. By submitting this
          form, you agree to our
          <Link href="#services" to="/termsConditions">
            Terms & Conditions
          </Link>
          and{" "}
          <Link href="#services" to="/priavcyPolic">
            Privacy Policy
          </Link>
        </p>
      </div>
      <Footage />
    </div>
  );
};

export default Contact;
