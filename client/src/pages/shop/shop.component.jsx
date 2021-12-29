import React, { Fragment } from "react";
import {Routes , Route , useParams} from 'react-router-dom';
import MetaTags from "react-meta-tags";

import Layout from "../../layouts/layouts.component";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import ShopArea from "../../components/shop-area/shop-area.component";
import ProductPage from "../product/product.component";

import "./shop.style.scss";

const ShopPage = ({ plants }) => {
  const params = useParams();
  return (
    <Fragment>
      <MetaTags>
        <title>BakShop | ร้านค้า</title>
      </MetaTags>

      <Layout>
        <Breadcrumbs />
        <Routes>
          <Route exact path="/" element={<ShopArea/>}/>
          <Route path=":productName" element={<ProductPage params={params}/>}/>
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default ShopPage;
