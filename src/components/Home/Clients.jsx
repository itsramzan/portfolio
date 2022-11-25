import React from "react";
import SectionLayout from "components/Layout/SectionLayout";
import Heading from "components/UI/Heading";
import Slider from "components/UI/Slider";
import { SwiperSlide } from "swiper/react";
import clients from "assets/data/clients";

const Clients = () => {
  return (
    <SectionLayout id="clients">
      <Heading text="Clients says" />

      <div className="w-full">
        <Slider>
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex flex-col items-center gap-2 text-center cursor-pointer bg-base-300 rounded-md p-8">
                <img src={client.avatar} alt="" className="h-28 w-28 rounded-full mb-4" />
                <p className="text-xl text-primary font-bold">{client.name}</p>
                <p className="text-sm font-semibold">{client.job}</p>
                <p className="">"{client.says}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </SectionLayout>
  );
};

export default Clients;
