import React from "react";
import "./index.css";
const Footage = () => {
  return (
    <div className="business-footage-container">
      <div className="footage-info">
        <h2>Usage & Retention Policy</h2>
        <p>
          This footage is provided for internal business monitoring, security,
          and auditing. Only authorized personnel may view or download this
          content. Video records are retained for 30 days unless flagged for
          review.
        </p>
        <p>
          For access requests or footage reports, contact:{" "}
          <a href="">
            <strong>security@yourbusiness.com</strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footage;
