import React from "react";
import MedicineItem from "../components/MedicineItem";
import product1 from "../assets/Products/product1.png";
import product2 from "../assets/Products/product2.png";
import product3 from "../assets/Products/product3.png";
import product4 from "../assets/Products/product4.png";
import product5 from "../assets/Products/product5.png";
import product6 from "../assets/Products/product6.png";
import product7 from "../assets/Products/product7.png";
import product8 from "../assets/Products/product8.png";

function MedicineList({ selectedProduct }) {
  const allMedicines = [
    {
      product: "MAZORB D3",
      imageSrc: product1,
      description: (
        <div>
          <h3>MAZORB D3</h3>
          <p>
            <strong>
              Treat or prevent calcium-magnesium deficient conditions
            </strong>
          </p>

          <p>
            <strong>Composition:</strong> Calcium Aspartate, Magnesium
            Hydroxide, Vitamin D3 and Excipients.
          </p>

          <p>
            <strong>Benefits:</strong>
          </p>
          <ul>
            <li>
              Calcium is needed for healthy bones, muscles, nervous system, and
              heart
            </li>
            <li>
              Magnesium is important for regulating muscle and nerve functions
            </li>
            <li>
              Vitamin D3 helps absorb calcium and other minerals in the body
            </li>
          </ul>

          <p>
            <strong>Indications:</strong> Lack of calcium, magnesium, and
            vitamin D3 can cause: Fragile bones, Risk of bone-related injuries,
            Low energy level
          </p>

          <p>
            <strong>Dose:</strong> 1 tablet daily or as directed by the
            healthcare professional.
          </p>

          <p>
            <strong>Packing:</strong> Blister strip of 15 tablets each.
          </p>
        </div>
      ),
    },
    {
      product: "FB-Rich",
      imageSrc: product2,
      description: (
        <div>
          <h3>FB-Rich</h3>
          <p>
            <strong>
              The dietary supplement which improves Iron and Folic acid levels
              in the body
            </strong>
          </p>

          <p>
            <strong>Composition:</strong> Ferrous Bisglycinate, Zinc
            Bisglycinate, Folic Acid & Methylcobalamin
          </p>

          <p>
            <strong>Benefits:</strong>
          </p>
          <ul>
            <li>
              Primarily used to reduce the risk associated with low levels of
              folic acid and iron levels in the body
            </li>
            <li>
              Folic acid and Iron both help manage conditions which prevent
              anaemia and aids in the production of red blood cells
            </li>
            <li>
              It may be used to improve nervous system health and immunity
              levels to fight off bacterial infections
            </li>
          </ul>

          <p>
            <strong>Indications:</strong> Iron and Folic acid play an important
            role in anaemia and helps improve nerve health and immunity levels.
          </p>

          <p>
            <strong>Dose:</strong> Take 1 tablet daily, preferably with meals or
            as directed by the physician.
          </p>

          <p>
            <strong>Packing:</strong> Blister strip of 10 tablets each.
          </p>
        </div>
      ),
    },
    {
      product: "Cis Q Forte",
      imageSrc: product3,
      description: (
        <div>
          <h3>Cis Q Forte</h3>
          <p>
            <strong>helps to reduce inflammation and pain</strong>
          </p>

          <p>
            <strong>Composition:</strong> Each film-coated tablet contains (5,6
            Benzo alpha pyrone) Coumarin 200mg.
          </p>

          <p>
            <strong>Benefits:</strong>
          </p>
          <ul>
            <li>The tablet has anti-inflammatory properties</li>
            <li>It may help regulate cholesterol levels</li>
            <li>It helps alleviate pain and swelling</li>
            <li>
              It aids in regulating blood glucose levels and increase insulin
              production
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
      product: "UPCOOL-20",
      imageSrc: product4,
      description: (
        <div>
          <h3>UPCOOL-20</h3>
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
      product: "UPTRACE",
      imageSrc: product5,
      description: (
        <div>
          <h3>UPTRACE</h3>
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
      product: "Ne-norm",
      imageSrc: product6,
      description: (
        <div>
          <h3>Ne-norm</h3>
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
      product: "Pilenorm",
      imageSrc: product7,
      description: (
        <div>
          <h3>Pilenorm</h3>
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
      product: "UPTACE-M Injection",
      imageSrc: product8,
      description: (
        <div>
          <h3>UPTACE-M Injection</h3>
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
