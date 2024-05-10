import React from "react";

const MissionVisionValues = () => {
  return (
    <section className="mission-vision-values py-5">
      <div className="container ">
        <div className="row align-items-start">
          {/* Image Section */}
          <div className="col-lg-6 mb-4 mb-lg-0 order-lg-1">
            <img
              src="https://img.freepik.com/free-photo/people-attending-group-therapy-session-while-sitting-chairs_23-2148752066.jpg?w=740&t=st=1713868214~exp=1713868814~hmac=97cd11a1c0ac6de2da003a982b6fe906de6cc91bd3a22471633000224f44773f"
              alt="Mission Vision Values"
              className="img-fluid"
              width="550" // Adjust width as needed
              height="300" // Adjust height as needed
            />
          </div>
          {/* Description Section */}
          <div className="col-lg-6">
            <div className="description">
              <h3 className="mb-4 blue-color">Mission</h3>
              <p className="mb-4 font-dark">
                Our mission is to achieve customer satisfaction and establish
                leadership in selected global markets by excelling in
                technology. Our human resources will continue to be our most
                valuable asset and the primary catalyst for our expansion. We
                are committed to being responsible corporate citizens, guided by
                elevated ethical standards in all our endeavors.
              </p>
            </div>
            <div className="description">
              <h3 className="mb-4 blue-color">Vision</h3>
              <p className="mb-4 font-dark">
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
