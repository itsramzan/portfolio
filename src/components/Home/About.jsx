import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
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
import skills from "assets/data/skills";

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

        <div className="w-full md:w-8/12">
          <Tabs className="space-y-8 rounded-md overflow-hidden cursor-pointer">
            <TabList className="flex gap-4">
              {Object.keys(skills).map((item) => (
                <Tab
                  key={item}
                  id={item}
                  className="btn py-4 btn-base-300 gap-4"
                  selectedClassName="btn-primary"
                >
                  {item}
                </Tab>
              ))}
            </TabList>

            {Object.entries(skills).map((item) => {
              return (
                <TabPanel key={item[0]}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {item[1].map((el) => (
                      <div
                        key={el.title}
                        className="bg-base-300 p-4 rounded-md flex flex-col items-center gap-4"
                      >
                        <img src={el.image} alt="" className="h-14 w-14" />
                        <p className="font-semibold">{el.title}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, assumenda.</p>
                      </div>
                    ))}
                  </div>
                </TabPanel>
              );
            })}
          </Tabs>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
