import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ products }) => {
  return (
    <div className={styles.ProductCard}>
      <img src={products.images} alt="" className={styles.ProductCard__img} />
      <h2 className={styles.ProductCard__name}>{products.name}</h2>
      <h4 className={styles.ProductCard__price}>${products.price}</h4>
    </div>
  );
};

export default ProductCard;
