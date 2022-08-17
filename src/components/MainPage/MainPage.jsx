import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./MainPage.module.scss";
import FeaturedCarousel from "../../services/Carousel/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const MainPage = ({ products }) => {
  return (
    <div className={styles.MainPage}>
      <div className={styles.MainPage__title}>
        <h2>FEATURED PRODUCTS</h2>
      </div>
      <div className={styles.MainPage__carousel}>
        <Link to={`/${products.id}`}>
          <FeaturedCarousel products={products} />
        </Link>
        <div className={styles.para}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            assumenda tempore distinctio nostrum velit ex dolore? Corporis
            dolorem repellendus fugiat laudantium illo temporibus enim iure
            dicta, ut ad dolor voluptate.
          </p>
        </div>
      </div>
      <div className={styles.MainPage__products}>
        {products.map((singleProduct) => {
          const id = singleProduct.id;
          return (
            <Link to={`/${id}`} key={id}>
              <ProductCard products={singleProduct} />
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
