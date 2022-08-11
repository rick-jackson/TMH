import React, { useState } from "react";
import { Link } from "react-router-dom";
import { translite } from "../../../utils/translit";
import "../modal.scss";

const Menu = ({ showMenu }) => {
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

  return (
    <div
      className="modal"
      style={showMenu ? { display: "block" } : { display: "none" }}
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
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="modal__item">про компанію</li>
        <li className="modal__item">блог</li>
        <li className="modal__item">Наші контакти</li>
        <li className="modal__item">Пошук</li>
        <li className="modal__item">мова</li>
      </ul>
    </div>
  );
};

export default Menu;
