import React from 'react';
import CollectionPreview from '../../components/collection-preview-componnent/collection-preview.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux';
import './collections-overview.styles.scss'
const CollectionsOverview=({collections})=>(
    <div className="collections-overview">
         {
    collections.map(({id,...otherCollectionProps})=>{
      return(  <CollectionPreview key={id} {...otherCollectionProps} ></CollectionPreview>)    
    })}
    </div>
);
const mapStateToProps=createStructuredSelector(
    {
        collections:selectCollectionsForPreview
    }
);
export default connect(mapStateToProps)(CollectionsOverview);