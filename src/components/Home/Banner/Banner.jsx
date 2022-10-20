import React from "react";
import { TypeAnimation } from "react-type-animation";
import avatar from "../../../assets/images/avatar.jpg";
import cv from "../../../assets/documents/cv.pdf";

const Banner = () => {
  return (
    <section
      id="banner"
      className="h-screen w-full grid place-items-center relative"
    >
      <div className="flex flex-col items-center gap-4 px-4">
        {/* Banner image */}
        <div className="bg-primary rounded-full p-2">
          <img
            src={avatar}
            alt=""
            className="h-40 w-40 object-top rounded-full"
          />
        </div>

        {/* Banner typing */}
        <h1 className="text-accent text-4xl md:text-6xl text-center font-semibold">
          Hi I'm{" "}
          <span className="text-primary font-extrabold">
            <TypeAnimation
              sequence={[
                "Ramzan Ali",
                2000,
                "Designer",
                2000,
                "Developer",
                2000,
                "Programmer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </h1>

        {/* Banner info */}
        <p className="text-secondary">
          Full stack web developer based on{" "}
          <span className="font-semibold">Bangladesh</span>
        </p>

        {/* Banner button */}
        <div>
          <a
            href={cv}
            download
            className="inline-block ring-2 ring-primary rounded-full px-6 py-3 text-primary font-semibold cursor-pointer hover:bg-primary hover:text-base-100"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
