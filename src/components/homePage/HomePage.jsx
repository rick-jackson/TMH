import React from "react";
import SelectedCategory from "../selectedCategory/SelectedCategory";
import "./homePage.scss";
import AboutUs from "../aboutUs/AboutUs";
import Header from "../header/Header";

const HomePage = () => {
  return (
    <section className="home-page">
      <Header/>
      <SelectedCategory/>
      <AboutUs/>
    </section>
  );
};

export default HomePage;
