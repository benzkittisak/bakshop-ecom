import orderActionTypes from "./order.types";


export const orderStarting = (itemAndUserData) => ({
    type:orderActionTypes.ADD_ORDER_TO_FIREBASE_START,
    payload:itemAndUserData
})

export const orderSuccess = () => ({
    type:orderActionTypes.ADD_ORDER_TO_FIREBASE_SUCCESS,
})

export const orderFailure = (error) => ({
    type:orderActionTypes.ADD_ORDER_TO_FIREBASE_FAILURE,
    payload:error
})

export const orderFetchStart = (user) => ({
    type:orderActionTypes.FETCH_ORDER_START,
    payload:user
})
export const orderFetchSuccess = (orders) => ({
    type:orderActionTypes.FETCH_ORDER_SUCCESS,
    payload:orders
})
export const orderFetchFailure = (error) => ({
    type:orderActionTypes.FETCH_ORDER_FAILURE,
    payload:error
})