import React from "react";
import SectionLayout from "components/Layout/SectionLayout";
import Heading from "components/UI/Heading";
import avatar from "assets/images/avatar.jpg";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";

const About = () => {
  return (
    <SectionLayout id="about">
      <Heading text="About Me" />

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4 bg-base-300 p-8 rounded-md space-y-8">
          <img src={avatar} alt="" className="h-96 object-top rounded-md" />
          <div className="flex items-center justify-between gap-4">
            <a
              href="https://www.facebook.com/itsramzan"
              className="text-xl btn btn-sm btn-primary"
            >
              <IoLogoFacebook />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="text-xl btn btn-sm btn-primary"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="text-xl btn btn-sm btn-primary"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="text-xl btn btn-sm btn-primary"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="text-xl btn btn-sm btn-primary"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">right</div>
      </div>
    </SectionLayout>
  );
};

export default About;
