import React from "react";
import Title from "./Title";
import careerImage from "../assets/career-image.avif";

const Overview = () => {
  return (
    <>
      <Title text="Overview"></Title>
      <div
        className="container"
        style={{
          backgroundImage: `url(${careerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: "100vw",
          minHeight: "100vh",
          opacity: "0.8",
        }}
      >
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <p className="text-center">
                  Merimediam Medicare Pvt. Ltd. is a leading pharmaceutical
                  company specializing in a wide range of healthcare products.
                  Our dedicated team ensures top-notch manufacturing and quality
                  assurance round the clock. With certifications like WHO GMP
                  for drug manufacturing and HACCP for food facilities, we
                  uphold international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
