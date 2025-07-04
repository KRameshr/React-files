import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Routing/Navbar";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Terms from "./Routing/TermCondition";
import Contact from "./Routing/Contact";
import Gallery from "./Routing/Gallery";
import Services from "./Routing/Services";
import Notfound from "./Routing/Notfound";
import Delhi from "./Routing/Child/Delhi";
import Hydra from "./Routing/Child/Hydra";
import Nodia from "./Routing/Child/Nodia";
import Pro from "./Routing/Ui";
import Infopro from "./Routing/Infopro";
import Policy from "./Routing/Policy";
import Footage from "./Routing/Footage";
// import ProductInfo from "./Product/ProductInfo";
// import Navbar from "./Navigationbar/Navbar";
function App() {
  return (
    <div>
      {/* <main>
        <Navbar />
        <section className="container">
          <ProductInfo />
        </section>
      </main> */}

      {/*  */}

      <main>
        <Router>
          <section className="container">
            <Navbar />
            {/* loade dynamic components */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />}>
                <Route path="delhi" element={<Delhi />} />
                <Route path="hydrabad" element={<Hydra />} />
                <Route path="nodia" element={<Nodia />} />
              </Route>
              <Route path="products/:val" element={<Pro />} />
              <Route path="infopro" element={<Infopro />} />
              <Route path="termsConditions" element={<Terms />} />
              <Route path="priavcyPolic" element={<Policy />} />
              <Route path="footage" element={<Footage />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </section>
        </Router>
      </main>
    </div>
  );
}

export default App;
