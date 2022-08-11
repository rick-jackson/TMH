import React  from "react";
import "./products.scss";
import Product from "../product/Product";
import { getProductsData } from "../../store/actions/products.actions";
import { productsSelector } from "../../store/selectors/products.selectors";
import { connect } from "react-redux";
import {useLocation} from 'react-router-dom'

const Products = ({ productsData }) => {

const title = useLocation().state

  return (
    <section className="products">
      <div className="products__wrapper">
      {productsData.map((product) => (
        <Product key={product.id} product={product} title={title}/>
      ))}
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
