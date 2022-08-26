import React from "react";

const Additional = () => {
  return (
    <>
      <h4 className="product-content__title">Додаткова інформація</h4>
      <ul className="product-content__list">
        <li className="product-content__list-item_additional">
          <span>Локації вимірювань</span>
          <span>Товщина стінки (мм)</span>
        </li>
        <li className="product-content__list-item_additional">
          <span>Пальці ( 15 мм від крайньої точки )</span>
          <span>0.16 ± 0.03</span>
        </li>
        <li className="product-content__list-item_additional">
          <span>Долоню (середина долоні)</span>
          <span>0.14 ± 0.03</span>
        </li>
        <li className="product-content__list-item_additional">
          <span>Манжета (25 мм від краю манжети)</span>
          <span>0.11 ± 0.03</span>
        </li>
      </ul>
    </>
  );
};

export default Additional;
