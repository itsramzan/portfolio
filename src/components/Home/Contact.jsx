import React from "react";
import SectionLayout from "components/Layout/SectionLayout";
import Heading from "components/UI/Heading";
import contact from "assets/data/contact";

const Contact = () => {
  return (
    <SectionLayout id="contact">
      <Heading text="Contact me" />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full flex flex-wrap gap-8">
          {contact.map((item) => (
            <div key={item.id} className="flex-1 flex flex-col items-center justify-center gap-2 bg-base-300 p-4 rounded-md">
              <item.Icon className="text-2xl" />
              <p className="font-semibold mt-2">{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full">
          <form action="" className="space-y-4 bg-base-300 p-4 rounded-md">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="input input-primary w-full bg-transparent"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-primary w-full bg-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="10"
                rows="5"
                placeholder="Write your message..."
                className="textarea textarea-primary bg-transparent"
              ></textarea>
            </div>

            <div>
              <button className="btn btn-primary w-full">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
