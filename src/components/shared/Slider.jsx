import React from "react";
import { Pagination, A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

const Slider = ({ children }) => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay, Keyboard]}
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      centeredSlides={true}
      loop={true}
      slidesPerGroup={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      keyboard
    >
      {children}
    </Swiper>
  );
};

export default Slider;
