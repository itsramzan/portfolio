import React from "react";
import avatar from "assets/images/avatar.jpg";
import cv from "assets/documents/cv.pdf";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div id="banner" className="relative z-10 h-screen w-full">
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 opacity-20 rounded-full bg-info blur-3xl"></div>
      <div className="absolute top-40 right-0 -z-10 h-44 w-44 opacity-20 rounded-full bg-success blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-screen px-4 md:px-20 flex justify-center items-center"
      >
        <div className="flex flex-col items-center gap-4">
          <img
            src={avatar}
            alt=""
            className="h-40 w-40 object-top rounded-full ring-4 ring-offset-8 ring-offset-base-100 ring-primary"
          />
          <p className="text-4xl md:text-6xl font-semibold">
            I'm <span className="text-primary font-bold">Ramzan Ali</span>
          </p>
          <p>
            Full stack web developer based on{" "}
            <span className="text-primary font-bold">Bangladesh</span>
          </p>
          <div>
            <a href={cv} download className="btn btn-primary rounded-full">
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
