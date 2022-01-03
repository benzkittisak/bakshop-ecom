import { createSelector } from "reselect";

const selectOrder = (state) => state.order;

export const selectOrders = ({ sortBy }) =>
  createSelector([selectOrder], (order) => {
    if(sortBy === 'pending'){
      return order.orders.filter(item => item.status.statusName === "pending")
    } 
    if(sortBy === 'completed'){
      return order.orders.filter(item => item.status.statusName === "completed")
    } 
    return order.orders;
  });

export const selectIsOrdersLoaded = createSelector(
  [selectOrders],
  (orders) => !!orders
);

export const selectOrdersForAccoutPage = createSelector(
  [selectOrders],
  (orders) => orders
);
