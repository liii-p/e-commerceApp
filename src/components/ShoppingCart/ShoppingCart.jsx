import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "./ShoppingCart.module.scss";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { CartContext } from "../../CartContext/CartContext";
import { useContext, useEffect, useState } from "react";
import { getStockLevel } from "../../services/server";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = cart.map((item) => {
      return item.qty * item.price;
    });
    const grandTotal = sum.reduce((prev, curr) => prev + curr, 0);
    setTotal(grandTotal);
  }, [cart]);

  const getStock = async (id) => {
    const awaitingStock = await getStockLevel(id);
    console.log("this is awaiting stock", awaitingStock);
    return await awaitingStock;
  };

  /* const handleDelete = (e) => {
    const name = e.target.getAttribute("name");
    const filteredCart = cart.filter((_, index) => index !== parseInt(name));
    setCart(filteredCart);
  }; */

  const updateQty = (item, changeQty) => {
    const foundItem = cart.find((itemInCart) => itemInCart === item);
    const anotherCopy = [...cart];
    console.log("I found the item!", foundItem);

    if (!foundItem) return;
    const stock = getStock(foundItem.id).then((stockLevel) => {
      const qtyInCart = (anotherCopy[cart.indexOf(foundItem)].qty += changeQty);

      if (qtyInCart <= 0) return;

      if (qtyInCart > stockLevel) return;

      console.log("this is another copy of the cart", anotherCopy);
      setCart(anotherCopy);
      return stockLevel;
    });
  };
  return (
    <div className={styles.backIcon}>
      <Link to={`/`}>
        <IoChevronBack className={styles.backIcon} />
      </Link>
      <div className={styles.ShoppingCart}>
        <h1>Cart</h1>
        {cart.length > 0 &&
          cart.map((item, index) => {
            return (
              <div className={styles.ShoppingCart__itemSummary} key={index}>
                <h3>{item.name}</h3>
                <p>{item.price.toFixed(2)}</p>
                <p>Size: {item.size}</p>
                <p>
                  <AiOutlinePlus
                    className={styles.plus}
                    onClick={() => updateQty(item, +1)}
                  />
                </p>
                <input type="text" readOnly value={item.qty} />
                <p>
                  <AiOutlineMinus
                    className={styles.minus}
                    onClick={() => updateQty(item, -1)}
                  />
                </p>
              </div>
            );
          })}
        {cart.length === 0 && "Nothing here yet"}
        <h3>TOTAL: ${total.toFixed(2)}</h3>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
