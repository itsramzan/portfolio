import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionLayout from "components/Layout/SectionLayout";
import Heading from "components/UI/Heading";
import services from "assets/data/services";

const Services = () => {
  return (
    <SectionLayout id="services">
      <Heading text="My Services" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {services.map((service) => (
          <Item key={service.id} {...{ service }} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Services;

const Item = ({ service }) => {
  const { Icon, title, description } = service;
  const [animate, setAnimate] = useState({});

  const { ref } = useInView({
    threshold: 1,
    onChange: (isVisible, entry) => {
      if (isVisible) {
        setAnimate({ opacity: 1, scale: 1 });
      }
    },
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={animate}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-4 p-8 rounded-md items-center bg-base-300 cursor-pointer"
    >
      <Icon className="text-3xl h-14 w-14 rounded-full p-4 bg-primary-content" />
      <p className="text-xl text-primary font-bold capitalize">{title}</p>
      <p className="text-justify">{description}</p>
    </motion.div>
  );
};
