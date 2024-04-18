// Products.js
import React, { useEffect, useState } from "react";
import MedicineList from "../Products/MedicineList";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Products = ({ selectedProduct }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const allProducts = ["Product A", "Product B" /* Add more products here */];

  useEffect(() => {
    document.title = `Products - ${selectedProduct || "Merimeridian"}`;
  }, [selectedProduct]);

  const updateTitle = (index) => {
    document.title = `Products - ${allProducts[index] || "Merimeridian"}`;
  };

  const goToNextProduct = () => {
    const nextIndex = (currentProductIndex + 1) % allProducts.length;
    setCurrentProductIndex(nextIndex);
    updateTitle(nextIndex);
  };

  const goToPreviousProduct = () => {
    const previousIndex =
      (currentProductIndex - 1 + allProducts.length) % allProducts.length;
    setCurrentProductIndex(previousIndex);
    updateTitle(previousIndex);
  };

  return (
    <div>
      {/* <Title text={selectedProduct} updateTitle={updateTitle} /> */}

      {selectedProduct && (
        <div className="d-flex justify-content-between align-items-center mt-3 px-3">
          <div className="icon-container" onClick={goToPreviousProduct}>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </div>
          <div className="icon-container" onClick={goToNextProduct}>
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
          </div>
        </div>
      )}

      {selectedProduct && (
        <MedicineList selectedProduct={allProducts[currentProductIndex]} />
      )}
    </div>
  );
};

export default Products;
