import React from "react";

const SocialLink = ({ to, Icon }) => {
  return (
    <a
      href={to}
      className="flex justify-center items-center h-8 w-8 bg-secondary rounded-md transition-colors duration-500 hover:bg-primary hover:text-base-100"
    >
      <Icon />
    </a>
  );
};

export default SocialLink;
