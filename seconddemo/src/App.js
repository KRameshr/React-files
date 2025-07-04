import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Reduxx/Nav";
import Home from "./Reduxx/Home";
const App = () => {
  return (
    <main>
      <Router>
        <Nav />
        <Routes>
          <section className="container mt-3">
            <Route path="/" element={<Home />} />
            {/* <Uncontrolling /> */}
            {/* <FormiKValidation /> */}
          </section>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
