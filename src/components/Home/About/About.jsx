import React from "react";
import Heading from "../../UI/Heading";
import Image from "./Image";
import Info from "./Info";

const About = () => {
  return (
    <section id="about">
      <div className="w-11/12 md:w-10/12 mx-auto py-16">
        <Heading text="About Me" />

        <div className="grid grid-cols-12 items-center gap-8">
          <Image />
          <Info />
        </div>
      </div>
    </section>
  );
};

export default About;
