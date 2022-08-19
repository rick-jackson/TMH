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
  return (
    <section className="cart">
      {productsData.map((product) => {
        return <ProductCart product={product} removeProduct={removeProduct} />;
      })}

      {productsData.length > 0 && (
        <div className="cart__purchase">
          <span className="cart__purchase-value"></span>
          <button className="cart__purchase-payable product__add-cart">
            Перейти до оформлення
          </button>
        </div>
      )}
    </section>
  );
};

const mapState = (state) => {
  return {
    productsData: cartSelector(state),
  };
};

const mapDispatch = {
  removeProduct: removeProduct,
};

const connector = connect(mapState, mapDispatch);

export default connector(Cart);
