import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom";


// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination";
import "swiper/components/effect-cube";

import "./slider.css";
import slider1 from "../images/slider1.png";
import slider2 from "../images/slider2.png";
import slider3 from "../images/slider3.png";
import slider4 from "../images/slider4.png";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);

const Slider = () => {
  return (
    <Swiper
      id="slider"
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
        <Link to="/man">
          <img src={slider1} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.massimodutti.com/es/hombre/nuevo%2Fchaqueta-piel-napa-cuello-pelo-c1866501p10022899.html"
          target="_blank"
        >
          <img src={slider2} />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.massimodutti.com/es/mujer/colecci%C3%B3n/americanas%2Famericana-traje-marr%C3%B3n-100%25-lana-c1732532p9390607.html"
          target="_blank"
        >
          <img src={slider3} />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a
          href="https://www.massimodutti.com/es/hombre/nuevo%2Fjersey-lana-punto-cable-cuello-alto-c1866501p9936659.html"
          target="_blank"
        >
          <img src={slider4} />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
