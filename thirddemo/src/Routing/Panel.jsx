import React, { useContext } from "react";
import { ThemeContext } from "./About";
const Panel = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ ...theme, padding: 15 }}>
      <ul>
        <li>Innovation and Creativity</li>
        <li>Customer Satisfaction</li>
        <li>Transparency and Integrity</li>
        <li>Continuous Learning</li>
      </ul>
    </div>
  );
};

export default Panel;
