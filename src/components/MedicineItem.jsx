import React, { useState } from "react";

function MedicineItem({ imageSrc, description }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="medicine-item" onClick={toggleDetails}>
      <div>
        <div>
          <img src={imageSrc} alt="Medicine" className="medicine-image" />
        </div>
        <div className={`medicine-description ${showDetails ? "active" : ""}`}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default MedicineItem;
