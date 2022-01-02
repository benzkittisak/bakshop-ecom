import React, { Fragment, useEffect , useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { orderStarting } from "../../redux/orders/order.actions";
import { checkUserSession } from "../../redux/user/user.actions";
import { clearCart } from "../../redux/cart/cart.actions";

import Layout from "../../layouts/layouts.component";

import "./success.style.scss";

const SuccessPage = ({ cartItems, currentUser, orderStarting , clearCart }) => {
  
  useEffect(() => {
    if (currentUser) {
      if (window.performance) {
        if (performance.navigation.type !== 1) {
          orderStarting(currentUser, cartItems);
          clearCart();
        }
      }
    }
    
  }, [currentUser]);

  return (
    <Fragment>
      <Layout>
        <div className="suc-page">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="suc-icon">
                  <i className="fad fa-check-circle animated__animated animated_bounceIn"></i>
                </div>
                <div className="suc-header">สั่งซื้อสำเร็จ</div>
                <div className="suc-link">
                    <Link className="hvr-sweep-to-right" to={"/account"}>กลับไปหน้าบัญชีของฉัน</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  orderStarting: (userData, cartItems) =>
    dispatch(orderStarting({ userData, cartItems })),
  checkUserSession: () => dispatch(checkUserSession()),
  clearCart:() => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPage);
