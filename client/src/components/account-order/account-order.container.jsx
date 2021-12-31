import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsOrdersLoaded } from "../../redux/orders/order.selector";

import AccountOrder from './account-order.component';
import withSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsOrdersLoaded(state),
});

const AccountOrderContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(AccountOrder);

export default AccountOrderContainer;