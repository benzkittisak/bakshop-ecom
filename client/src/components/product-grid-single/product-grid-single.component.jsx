import React from "react";
import { Link } from "react-router-dom";
import currencyFormatter from "../../assets/utils/currency.formatter";

import "./product-grid-single.style.scss";

const ProductGridSingle = ({ product, category, col }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className={`col-xl-3 col-md-6 col-lg-4 col-sm-6`}>
      <div className="product-wrap animation_fadeInLeft mb-25">
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/shop/" + category + "/" + name}>
            <img src={imageUrl} className="default-img" alt="" />
          </Link>
          {product.new ? (
            <span className="product-img-badges">ใหม่</span>
          ) : null}

          <div className="product-action">
            <div className="pro-same-action pro-cart">
              <button>
                {" "}
                <i className="fal fa-cart-plus"></i>{" "}
              </button>
            </div>
            <div className="pro-same-action pro-quickview">
              <Link
                to={process.env.PUBLIC_URL + "/shop/" + category + "/" + name}
                title="Quick View"
              >
                <i className="fad fa-eye" />
              </Link>
            </div>
          </div>
        </div>
        <div className="product-content text-center">
          <h3>
            <Link
              to={process.env.PUBLIC_URL + "/shop/" + category + "/" + name}
            >
              {name}
            </Link>
          </h3>
          <div className="product-price">
            <span>{currencyFormatter.format(price)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridSingle;
