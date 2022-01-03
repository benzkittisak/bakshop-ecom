import React from "react";
import { Link } from "react-router-dom";

import "./mobile-nav-menu.style.scss";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>หน้าแรก</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop"}>ร้านค้า</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>ติดต่อเรา</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
