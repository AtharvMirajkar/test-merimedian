import React from "react";

const CompanyInfo = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="about-us-image">
            <img
              src="https://digitalupgrade.com/images/lobbyimage_1.jpg"
              className="img-fluid"
              alt="Lobby Image"
            />
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center bg-light">
          <div className="about-us-info text-center">
            <h2>Merimedian Medicare</h2>
            <p className="text-primary">
              Merimedian’s mission is to provide innovative healthcare products
              with better safety and unique features that satisfy unfulfilled
              needs for greater satisfaction and improved healthcare in all.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
