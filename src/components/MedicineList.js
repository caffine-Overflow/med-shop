import React from "react";

import classes from "./MedicineList.module.css";

const MedicineList = (medicines) => {
  return (
    <div className={classes.medicineList}>
      {medicines.map((medicine) => (
        <div key={medicine.id}>
          <h3>{medicine.name}</h3>
          <p>{medicine.description}</p>
          <p>Price: ${medicine.price}</p>
          <p>Available: {medicine.quantity}</p>
          <button
            disabled={medicine.quantity === 0}
            onClick={() => addToCart(medicine)}
          >
            {medicine.quantity === 0 ? "Out of Stock" : "Add to Bill"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
