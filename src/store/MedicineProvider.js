import { useState } from "react";
import MedicineContext from "./MedicineContext";

const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addMedicine = (medicine) => {
    setMedicines((prev) => [...prev, { ...medicine, id: Date.now() }]);
  };

  const updateQuantity = (id, change) => {
    setMedicines((prev) =>
      prev.map((med) =>
        med.id === id ? { ...med, quantity: med.quantity + change } : med
      )
    );
  };

  const addToCart = (medicine) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === medicine.id);
      if (existing) {
        return prev.map((item) =>
          item.id === medicine.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...medicine, quantity: 1 }];
    });
    setCartCount((prev) => prev + 1);
    updateQuantity(medicine.id, -1);
  };

  const generateBill = () => {
    setCart([]); // Clear the cart
    setCartCount(0); // Reset the cart count to 0
    console.log("Bill generated successfully!");
  };

  const contextValue = {
    medicines,
    cart,
    cartCount,
    addMedicine,
    addToCart,
    generateBill,
    setCart,
    setCartCount,
  };

  return (
    <MedicineContext.Provider value={contextValue}>
      {children}
    </MedicineContext.Provider>
  );
};

export default MedicineProvider;
