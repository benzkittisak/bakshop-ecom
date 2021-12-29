import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import "./icon-group.style.scss";

const IconGroup = ({ currentUser, signOut, countItemInCart }) => {
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = process.env.PUBLIC_URL + `/search?search=${search}`;
  };

  return (
    <div className="header-right-wrap">
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="fal fa-search"></i>
        </button>
        <div className="search-content">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="พิมพ์คำค้นที่คุณต้องการ"
            />
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
            {currentUser ? (
              <Fragment>
                <li>
                  <Link to={"/account"} className="my-account">
                    บัญชีของฉัน
                  </Link>
                </li>
                <li>
                  <button onClick={signOut} className="logout">
                    ออกจากระบบ
                  </button>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link to={"/login"}>เข้าสู่ระบบ</Link>
                </li>
                <li>
                  <Link to={"/login"}>สมัครสมาชิก</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="fal fa-shopping-bag"></i>
          <span className="count-style">{countItemInCart}</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  countItemInCart: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
