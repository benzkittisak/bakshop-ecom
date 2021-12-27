import React from "react";
import { Link } from "react-router-dom";
import "./cart-item.style.scss";

const CartItems = ({ cartItems }) => {
  return (
    <div className="shopping-cart-content">
      {cartItems.length > 0 ? (
        "มีสินค้าไปก่อน"
      ) : (
        <p className="text-center">ไม่มีสินค้าในตะกร้า</p>
      )}
    </div>
  );
};
export default CartItems;
