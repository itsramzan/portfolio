import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-16 px-8 md:px-28 lg:px-40 flex justify-between items-center">
      <p className="text-gray-500">
        Copyright ©{" "}
        <Link to="/" className="text-blue-700 font-semibold">
          Md Ramzan Ali
        </Link>
      </p>
    </div>
  );
};

export default Footer;
