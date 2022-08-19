import React  from "react";
import "./cart.scss";
import { connect } from "react-redux";
import { cartSelector } from "../../store/selectors/cart.selector";
import ProductCart from "../productCart/ProductCart";
import { removeProduct } from "../../store/actions/cart.actions";

const Cart = ({ productsData, removeProduct }) => {
  const purchaseSum = productsData.reduce((acc, value) => {
    return acc + Number(value.price) * value.count;
  }, 0);

  return (
    <section className="cart">
      {productsData.map((product) => {
        return <ProductCart product={product} removeProduct={removeProduct} />;
      })}

      {productsData.length > 0 && (
        <div className="cart__purchase">
          <div className="cart__purchase-value">
            {" "}
            <span>До сплати:</span> <span> {purchaseSum} ₴</span>
          </div>

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
