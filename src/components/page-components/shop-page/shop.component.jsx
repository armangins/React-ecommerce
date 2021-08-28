import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../collection-overview/collection-overview.component";
import CollectionPage from "../collection-page/collection.component";
import {firestore,convertToObj} from '../../../firebase/firebaseConfig'
import { connect } from "react-redux";
import { updateCollections } from "../../../redux/shop/shop.action";
import  WithSpinner  from "../../with-spinner/with-spinner.component"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPagewWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  state = {
    isLoading:true
  }

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot =collectionRef.onSnapshot(async snapShot=>{
        const collectionsObject = convertToObj(snapShot)
      updateCollections(collectionsObject)
      this.setState({isLoading:false})
    })
  }


  render() {
    const { match } = this.props;
    const {isLoading } = this.state
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
         render={(props)=><CollectionsOverviewWithSpinner isLoading={isLoading} {...props}></CollectionsOverviewWithSpinner>}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          render={(props)=><CollectionsPagewWithSpinner isLoading={isLoading} {...props}></CollectionsPagewWithSpinner>}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
updateCollections: convertToObj=>dispatch(updateCollections(convertToObj)),
})
export default connect(null,mapDispatchToProps)(ShopPage) ;
