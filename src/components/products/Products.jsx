import React  from "react";
import "./products.scss";
import Product from "../product/Product";
import { getProductsData } from "../../store/actions/products.actions";
import { productsSelector } from "../../store/selectors/products.selectors";
import { connect } from "react-redux";
import {useLocation} from 'react-router-dom'
import Filter from "../filter/Filter";
import filterIcon from '../../common/img/icon/filter.svg'
import { useState } from "react";

const Products = ({ productsData }) => {

const title = useLocation().state
const [showFilter, setShowFilter] = useState(false)


  return (
    <section className="products">
      <div className="products__wrapper">
      <Filter type={'mobile'} showFilter={showFilter} />
      <Filter type={'desktop'} showFilter={true}/>
      <div className="products__container">
      <div className="products__title">Наша продукція <img onClick={()=>{setShowFilter(!showFilter)}} className="products__filter" src={filterIcon} alt="" /></div>
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
