import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import CategoryFeature from "./category-feature.component";
import withSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CategoryFeatureContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CategoryFeature);

export default CategoryFeatureContainer;