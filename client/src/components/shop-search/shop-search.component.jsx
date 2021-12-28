import React from "react";

import "./shop-search.style.scss";

const ShopSearch = () => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">ค้นหา</h4>
      <div className="pro-sidebar-search mb-2 mt-1">
        <form className="pro-sidebar-search-form">
          <input type="text" placeholder="พิมพ์คำค้น" />
          <button>
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
