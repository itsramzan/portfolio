import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="col-span-12 h-16 px-4 md:px-20 flex justify-between items-center">
      <p>
        Copyright ©{" "}
        <Link to="/" className="text-primary font-semibold">
          Md Ramzan Ali
        </Link>
      </p>
    </div>
  );
};

export default Footer;
