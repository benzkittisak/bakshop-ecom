import cartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const setCartItemOnSignIn = (item) => ({
  type:cartActionTypes.SET_CART_ITEM,
  payload:item
})

export const addItem = (item , quantity) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: {item , quantity},
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
    type:cartActionTypes.CLEAR_CART
})
