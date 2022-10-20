import React from "react";
import Navbar from "../Shared/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
