import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Medicine Shop Admin Panel</h1>
      <button className={classes.cartButton}>Cart ()</button>
    </header>
  );
};

export default Header;
