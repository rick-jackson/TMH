import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductPage = () => {
  const url = useLocation();
  const productId = url.pathname.split("/")[2];

  return (
    <section className="cart">
    <div className="history"><Link to={'/'}>Головна</Link> / <Link to={'/cart'}>{productId}</Link></div>
    <div className="cart__wrapper">
      <div className="cart__title">{productId}</div>
      </div>
    </section>
  );
};

export default ProductPage;
