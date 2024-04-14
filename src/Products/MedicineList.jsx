import React from "react";
import { Row, Col } from "reactstrap";
import MedicineItem from "../components/MedicineItem";

function MedicineList({ selectedProduct }) {
  const allMedicines = [
    {
      product: "Product A",
      imageSrc: "src/assets/medicine1.jpg",
      description: (
        <div>
          <h3>Dipodem Tablets</h3>
          <p>
            <strong>Reduces edema and promotes healing</strong>
          </p>

          <p>
            <strong>Composition:</strong> Each film-coated tablet contains (5,6
            Benzo alpha pyrone) Coumarin 200mg.
          </p>

          <p>
            <strong>Benefits:</strong>
          </p>
          <ul>
            <li>
              Effectively reduces edema through proteolysis and phagocytosis
            </li>
            <li>Restores lymphatic function and accelerates wound healing</li>
            <li>
              Superior results compared to proteolytic enzyme preparations
            </li>
          </ul>

          <p>
            <strong>Indications:</strong> Lymphedema, edema associated with
            thromboembolism, deep vein thrombosis, elephantiasis, and swelling
            due to unknown origin.
          </p>

          <p>
            <strong>Dose:</strong> One tablet twice daily.
          </p>

          <p>
            <strong>Packing:</strong> Blister strip of 10 tablets each.
          </p>
        </div>
      ),
    },
    {
      product: "Product B",
      imageSrc: "src/assets/medicine2.jpg",
      description: (
        <div>
          <h3>Sinarest</h3>
          <p>
            <strong>Reduces edema and promotes healing</strong>
          </p>

          <p>
            <strong>Composition:</strong> Each film-coated tablet contains (5,6
            Benzo alpha pyrone) Coumarin 200mg.
          </p>

          <p>
            <strong>Benefits:</strong>
          </p>
          <ul>
            <li>
              Effectively reduces edema through proteolysis and phagocytosis
            </li>
            <li>Restores lymphatic function and accelerates wound healing</li>
            <li>
              Superior results compared to proteolytic enzyme preparations
            </li>
          </ul>

          <p>
            <strong>Indications:</strong> Lymphedema, edema associated with
            thromboembolism, deep vein thrombosis, elephantiasis, and swelling
            due to unknown origin.
          </p>

          <p>
            <strong>Dose:</strong> One tablet twice daily.
          </p>

          <p>
            <strong>Packing:</strong> Blister strip of 10 tablets each.
          </p>
        </div>
      ),
    },
    // Add more medicine data as needed
  ];

  const filteredMedicines = selectedProduct
    ? allMedicines.filter((medicine) => medicine.product === selectedProduct)
    : [];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {filteredMedicines.map((medicine, index) => (
          <div key={index}>
            <div className="row mb-5 mt-2">
              <div className="col-md-4">
                <img
                  src={medicine.imageSrc}
                  alt="Medicine"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">{medicine.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicineList;
