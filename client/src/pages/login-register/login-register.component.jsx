import React, { Fragment } from "react";
import { MetaTags } from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import Layout from "../../layouts/layouts.component";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";

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
                      <Tab.Pane eventKey={"login"}>
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="username"
                                placeholder="ชื่อผู้ใช้"
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="รหัสผ่าน"
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>เข้าสู่ระบบ</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey={"register"}>
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="displayName"
                                placeholder="ชื่อบนเว็บ"
                              />
                              <input
                                type="text"
                                name="username"
                                placeholder="ชื่อผู้ใช้"
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="รหัสผ่าน"
                              />
                              <input
                                type="password"
                                name="confirmPassword"
                                placeholder="ยืนยันรหัสผ่านรหัสผ่าน"
                              />

                              <div className="button-box">
                                <button type="submit">สมัครสมาชิก</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
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
