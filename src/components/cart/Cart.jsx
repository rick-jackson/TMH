import React, { useEffect } from "react";
import "./cart.scss";
import { connect } from "react-redux";
import { cartSelector } from "../../store/selectors/cart.selector";
import ProductCart from "../productCart/ProductCart";
import { removeProduct } from "../../store/actions/cart.actions";

const Cart = ({ productsData, removeProduct }) => {
  useEffect(() => {
    console.log(productsData);
  });
  return <div className="cart">
    {productsData.map(product =>{
      return (<ProductCart product={product} removeProduct={removeProduct}/>)
    })}
  </div>;
};

const mapState = (state) => {
  return {
    productsData: cartSelector(state),
  };
};

const mapDispatch = {
  removeProduct: removeProduct
}

const connector = connect(mapState, mapDispatch);

export default connector(Cart);
