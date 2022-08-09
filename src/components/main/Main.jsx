import React from "react";
import "./main.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </main>
  );
};

export default Main;
