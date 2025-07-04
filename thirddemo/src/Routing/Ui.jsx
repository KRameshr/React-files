import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import Footage from "./Footage";
const Pro = () => {
  const { val } = useParams();
  return (
    <div>
      <section className="ui-section ui-font">
        <span className="fs-4">{val}</span> is the process of designing the
        visual elements of a digital product, such as buttons, layouts, colors,
        fonts, and icons.<span className="fs-5">{val}</span> It focuses on how
        the interface looks and how users interact with it, aiming to make the
        experience simple, attractive, and user-friendly{" "}
        <span className="fs-5">{val}</span>.
      </section>
      <Footage />
    </div>
  );
};

export default Pro;
