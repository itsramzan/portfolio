import React from "react";
import useTheme from "../../../hooks/useTheme";

const Item = ({ title, info, viewBox, children }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105">
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox={viewBox}
        fill={theme === "dark" ? "#16bef5" : "#6b2cd5"}
        height="50"
      >
        {children}
      </svg>
      <h3 className="text-xl text-accent font-bold mt-2">{title}</h3>
      <p className="text-secondary text-justify">{info}</p>
    </div>
  );
};

export default Item;
