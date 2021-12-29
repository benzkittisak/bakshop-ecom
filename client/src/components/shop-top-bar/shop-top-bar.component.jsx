import React from "react";

import { setActiveClassToSort } from "../../assets/utils/product";

import "./shop-top-bar.style.scss";

const ShopTopBar = ({
  getLayout,
  getFilterParams,
  productCount,
  sortedProductCount,
}) => {
  return (
    <div className="shop-top-bar mt-3 mb-5">
      <div className="select-shoping-wrap">
        <div className="shop-select">
          <select
            onChange={(e) => getFilterParams("filterSort", e.target.value)}
          >
            <option value="default">เริ่มต้น</option>
            <option value="priceHighToLow">ราคาสูงไปต่ำ</option>
            <option value="priceLowToHigh">ราคาต่ำไปสูง</option>
          </select>
          <p>
            แสดงสินค้า {sortedProductCount} รายการ จากทั้งหมด {productCount}{" "}
            รายการ
          </p>
        </div>

        <div className="shop-tab">
          <button
            onClick={(e) => {
              getLayout("grid three-column");
              setActiveClassToSort(e);
            }}
          >
            <i className="fad fa-th"></i>
          </button>
          <button
            onClick={(e) => {
              getLayout("list");
              setActiveClassToSort(e);
            }}
          >
            <i className="fad fa-list-ul"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopTopBar;
