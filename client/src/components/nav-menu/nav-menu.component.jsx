import React from "react";
import { Link } from "react-router-dom";

import "./nav-menu.style.scss";

const NavMenu = () => {
  return (
    <div className="main-menu">
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>หน้าแรก</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/shop'}>ร้านค้า</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/contact'}>ติดต่อเรา</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
