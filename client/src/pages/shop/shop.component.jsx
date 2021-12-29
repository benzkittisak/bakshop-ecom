import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MetaTags from "react-meta-tags";

import Layout from "../../layouts/layouts.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { getSortProduct, mergeProduct } from "../../assets/utils/product";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import ShopSidebar from "../../components/shop-sidebar/shop-sidebar.component";
import ShopProduct from "../../components/shop-product/shop-product.component";
import ShopTopBar from "../../components/shop-top-bar/shop-top-bar.component";

import "./shop.style.scss";

const ShopPage = ({ plants }) => {
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPlantData, setCurrentPlantData] = useState(plants);
  const [plantsCount, setPlantsCount] = useState(0);
  const [layout, setLayout] = useState("grid three-column");

  const pageLimit = 15;

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const getLayout = (layout) => {
    setLayout(layout);
  };

  useEffect(() => {
    let sortedProduct = getSortProduct(plants, sortType, sortValue);
    let filterSortedProducts = [];
    if(filterSortType && filterSortValue){
      filterSortedProducts = getSortProduct(
        sortedProduct,
        filterSortType,
        filterSortValue
      );
      sortedProduct = filterSortedProducts;
    }
    setPlantsCount(sortedProduct.length);
    setCurrentPlantData(sortedProduct.slice(offset, offset + pageLimit));
  }, [offset, plants, sortType, sortValue, filterSortType, filterSortValue]);

  console.log(filterSortValue);
  return (
    <Fragment>
      <MetaTags>
        <title>BakShop | ร้านค้า</title>
      </MetaTags>

      <Layout>
        <Breadcrumbs />
        <div className="shop-area pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <ShopSidebar product={plants} getSortParams={getSortParams} />
              </div>
              <div className="col-lg-9">
                <ShopTopBar
                  getLayout={getLayout}
                  getFilterParams={getFilterParams}
                  productCount={plantsCount}
                  sortedProductCount={currentPlantData.length}
                />
                <ShopProduct layout={layout} product={currentPlantData} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  plants: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(ShopPage);
