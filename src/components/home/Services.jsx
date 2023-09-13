import React from "react";
import Heading from "../shared/Heading";
import data from "../../data/data";
import Card from "../shared/Card";

const Services = () => {
  const { services } = data;

  return (
    <div className="space-y-10 w-full">
      <Heading text="Services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const { id, Icon, title, description } = service;

          return (
            <Card key={id}>
              <Icon className="text-4xl text-primary" />
              <p className="font-semibold text-xl">{title}</p>
              <p className="text-justify">{description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
