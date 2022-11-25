import React from "react";

const SectionLayout = ({ id, children }) => {
  return (
    <section id={id} className="px-4 md:px-20 pt-20 space-y-16">
      {children}
    </section>
  );
};

export default SectionLayout;
