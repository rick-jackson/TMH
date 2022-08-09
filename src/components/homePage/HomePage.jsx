import React from "react";
import SelectedCategory from "../selectedCategory/SelectedCategory";
import "./homePage.scss";
import AboutUs from "../aboutUs/AboutUs";

const HomePage = () => {
  return (
    <section className="home-page">
      <SelectedCategory/>
      <AboutUs/>
    </section>
  );
};

export default HomePage;
