import React from "react";
import Navbar from "components/Shared/Navbar";
import Footer from "components/Shared/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto] grid-cols-12 bg-base-100">
      <Navbar />
      <div className="col-span-12">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
