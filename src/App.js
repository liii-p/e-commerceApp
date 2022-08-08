import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ProductPage from "./components/ProductPage/ProductPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProducts } from "./services/server";
import { CartProvider } from "./CartContext/CartContext";

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   seedProducts();
  // }, []);

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <div className={styles.App}>
            <Header />
            <Routes>
              <Route path="/" element={<MainPage products={products} />} />
              <Route path="cart" element={<ShoppingCart />} />
              <Route path={`/:id`} element={<ProductPage />} />
              <Route path="/saved-items" element={<h3>Saved Items</h3>} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
