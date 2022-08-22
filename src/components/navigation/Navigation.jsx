import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navigation.scss";
import Menu from "../modal/menu/Menu";
import mobileLogo from "../../common/img/logo/Logo mobile.svg";
import { ReactComponent as ShoppingIcon} from "../../common/img/icon/shopping.svg";
import {  ReactComponent as  BurgerIcon} from "../../common/img/icon/burger.svg";
import desktopLogo from "../../common/img/logo/logo-desktop.svg";
import { connect } from "react-redux";
import { cartSelector } from "../../store/selectors/cart.selector";

const Navigation = ({ showNav, productsData, lastScroll, scroll }) => {
  const location = useLocation().pathname;
  const url = location === "/";

  const [showMenu, setShowMenu] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    setShowMenu(false);
    setShowPhone(false);
  }, [scroll, location]);

  const stylesNav = {
    color: url ? "#fff" : "#000",
    background: lastScroll > 0 ? "#487bcdcc" : "none",
    top: showNav ? "0px" : "-175px",
  };

  return (
    <nav className="navigation" style={stylesNav}>
      <div className="navigation__wrapper">
        <div className="navigation__container">
          <Link to={"/"}>
            <img
              className="navigation__logo navigation__logo_mobile"
              src={mobileLogo}
              alt="logo"
            />
          </Link>
          <Link to={"/"}>
            <img
              className="navigation__logo navigation__logo_desktop"
              src={desktopLogo}
              alt="logo"
            />
          </Link>
          <ul
            className="navigation__phone"
            style={url ? { color: "#fff" } : { color: "#000" }}
          >
            <li
              className="navigation__phone-item"
              onClick={() => setShowPhone(!showPhone)}
            >
              (067) 570 - 34 - 89
            </li>
            <li
              className="navigation__phone-item navigation__phone-item_hiden"
              style={{ display: showPhone ? "inline-block" : "none" }}
            >
              (095) 458 - 67 - 23
            </li>
          </ul>

          <input
            className="navigation__search"
            type="text"
            placeholder="Пошук"
          />

          <Link to={"cart"}>
            <div className="navigation__icon-cart">
              <div className="shopping">{productsData.length}</div>
              <ShoppingIcon
                className={
                  url
                    ? "navigation__icon"
                    : " navigation__icon navigation__icon_dark"
                }
                width="25"
                height="25"
              />
            </div>
          </Link>
          <BurgerIcon
            className={
              url
                ? "navigation__burger navigation__icon"
                : "navigation__burger navigation__icon navigation__icon_dark"
            }
            width="25"
            height="25"
            onClick={() => setShowMenu(!showMenu)}
          />
          <Menu
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            type={"mobile"}
            scroll={scroll}
            location={location}
          />
        </div>
        <Menu
          showMenu={true}
          type={"desktop"}
          scroll={scroll}
          location={location}
        />
      </div>
    </nav>
  );
};

const mapState = (state) => {
  return {
    productsData: cartSelector(state),
  };
};
const connector = connect(mapState);

export default connector(Navigation);
