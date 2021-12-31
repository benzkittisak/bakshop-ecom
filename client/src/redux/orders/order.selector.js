import { createSelector } from "reselect";

const selectOrder = state => state.order

export const selectOrders = createSelector(
    [selectOrder],
    order=>order.orders
)

export const selectIsOrdersLoaded = createSelector(
  [selectOrders],
  (orders) => !!orders
);

export const selectOrdersForAccoutPage = createSelector(
    [selectOrders],
    orders =>  orders
)