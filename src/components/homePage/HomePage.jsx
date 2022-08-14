import React from "react";
import SelectedCategory from "../selectedCategory/SelectedCategory";
import "./homePage.scss";
import AboutUs from "../aboutUs/AboutUs";
import Header from "../header/Header";
import Mailing from "../mailing/Mailing";

const HomePage = () => {
  return (
    <section className="home-page">
      <Header/>
      <SelectedCategory/>
      <AboutUs/>
      <Mailing/>
    </section>
  );
};

export default HomePage;
