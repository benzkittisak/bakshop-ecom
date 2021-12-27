import React from "react";
import { Link } from "react-router-dom";

import "./category-feature-single.style.scss";

const CategoryFeatureSingle = ({ plants }) => {
  const { title, routeName, previewImage } = plants;
  return (
    <div className="col-md-12 col-12">
      <div className="feature-wrap mb-30 scroll-zoom">
        <div className="feature-img">
          <Link to={process.env.PUBLIC_URL + routeName}>
            <img src={previewImage} alt="" />
          </Link>
        </div>
        <div className="feature-content-wrap">
          <div className="feature-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + routeName}>{title}</Link>
            </h3>
            <span>
              <Link to={process.env.PUBLIC_URL + routeName}>
                เลือกชมสินค้าได้เลย
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFeatureSingle;
