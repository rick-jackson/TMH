import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import productPhoto from "../../common/img/product/header-product.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">

        <div className="header__content">
          <div className="header__description">
            <h1 className="header__title">ТМН - ГРУП</h1>
            <p className="header__subtitle">
              Уповноважені представники ряду світових виробників виробів
              медичного призначення: WRP, Heliomed, LinkMed.,. Ваш надійний
              партнер в області профілактики інфекцій, пов’язаних з наданням
              медичної допомоги.
            </p>
            <Link to={"products"}>
              <button className="header__button">Переглянути продукцію</button>
            </Link>
          </div>
          <div className="header__banner banner">
            <h3 className="banner__title">COVID-19 </h3>
            <p className="banner__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A morbi
              dit amet, consectetur adipiscing elinterdum in viverra eget
              viverra dignissim neque.dolor sit amet, consectetur adipiscing el
            </p>
            <div className="banner__product">
              <img className="banner__image" src={productPhoto} alt="ProFeel" />
              <div className="banner__product-description">
                <h4 className="banner__product-title">
                  Оглядові рукавички ECO®
                </h4>
                <h5 className="banner__product-subtitle">
                  Examination gloves Eco®
                </h5>
                <p className="banner__product-about">ECO® Подвійна Система..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
