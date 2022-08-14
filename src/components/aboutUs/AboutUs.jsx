import React from "react";
import "./aboutUs.scss";
import documentIcon from "../../common/img/icon/ocument-icon.svg";
import likeIcon from '../../common/img/icon/like-icon.svg'
import moneyIcon from '../../common/img/icon/money-icon.svg'
import handsIcon from '../../common/img/icon/hands-icon.svg'


const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-us__info">
        <h3 className="about-us__title">ТОВ «ТМН- ГРУП УКРАЇНА»</h3>
        <p className="about-us__description">
          Ми спеціалізується на поставках сучасних якісних і професійно
          підібраних виробів медичного призначення. В даний час компанія займає
          провідні позиції на ринку оптових продажів одноразових медичних
          виробів.
        </p>
      </div>
      <div className="about-slider">
        <div className="about-slider__item">
          <img
            className="about-slider__item-icon"
            src={documentIcon}
            alt="document"
          />
          <p className="about-slider__item-description">
            Пропонуємо виключно високоякісний та сертифікований товар
          </p>
        </div>
        <div className="about-slider__item">
          <img
            className="about-slider__item-icon"
            src={likeIcon}
            alt="like"
          />
          <p className="about-slider__item-description">
          17 років високо стандарту обслуговування
          </p>
        </div>
        <div className="about-slider__item">
          <img
            className="about-slider__item-icon"
            src={moneyIcon}
            alt="money"
          />
          <p className="about-slider__item-description">
          Швидке оформлення без передплат та внесків
          </p>
        </div>
        <div className="about-slider__item">
          <img
            className="about-slider__item-icon"
            src={handsIcon}
            alt="hands"
          />
          <p className="about-slider__item-description">
          Можливість укладення довгострокового партнерства
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
