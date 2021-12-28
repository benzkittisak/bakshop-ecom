import React from "react";

import { setActiveClassToSort } from "../../assets/utils/product";

import "./shop-sidebar-category.style.scss";

const ShopSidebarCategory = ({ categories, getSortParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">เลือกดูตามประเภท</h4>
      <div className="sidebar-widget-list mt-3">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={(e) => {
                    getSortParams("category", "");
                    setActiveClassToSort(e);
                  }}
                >
                  <span className="checkMark" />
                  ดูทั้งหมด
                </button>
              </div>
            </li>
            {categories.map((category, index) => (
              <li key={index}>
                <div className="sidebar-widget-list-left">
                  <button onClick={e => {
                      getSortParams("category" , category)
                      setActiveClassToSort(e)
                  }}>
                    <span className="checkMark" />
                    {category}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          "ไม่พบข้อมูลประเภทสินค้า"
        )}
      </div>
    </div>
  );
};
export default ShopSidebarCategory;
