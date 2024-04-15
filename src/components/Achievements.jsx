import React from "react";
// import "../Styles/Achievements.css"; // Import your CSS file for custom styling if needed

const Achievements = () => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-3 text-center">Company Achievements</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {/* Achievement 1 */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Achievement 1</h5>
              <p className="card-text">Short description of achievement 1.</p>
            </div>
          </div>
        </div>
        {/* Achievement 2 */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Achievement 2</h5>
              <p className="card-text">Short description of achievement 2.</p>
            </div>
          </div>
        </div>
        {/* Achievement 3 */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Achievement 3</h5>
              <p className="card-text">Short description of achievement 3.</p>
            </div>
          </div>
        </div>
        {/* Achievement 4 */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Achievement 4</h5>
              <p className="card-text">Short description of achievement 4.</p>
            </div>
          </div>
        </div>
        {/* Achievement 5 */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Achievement 5</h5>
              <p className="card-text">Short description of achievement 5.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
