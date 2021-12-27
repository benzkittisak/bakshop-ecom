import React from "react";

import FeatureIconSingle from "../feature-icon-single/feature-icon-single.component";

import "./feature-icon.style.scss";

import FEATURE_ICON_DATA from "./feature-icon";

const FeatureIcon = () => {
  return (
    <div className="support-area pt-100 pb-60">
      <div className="container">
        <div className="row">
          {FEATURE_ICON_DATA.map((data) => (
            <FeatureIconSingle data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureIcon;
