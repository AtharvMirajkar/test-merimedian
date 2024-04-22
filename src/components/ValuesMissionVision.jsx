import React from "react";
// import './MissionVisionValues.css'; // Import your CSS file for additional styling

const MissionVisionValues = () => {
  return (
    <section className="mission-vision-values py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src="https://img.freepik.com/free-vector/medical-infographic-with-photo_23-2148368620.jpg?t=st=1713768544~exp=1713772144~hmac=2d4232c2a062e3bdd1951763b9400d5a368d3bd92fa5d77e97e960b75c39b1a5&w=740"
              alt="Mission Vision Values"
              className="img-fluid"
              width="400" // Adjust width as needed
              height="300" // Adjust height as needed
            />
          </div>

          {/* Description Section */}
          <div className="col-lg-6">
            <div className="description">
              <h2 className="mb-4">Mission</h2>
              <p className="mb-4">
                Our mission is to achieve customer satisfaction and establish
                leadership in selected global markets by excelling in
                technology. Our human resources will continue to be our most
                valuable asset and the primary catalyst for our expansion. We
                are committed to being responsible corporate citizens, guided by
                elevated ethical standards in all our endeavors.
              </p>

              <h2 className="mb-4">Vision</h2>
              <p className="mb-4">
                Our aim is to emerge as a prominent pharmaceutical firm within
                India and extend our reach as a notable global contender by
                2026. We endeavor to forge strategic alliances with key industry
                leaders from various nations to facilitate our growth and
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
