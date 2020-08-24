import React from "react";
import {Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container'
import {connect } from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import collectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";

class ShopPage extends React.Component{
    
    componentDidMount(){
     const {fetchCollectionsStart}=this.props;
     fetchCollectionsStart();  

    //  collectionRef.onSnapshot( async snapshot=>{                         ///this is observqablle pattern 
    //  const collectionsMap=convertCollectionsSnapShotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //      this.setState({loading:false})});
    }
    render(){
        const {match}=this.props;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`}component={collectionsOverviewComponent}></Route>
                <Route path={`${match.path}/:collectionId`} component={CollectionsOverviewContainer} ></Route>
        </div>);  
    }
}
const mapdispatchToProps=(dispatch)=>({
    fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
})


export default connect(null,mapdispatchToProps)(ShopPage);