import { combineReducers } from "redux";

import shopReducer from "./shop/shop.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer  = combineReducers({
    shop:shopReducer,
    user:userReducer,
    cart:cartReducer
});

export default rootReducer