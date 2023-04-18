import React from "react";

import "./home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import BottomSection from "../../components/BottomSection/BottomSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Body />
      <BottomSection />
    </div>
  );
};

export default Home;
