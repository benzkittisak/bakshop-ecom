import React from "react";
import { Link } from "react-router-dom";

import "./single-image-slider.style.scss";

const SingleImageSlider = ({ data, sliderClassName }) => {
  const { title, type, imageUrl, routeName } = data;
  return (
    <div
      className={`single-slider bg-green ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content slider-animated-1">
              <h3 className="animated">{title}</h3>
              <h1 className="animated">{type}</h1>
              <div className="slider-btn">
                <Link
                  className="animated hvr-sweep-to-right"
                  to={process.env.PUBLIC_URL + routeName}
                >
                  ซื้อเลย !!
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-single-img slider-animated-1">
              <img className="animated img-res" src={imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImageSlider;
