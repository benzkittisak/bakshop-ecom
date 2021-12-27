import ShopActionTypes from './shop.types';

export const fetchCollectionStart = () => ({
    type:ShopActionTypes.FETCH_COLLETION_START
})

export const fetchCollectionSuccess = plants => ({
    type:ShopActionTypes.FETCH_COLLETION_SUCCESS,
    payload:plants
})

export const fetchCollectionFailure = error => ({
    type:ShopActionTypes.FETCH_COLLETION_FAILURE,
    payload:error
})