import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import AccountOrderList from "../account-order-list/account-order-list.component";

import { selectOrders } from "../../redux/orders/order.selector";

import { orderFetchStart } from "../../redux/orders/order.actions";

import "./account-order.style.scss";

const AccountOrder = ({ orderFetchStart, uid, orders }) => {
  
  return (
    <Fragment>
      <div className="account-order">
        <Tab.Container defaultActiveKey="myOrder">
          <Nav variant="pill" className="account-order-nav">
            <Nav.Item>
              <Nav.Link eventKey={"myOrder"}>คำสั่งซื้อทั้งหมด</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"pendingOrder"}>กำลังดำเนินการ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"completedOrder"}>สำเร็จ</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="account-order-content">
            <Tab.Pane eventKey={"myOrder"}>
              <div className="orders-container">
                <div className="container-fluid">
                  <div className="row">
                    <AccountOrderList uid={uid} />
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={"pendingOrder"}>
              <div className="orders-container">
                <div className="container-fluid">
                  <div className="row">
                    <AccountOrderList uid={uid} sortBy={'pending'}/>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey={"completedOrder"}>
              <div className="orders-container">
                <div className="container-fluid">
                  <div className="row">
                    <AccountOrderList uid={uid} sortBy={'completed'}/>
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
