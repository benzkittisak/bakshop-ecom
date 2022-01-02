import { takeLatest, call, all, put } from "redux-saga/effects";

import orderActionTypes from "./order.types";

import { firestore, createOrderDocument } from "../../firebase/firebase.util";

import { clearCart } from "../cart/cart.actions";

import {
  orderSuccess,
  orderFailure,
  orderFetchFailure,
  orderFetchSuccess,
} from "./order.actions";

export function* addOrderToFirebase({ payload: { userData, cartItems } }) {
  try {
    yield createOrderDocument(userData, cartItems);
    yield put(orderSuccess());
  } catch (error) {
    yield put(orderFailure(error));
  }
}

export function* startFetchOrder({ payload: uid }) {
  try {
    const ordersRef = yield firestore
      .collection("orders")
      .doc(uid)
      .collection("my_order");
    const snapShot = yield ordersRef.get();
    yield put(orderFetchSuccess(snapShot.docs.map((doc) => doc.data())));
  } catch (error) {
    yield put(orderFetchFailure(error));
  }
}

export function* onAddOrderStart() {
  yield takeLatest(
    orderActionTypes.ADD_ORDER_TO_FIREBASE_START,
    addOrderToFirebase
  );
}


export function* onFetchOrderStart() {
  yield takeLatest(orderActionTypes.FETCH_ORDER_START, startFetchOrder);
}


export function* orderSaga() {
  yield all([
    call(onAddOrderStart),
    call(onFetchOrderStart),
  ]);
}
