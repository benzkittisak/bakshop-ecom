import React from "react";

import './mobile-widgets.style.scss';

const MobileWidgets = () => {
    return(
        <div className="offcanvas-widget-area">
            <div className="off-canvas-contact-widget">
                <div className="header-contact-info">
                    <ul className="header-contact-info__list">
                        <li>
                            <i className="fad fa-phone"></i>
                            <a href="tel:+66650757849">+666 5075 7849</a>
                        </li>
                        <li>
                            <i className="fad fa-envelope"></i>
                            <a href="mailto:benzkittisak2017@outlook.com">benzkittisak2017@outlook.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="off-canvas-widget-social">
                <a href="https://www.facebook.com/benzkittisakPL/" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/benzkkittisak/" title="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
             
            </div>
        </div>
    )
}

export default MobileWidgets;