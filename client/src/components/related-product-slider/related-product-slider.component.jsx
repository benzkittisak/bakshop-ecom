import React from "react";
import { Swiper } from "swiper/react";

import SectionTitle from "../section-title/section-title.component";
import ProductGridContainer from "../product-grid/product-grid.container";

import "./related-product-slider.style.scss";

const RelatedProductSlider = ({ category }) => {
  const swiperParams = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className="related-product-area pb-5">
      <div className="container">
        <SectionTitle titleText={"สินค้าอื่น ๆ"} />
        <div className="row pt-5 pb-5">
          <ProductGridContainer className="pt-5" category={category} limit={4} />
        </div>
      </div>
    </div>
  );
};

export default RelatedProductSlider;
