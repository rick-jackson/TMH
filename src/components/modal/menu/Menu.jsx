import React, { useState } from "react";
import { Link } from "react-router-dom";
import { translite } from "../../../utils/translit";
import "../modal.scss";
import { Link as ScrollLilnk } from "react-scroll";

const Menu = ({ showMenu, setShowMenu, type }) => {
  const [showProducts, setShowProducts] = useState(false);
  const menuList = [
    "рукавички нітрилові",
    "рукавиці латексні",
    "рукавички медичні",
    "рукавички хірургічні",
    "хімічна промисловість і фармацевтика",
    "оглядові рукавички",
    "стоматологічні",
    "для клінігових робіт",
    "сад / город",
    "емонт і будівництво",
    "для салонів краси",
    "господарські рукавички",
  ];

  const styleMobileMenu = {
    display: showMenu ? "block" : "none",
  };

  return (
    <div
      className={`modal modal_${type}`}
      style={type === "mobile" ? styleMobileMenu : {}}
    >
      <ul className="modal__list">
        <li
          className="modal__item"
          onClick={() => setShowProducts(!showProducts)}
        >
          {`наша продукція`}{" "}
          <div
            className="modal__products-arrow"
            style={
              showProducts
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0)" }
            }
          />
        </li>
        <li
          style={
            showProducts ? { display: "inline-block" } : { display: "none" }
          }
        >
          <ul className="modal__products">
            {menuList.map((item) => (
              <li key={item} className="modal__products-item">
                <Link
                  style={{ color: "#fff" }}
                  to={`/products/${translite(item)}`}
                  state={item}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <ScrollLilnk
          activeClass="active"
          to="about"
          spy={false}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <li className="modal__item" onClick={() => setShowMenu(false)}>
            <Link style={{ color: "#fff" }} to="/">
              про компанію{" "}
            </Link>
          </li>
        </ScrollLilnk>

        <li className="modal__item">блог</li>
        <li className="modal__item">Наші контакти</li>
        <li className="modal__item modal__item_mobile">Пошук</li>
        <li className="modal__item modal__item_mobile">мова</li>
      </ul>
    </div>
  );
};

export default Menu;
