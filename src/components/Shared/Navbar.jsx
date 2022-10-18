import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link
      to="/"
      className="h-16 px-8 md:px-28 lg:px-40 flex justify-between items-center sticky top-0 bg-white"
    >
      <div className="flex items-center gap-2">
        <IoCodeSlash className="text-2xl text-blue-700 font-bold" />
        <p className="text-lg uppercase font-semibold">
          its<span className="text-blue-700">ramzan</span>
        </p>
      </div>
    </Link>
  );
};

export default Navbar;
