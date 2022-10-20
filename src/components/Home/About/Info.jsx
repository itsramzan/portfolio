import React from "react";
import SocialLink from "./SocialLink";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

const Info = () => {
  return (
    <div className="col-span-12 md:col-span-8 space-y-4">
      <h2 className="text-4xl font-bold">
        Hi I'm <span className="text-primary">Ramzan Ali</span>
      </h2>
      <p className="text-secondary text-justify">
        Full stack web developer based on Bangladesh. I have enough knowledge
        about Front-end & Backend technology. I know HTML, CSS, Tailwind CSS,
        JavaScript,React, Redux, Node.js, Express.js and many more. I am
        available for any remote job.
      </p>
      <div className="flex items-center gap-4">
        <SocialLink
          to="https://www.facebook.com/rimonians"
          Icon={IoLogoFacebook}
        />
        <SocialLink
          to="https://www.instagram.com/rimonians"
          Icon={IoLogoInstagram}
        />
        <SocialLink
          to="https://www.twitter.com/rimonians"
          Icon={IoLogoTwitter}
        />
        <SocialLink
          to="https://www.linkedin.com/in/itsramzan"
          Icon={IoLogoLinkedin}
        />
        <SocialLink to="https://www.github.com/itsramzan" Icon={IoLogoGithub} />
      </div>
    </div>
  );
};

export default Info;
