import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto]">
      <Navbar />
      <div className="px-8 md:px-28 lg:px-40">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
