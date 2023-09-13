import React from "react";
import Heading from "../shared/Heading";
import data from "../../data/data";
import Card from "../shared/Card";

const AboutMe = () => {
  return (
    <div className="space-y-10">
      <Heading text="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <Hero />
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;

const Hero = () => {
  const {
    banner,
    aboutMe,
    contacts: { socialLinks },
  } = data;

  return (
    <div className="space-y-8">
      <p className="text-2xl">
        Hi I'm{" "}
        <span className="font-semibold text-primary">{banner.author}</span>
      </p>
      <img
        src={aboutMe.image}
        alt={banner.author}
        className="h-72 w-full md:w-72 rounded-lg"
      />
      <p className="text-justify">{aboutMe.description}</p>
      <div className="flex items-center gap-8">
        {socialLinks.map((link) => {
          return (
            <a
              href={link.link}
              title={link.text}
              className="h-8 w-8 outline outline-1 flex items-center justify-center rounded-lg duration-500 hover:outline-primary hover:text-primary"
            >
              <link.Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Skills = () => {
  const { skills } = data;

  return (
    <div className="flex flex-wrap flex-grow gap-8">
      {skills.map((skill) => {
        const { id, Icon, text } = skill;
        return (
          <div key={id} className="flex-1">
            <Card>
              <Icon className="text-4xl mx-auto text-primary" />
              <p className="text-center whitespace-nowrap">{text}</p>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
