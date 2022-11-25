import React from "react";
import Banner from "components/Home/Banner";
import About from "components/Home/About";
import Services from "components/Home/Services";
import Portfolios from "components/Home/Portfolios";
import Clients from "components/Home/Clients";
import Contact from "components/Home/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Portfolios />
      <Clients />
      <Contact />
    </>
  );
};

export default Home;
