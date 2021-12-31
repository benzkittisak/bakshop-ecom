import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectSearchCollection } from "../../redux/shop/shop.selector";

import ProductImageAndDescription from "../../components/product-image-and-description/product-imgae-and-description.component";
import ProductDescriptionTab from "../../components/product-description-tab/product-description-tab.component";
import RelatedProductSlider from "../../components/related-product-slider/related-product-slider.component";

import "./product.style.scss";

const ProductPage = ({ plant }) => {
  let { description, reviews } = Object.assign({}, ...plant);
  if (reviews === undefined) reviews = [];

  return (
    <Fragment>
      {plant.length >= 1 ? (
        <Fragment>
          <ProductImageAndDescription product={plant} />
          <ProductDescriptionTab description={description} reviews={reviews} />
          <RelatedProductSlider category={"houseplants"} />
        </Fragment>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="not-found-product">
                <h1>ไม่พบสินค้าที่คุณต้องการ</h1>
                <Link to={process.env.PUBLIC_URL + "/"} className="error-btn">
                  กลับไปที่หน้าแรก
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  plant: selectSearchCollection(Object.values(ownProps.params).toString())(
    state
  ),
});

export default connect(mapStateToProps)(ProductPage);
