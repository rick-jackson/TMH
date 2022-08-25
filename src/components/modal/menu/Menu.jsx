import React, { useState } from "react";
import { Link } from "react-router-dom";
import { translite } from "../../../utils/translit";
import "../modal.scss";
import { Link as ScrollLilnk } from "react-scroll";
import { useEffect } from "react";

const Menu = ({ showMenu, setShowMenu, type, scroll, location }) => {
  const [showProducts, setShowProducts] = useState(false);
  useEffect(() => {
    setShowProducts(false);
  }, [scroll, location]);
  const menuList = [
    "Рукавички нітрилові",
    "Рукавиці латексні",
    "Рукавички медичні",
    "Рукавички хірургічні",
    "Хімічна промисловість і фармацевтика",
    "Оглядові рукавички",
    "Стоматологічні",
    "Для клінігових робіт",
    "Сад / город",
    "Ремонт і будівництво",
    "Для салонів краси",
    "Господарські рукавички",
  ];

  return (
    <ul className="menu__box">
      <li className="menu__item" onClick={() => setShowProducts(!showProducts)}>
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
      <li className="modal__item_products">
        <ul
          className="modal__products"
          style={
            showProducts ? { display: "inline-block" } : { display: "none" }
          }
        >
          {menuList.map((item) => (
            <li
              key={item}
              className="modal__products-item"
              onClick={() => setShowProducts(false)}
            >
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
        <Link to="/">
          <li className="menu__item" onClick={() => setShowMenu(false)}>
            про компанію{" "}
          </li>
        </Link>
      </ScrollLilnk>

      <li className="menu__item" onClick={() => setShowMenu(false)}>
        блог
      </li>
      <Link to="/contacts">
        <li className="menu__item" onClick={() => setShowMenu(false)}>
          Наші контакти
        </li>
      </Link>
      <li
        className="menu__item modal__item_mobile"
        onClick={() => setShowMenu(false)}
      >
        Пошук
      </li>
      <li
        className="menu__item modal__item_mobile"
        onClick={() => setShowMenu(false)}
      >
        мова
      </li>
    </ul>
  );
};

export default Menu;
