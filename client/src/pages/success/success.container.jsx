import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import SuccessPage from './success.component';
import withSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const SuccessPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(SuccessPage);

export default SuccessPageContainer;