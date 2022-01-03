import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { MetaTags } from "react-meta-tags";
import { selectSearchCollection } from "../../redux/shop/shop.selector";
import Paginator from "react-hooks-paginator";

import { getSortSearchProduct } from "../../assets/utils/product";

import Layout from "../../layouts/layouts.component";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import ShopProduct from "../../components/shop-product/shop-product.component";
import ShopTopBar from "../../components/shop-top-bar/shop-top-bar.component";

const SearchPage = ({ plants }) => {
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [currentPlantData, setCurrentPlantData] = useState(plants);
  const [plantsCount, setPlantsCount] = useState(0);
  const [layout, setLayout] = useState("grid three-column");

  // Pagination
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 15;


  const getFilterParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const getLayout = (layout) => {
    setLayout(layout);
  };

  useEffect(() => {
    let sortedProduct = plants
    let filterSortedProducts = [];
    if (filterSortType && filterSortValue) {
      filterSortedProducts = getSortSearchProduct(
        sortedProduct,
        filterSortType,
        filterSortValue
      );
      sortedProduct = filterSortedProducts;
    }
    setPlantsCount(sortedProduct.length);
    setCurrentPlantData(sortedProduct.slice(offset, offset + pageLimit));
  }, [offset, plants, filterSortType, filterSortValue]);

  return (
    <Fragment>
      <MetaTags>
        <title>BakShop | ร้านขายต้นไม้</title>
      </MetaTags>

      <Layout>
        <Breadcrumbs />
        <div className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ShopTopBar
                  getLayout={getLayout}
                  getFilterParams={getFilterParams}
                  productCount={plantsCount}
                  sortedProductCount={currentPlantData.length}
                />
                <ShopProduct layout={layout} product={currentPlantData} />

                <div className="product-pagination-style text-center mt-5">
                  <Paginator
                    totalRecords={plantsCount}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  plants: selectSearchCollection(ownProps.params)(state),
});
export default connect(mapStateToProps)(SearchPage);
