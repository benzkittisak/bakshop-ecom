import React from "react";

import currencyFormatter from "../../assets/utils/currency.formatter";

import "./product-description.style.scss";

const ProductDescription = ({ product }) => {
  const { name, price, description } = Object.assign({}, ...product);
  return (
    <div className="product-detail-content">
      <h2>{name}</h2>
      <div className="product-details-price">
        <span>{currencyFormatter.format(price)} </span>
      </div>
      <div className="pro-details-list pb-5">{description}</div>

      <div className="pro-details-quantity">
        <div className="pro-details-cart">
          <button className="hvr-sweep-to-right"><i className="fal fa-cart-plus"></i> เพิ่มลงตะกร้าสินค้า</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
