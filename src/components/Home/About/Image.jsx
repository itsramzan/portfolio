import React from "react";
import avatar from "../../../assets/images/avatar.jpg";

const Image = () => {
  return (
    <div className="col-span-12 md:col-span-4">
      <img src={avatar} alt="" className="rounded-lg" />
    </div>
  );
};

export default Image;
