import React , {useState} from "react";

import "./shop-search.style.scss";

const ShopSearch = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = process.env.PUBLIC_URL + `/search?search=${search}`;
  };

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">ค้นหา</h4>
      <div className="pro-sidebar-search mb-2 mt-1">
        <form onSubmit={handleSubmit} className="pro-sidebar-search-form">
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="พิมพ์คำค้น" />
          <button>
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
