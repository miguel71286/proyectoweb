import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination";
import "swiper/components/effect-cube";

import "./slider.css";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);

const Slider = () => {
  return (
    <Swiper
      effect={"cube"}
      loop={true}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <a href="http://www.apple.com" target="_blank"><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></a>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
