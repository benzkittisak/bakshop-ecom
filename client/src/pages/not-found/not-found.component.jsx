import React, { Fragment } from "react";
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import Layout from "../../layouts/layouts.component";

import "./not-found.style.scss";

const NotFound = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>ไม่พบหน้าที่คุณต้องการ</title>
      </MetaTags>
      <Layout>
        <Breadcrumbs />
        <div className="error-area pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>เกิดข้อผิดพลาด !! ไม่พบหน้าที่คุณต้องการ</h2>
                  <p>
                    ขออภัยในความไม่สะดวก
                    หน้าที่คุณต้องการไม่มีอยู่อาจจะถูกลบไปแล้ว
                    หรือเปลี่ยนชื่อไปแล้ว หรืออาจจะไม่พร้อมใช้งานในตอนนี้
                  </p>
                  <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                    กลับไปที่หน้าแรก
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};
export default NotFound;
