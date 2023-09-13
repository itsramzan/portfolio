import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-8 rounded-lg  border-primary border-opacity-20 space-y-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-info rounded-full -z-10 blur-2xl opacity-20"></div>
      {children}
    </div>
  );
};

export default Card;
