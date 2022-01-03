import React, { useState } from "react";

import "./mobile-menu-search.style.scss";

const MobileMenuSearch = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = process.env.PUBLIC_URL + `/search?search=${search}`;
  };

  return (
    <div className="offcanvas-mobile-search-area">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
          placeholder="ค้นหา ..."
        />
        <button type="submit">
          <i className="fad fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default MobileMenuSearch;
