import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

import "./product-image-gallery.style.scss";

const ProductImageGallery = ({ product }) => {
  const { showImage } = Object.assign({}, ...product);
  const [thumbnailSwiper, setThumbnailSwiper] = useState(null);

  // swiper slider settings
  const gallerySwiperParam = {
    thumbs: { swiper: thumbnailSwiper },
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    effect: "fade",
    modules: [Thumbs],
  };

  const thumbnailSwiperSettings = {
    navigation: {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev",
    },
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    loop: true,
    touchRatio: 0.2,
    freeMode: true,
    slideToClickedSlide: true,
    modules: [Thumbs],
    onSwiper: setThumbnailSwiper,
    watchSlidesProgress: true,
  };

  // Swiper Core setting
  SwiperCore.use([Navigation]);

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        {product.new ? <span className="purple">ใหม่</span> : ""}
        <LightgalleryProvider>
          <Swiper {...gallerySwiperParam}>
            {showImage.map((item, key) => (
              <SwiperSlide key={key}>
                <LightgalleryItem group={"any"} src={item}>
                  <button>
                    <i className="fad fa-expand"></i>
                  </button>
                </LightgalleryItem>
                <div className="single-image">
                  <img src={item} className="img-fluid" alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </LightgalleryProvider>
      </div>
      <div className="product-small-image-wrapper mt-5">
        <Swiper {...thumbnailSwiperSettings}>
          {showImage.map((item, key) => (
            <SwiperSlide key={key}>
              <div className="single-image">
                <img src={item} className="img-fluid" alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fragment>
  );
};

export default ProductImageGallery;
