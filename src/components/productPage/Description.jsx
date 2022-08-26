import React from "react";

const Description = () => {
  return (
    <>
      {" "}
      <h4 className="product-content__title">Загальна інформація</h4>
      <ul className="product-content__list">
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">Тип:</span>
          Непудровані, нестерильна
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">Матеріал:</span>
          Натуральний латекс (каучук)
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">Пудра:</span>
          Непудровані, поверхня оброблена
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">Вміст білка:</span>
          Меньше 50 мікрограмів екстрагується в воді білка на грам вироба
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">Колір:</span>
          Натуральний (від білого до жовтого)
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">Дизайн:</span>
          Амбідекстральние (на будь-яку руку), текстурована поверхня, манжета з
          валиком
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">Упаковка:</span>100
          рукавичок в упаковці, 10 упаковок в коробці
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">
            Медичний виріб:
          </span>
          Відповідно до Європейської директиви про лікарські засоби 93/42 / EEC
          (CE Class I) EN 455-1 (2000), EN 455-2 (2009 + A1 до: 2015), EN 455-3
          (2015), і EN 455- 4 (2009) ASTM D3578
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">
            Засіб індивідуального захисту:
          </span>
          Складної конструкції Категорія III, відповідно до 89/686 / EEC,
          тестировано EN 420: 2003 + A1: 2009 EN 374-2: 2003, EN 374-3: 2003 &
          EN 388: 2003, CE 0086
        </li>
        <li className="product-content__list-item">
          <span className="product-content__list-item_bold">
            Гарантія якості:
          </span>
          Положення системи якості FDA США (QSR) ISO90001 Система менеджменту
          якості BS EN ISO13485 Система якості
        </li>
      </ul>
    </>
  );
};

export default Description;
