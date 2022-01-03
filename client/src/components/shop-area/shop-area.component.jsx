import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Paginator from "react-hooks-paginator";
import { useLocation } from "react-router-dom";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import { getSortProduct } from "../../assets/utils/product";

import ShopSidebar from "../shop-sidebar/shop-sidebar.component";
import ShopProduct from "../shop-product/shop-product.component";
import ShopTopBar from "../shop-top-bar/shop-top-bar.component";

const ShopArea = ({ plants }) => {

  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [currentPlantData, setCurrentPlantData] = useState(plants);
  const [plantsCount, setPlantsCount] = useState(0);
  const [layout, setLayout] = useState("grid three-column");

  const params = useLocation();
  

  // Pagination
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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
    let category = params.search.split('=')[1];
    let sortedProduct = [];
    if (category && sortType === "") {
      sortedProduct = getSortProduct(plants, 'type', category);
    }
    else {
      category="";
      sortedProduct = getSortProduct(plants, sortType, sortValue);
    }
    let filterSortedProducts = [];
    if (filterSortType && filterSortValue) {
      filterSortedProducts = getSortProduct(
        sortedProduct,
        filterSortType,
        filterSortValue
      );
      sortedProduct = filterSortedProducts;
    }
    
    setPlantsCount(sortedProduct.length);
    setCurrentPlantData(sortedProduct.slice(offset, offset + pageLimit));
    
  }, [offset, plants, params , sortType, sortValue, filterSortType, filterSortValue]);

  return (
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
  );
};

const mapStateToProps = createStructuredSelector({
  plants: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(ShopArea);
