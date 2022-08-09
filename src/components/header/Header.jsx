import React, { useState } from "react";
import "./header.scss";
import mobileLogo from "../../common/img/logo/Logo mobile.svg";
import shoppingIcon from "../../common/img/icon/shopping.svg";
import burgerIcon from "../../common/img/icon/burger.svg";
import productPhoto from "../../common/img/product/header-product.png";
import Menu from "../modal/menu/Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="navigation">
          <img className="navigation__logo" src={mobileLogo} alt="logo" />
          <ul className="navigation__phone">
            <li className="navigation__phone-item">(067) 570 - 34 - 89</li>
            <li className="navigation__phone-item" style={{ display: "none" }}>
              (095) 458 - 67 - 23
            </li>
          </ul>

          <img
            className="navigation__shopping"
            src={shoppingIcon}
            alt="shopping"
          />
          <img className="navigation__burger" src={burgerIcon} alt="menu" onClick={()=>setShowMenu(!showMenu)}/>
          <Menu showMenu={showMenu}/>
        </nav>
        <div className="header__content">
          <div className="header__description">
            <h1 className="header__title">ТМН - ГРУП</h1>
            <p className="header__subtitle">
              Уповноважені представники ряду світових виробників виробів
              медичного призначення: WRP, Heliomed, LinkMed.,. Ваш надійний
              партнер в області профілактики інфекцій, пов’язаних з наданням
              медичної допомоги.
            </p>
            <button className="header__button">Переглянути продукцію</button>
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
