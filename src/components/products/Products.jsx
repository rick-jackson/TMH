import React  from "react";
import "./products.scss";
import Product from "../product/Product";
import { getProductsData } from "../../store/actions/products.actions";
import { productsSelector } from "../../store/selectors/products.selectors";
import { connect } from "react-redux";
import {useLocation} from 'react-router-dom'
import Filter from "../filter/Filter";

const Products = ({ productsData }) => {

const title = useLocation().state



  return (
    <section className="products">
      <Filter/>
      <div className="products__wrapper">
      <div className="products__title">Наша продукція</div>
      <div className="products__container">
      {productsData.map((product) => (
        <Product key={product.id} product={product} title={title}/>
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
