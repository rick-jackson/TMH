import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./products.scss";
import Product from "../product/Product";
import { getProductsData } from "../../store/actions/products.actions";
import { productsSelector } from "../../store/selectors/products.selectors";
import { connect } from "react-redux";
import Filter from "../filter/Filter";
import filterIcon from "../../common/img/icon/filter.svg";

const Products = ({ productsData }) => {
  const { search } = useLocation();
  const [showFilter, setShowFilter] = useState(false);
  const minPrice = search.split("=")[1].split("-")[0];
  const maxPrice = search.split("=")[1].split("-")[1];

  // const [filterData, setFilterData] = useState({});

  return (
    <section className="products">
      <div className="products__wrapper">
        <Filter type={"mobile"} showFilter={showFilter} />
        <Filter type={"desktop"} showFilter={true} />
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
            .filter((item) => item.price >= minPrice && item.price <= maxPrice)
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
