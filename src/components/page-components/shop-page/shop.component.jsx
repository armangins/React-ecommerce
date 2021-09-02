import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../collection-overview/collection-overview.component";
import CollectionPage from "../collection-page/collection.component";
import { connect } from "react-redux";
import { fetchCollectionsAsync, updateCollections } from "../../../redux/shop/shop.action";
import  WithSpinner  from "../../with-spinner/with-spinner.component"
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from "../../../redux/shop/shop-selector";


const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPagewWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


  componentDidMount(){
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
   
  }


  render() {
    const { match,isFetching } = this.props;
    
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
         render={(props)=><CollectionsOverviewWithSpinner isLoading={isFetching} {...props}></CollectionsOverviewWithSpinner>}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          render={(props)=><CollectionsPagewWithSpinner isLoading={isFetching} {...props}></CollectionsPagewWithSpinner>}
        ></Route>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isFetching:selectIsCollectionFetching,
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync:()=>dispatch(fetchCollectionsAsync()),
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage) ;
