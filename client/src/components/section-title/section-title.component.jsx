import React from "react";

import "./section-title.style.scss";

const SectionTitle = ({ titleText }) => {
  return (
    <div className="section-title">
      <h2>{titleText}</h2>
    </div>
  );
};

export default SectionTitle;
