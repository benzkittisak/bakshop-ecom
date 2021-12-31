import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import firebase from "../../firebase/firebase.util";

import { selectOrders } from "../../redux/orders/order.selector";

import { orderFetchStart } from "../../redux/orders/order.actions";

import currencyFormatter from "../../assets/utils/currency.formatter";

import "./account-order.style.scss";

const AccountOrder = ({ orderFetchStart, uid, orders }) => {
  useEffect(() => {
    orderFetchStart(uid);
  }, [orderFetchStart, uid]);
  return (
    <Fragment>
      <div className="account-order">
        <Tab.Container defaultActiveKey="myOrder">
          <Nav variant="pill" className="account-order-nav">
            <Nav.Item>
              <Nav.Link eventKey={"myOrder"}>คำสั่งซื้อของฉัน</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="account-order-content">
            <Tab.Pane eventKey={"myOrder"}>
              <div className="orders-container">
                <div className="container-fluid">
                  <div className="row">
                    {orders.length > 0 ? orders.map(
                      ({ orderNo, orderItems, date, amount }, index) => {
                        const Timestamp = new firebase.firestore.Timestamp(
                          date.seconds,
                          date.nanoseconds
                        );
                        return (
                          <div className="col-12" key={index}>
                            <div className="order-content">
                              <div className="order-header">
                                <h4>
                                  รหัสคำสั่งซื้อ : <span>{orderNo}</span>
                                </h4>
                              </div>
                              {orderItems.map(
                                (
                                  {
                                    description,
                                    imageUrl,
                                    name,
                                    price,
                                    quantity,
                                  },
                                  index
                                ) => (
                                  <div className="order-list" key={index}>
                                    <div className="order-img">
                                      <img src={imageUrl} alt="" />
                                    </div>
                                    <div className="order-detail">
                                      <div className="order-des">
                                        <h5>{name}</h5>
                                        <p>{description}</p>
                                        <span>x {quantity}</span>
                                      </div>
                                    </div>
                                    <div className="order-price">
                                      <p>{currencyFormatter.format(price)}</p>
                                    </div>
                                  </div>
                                )
                              )}
                              <div className="order-total">
                                <h3>
                                  ยอดคำสั่งซื้อทั้งหมด:{" "}
                                  <span>
                                    {currencyFormatter.format(amount)}
                                  </span>
                                </h3>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    ) : 
                    <div className="text-center pt-3 pb-3">
                      <h5>ไม่พบรายการสั่งซื้อ</h5>
                    </div>}
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
});

const mapDispatchToProps = (dispatch) => ({
  orderFetchStart: (uid) => dispatch(orderFetchStart(uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountOrder);
