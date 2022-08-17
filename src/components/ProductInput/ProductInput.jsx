import styles from "./ProductInput.module.scss";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getStockLevel } from "../../services/server";
import { CartContext } from "../../CartContext/CartContext";
import { BsBookmarkStarFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";

const ProductInput = ({ product }) => {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const [stock, setStock] = useState(0);
  const [qty, setQty] = useState(1);

  const [sizeButton, setSizeButton] = useState([]);
  const [size, setSize] = useState("select");

  const [wishlist, setWishlist] = useState(false);

  const getSizeButton = async () => {
    const info = await getProductById(id);
    const sizes = info.size;
    setSizeButton(sizes);
  };

  const getStock = async () => {
    const awaitingStock = await getStockLevel(id);
    setStock(awaitingStock);
  };

  const handleClick = (e) => {
    setSize(e.target.value);
  };

  const handleIncrement = () => {
    setQty((qty) => qty + 1);
    if (qty > stock) {
      alert("Oops! We don't currently have that much available.");
    }
  };

  const handleDecrement = () => {
    if (qty <= 0) return;

    setQty((qty) => qty - 1);
  };

  // adding things to cart
  const addToCart = () => {
    if (qty > stock) {
      alert("Oops! We don't currently have that much available.");
      return;
    }

    if (size === "select") {
      alert("please select a size");
      return;
    }

    const name = product.name;
    const price = product.price;
    console.log(name);

    // copy of the existing cart array
    const copyOf = [...cart];
    const newItem = { name, price, qty, size, id };

    // if at least one element passes...
    const exists = cart.some((item) => {
      if (item.name === newItem.name && item.size === newItem.size) {
        return true;
      }
      return false;
    });

    const index = cart.map((item) => item.size).indexOf(newItem.size);

    if (exists) {
      copyOf[index].qty += qty;
    } else copyOf.push(newItem);

    console.log("copy of", copyOf);
    alert("Added to cart!");
    setCart(copyOf);
  };

  const addWishlist = () => {
    setWishlist((wishlist) => !wishlist);
  };

  useEffect(() => {
    getSizeButton();
    getStock();
  }, []);

  useEffect(() => {}, [wishlist]);

  return (
    <div>
      <p>Select size:</p>
      {sizeButton.map((btn) => {
        return (
          <button
            key={btn}
            value={btn}
            onClick={handleClick}
            className={styles.ProductInput__sizes}
          >
            {btn}
          </button>
        );
      })}
      <div>Size Guide</div>

      <section className={styles.ProductInput__item_incDec}>
        <button onClick={handleDecrement}> - </button>
        <input type="text" value={qty} readOnly />
        <button onClick={handleIncrement}> + </button>
      </section>

      <section className={styles.ProductInput__icons}>
        <FaCartPlus onClick={addToCart} className={styles.plus} />
        <BsBookmarkStarFill onClick={addWishlist} className={styles.star} />
      </section>

      <section>
        {wishlist ? <p>This item has been added to the wishlist! </p> : null}
      </section>
    </div>
  );
};

export default ProductInput;
