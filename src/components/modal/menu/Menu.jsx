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
            <li className="modal__item" onClick={() => setShowMenu(false)}>
              про компанію{" "}
            </li>
          </Link>
        </ScrollLilnk>

        <li className="modal__item" onClick={() => setShowMenu(false)}>
          блог
        </li>
        <Link to="/contacts">
          <li className="modal__item" onClick={() => setShowMenu(false)}>
            Наші контакти
          </li>
        </Link>
        <li
          className="modal__item modal__item_mobile"
          onClick={() => setShowMenu(false)}
        >
          Пошук
        </li>
        <li
          className="modal__item modal__item_mobile"
          onClick={() => setShowMenu(false)}
        >
          мова
        </li>
      </ul>
    </div>
  );
};

export default Menu;
