import React from "react";
import "./footer.scss";
import logoIcon from "../../common/img/logo/logo-desktop.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__list-item">наша продукція</li>
            <li className="footer__list-item">про компанію</li>
            <li className="footer__list-item">блог</li>
          </ul>
        </div>
        <div className="footer__contacts">
          <div className="footer__phone">
            <h4 className="footer__phone-title">Телефон:</h4>
            <ul className="footer__phone-list">
              <li className="footer__phone-item">
                <a href="tel:0675703489">(067) 570 - 34 - 89</a>
              </li>
              <li className="footer__phone-item">
                <a href="tel:0954586723">(095) 458 - 67 - 23</a>
              </li>
            </ul>
            </div>
            <span className="footer__email">
              <h4 className="footer__email-title">
                E-mail:
                <a href="mailto:office@tmngroup.com.ua">
                  office@tmngroup.com.ua
                </a>
              </h4>
            </span>
         
        </div>
        <div className="footer__about">
          <img className="footer__logo" src={logoIcon} alt="logo" />
          <span className="footer__copyright">
            Copyright © 2021 TNM - Group
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
