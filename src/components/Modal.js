import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import MedicineContext from "../store/MedicineContext";
import classes from "./Modal.module.css";

const Modal = ({ onClose }) => {
  const { cart, generateBill } = useContext(MedicineContext);
  const [billGenerated, setBillGenerated] = useState(false); // To track if the bill has been generated

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const handleGenerateBill = () => {
    generateBill(); // Call the context function to clear the cart and reset the count
    setBillGenerated(true); // Set the flag to show success message
  };

  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <h2>Cart</h2>
      {billGenerated ? (
        <div>
          <h3>Bill Generated Successfully!</h3>
          <button onClick={onClose}>Close</button>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={onClose}>Close</button>
          <button onClick={handleGenerateBill}>Generate Bill</button>
        </div>
      )}
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
