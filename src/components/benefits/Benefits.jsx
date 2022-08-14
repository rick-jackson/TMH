import React from "react";
import "./benefits.scss";
import icon1 from "../../common/img/icon/Vector 9.svg";

const Benefits = () => {
  return (
    <section className="benefits">
      <h3 className="benefits__title">
        ПЕРЕВАГИ РУКАВИЧОК В МЕДИЧНОМУ та промисловому СЕКТОРІ
      </h3>
      <div className="benefits__slider">
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon1} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon1} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon1} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon1} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon1} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon1} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
