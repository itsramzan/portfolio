import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import data from "../../data/data";

export default function Navbar() {
  const [isVisibile, setIsVisibile] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-16 w-full z-50 backdrop-blur-3xl">
      <div className="w-10/12 h-full mx-auto flex items-center justify-between">
        <Logo />
        <Links {...{ isVisibile, setIsVisibile }} />
        <Bar {...{ isVisibile, setIsVisibile }} />
      </div>
    </div>
  );
}

export const Logo = () => {
  const {
    navbar: {
      logo: { Icon, textFirst, textLast },
    },
  } = data;

  return (
    <a
      href="#home"
      className="flex items-center gap-2 text-xl uppercase font-bold"
    >
      <Icon />
      <p>
        {textFirst}
        <span className="gradient-text">{textLast}</span>
      </p>
    </a>
  );
};

export const Links = ({ isVisibile, setIsVisibile }) => {
  const {
    navbar: { links },
  } = data;

  const [activeSection, setActiveSection] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            navigate(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.observe(section);
      });
    };
  }, []);

  useEffect(() => {
    setIsVisibile(false);
  }, [location]);

  return (
    <div
      className={`absolute ${
        isVisibile ? "-left-0" : "-left-full"
      }  top-16 duration-500 w-full h-screen bg-base-100 flex flex-col md:static md:w-auto md:h-auto md:bg-transparent md:flex-row md:gap-8`}
    >
      {links.map((link) => {
        const { id, Icon, text, to } = link;
        const active = to.endsWith(activeSection);

        return (
          <a
            key={id}
            href={to}
            className="w-10/12 md:w-auto mx-auto flex items-center gap-2 py-4 text-xl md:py-0 md:text-base"
          >
            {/* <Icon className="block md:hidden" /> */}
            <p className={`${active && "gradient-text font-semibold"}`}>
              {text}
            </p>
          </a>
        );
      })}
    </div>
  );
};

export const Bar = ({ isVisibile, setIsVisibile }) => {
  const handleVisibility = () => {
    setIsVisibile(!isVisibile);
  };

  return (
    <div className="block md:hidden">
      {isVisibile ? (
        <IoClose
          onClick={handleVisibility}
          className="btn btn-square btn-sm btn-outline btn-primary"
        />
      ) : (
        <IoMenu
          onClick={handleVisibility}
          className="btn btn-square btn-sm btn-outline btn-primary"
        />
      )}
    </div>
  );
};
