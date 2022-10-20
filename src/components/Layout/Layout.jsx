import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto]">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
