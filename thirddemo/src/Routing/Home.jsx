import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footage from "./Footage";
import "./index.css";
const Home = () => {
  const [serch, setserch] = useState("");
  const navigate = useNavigate();
  const send = () => {
    if (serch != "") {
      navigate("/services?search=" + serch);
    } else {
      alert("fill the balnk");
    }
  };
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>
          Your one-stop solution for web development, design, and digital
          services.
        </p>
        <Link href="#services" className="hero-button" to="/Services">
          Explore Services
        </Link>
      </header>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          We offer high-quality, client-focused digital solutions to help your
          business thrive online. Our team of experts specializes in building
          responsive websites, intuitive UI/UX designs, and marketing
          strategies.
        </p>
      </section>
      <Footage />
    </div>
  );
};

export default Home;
