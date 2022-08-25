import React from "react";
import "./productPage.scss";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addProduct } from "../../store/actions/cart.actions";
import { ReactComponent as ArrowUp } from "../../common/img/icon/number-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../common/img/icon/number-arrow-down.svg";
import Spinner from "../spinner/Spinner";

const ProductPage = ({ addProduct }) => {
  const url = useLocation();
  const productId = url.pathname.split("/")[2];
  const baseUrl = `https://63073f64c0d0f2b8012a6eca.mockapi.io/product`;
  const [productData, setProductData] = useState({});
  const [number, setNumber] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch(`${baseUrl}/${productId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then((product) => {
        setProductData(product);
        setIsFetching(false);
      });
  }, [baseUrl, productId]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <section className="cart">
      <div className="history">
        <Link to={"/"}>Головна</Link> / <Link to={"/products"}>Продукція</Link>{" "}
        / <Link to={`/products/${productData.id}`}>{productData.name}</Link>
      </div>
      <div className="cart__wrapper">
        <div className="product-page">
          <img src={productData.image} alt="" className="product-page__image" />
          <div className="product-page__info">
            <h3 className="product-page__title">{productData.name}</h3>
            <h4 className="product-page__producer">{productData.producer}</h4>
            <p className="product-page__description">
              {[productData.description]}
            </p>
            <div className="product-page__price">
              <div className="product-page__number">
                <span>{number}</span>
                <div>
                  <button onClick={() => setNumber(number + 1)}>
                    <ArrowUp />
                  </button>
                  <button
                    disabled={number === 1 ? true : false}
                    onClick={() => setNumber(number - 1)}
                  >
                    <ArrowDown />
                  </button>
                </div>
              </div>
              <span className="product-page__price-item">
                {productData.discount
                  ? (
                      productData.price -
                      (productData.price * productData.discount) / 100
                    ).toFixed(2) * number
                  : productData.price * number}{" "}
                <span className="product-page__price-item_currency">₴</span>
              </span>
            </div>
            <button
              className="product-page__add-cart product__add-cart"
              onClick={() => addProduct({ ...productData, count: number })}
            >
              Додати в корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatch = {
  addProduct: addProduct,
};

const connector = connect(null, mapDispatch);

export default connector(ProductPage);
