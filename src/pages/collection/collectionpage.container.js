import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CollectionPage from "./collectionpage";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spainner/with-spainner";

/* a func */
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

/* const CollectionPageContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
);
 */
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
