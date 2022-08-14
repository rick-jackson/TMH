import React from "react";
import SelectedCategory from "../selectedCategory/SelectedCategory";
import "./homePage.scss";
import AboutUs from "../aboutUs/AboutUs";
import Header from "../header/Header";
import Mailing from "../mailing/Mailing";
import Benefits from "../benefits/Benefits.jsx";

const HomePage = () => {
  return (
    <section className="home-page">
      <Header/>
      <SelectedCategory/>
      <AboutUs/>
      <Mailing/>
      <Benefits/>
    </section>
  );
};

export default HomePage;
