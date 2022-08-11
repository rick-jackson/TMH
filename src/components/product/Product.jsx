import React from "react";
import "./product.scss";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="product__image" src={product.image} alt="product" />
      <div className="product__about">
        <h5 className="product__title">{product.name}</h5>
        <h5 className="product__subtitle">{product.producer}</h5>
        <p className="product__description">
          <span className="product__description_bold">Опис:</span>{" "}
          {product.description}
        </p>
        <div className="product__size">
          Розміри:{" "}
          {product.size.map((item) => (
            <div className="product__size-item" key={item}>
              <input type="checkbox" id="size" />
              <label htmlFor="size">{item}</label>
            </div>
          ))}
        </div>
        <div className="product__price">
          <span className="product__price-item">
            <span className="product__price_word">Ціна:</span> {product.price}{" "}
            <span className="product__price-item_currency">₴</span>
          </span>
          {product.oldPrice && (
            <span className=" product__price-item product__price-item_old">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
