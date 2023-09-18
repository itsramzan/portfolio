import React from "react";
import { TypeAnimation } from "react-type-animation";
import data from "../../data/data";

export default function Banner() {
  return (
    <section
      id="home"
      className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8"
    >
      <Info />
      <Illustration />
    </section>
  );
}

export const Info = () => {
  const { banner } = data;

  const sequence = [];

  banner.jobs.forEach((el) => sequence.push(...[el, 1000]));

  return (
    <div className="space-y-6 hidden md:block">
      <p className="text-3xl md:text-5xl">
        Hi there <span className="font-bold">I'm</span>
      </p>

      <p className="text-3xl md:text-5xl pb-2 gradient-text font-extrabold">
        <TypeAnimation sequence={sequence} speed={1} repeat={Infinity} />
      </p>

      <button className="gradient-bg btn btn-md">Download Resume</button>
    </div>
  );
};

export const Illustration = () => {
  return (
    <div className="h-5/6 w-full self-end relative z-20">
      <div className="absolute inset-16 bg-gradient-to-r from-primary to-info rounded-full -z-10 blur-2xl opacity-20"></div>
      <img
        src="/assets/hero/hero-banner-3.png"
        alt=""
        className="w-full h-full"
      />
    </div>
  );
};
