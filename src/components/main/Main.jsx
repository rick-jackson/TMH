import React from "react";
import "./main.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Products from "../products/Products";
import Cart from "../cart/Cart";
import Contacts from "../contacts/Contacts";
import ProductPage from "../productPage/ProductPage";
import { useEffect } from "react";
import { getProductsData } from "../../store/actions/products.actions";
import { connect } from "react-redux";

const Main = ({ getProductsData }) => {
  useEffect(() => {
    getProductsData();
  }, [getProductsData]);




  
  return (
    <main className="main">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:prouctId" element={<Products />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products/:prouctId" element={<ProductPage />} />
      </Routes>
    </main>
  );
};

// export default Main;

const mapDispatch = {
  getProductsData: getProductsData,
};

const connector = connect(null, mapDispatch);

export default connector(Main);
