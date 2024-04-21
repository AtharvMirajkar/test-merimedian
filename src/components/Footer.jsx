import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGem,
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                Merimedian Medicare
              </h6>
              <p>
                Merimedian’s mission is to provide innovative healthcare
                products with better safety and unique features that satisfy
                unfulfilled needs for greater satisfaction and improved
                healthcare in all.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Products Type 1
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Products Type 2
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Products Type 3
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/About/Overview" className="text-reset">
                  About us
                </Link>
              </p>
              <p>
                <Link to="/Careers" className="text-reset">
                  Careers
                </Link>
              </p>
              <p>
                <Link to="/Manufacturing/Clients" className="text-reset">
                  Clients
                </Link>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-3" />
                Maharashtra-416003
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                merimedian@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-3" /> + 01 234 567
                88
              </p>
              <p>
                <FontAwesomeIcon icon={faPrint} className="me-3" /> + 01 234 567
                89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <span className="text-reset fw-bold">
          {" "}
          Merimedian Medicare Pvt. Ltd. © All Rights Reserved
        </span>
      </div>
      {/* Copyright */}
    </footer>
    /* Footer */
  );
};

export default Footer;
