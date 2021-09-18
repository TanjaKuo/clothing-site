import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spainner/with-spainner";

const mapStateToprops = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// this is exact same below
// const CollectionOverviewContainer = connect(mapStateToprops)(WithSpinner(CollectionOverview))

const CollectionOverviewContainer = compose(
  connect(mapStateToprops),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
