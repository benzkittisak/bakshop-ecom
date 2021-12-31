import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { MetaTags } from "react-meta-tags";

import Layout from "../../layouts/layouts.component";
import ProfileImage from "../../components/profile-image/profile-image.component";
import {default as AccountOrder} from "../../components/account-order/account-order.container";

import "./account.style.scss";

const AccountPage = ({ currentUser }) => {
  if (!currentUser) {
    return (window.location.href = process.env.PUBLIC_URL + "/login");
  }
  const { displayName, id, image } = currentUser;
  return (
    <Fragment>
      <MetaTags>
        <title>BakShop | บัญชีของฉัน</title>
      </MetaTags>

      <Layout>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block">
             <ProfileImage image={image}/>
            </div>
            <div className="col-lg-9 col-12">
              <Routes>
                <Route exact path='/' element={<AccountOrder uid={id}/>} />
              </Routes>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default (AccountPage);
