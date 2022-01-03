import React, { Fragment } from "react";
import { MetaTags } from "react-meta-tags";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import currencyFormatter from "../../assets/utils/currency.formatter";

import { selectCartItems, calTotalPrice } from "../../redux/cart/cart.selector";

import { clearCart } from "../../redux/cart/cart.actions";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component";
import Layout from "../../layouts/layouts.component";
import CartTable from "../../components/cart-table/cart-table.component";
import StripeButton from "../../components/strip-button/strip-button.component";
import PaymentDemoInfo from "../../components/payment-demo-info/payment-demo-info.component";

import "./cart.style.scss";

const CartPage = ({ cartItems, clearCart, totalPrice }) => {
  return (
    <Fragment>
      <MetaTags>
        <title>BakShop | ตะกร้าสินค้า</title>
      </MetaTags>
      <Layout>
        <Breadcrumbs />

        <div className="cart-main-area pt-5 pb-5">
          <div className="container">
            {cartItems.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">สินค้าในตะกร้า</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <CartTable cartItems={cartItems} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shipping-update-wrapper">
                      <div className="cart-shipping-update">
                        <Link to={process.env.PUBLIC_URL + "/shop"}>
                          ซื้อสินค้าต่อ
                        </Link>
                      </div>
                      <div className="cart-clear">
                        <button onClick={() => clearCart()}>
                          ล้างสินค้าในตะกร้า
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8 my-2 col-12">
                    <PaymentDemoInfo />
                  </div>
                  <div className="col-lg-4 my-2 col-12">
                    <div className="grand-total">
                      <div className="title-wrap">
                        <h4 className="cart-bottom-title section-bg-gray-cart">
                          รวมเงิน
                        </h4>
                      </div>
                      <h5>
                        ราคารวม{" "}
                        <span>{currencyFormatter.format(totalPrice)}</span>
                      </h5>
                      <div className="grand-total-title">
                        <h4>
                          รวมราคาที่ต้องจ่าย
                          <span>{currencyFormatter.format(totalPrice)}</span>
                        </h4>

                        <StripeButton cartItems={cartItems} type="button">
                          ชำระเงิน
                        </StripeButton>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-3">
                      <i className="fal fa-shopping-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      ไม่มีสินค้าในตะกร้า <br />
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
                        ไปซื้อสินค้าเลย
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: calTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
