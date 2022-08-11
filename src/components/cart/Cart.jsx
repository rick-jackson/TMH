import React, { useEffect } from "react";
import "./cart.scss";
import { connect } from "react-redux";
import { cartSelector } from "../../store/selectors/cart.selector";

const Cart = ({ productsData }) => {
  useEffect(() => {
    console.log(productsData);
  });
  return <div>
    {productsData.map(product =>{
      return (<div id={product.id}>{product.name}</div>)
    })}
  </div>;
};

const mapState = (state) => {
  return {
    productsData: cartSelector(state),
  };
};
const connector = connect(mapState);

export default connector(Cart);
