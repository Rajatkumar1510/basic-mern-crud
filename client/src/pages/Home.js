import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { addToCart } from "../redux/actions/cart";
import { getProducts } from "../redux/actions/product";
const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function handleAddToCart(id, productId) {
    dispatch(addToCart(id, productId, 1));
    alert("Item added to cart");
  }
  return (
    <div className="home">
      {products ? (
        products.map((product) => {
          return (
            <div className="home__row" key={product._id}>
              <Product product={product} handleAddToCart={handleAddToCart} />
            </div>
          );
        })
      ) : (
        <h2>Loading Products</h2>
      )}
    </div>
  );
};

export default Home;
