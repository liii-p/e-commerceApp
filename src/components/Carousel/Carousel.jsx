import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import meshTop from "../../images/mesh-corset-top.jpg";
import aviatorJacket from "../../images/aviator-jacket.jpg";
import skaterJean from "../../images/skater-jean.jpg";
import styles from "./Carousel.module.scss";

const FeaturedCarousel = () => {
  return (
    <Carousel className={styles.Carousel}>
      <Carousel.Item className={styles.Carousel}>
        <img className="d-block" src={meshTop} alt="First slide" />
        <Carousel.Caption>
          <h3>Mesh Top</h3>
          <h4>$35</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.Carousel}>
        <img className="d-block" src={aviatorJacket} alt="Second slide" />

        <Carousel.Caption>
          <h3>Aviator Jacket</h3>
          <h4>$80</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.Carousel}>
        <img className="d-block" src={skaterJean} alt="Third slide" />
        <Carousel.Caption>
          <h3>Skater Jeans</h3>
          <h4>$60</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default FeaturedCarousel;
