import React from "react";

import MobileMenuSearch from "../mobile-menu-search/mobile-menu-search.component";
import MobileNavMenu from "../mobile-nav-menu/mobile-nav-menu.component";
import MobileWidgets from "../mobile-widgets/mobile-widgets.component";

import './mobile-menu.style.scss';

const MobileMenu = () => {

    const closeMobileMenu = () => {
        const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
        offcanvasMobileMenu.classList.remove('active')
    }

    return(
        <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
            <button id="offcanvas-mobile-close" onClick={() => closeMobileMenu()} className="offcanvas-menu-close">
                <i className="fad fa-times"></i>
            </button>

            <div className="offcanvas-wrapper">
                <div className="offcanvas-inner-content">
                    <MobileMenuSearch/>
                    <MobileNavMenu/>
                    <MobileWidgets/>

                </div>
            </div>
        </div>
    )
}

export default MobileMenu;