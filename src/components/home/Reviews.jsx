import React from "react";
import Heading from "../shared/Heading";
import data from "../../data/data";
import Slider from "../shared/Slider";
import { SwiperSlide } from "swiper/react";
import Card from "../shared/Card";

const Reviews = () => {
  const { reviews } = data;

  return (
    <div className="space-y-10">
      <Heading text="Reviews" />

      <Slider>
        {reviews.map((review) => {
          const { id, image, name, job, review: text } = review;

          return (
            <SwiperSlide key={id}>
              <Card>
                <div className="flex flex-col gap-2 items-center cursor-pointer">
                  <img
                    src={image}
                    alt=""
                    className="h-20 w-20 rounded-full mb-2 outline outline-primary outline-offset-4"
                  />
                  <p className="text-xl font-semibold">{name}</p>
                  <p>{job}</p>
                  <p className="text-justify">{text}</p>
                </div>
              </Card>
            </SwiperSlide>
          );
        })}
      </Slider>
    </div>
  );
};

export default Reviews;
