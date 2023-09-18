import React from "react";
import Navbar from "../components/home/Navbar";
import Banner from "../components/home/Banner";
import AboutMe from "../components/home/AboutMe";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Reviews from "../components/home/Reviews";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import ScrollTop from "../components/shared/ScrollTop";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-10/12 space-y-20">
        <Banner />
        <AboutMe />
        <Services />
        <Projects />
        <Reviews />
        <Contact />
      </div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Home;
