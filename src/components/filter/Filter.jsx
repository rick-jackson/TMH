import React, { useState } from "react";
import "./filter.scss";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = () => {
  const [priceValue, setPriceValue] = useState([20, 40]);
  return (
    <section className="filter">
      <h4 className="filter__title">Фільтр по параметрам</h4>
      <form className="filter__form" action="#">
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
            defaultValue={[0, 100]}
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
    </section>
  );
};

export default Filter;
