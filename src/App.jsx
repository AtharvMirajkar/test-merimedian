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

const App = () => {
  return (
    <>
      <Router>
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

          <Route
            path="/products/productA"
            element={<Products selectedProduct="Product A" />}
          ></Route>

          <Route path="/Manufacturing/Clients" element={<Clients />} />
          <Route path="/About/Overview" element={<Overview />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
