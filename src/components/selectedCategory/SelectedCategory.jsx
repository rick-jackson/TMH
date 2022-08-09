import React from "react";
import "./selectedCategory.scss";
import arrowIcon from "../../common/img/icon/Arrow 15.svg";

const SelectedCategory = () => {
  return (
    <section className="category">
      <h3 className="category__title">Обирай свою категорію</h3>
      <div className="category__item category__item_1">
        <span className="category__link">нітрилові рукавички</span>
        <img className="category__link-img" src={arrowIcon} alt="arrow" />
      </div>
      <div className="category__item category__item_2">
        <span className="category__link">латексні рукавички</span>
        <img className="category__link-img" src={arrowIcon} alt="arrow" />
      </div>
      <div className="category__item category__item_3">
        <span className="category__link">
          рукавички для медичного застосування
        </span>
        <img className="category__link-img" src={arrowIcon} alt="arrow" />
      </div>
      <div className="category__item category__item_4">
        <span className="category__link">харчова промисловість</span>
        <img className="category__link-img" src={arrowIcon} alt="arrow" />
      </div>
      <div className="category__item category__item_5">
        <span className="category__link">господарські рукавички</span>
        <img className="category__link-img" src={arrowIcon} alt="arrow" />
      </div>

      <div className="category__item category__item_6">
        <span className="category__link">ремонт та будівництво</span>
        <img className="category__link-img" src={arrowIcon} alt="arrow" />
      </div>
    </section>
  );
};

export default SelectedCategory;
