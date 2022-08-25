import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import "./filter.scss";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import { connect } from "react-redux";
import { productsSelector } from "../../store/selectors/products.selectors";
import { useEffect } from "react";

const Filter = ({ type, showFilter, productsData, setPrice }) => {
  const priceProduct = productsData.map((product) => {
    if (product.discount) {
      return product.price - (product.price * product.discount) / 100;
    } else {
      return product.price;
    }
  });

  const [priceValue, setPriceValue] = useState([
    Math.min.apply(null, priceProduct),
    Math.max.apply(null, priceProduct),
  ]);

  // const navigate = useNavigate();
  // const newPath = (urlPage, price) =>
  //   navigate(`${urlPage}?price=${price[0]}-${price[1]}`);
  // const { pathname } = useLocation();


  useEffect(() => {
    setPrice(priceValue);
  //   newPath(pathname, priceValue);
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceValue]);


  return (
    <section
      className={`filter filter_${type}`}
      style={
        showFilter && type === "mobile"
          ? { display: "block" }
          : !showFilter && type === "mobile"
          ? { display: "none" }
          : {}
      }
    >
      <div className="filter__wrapper">
        <h4 className="filter__title">Фільтр по параметрам</h4>
        <form className="filter__form" action="#" >
          <div className="filter__item filter__item_price">
            <h5 className="filter__item-title">Ціна</h5>
            <div className="filter__item-values">
              <input
                className="filter__item-value"
                type="text"
                value={priceValue[0]}
                onChange={(e) => {
                  const newPriceValue = priceValue.slice();
                  newPriceValue[0] = e.target.value;
                  setPriceValue(newPriceValue);
                }}
              />
              <span></span>
              <input
                className="filter__item-value"
                type="text"
                value={priceValue[1]}
                onChange={(e) => {
                  const newPriceValue = priceValue.slice();
                  newPriceValue[1] = e.target.value;
                  setPriceValue(newPriceValue);
                }}
              />
            </div>
            <Range
              range
              max={Math.max.apply(null, priceProduct)}
              min={Math.min.apply(null, priceProduct)}
              onChange={(value) => setPriceValue(value)}
              value={priceValue}
            />
          </div>
          <div className="filter__item filter__item_material">
            <h5 className="filter__item-title">Матеріал</h5>
            <div className="filter__item-selected">
              <input type="checkbox" id="latex" name="material" />
              <label htmlFor="latex">латекс</label>
            </div>
            <div className="filter__item-selected">
              <input type="checkbox" id="nitril" name="material" />
              <label htmlFor="nitril">нітрил </label>
            </div>
            <div className="filter__item-selected">
              <input type="checkbox" id="sintetic" name="material" />
              <label htmlFor="sintetic">синтетика </label>
            </div>
          </div>
          <div className="filter__item filter__item_type">
            <h5 className="filter__item-title">По типах</h5>
            <div className="filter__item-selected">
              <input type="checkbox" id="inspection" name="type" />
              <label htmlFor="inspection">Оглядові</label>
            </div>
            <div className="filter__item-selected">
              <input type="checkbox" id="surgical" name="type" />
              <label htmlFor="surgical">Хірургічні </label>
            </div>
            <div className="filter__item-selected">
              <input type="checkbox" id="special" name="type" />
              <label htmlFor="special">Спеціалізовані </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

const mapState = (state) => {
  return {
    productsData: productsSelector(state),
  };
};
const connector = connect(mapState);

export default connector(Filter);
