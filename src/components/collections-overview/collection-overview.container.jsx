import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../redux/shop/shop-selectors';
import withSpinner from '../spinner/spinner.component';
import CollectionsOverview from './collections-overview.component';
import {compose} from 'redux';

const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionFetching
});
//const CollectionsOverviewContainer=connect(mapStateToProps)(withSpinner(CollectionsOverview));
//alternative to these method is using compose 
const CollectionsOverviewContainer=compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);
export default CollectionsOverviewContainer;