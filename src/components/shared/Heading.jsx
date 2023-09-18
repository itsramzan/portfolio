import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="w-full flex justify-center">
      <h1 className="gradient-text text-center text-3xl font-bold">{text}</h1>
    </div>
  );
};

export default Heading;
