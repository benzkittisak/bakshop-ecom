import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selector";

import { signOutStart } from "../../redux/user/user.actions";
import { clearCart } from "../../redux/cart/cart.actions";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./icon-group.style.scss";

const IconGroup = ({
  currentUser,
  signOut,
  countItemInCart,
  cartItems,
  clearCart,
}) => {
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
    offcanvasMobileMenu.classList.add('active');
  }

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
            <button className="button-search"  style={{clear:'both', margin:0}}>
              <i className="fal fa-search"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="same-style account-setting d-block d-lg-block">
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
                  <button
                    onClick={() => {
                      clearCart();
                      signOut();
                    }}
                    className="logout"
                  >
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
      <div className="same-style cart-wrap d-block d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="fal fa-shopping-bag"></i>
          <span className="count-style">{countItemInCart}</span>
        </button>
        <CartDropdown cartItems={cartItems} />
      </div>

      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button onClick={() => triggerMobileMenu()}className="mobile-aside-button">
          <i className="fad fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  countItemInCart: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
