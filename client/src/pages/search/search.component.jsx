import React from "react";
import { connect } from "react-redux";
import { selectSearchCollection } from "../../redux/shop/shop.selector";

const SearchPage = ({ plants }) => {
  console.log(plants);
  return <div>asd</div>;
};

const mapStateToProps = (state, ownProps) => ({
  plants: selectSearchCollection(ownProps.params)(state),
});
export default connect(mapStateToProps)(SearchPage);
