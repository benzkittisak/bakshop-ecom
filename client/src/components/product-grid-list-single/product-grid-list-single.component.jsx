import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import currencyFormatter from "../../assets/utils/currency.formatter";

import "../product-grid-single/product-grid-single.style.scss";
import "./product-grid-list-single.style.scss";

const ProductGridListSingle = ({ product  , addItem}) => {
  const { name, imageUrl, price, description } = product;
  return (
    <Fragment>
      <div className={`col-xl-4 col-sm-6`}>
        <div className="product-wrap mb-4">
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/shop/" + name}>
              <img src={imageUrl} className="default-img" alt="" />
            </Link>
            {product.new ? (
              <span className="product-img-badges">ใหม่</span>
            ) : null}

            <div className="product-action">
              <div className="pro-same-action pro-cart">
                <button onClick={() => addItem(product)}>
                  {" "}
                  <i className="fal fa-cart-plus"></i>{" "}
                </button>
              </div>
              <div className="pro-same-action pro-quickview">
                <Link
                  to={process.env.PUBLIC_URL + "/shop/" + name}
                  title="Quick View"
                >
                  <i className="fad fa-eye" />
                </Link>
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/shop/" + name}>{name}</Link>
            </h3>
            <div className="product-price">
              <span>{currencyFormatter.format(price)}</span>
            </div>
          </div>
        </div>

        <div className="shop-list-wrap mb-4">
          <div className="row">
            <div className="col-xl-4 col-md-5 col-sm-6">
              <div className="product-list-image-wrap">
                <div className="product-img">
                  <Link to={process.env.PUBLIC_URL + "/shop/" + name}>
                    <img src={imageUrl} className="default-img" alt="" />
                    {product.new ? (
                      <div className="product-img-badges">
                        <span className="purple">ใหม่</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-7 col-sm-6">
              <div className="shop-list-content">
                <h3>
                  <Link to={process.env.PUBLIC_URL + "/shop/" + name}>
                    {name}
                  </Link>
                </h3>
                <div className="product-list-price">
                  <span>{currencyFormatter.format(price)}</span>
                </div>
                <div className="product-list-description">
                  <p>{description}</p>
                </div>
                <div className="shop-list-actions d-flex align-items-center">
                  <div className="shop-list-btn btn-hover ">
                    <button
                      onClick={() => addItem(product)}
                      className="animated hvr-sweep-to-right"
                    >
                      <i className="fal fa-cart-plus"></i> เพิ่มลงตะกร้าสินค้า
                    </button> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductGridListSingle);
