import React from "react";

import "./feature-icon-single.style.scss";

const FeatureIconSingle = ({ data }) => {
  const { title, subtitle, image } = data;
  return (
    <div className="col-md-3 col-sm-6 col-6">
      <div className="feature-container mb-30">
        <div className="feature-icon">
          <img className="animated" src={image} alt="" />
        </div>
        <div className="feature-content">
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureIconSingle;
