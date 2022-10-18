import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold">
          Hi! I'm <span className="text-blue-700">Md Ramzan Ali</span>
        </h1>
        <p>
          Full stack web developer based on <span>Bangladesh</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
