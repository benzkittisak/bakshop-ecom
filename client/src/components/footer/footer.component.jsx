import React from "react";
import { Link } from "react-router-dom";

import "./footer.style.scss";

const Footer = ({ backgroundColor, spaceTop, spaceBottom }) => {
  return (
    <footer
      className={`footer ${backgroundColor ? backgroundColor : ""} ${
        spaceTop ? spaceTop : ""
      } ${spaceBottom ? spaceBottom : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-4">
            <div className="copy-right">
                <p>© 2021 BakShop. All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>เกี่ยวกับเรา</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/about"}>
                      เกี่ยวกับเรา
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/contact"}>
                      ติดต่อเรา
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/account/tracking"}>
                      ติดตามสินค้า
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4">
            <div className="footer-widget mb-30 ml-30">
              <div className="footer-title">
                <h3>ติดตามเราได้ที่</h3>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <Link to={"https://www.facebook.com/benzkittisakPL/"}>
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
