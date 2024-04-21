import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Products from "./Pages/Products";
import Career from "./Pages/Career";
import Clients from "./components/Clients";
import Overview from "./components/Overview";
import GeneralEnquiryForm from "./components/GeneralEnquiryForm";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/Careers" element={<Career />}></Route>
          <Route
            path="/general-enquiry"
            element={<GeneralEnquiryForm />}
          ></Route>

          <Route path="/Manufacturing/Clients" element={<Clients />} />
          <Route path="/About/Overview" element={<Overview />} />
        </Routes>

        {/* Routes for products */}
        <Routes>
          <Route
            path="/products/MAZORB-D3"
            element={<Products selectedProduct="MAZORB D3" />}
          ></Route>
          <Route
            path="/products/FB-Rich"
            element={<Products selectedProduct="FB-Rich" />}
          ></Route>
          <Route
            path="/products/Cis Q Forte"
            element={<Products selectedProduct="Cis Q Forte" />}
          ></Route>
          <Route
            path="/products/UPCOOL-20"
            element={<Products selectedProduct="UPCOOL-20" />}
          ></Route>
          <Route
            path="/products/UPTRACE"
            element={<Products selectedProduct="UPTRACE" />}
          ></Route>
          <Route
            path="/products/Ne-norm"
            element={<Products selectedProduct="Ne-norm" />}
          ></Route>
          <Route
            path="/products/Pilenorm"
            element={<Products selectedProduct="Pilenorm" />}
          ></Route>
          <Route
            path="/products/UPTACE-M Injection"
            element={<Products selectedProduct="UPTACE-M Injection" />}
          ></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
