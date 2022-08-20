import React from "react";
import './contacts.scss'


const Contacts = () =>{

  return (
    <section className="contacts">
      <div className="contacts__wrapper">
        <h4 className="contacts__title">Контакти</h4>
        <div className="contacts__column">
          <div className="contacts__item">
            <h5 className="contacts__item-title">КИЇВ</h5>
            <ul className="contacts__item-list">
              <li>(044) 426 64 44</li>
              <li>(067) 570 34 89</li>
              <li>пр. Степана Бандери, 21 оф. 455</li>
              <li>office@medkommv.com.ua</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Contacts