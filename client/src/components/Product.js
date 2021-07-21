import React from "react";

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product">
      <div className="product__info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
      </div>

      <img src={product.file} alt="Product file" />

      <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
