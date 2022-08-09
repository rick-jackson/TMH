import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import {HandySvg} from 'handy-svg';
import "./navigation.scss";
import Menu from "../modal/menu/Menu";
import mobileLogo from "../../common/img/logo/Logo mobile.svg";
import shoppingIcon from "../../common/img/icon/shopping.svg";
import burgerIcon from "../../common/img/icon/burger.svg";

const Navigation = () => {

const url = useLocation().pathname === '/'

useEffect((()=>{
  console.log(url)
}),[url])


  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navigation" style={url ? {color: '#fff'} : {color: '#000'}}>
      <div className="navigation__wrapper">
        <Link to={'/'}>
      <img className="navigation__logo" src={mobileLogo} alt="logo" />
      </Link>
      <ul className="navigation__phone">
        <li className="navigation__phone-item">(067) 570 - 34 - 89</li>
        <li className="navigation__phone-item" style={{ display: "none" }}>
          (095) 458 - 67 - 23
        </li>
      </ul>
      <HandySvg
        src={shoppingIcon}
        className={url ? "navigation__icon" : " navigation__icon navigation__icon_dark"}
        width="25"
        height="25"
    />
          <HandySvg
        src={burgerIcon}
        className={url ? "navigation__icon" : " navigation__icon navigation__icon_dark"}
        width="25"
        height="25"
        onClick={() => setShowMenu(!showMenu)}
    />
      </div>
      <Menu showMenu={showMenu} />
    </nav>
  );
};

export default Navigation;
