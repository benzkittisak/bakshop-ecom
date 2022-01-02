import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ text, isGoogleSignIn, ...otherProps }) => {
  return (
    <div className="button-box">
      <button
        className={`${isGoogleSignIn ? "google-button" : ""}`}
        {...otherProps}
      >
        {isGoogleSignIn? <i className="fab fa-google"></i> : ' '} {text}
      </button>
    </div>
  );
};

export default CustomButton;
