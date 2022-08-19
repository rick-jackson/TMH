import React from "react";
import "./productsCart.scss";
import { connect } from "react-redux";
import { counterMinus, counterPlus } from "../../store/actions/cart.actions";

const ProductCart = ({ product, removeProduct, counterPlus, counterMinus }) => {
  return (
    <div className="product">
      <div
        className="product__remove"
        onClick={() => removeProduct(product.id)}
      >
        +
      </div>
      {product.discount && (
        <div className="product__discount">-{product.discount}%</div>
      )}
      <img className="product__image" src={product.image} alt="product" />
      <div className="product__about">
        <h5 className="product__title">{product.name}</h5>
        <h5 className="product__subtitle">{product.producer}</h5>
        <p className="product__description">
          <span className="product__description_bold">Опис:</span>{" "}
          {product.description}
        </p>
        {/* <div className="product__size">
      Розміри:{" "}
      {product.size.map((item) => (
        <div className="product__size-item" key={item}>
          <input type="checkbox" id="size" onClick={(e)=>console.log(product.selectedSize['M'])}/>
          <label htmlFor="size">{item}</label>
        </div>
      ))}
    </div> */}
        <div className="product__price">
          <span className="product__price-item">
            <div className="product__counter">
              <button
                onClick={() => {
                  counterMinus(product.id);
                }}
                className="product__counter-button"
                disabled={product.count === 1 ? true : false}
              >
                -
              </button>
              <span className="product__counter-value">{product.count}</span>
              <button
                className="product__counter-button"
                onClick={() => counterPlus(product.id)}
              >
                +
              </button>
            </div>{" "}
            {product.discount
              ? (
                  product.price -
                  (product.price * product.discount) / 100
                ).toFixed(2) * product.count
              : product.price * product.count}{" "}
            <span className="product__price-item_currency">₴</span>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = {
  counterPlus: counterPlus,
  counterMinus: counterMinus,
};

const connector = connect(null, mapDispatch);

export default connector(ProductCart);
