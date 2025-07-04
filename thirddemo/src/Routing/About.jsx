import React, { createContext, useState } from "react";
import Footage from "./Footage";
import "./index.css";
import Toolbar from "./Toolbar";
import Panel from "./Panel";
const themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#000",
    color: "#fff",
  },
};

// create a context

export const ThemeContext = createContext(themes.light);

//
const About = () => {
  const [theme, setTheme] = useState(themes.light);
  const ToogleTheme = () => {
    setTheme((t) => (t === themes.light ? themes.dark : themes.light));
  };
  return (
    <div>
      <ThemeContext.Provider
        value={{
          theme: theme,
          ToogleTheme: ToogleTheme,
        }}
      >
        <div className="about-page">
          <header className="about-header">
            <h1>About Us</h1>
            <p>Learn more about our journey, mission, and values.</p>
          </header>

          <section className="about-content">
            <h2>Our Story</h2>
            <p>
              We are a passionate team of developers, designers, and digital
              experts committed to delivering innovative web and software
              solutions. Since our founding, we've helped startups, small
              businesses, and enterprises achieve their online goals.
            </p>

            <h2>Our Mission</h2>
            <p>
              To create user-centric digital experiences that empower businesses
              and delight users.
            </p>
          </section>
        </div>
        <Toolbar />
        <hr />
        <Panel />
      </ThemeContext.Provider>
      <Footage />
    </div>
  );
};

export default About;
