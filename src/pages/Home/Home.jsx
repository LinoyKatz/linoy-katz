import React from "react";

import "./home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Body />
    </div>
  );
};

export default Home;
