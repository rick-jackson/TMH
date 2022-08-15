import React from "react";
import "./benefits.scss";
import icon1 from "../../common/img/icon/Vector 9.svg";
import icon2 from '../../common/img/icon/icon high fast.svg'
import icon3 from '../../common/img/icon/icon elastic.svg'
import icon4 from '../../common/img/icon/icon sensative.svg'
import icon5 from '../../common/img/icon/icon safety.svg'
import icon6 from '../../common/img/icon/icon fixed position.svg'



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
          <img className="benefits__item-icon" src={icon2} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon3} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon4} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon5} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
        <div className="benefits__item">
          <img className="benefits__item-icon" src={icon6} alt="" />
          <h4 className="benefits__item-title">
            Низький ризик алергій і дерматитів
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
