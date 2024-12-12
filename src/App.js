import React, { useState } from "react";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import MedicineList from "./components/MedicineList";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header onCartClick={() => setIsModalOpen(true)} />
      <AddProduct />
      <MedicineList />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
