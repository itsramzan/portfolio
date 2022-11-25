import React from "react";

const Heading = ({ text }) => {
  const [first, ...rest] = text.split(" ");

  return (
    <div className="flex justify-center items-center">
      <p className="text-3xl font-bold capitalize">
        {first} <span className="text-primary">{rest}</span>
      </p>
    </div>
  );
};

export default Heading;
