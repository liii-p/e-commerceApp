import styles from "./Header.module.scss";
import { BsFillBagFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <NavLink to="/" className={styles.Header__Home}>
        <h1>TENUE</h1>
      </NavLink>
      <BsFillBagFill className={styles.bagIcon} />
      <h3>Experience Luxury</h3>
      <NavLink to="cart" className={styles.Header__Cart}>
        <FaShoppingCart className={styles.shoppingCart} />
      </NavLink>
    </div>
  );
};

export default Header;
