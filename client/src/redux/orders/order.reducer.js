import orderActionTypes from "./order.types";

const INITIAL_STATE = {
    orders:[],
    isFetching:false,
    error:null
}

const orderReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case orderActionTypes.ADD_ORDER_TO_FIREBASE_FAILURE:
        case orderActionTypes.FETCH_ORDER_FAILURE:
            return {
                ...state,
                error:action.payload
            }
        case orderActionTypes.ADD_ORDER_TO_FIREBASE_SUCCESS:
            return{
                ...state,
                error:null
            }
        case orderActionTypes.FETCH_ORDER_START:
            return{
                ...state,
                isFetching:true
            }
        case orderActionTypes.FETCH_ORDER_SUCCESS:
            return{
                ...state,
                orders:action.payload,
                isFetching:false,
                error:null
            }
        default:
            return state
    }
}

export default orderReducer;