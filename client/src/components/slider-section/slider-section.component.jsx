import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore , {Navigation , Autoplay} from 'swiper'

import SingleImageSlider from "../single-image-slider/single-image-slider.component"

import SLIDE_DATA from "./slide.data";


import "swiper/css";
import "swiper/css/bundle"
import "./slider-section.style.scss";

// Swiper Config
SwiperCore.use([Navigation , Autoplay])

const SliderSection = () => {
  const params = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper
          {...params}
        >
          {SLIDE_DATA.map((data) => (
            <SwiperSlide key={data.id}>
              <SingleImageSlider
                sliderClassName="swiper-slide"
                data={data}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSection;
