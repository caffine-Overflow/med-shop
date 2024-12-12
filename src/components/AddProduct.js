import { useContext, useState } from "react";
import MedicineContext from "../store/MedicineContext";
import classes from "./AddProduct.module.css";

const AddProduct = () => {
  const { addMedicine } = useContext(MedicineContext);
  const [medicine, setMedicine] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    addMedicine({
      ...medicine,
      quantity: Number(medicine.quantity),
      price: Number(medicine.price),
    });
    setMedicine({ name: "", description: "", price: "", quantity: "" });
  };

  return (
    <div className={classes.addProduct}>
      <input
        name="name"
        placeholder="Name"
        value={medicine.name}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={medicine.description}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        type="number"
        value={medicine.price}
        onChange={handleChange}
      />
      <input
        name="quantity"
        placeholder="Quantity"
        type="number"
        value={medicine.quantity}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddProduct;
