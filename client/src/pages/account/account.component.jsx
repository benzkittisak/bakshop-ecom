import React, { Fragment } from "react";
import { Routes, Route , Navigate } from "react-router-dom";
import { MetaTags } from "react-meta-tags";

import Layout from "../../layouts/layouts.component";
import ProfileImage from "../../components/profile-image/profile-image.component";

import {default as AccountOrder} from "../../components/account-order/account-order.container";
import AccountSideBar from "../../components/account-sidebar/account-sidebar.component";
import AccountProfile from "../../components/account-profile/account-profile.component";
import AccountAddress from "../../components/account-address/account-address.component";

import "./account.style.scss";

const AccountPage = ({ currentUser }) => {
  if (!currentUser) {
    return (window.location.href = process.env.PUBLIC_URL + "/login");
  }
  const { id, image } = currentUser;
  return (
    <Fragment>
      <MetaTags>
        <title>BakShop | บัญชีของฉัน</title>
      </MetaTags>

      <Layout>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-2 d-block col-12 d-lg-block">
             <ProfileImage currentUser={currentUser} image={image}/>
             <AccountSideBar/>
            </div>
            <div className="col-lg-10 col-12">
              <Routes>
                <Route exact path="/" element={<AccountProfile currentUser={currentUser}/>}/>
                <Route exact path="/profile" element={<Navigate to={'/account/'}/>}/>
                <Route exact path="/address" element={<AccountAddress currentUser={currentUser}/>}/>
                <Route exact path='/purchased' element={<AccountOrder uid={id}/>} />
              </Routes>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default (AccountPage);
