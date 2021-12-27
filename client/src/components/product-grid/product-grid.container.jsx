import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import ProductGrid from "./product-grid.component";
import withSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const ProductGridContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(ProductGrid);

export default ProductGridContainer;