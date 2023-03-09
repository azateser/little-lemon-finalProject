import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/Home/About/About";
import Menu from "../../components/Home/Menu/Menu";
import MobileApp from "../../components/Home/MobileApp/MobileApp";
import Popular from "../../components/Home/Popular/Popular";
import Reservation from "../../components/Home/Reservation/Reservation";
import Slider from "../../components/Home/Slider/Slider";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Popular />
      <About />
      <Menu />
      <Reservation />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Home;
