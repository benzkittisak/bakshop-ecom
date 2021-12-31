import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import currencyFormatter from "../../assets/utils/currency.formatter";

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

const CartTable = ({
  cartItems,
  addItem,
  removeItem,
  clearCart,
  clearItem,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>รูปสินค้า</th>
          <th>ชื่อสินค้า</th>
          <th>ราคา</th>
          <th>จำนวน</th>
          <th>รวมทั้งสิ้น</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => {
          const price = currencyFormatter.format(item.price);
          const subTotal = currencyFormatter.format(item.price * item.quantity);

          return (
            <tr key={index}>
              <td className="product-thumbnail">
                <Link to={process.env.PUBLIC_URL + `/shop/${item.name}`}>
                  <img src={item.imageUrl} alt="" className="img-fluid" />
                </Link>
              </td>
              <td className="product-name">
                <Link to={process.env.PUBLIC_URL + `/shop/${item.name}`}>
                  {item.name}
                </Link>
              </td>
              <td className="product-price-cart">
                <span className="amount">{price}</span>
              </td>
              <td className="product-quantity">
                <div className="cart-plus-minus">
                  <button
                    onClick={() => removeItem(item)}
                    className="dec qtyButton"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="cart-plus-minus-box"
                  />
                  <button
                    onClick={() => addItem(item)}
                    className="inc qtyButton"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="product-total">{subTotal}</td>
              <td className="product-remove">
                <button onClick={() => clearItem(item)}>
                  <i className="fad fa-times"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CartTable);
