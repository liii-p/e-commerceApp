import styles from "../ProductPage/ProductPage.module.scss";
import { getProductById } from "../../services/server";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);

  const getProduct = async () => {
    const info = await getProductById(id);
    setProduct(info);
  };

  const getImages = async () => {
    const info = await getProductById(id);
    console.log(info);
    const images = info.images;
    console.log(images);
    setImages(images);
  };

  useEffect(() => {
    getProduct();
    getImages();
  }, []);

  return (
    <div className={styles.ProductPage}>
      <Link to={`/`}>
        <IoChevronBack className={styles.backIcon} />
      </Link>
      <Carousel className={styles.ProductPage__carousel}>
        {images.map((img, index) => {
          return (
            <Carousel.Item
              className={styles.ProductPage__gallery_image}
              interval={90000}
              key={index}
            >
              <img src={img} alt="" className="d-block w-400" />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className={styles.ProductPage__item}>
        <article className={styles.ProductPage__item_description}>
          {/* header section - name & price */}
          <header>
            <h4 className={styles.ProductPage__item_name}>{product.name}</h4>
            <h3 className={styles.ProductPage__item_price}>${product.price}</h3>
          </header>
          {/* Size selection here */}
          <h3 className={styles.ProductPage__item_size}>Select your size:</h3>
          <div className={styles.ProductPage__sizeButton}>
            <button>xss</button>
            <button>xs</button>
            <button>s</button>
            <button>m</button>
            <button>l</button>
            <button>xl</button>
            <button>xxl</button>
          </div>
          <section className={styles.ProductPage__item_info}>
            <h5>Description: </h5>
            <p>{product.description}</p>
          </section>
          <button>Add to Cart!</button>
        </article>
      </div>
    </div>
  );
};

export default ProductPage;