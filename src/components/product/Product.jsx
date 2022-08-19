import React  from "react";
import "./product.scss";
import { connect } from "react-redux";
import { addProduct } from "../../store/actions/cart.actions";

const Product = ({ product, addProduct }) => {
  return (
    <div className="product">
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
              <input
                type="checkbox"
                id="size"
                onClick={(e) => {
                 setSelectedSize({...selectedSize, item})
                }}
              />
              <label htmlFor="size">{item}</label>
            </div>
          ))}
        </div> */}
        <div className="product__price">
          <span className="product__price-item">
            <span className="product__price_word">Ціна:</span>{" "}
            {product.discount
              ? (
                  product.price -
                  (product.price * product.discount) / 100
                ).toFixed(2)
              : product.price}{" "}
            <span className="product__price-item_currency">₴</span>
          </span>
          {product.discount && (
            <span className=" product__price-item product__price-item_old">
              {product.price}
            </span>
          )}
        </div>
      <button
        className="product__add-cart"
        onClick={() => addProduct({...product, count: 1})}
        >
        В корзину
      </button>
        </div>
    </div>
  );
};

// export default Product;

const mapDispatch = {
  addProduct: addProduct,
};

const connector = connect(null, mapDispatch);

export default connector(Product);
