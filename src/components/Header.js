import { useContext } from "react";
import MedicineContext from "../store/MedicineContext";
import classes from "./Header.module.css";

const Header = ({ onCartClick }) => {
  const { cartCount } = useContext(MedicineContext);

  return (
    <header className={classes.header}>
      <h1>Medicine Shop Admin Panel</h1>
      <button className={classes.cartButton} onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </header>
  );
};

export default Header;
