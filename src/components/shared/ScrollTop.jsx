import React from "react";
import { IoArrowUp } from "react-icons/io5";
import scrollTop from "../../utils/scrollTop";

const ScrollTop = () => {
  return (
    <div
      className="fixed bottom-5 right-5 z-50 cursor-pointer"
      onClick={scrollTop}
      title="Back to top"
    >
      <IoArrowUp className="text-2xl text-primary" />
    </div>
  );
};

export default ScrollTop;
