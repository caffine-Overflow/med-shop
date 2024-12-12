import { useState } from "react";

import classes from "./AddProduct.module.css";

const AddProduct = () => {
  const [medicine, setMedicine] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMedicine((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = (event) => {
    event.preventDefault();
    console(medicine);

    setMedicine({ name: "", description: "", price: "", quantity: "" });
  };

  return (
    <form onSubmit={handleAdd} className={classes.addProduct}>
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
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProduct;
