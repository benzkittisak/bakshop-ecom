import React, { Fragment } from "react";
import { MetaTags } from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import Layout from "../../layouts/layouts.component";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import Login from "../../components/login/login.component";
import Register from "../../components/register/register.componet";

import "./login-register.style.scss";

const LoginRegisterPage = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>BakShop | เข้าสู่ระบบ</title>
      </MetaTags>
      <Layout>
        <Breadcrumbs />
        <div className="login-register-area pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pill" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey={"login"}>
                          <h4>เข้าสู่ระบบ</h4>
                        </Nav.Link>
                        <Nav.Link eventKey={"register"}>
                          <h4>สมัครสมาชิก</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Login />
                      <Register />
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};
export default LoginRegisterPage;
