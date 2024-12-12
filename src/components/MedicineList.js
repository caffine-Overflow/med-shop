import { useContext } from "react";
import MedicineContext from "../store/MedicineContext";
import classes from "./MedicineList.module.css";

const MedicineList = () => {
  const { medicines, addToCart } = useContext(MedicineContext);

  return (
    <div className={classes.medicineList}>
      {medicines.map((medicine) => (
        <div key={medicine.id} className={classes.medicineItem}>
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
