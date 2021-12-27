import React from "react";
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
  const params = {
    navigation: true,
    slidesPerView:3,
    spaceBetween:12
  };
  return (
    <div className="feature-area">
      <div className="container">
        <SectionTitle titleText={"เลือกดูตามประเภทสินค้า"} />
        <div className="row">
          <Swiper {...params} className="swiper-style">
            {plants.map((data) => (
              <SwiperSlide key={data.id}>
                  <CategoryFeatureSingle plants={data}/>
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
