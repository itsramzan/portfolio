import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoSunnyOutline,
  IoCloudyNight,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-16 bg-base-100 flex justify-between items-center fixed top-0 z-50 px-4 md:px-28">
      <Logo />
      <div className="flex items-center gap-8">
        <Links show={show} />
        <Theme />
        <Bar show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default Navbar;

const Logo = () => {
  return (
    <div>
      <Link to="/" className="text-xl font-bold uppercase">
        its<span className="text-primary">ramzan</span>
      </Link>
    </div>
  );
};

const Links = ({ show }) => {
  return (
    <div
      className={`flex flex-col fixed top-[64px] ${
        show ? "left-[0%]" : "left-[-100%]"
      } transition-all delay-200 bottom-0 w-full h-screen bg-base-100 p-4 gap-4 md:static md:bg-transparent md:h-auto md:w-auto md:flex md:flex-row md:item-center md:gap-4`}
    >
      <LinkItem href="#banner" text="Home" />
      <LinkItem href="#about" text="About" />
      <LinkItem href="#services" text="Services" />
      <LinkItem href="#portfolio" text="Portfolio" />
      <LinkItem href="#clients" text="Clients" />
      <LinkItem href="#contact" text="Contact" />
    </div>
  );
};

const LinkItem = ({ href, text }) => {
  return (
    <a href={href} className="text-3xl text-center md:text-base font-medium">
      {text}
    </a>
  );
};

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return theme === "light" ? (
    <IoSunnyOutline onClick={toggleTheme} className="text-lg cursor-pointer" />
  ) : (
    <IoCloudyNight onClick={toggleTheme} className="text-lg cursor-pointer" />
  );
};

const Bar = ({ show, setShow }) => {
  const handleSetShow = () => {
    setShow(!show);
  };

  return !show ? (
    <IoMenu
      onClick={handleSetShow}
      className="flex md:hidden text-2xl cursor-pointer"
    />
  ) : (
    <IoClose
      onClick={handleSetShow}
      className="flex md:hidden text-2xl cursor-pointer"
    />
  );
};
