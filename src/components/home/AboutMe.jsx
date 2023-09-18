import React from "react";
import Heading from "../shared/Heading";
import Card from "../shared/Card";
import data from "../../data/data";

export default function AboutMe() {
  return (
    <section id="about" className="pt-20 space-y-10 w-full">
      <Heading text="About Me" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <Hero />
        <Skills />
      </div>
    </section>
  );
}

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
        <span className="font-semibold gradient-text">{banner.author}</span>
      </p>
      <img
        src={aboutMe.image}
        alt={banner.author}
        className="h-72 w-full md:w-72 rounded-lg hidden md:block"
      />
      <p className="text-justify">{aboutMe.description}</p>
      <div className="flex items-center gap-8">
        {socialLinks.map((link) => {
          return (
            <a
              key={link.id}
              href={link.link}
              title={link.text}
              className="btn btn-outline btn-primary btn-square btn-sm"
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
