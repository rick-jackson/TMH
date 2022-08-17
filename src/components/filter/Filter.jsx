import React, { useState } from "react";
import "./filter.scss";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = () => {
  const [priceValue, setPriceValue] = useState([20, 40]);
  return (
    <section className="filter">
      <h4 className="filter__title">Фільтр по параметрам</h4>
      <div className="filter__price">
        <h5 className="filter__price-title">Ціна</h5>
        <div className="filter__price-values">
          <input
            className="filter__price-value"
            type="text"
            value={priceValue[0]}
            onChange={(e) => {
              const newPriceValue = priceValue.slice();
              newPriceValue[0] = e.target.value;
              setPriceValue(newPriceValue);
            }}
          />
          <span>-</span>
          <input
            className="filter__price-value"
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
          defaultValue={[0, 100]}
          onChange={(value) => setPriceValue(value)}
          value={priceValue}
        />
      </div>
    </section>
  );
};

export default Filter;
