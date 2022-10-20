import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="flex justify-center mb-12">
      <h1 className="text-accent text-4xl font-bold">{text}</h1>
    </div>
  );
};

export default Heading;
