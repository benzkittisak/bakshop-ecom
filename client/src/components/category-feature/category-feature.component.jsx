import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import SectionTitle from "../section-title/section-title.component";
import CategoryFeatureSingle from "../category-feature-single/category-feature-single.component";

import "./category-feature.style.scss";

SwiperCore.use([Navigation]);

const CategoryFeature = ({ plants }) => {
  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return { width };
  };

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const params = {
    navigation: true,
    slidesPerView: windowWidth.width < 720 ? 1 : 3,
    spaceBetween: 12,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerGroup: 1,
  };
  return (
    <div className="feature-area">
      <div className="container">
        <SectionTitle titleText={"เลือกดูตามประเภทสินค้า"} />
        <div className="row">
          <Swiper {...params} className="swiper-style">
            {plants.map((data) => (
              <SwiperSlide key={data.id}>
                <CategoryFeatureSingle plants={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  plants: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CategoryFeature);
