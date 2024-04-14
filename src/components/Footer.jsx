import React from "react";
import "../Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-4">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-auto">
            <span className="text-white">Follow us:</span>
          </div>
          <div className="col-auto">
            <div className="social-links">
              <a
                href="https://www.instagram.com/your_instagram_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-white me-2"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://twitter.com/your_twitter_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-white me-2"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/in/your_linkedin_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-white me-2"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="col-auto">
            <p className="text-muted mb-0">
              Merimedian Medicare Pvt. Ltd. © All Rights Reserved 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
