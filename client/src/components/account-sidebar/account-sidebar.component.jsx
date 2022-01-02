import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/esm/AccordionButton";
import { Link, useLocation } from "react-router-dom";

import "./account-sidebar.style.scss";

const AccountSideBar = () => {
  const location = useLocation();

  const CustomTogle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <button type="button" className="toggleButton" onClick={decoratedOnClick}>
        {children}
      </button>
    );
  };

  return (
    <div className="account-sidebar">
      <Accordion defaultActiveKey={0}>
        <Card>
          <Card.Header>
            <CustomTogle eventKey={0}>
              <i className="fal fa-user"></i> บัญชีของฉัน
            </CustomTogle>
            <Accordion.Collapse eventKey={0}>
              <Card.Body>
                <ul className="account-setting">
                  <li>
                    <Link
                      className={`${
                        location.pathname === "/account/"||location.pathname === "/account"
                          ? "active"
                          : ""
                      }`}
                      to={process.env.PUBLIC_URL + "/account/profile"}
                    >
                      ประวัติส่วนตัว
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${
                        location.pathname === "/account/address" ? "active" : ""
                      }`}
                      to={process.env.PUBLIC_URL + "/account/address"}
                    >
                      ที่อยู่จัดส่ง
                    </Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card.Header>
          <Card.Header>
              <Link className="account-purchased" to={process.env.PUBLIC_URL + '/account/purchased'}>
              <i className="fal fa-clipboard-list-check"></i> คำสั่งซื้อของฉัน
              </Link>
          </Card.Header>
        </Card>
      </Accordion>
    </div>
  );
};

export default AccountSideBar;
