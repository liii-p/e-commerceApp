import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "./ShoppingCart.module.scss";

const ShoppingCart = () => {
  return (
    <div className={styles.ShoppingCart}>
      <h1>Cart</h1>
      <div className={styles.ShoppingCart__itemSummary}>
        <h3>Item Name</h3>
        {/* <h4>Size:</h4> */}
        <p>
          <AiOutlinePlus className={styles.plus} />
          amount
          <AiOutlineMinus className={styles.minus} />
        </p>
      </div>
      <div className={styles.total}>
        <h3>TOTAL:</h3>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
