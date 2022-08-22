import React, { useState } from "react";
import "./products.scss";
import Product from "../product/Product";
import { getProductsData } from "../../store/actions/products.actions";
import { productsSelector } from "../../store/selectors/products.selectors";
import { connect } from "react-redux";
import Filter from "../filter/Filter";
import filterIcon from "../../common/img/icon/filter.svg";


const Products = ({ productsData }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState([])


  return (
    <section className="products">
      <div className="products__wrapper">
        <Filter type={"mobile"} showFilter={showFilter} setPrice={setPrice}/>
        <Filter type={"desktop"} showFilter={true} setPrice={setPrice}/>
        <div className="products__container">
          <div className="products__title">
            Наша продукція{" "}
            <img
              onClick={() => {
                setShowFilter(!showFilter);
              }}
              className="products__filter"
              src={filterIcon}
              alt=""
            />
          </div>
          {productsData
            .filter((item) => item.price >= price[0] && item.price <= price[1])
            .map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

const mapDispatch = {
  getFlightList: getProductsData,
};

const mapState = (state) => {
  return {
    productsData: productsSelector(state),
  };
};
const connector = connect(mapState, mapDispatch);

export default connector(Products);
