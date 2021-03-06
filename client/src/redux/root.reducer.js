import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import orderReducer from "./orders/order.reducer";

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer  = combineReducers({
    shop:shopReducer,
    user:userReducer,
    cart:cartReducer,
    order:orderReducer
});

export default persistReducer( persistConfig ,rootReducer );