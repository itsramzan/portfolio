import React from "react";
import Banner from "../components/Home/Banner";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Portfolios from "../components/Home/Portfolios";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Portfolios />
      <Contact />
    </div>
  );
};

export default Home;
