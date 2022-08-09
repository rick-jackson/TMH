import React  from "react";
import "./main.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Products from "../products/Products";

const Main = () => {

  return (
    <main className="main">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </main>
  );
};

export default Main;
