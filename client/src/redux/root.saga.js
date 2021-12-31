import { all, call } from "redux-saga/effects";

import { userSaga } from "./user/user.sega";
import { orderSaga } from "./orders/order.saga";

export default function* rootSaga() {
  yield all([call(userSaga), call(orderSaga)]);
}
