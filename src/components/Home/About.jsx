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
  IoLogoYoutube,
} from "react-icons/io5";

const About = () => {
  return (
    <SectionLayout id="about">
      <Heading text="About Me" />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-4/12 bg-base-300 p-8 rounded-md space-y-8">
          <img src={avatar} alt="" className="h-96 object-top rounded-md" />
          <div className="flex items-center justify-between gap-2">
            <a
              href="https://www.facebook.com/itsramzan"
              className="btn btn-square btn-sm btn-primary rounded-full"
            >
              <IoLogoFacebook />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="btn btn-square btn-sm btn-primary rounded-full"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="btn btn-square btn-sm btn-primary rounded-full"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="btn btn-square btn-sm btn-primary rounded-full"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="btn btn-square btn-sm btn-primary rounded-full"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://www.facebook.com/itsramzan"
              className="btn btn-square btn-sm btn-primary rounded-full"
            >
              <IoLogoYoutube />
            </a>
          </div>
        </div>

        <div className="w-full md:w-8/12">Tab bar</div>
      </div>
    </SectionLayout>
  );
};

export default About;
