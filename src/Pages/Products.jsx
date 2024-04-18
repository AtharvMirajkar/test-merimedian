import React, { useEffect, useState } from "react";
import MedicineList from "../Products/MedicineList";
import Title from "../components/Title";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Products = ({ selectedProduct }) => {
  useEffect(() => {
    document.title = `Products - ${selectedProduct || "Merimedian"}`;
  }, [selectedProduct]);

  return (
    <div>
      {selectedProduct && <Title text={selectedProduct} />}

      {selectedProduct && <MedicineList selectedProduct={selectedProduct} />}
    </div>
  );
};

export default Products;
