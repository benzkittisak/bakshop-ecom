import React, { useState } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import currencyFormatter from "../../assets/utils/currency.formatter";

import "./product-description.style.scss";

const ProductDescription = ({ product , addItem}) => {
  const [quantityCount, setQuantityCount] = useState(1);

  const { name, price, description } = Object.assign({}, ...product);
  return (
    <div className="product-detail-content">
      <h2>{name}</h2>
      <div className="product-details-price">
        <span>{currencyFormatter.format(price)} </span>
      </div>
      <div className="pro-details-list pb-5">{description}</div>

      <div className="pro-details-quantity">
        <div className="cart-plus-minus">
          <button
            onClick={() =>
              setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
            }
            className="dec qtyButton"
          >
            -
          </button>
          <input
            type="text"
            readOnly
            value={quantityCount}
            className="cart-plus-minus-box"
          />
          <button
            onClick={() => setQuantityCount(quantityCount + 1)}
            className="inc qtyButton"
          >
            +
          </button>
        </div>
        <div className="pro-details-cart">
          <button onClick={() => addItem(Object.assign({} , ...product) , quantityCount)} className="hvr-sweep-to-right">
            <i className="fal fa-cart-plus"></i> เพิ่มลงตะกร้าสินค้า
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem:(item , quantity) => dispatch(addItem(item , quantity))
})

export default connect(null,mapDispatchToProps)(ProductDescription);
