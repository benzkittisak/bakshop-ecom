import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import ShopPagr from './shop.component';
import withSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CategoryFeatureContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(ShopPagr);

export default CategoryFeatureContainer;