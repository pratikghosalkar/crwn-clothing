import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import { connect } from "react-redux";
import withSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;
