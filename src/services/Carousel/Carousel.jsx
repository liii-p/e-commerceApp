import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carousel.module.scss";

const FeaturedCarousel = ({ products }) => {
  return (
    <Carousel className={styles.Carousel}>
      {products
        .filter((product) => product.featured === true)
        .map((featuredProduct, i) => {
          return (
            <Carousel.Item className={styles.Carousel} interval={8000} key={i}>
              <img
                className="d-block"
                src={featuredProduct.images[0]}
                alt={featuredProduct.name}
              />
              <Carousel.Caption>
                <h3>{featuredProduct.name}</h3>
                <h4>${featuredProduct.price}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default FeaturedCarousel;
