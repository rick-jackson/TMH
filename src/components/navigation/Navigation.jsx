import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HandySvg } from "handy-svg";
import "./navigation.scss";
import Menu from "../modal/menu/Menu";
import mobileLogo from "../../common/img/logo/Logo mobile.svg";
import shoppingIcon from "../../common/img/icon/shopping.svg";
import burgerIcon from "../../common/img/icon/burger.svg";
import { connect } from "react-redux";
import { cartSelector } from "../../store/selectors/cart.selector";


const Navigation = ({ showNav, productsData }) => {
  const url = useLocation().pathname === "/";

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!showNav) {
      setShowMenu(false);
    }
  }, [showNav]);

  return (
    <nav
      className="navigation"
      style={
        (url ? { color: "#fff" } : { color: "#000", background: "#fff" },
        showNav ? { top: "0px" } : { top: "-100px" })
      }
    >
      <div className="navigation__wrapper">
        <Link to={"/"}>
          <img className="navigation__logo" src={mobileLogo} alt="logo" />
        </Link>
        <ul
          className="navigation__phone"
          style={url ? { color: "#fff" } : { color: "#000" }}
        >
          <li className="navigation__phone-item">(067) 570 - 34 - 89</li>
          <li className="navigation__phone-item" style={{ display: "none" }}>
            (095) 458 - 67 - 23
          </li>
        </ul>
        <Link to={"cart"}>
          <div className="navigation__icon-cart">
            <div className="shopping">{productsData.length}</div>
          <HandySvg
            src={shoppingIcon}
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
        <HandySvg
          src={burgerIcon}
          className={
            url ? "navigation__icon" : " navigation__icon navigation__icon_dark"
          }
          width="25"
          height="25"
          onClick={() => setShowMenu(!showMenu)}
        />
        <Menu showMenu={showMenu} />
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
