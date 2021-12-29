import React from "react";
import { Link } from "react-router-dom";

import "./web-logo.style.scss";

const WebLogo = () => {
  return (
    <div className="logo">
      <Link to="/">BakShop</Link>
    </div>
  );
};

export default WebLogo;
