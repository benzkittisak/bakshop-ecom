import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import axios from "axios";

import { selectCurrentUser } from "../../redux/user/user.selector";

import "./strip-button.style.scss";

const StripeButton = ({ currentUser, children, type, cartItems }) => {
  const checkOut = () => {
    if (!currentUser) {
      return alert("กรุณาเข้าสู่ระบบก่อนการสั่งซื้อสินค้า");
    }
    axios({
      url: "/create-checkout-session",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: cartItems,
    })
      .then((res) => {
        if (res.status === 200) return res.data;
        return res.data.then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location.href = url;
      })
      .catch((error) => console.log(error.error));
  };

  return (
    <div className="stripe-button">
      <button onClick={() => checkOut()} type={type}>
        {children}
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(StripeButton);
