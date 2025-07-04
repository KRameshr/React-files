import React, { useContext } from "react";
import { ThemeContext } from "./About";
const Toolbar = () => {
  const { ToogleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={ToogleTheme}>
        Our Values
      </button>
    </div>
  );
};

export default Toolbar;
