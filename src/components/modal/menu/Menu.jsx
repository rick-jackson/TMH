import React, { useState } from "react";
import "../modal.scss";
import arrowIcon from '../../../common/img/icon/arrow.svg'

const Menu = ({ showMenu }) => {
  const [showProducts, setShowProducts] = useState(false)
  // if (!showMenu) {
  //   return null;
  // }
  return (
    <div className="modal" style={showMenu ? {display: 'block'} : {display: 'none'}}>
      <ul className="modal__list">
        <li className="modal__item" onClick={()=>setShowProducts(!showProducts)}>{`наша продукція`} <div className="modal__products-arrow" style={showProducts ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'} } /></li>
        <li style={showProducts ? {display: 'inline-block'} : {display: 'none'}}>
          <ul className="modal__products">
            <li className="modal__products-item">рукавички нітрилові</li>
            <li className="modal__products-item">рукавиці латексні</li>
            <li className="modal__products-item">харчова промисловість</li>
            <li className="modal__products-item">рукавички медичні</li>
            <li className="modal__products-item">рукавички хірургічні</li>
            <li className="modal__products-item">хімічна промисловість і фармацевтика</li>
            <li className="modal__products-item">оглядові рукавички</li>
            <li className="modal__products-item">стоматологічні </li>
            <li className="modal__products-item">для клінігових робіт</li>
            <li className="modal__products-item">сад / город</li>
            <li className="modal__products-item">ремонт і будівництво</li>
            <li className="modal__products-item">для салонів краси</li>
            <li className="modal__products-item">господарські рукавички</li>
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
