import React, { useState } from "react";
import "./products.scss";
import Product from "../product/Product";
import { productsSelector } from "../../store/selectors/products.selectors";
import { connect } from "react-redux";
import Filter from "../filter/Filter";
import filterIcon from "../../common/img/icon/filter.svg";
import { Link } from "react-router-dom";

const Products = ({ productsData }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState([]);


  return (
    <section className="products">
      <div className="history">
        <Link to={"/"}>Головна</Link> / <Link to={"/products"}>Продукція</Link>
      </div>
      <div className="products__wrapper">
        <Filter type={"mobile"} showFilter={showFilter} setPrice={setPrice} />
        <Filter type={"desktop"} showFilter={true} setPrice={setPrice} />
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


const mapState = (state) => {
  return {
    productsData: productsSelector(state),
  };
};
const connector = connect(mapState);

export default connector(Products);
