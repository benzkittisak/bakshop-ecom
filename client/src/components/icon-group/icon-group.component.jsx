import React , { useState } from "react";
import { Link } from "react-router-dom";


import "./icon-group.style.scss";

const IconGroup = () => {

  const [search , setSearch] = useState('')

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const handleSubmit = event => {
    event.preventDefault();
    window.location.href = process.env.PUBLIC_URL + `/search?search=${search}`
  }

  return (
    <div className="header-right-wrap">
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="fal fa-search"></i>
        </button>
        <div className="search-content">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="พิมพ์คำค้นที่คุณต้องการ" />
            <button className="button-search">
              <i className="fal fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={(e) => handleClick(e)}
        >
          <i className="fal fa-user-circle"></i>
        </button>
        <div className="account-dropdown">
          <ul>
            <li>
              <Link to={"/login"}>เข้าสู่ระบบ</Link>
            </li>
            <li>
              <Link to={"/login"}>สมัครสมาชิก</Link>
            </li>
            <li>
              <Link
                to={"/account"}
                className="my-account"
              >
                บัญชีของฉัน
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="fal fa-shopping-bag"></i>
          <span className="count-style">0</span>
        </button>
      </div>
    </div>
  );
};


export default IconGroup;
