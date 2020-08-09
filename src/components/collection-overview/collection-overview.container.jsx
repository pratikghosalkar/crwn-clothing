import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import CollectionsOverview from "./collection-overview.component";
import withSpinner from "../with-spinner/with-spinner.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
