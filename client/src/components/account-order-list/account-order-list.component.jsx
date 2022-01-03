import React, { Fragment , useEffect } from "react";
import { connect } from "react-redux";

import { selectOrders } from "../../redux/orders/order.selector";

import { orderFetchStart } from "../../redux/orders/order.actions";

import firebase from "../../firebase/firebase.util";
import currencyFormatter from "../../assets/utils/currency.formatter";

import "./account-order-list.style.scss";

const AccountOrderList = ({ orders , orderFetchStart , uid }) => {
  useEffect(() => {
    orderFetchStart(uid);
  }, [orderFetchStart, uid ]);
  return (
    <Fragment>
      {orders.length > 0 ? (
        orders.map(({ orderNo, orderItems, date, amount, status }, index) => {
          const Timestamp = new firebase.firestore.Timestamp(
            date.seconds,
            date.nanoseconds
          );
          return (
            <div className="col-12" key={index}>
              <div className="order-content">
                <div className="order-header">
                  <div className="row">
                    <div className="col-md-6">
                      <h4>
                        รหัสคำสั่งซื้อ : <span>{orderNo}</span>
                      </h4>
                    </div>
                    <div className="col-md-6 text-right">
                      <span>
                        สถานะคำสั่งซื้อ
                        <h3>{status.statusName.toUpperCase()}</h3>
                      </span>
                    </div>
                  </div>
                </div>
                {orderItems.map(
                  ({ description, imageUrl, name, price, quantity }, index) => (
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
                    <span>{currencyFormatter.format(amount)}</span>
                  </h3>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center pt-3 pb-3">
          <h5>ไม่พบรายการสั่งซื้อ</h5>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state , ownProps) =>({
  orders: selectOrders(ownProps)(state),
});

const mapDispatchToProps = (dispatch) => ({
  orderFetchStart: (uid) => dispatch(orderFetchStart(uid)),
});


export default connect(mapStateToProps , mapDispatchToProps)(AccountOrderList);
