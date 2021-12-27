import ShopActionTypes from './shop.types';

import SHOP_DATA from '../../assets/data/shop.data';

const INITIAL_STATE = {
    plants:SHOP_DATA,
    isFetching:false,
    errorMessage:null
}

const shopReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTION_START:
            return{
                ...state,
                isFetching:true,
            }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return{
                ...state,
                isFetching:false,
                plants:action.payload
            }
        case ShopActionTypes.FETCH_COLLECTION_FAILURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;