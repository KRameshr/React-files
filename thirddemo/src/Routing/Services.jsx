import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Footage from "./Footage";
import "./index.css";
const Services = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const services = [
    {
      title: "Web Development",
      description:
        "We build fast, responsive, and SEO-friendly websites using React and modern web technologies.",
    },
    {
      title: "UI/UX Design",
      description:
        "We create intuitive and visually appealing interfaces tailored to your users.",
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your online presence with targeted SEO and social media strategies.",
    },
  ];

  return (
    <div>
      <div className="hero-section">
        {/* <h2> {searchParams.get("search")}</h2> */}
        <div className="service-page">
          <header className="service-header">
            <h1>Our Services</h1>
            <p>What we offer to help your business grow</p>
          </header>

          <div className="service-list">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <footer className="service-footer">
            <Link className="cta-button  hero-button" to="/contact">
              Contact
            </Link>
          </footer>
        </div>
      </div>
      <Footage />
    </div>
  );
};

export default Services;
