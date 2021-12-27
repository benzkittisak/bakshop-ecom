import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'

// Components
import NavMenu from "../nav-menu/nav-menu.component";
import IconGroup from "../icon-group/icon-group.component";
import WebLogo from "../web-logo/web-logo.component";

import "./header.styles.scss";

const Header = ({layout}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <header className="header-area clearfix">
      <div
        className={`sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
          <div className={`${layout === 'full' ? 'container-fluid' : "container"}`}>
            <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                    <WebLogo/>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                    <NavMenu />
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                    <IconGroup/>
                </div>
            </div>
          </div>
      </div>
    </header>
  );
};
Header.propTypese = {
    layout:PropTypes.string
}
export default Header;
