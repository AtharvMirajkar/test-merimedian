import React from "react";

const Achievements = () => {
  return (
    <div className="container text-center mt-4">
      <h2 style={{ fontSize: "1.7rem" }}>Achivements</h2>
      <div className="row mt-4">
        {/* Popular Item 1 */}
        <div className="col-md-4 mb-4">
          <div className="Achivements">
            <h3 style={{ fontSize: "1.4rem" }}>Achivements 1</h3>
            <p>Description of popular item 1 goes here...</p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        {/* Popular Item 2 */}
        <div className="col-md-4 mb-4">
          <div className="popular-item">
            <h3 style={{ fontSize: "1.4rem" }}>Achivements 2</h3>
            <p>Description of popular item 2 goes here...</p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>

        {/* Popular Item 3 */}
        <div className="col-md-4 mb-4">
          <div className="popular-item">
            <h3 style={{ fontSize: "1.4rem" }}>Achivements 3</h3>
            <p>Description of popular item 3 goes here...</p>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
