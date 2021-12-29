import React, { Fragment} from "react";
import { connect } from "react-redux";
import { selectCollectionsForDailyDeals } from "../../redux/shop/shop.selector";

import ProductGridSingle from "../product-grid-single/product-grid-single.component";


import "./product-grid.style.scss";

const ProductGrid = ({ category , plants }) => {
  return (
    <Fragment>
      {plants.length ? plants.map((product) => (
        <ProductGridSingle product={product} category={category} key={product.id} />
      )) : "ไม่พบสินค้าที่คุณต้องการ"}
    </Fragment>
  );
};

const mapStateToProps = (state , ownProps) => {
  if(ownProps.isDisable) return {};
  return {
    plants: selectCollectionsForDailyDeals(ownProps)(state)
  }
}
export default connect(mapStateToProps)(ProductGrid);
