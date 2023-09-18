import React from "react";
import data from "../../data/data";
import { IoHeart } from "react-icons/io5";

export default function Footer() {
  const {
    banner: { author },
    contacts: { socialLinks },
  } = data;

  return (
    <div className="w-10/12 h-16 mx-auto flex items-center justify-between">
      <p className="flex items-center gap-2">
        Made with <IoHeart /> by
        <a href={socialLinks[0].link} className="gradient-text font-bold">
          {author}
        </a>
      </p>
    </div>
  );
}
