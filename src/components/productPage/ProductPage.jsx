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
import Description from "./Description";
import Additional from "./Additional";
import Application from "./Application";










const ProductPage = ({ addProduct }) => {
  const url = useLocation();
  const productId = url.pathname.split("/")[2];
  const baseUrl = `https://63073f64c0d0f2b8012a6eca.mockapi.io/product`;
  const [productData, setProductData] = useState({});
  const [number, setNumber] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [components, setComponents] = useState('Description')


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
          <div className="product-page__wrapper">
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
                  ? ((
                      productData.price -
                      (productData.price * productData.discount) / 100
                    ) * number).toFixed(2)
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
          <div className="product-content">
            <div className="product-content__navigation">
              <button className="product-content__navigation-button" 
                style={components === 'Description' 
                  ? {color: '#000', borderBottom: '2px solid #f7f7f8'} 
                  : {color: '#b8bdc0', borderBottom: '1px solid #b8bdc0'}} 
                    onClick={()=>{setComponents('Description')}}>Опис</button>

              <button className="product-content__navigation-button"
                style={components === 'Additional' 
                  ? {color: '#000', borderBottom: '2px solid #f7f7f8'} 
                  : {color: '#b8bdc0', borderBottom: '1px solid #b8bdc0'}}  
                    onClick={()=>{setComponents('Additional')}}>Додаткова інформація</button>
              <button className="product-content__navigation-button" 
                style={components === 'Application' 
                  ? {color: '#000', borderBottom: '2px solid #f7f7f8'} 
                  : {color: '#b8bdc0', borderBottom: '1px solid #b8bdc0'}}  
                    onClick={()=>{setComponents('Application')}}>Застосування</button>
            </div>
                    <div className="product-content__container">
                    {components === 'Description' && <Description/>}
                    {components === 'Additional' && <Additional/>}
                    {components === 'Application' && <Application/>}
                    </div>
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
