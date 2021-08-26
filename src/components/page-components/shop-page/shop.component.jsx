import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../collection-overview/collection-overview.component";
import CollectionPage from "../collection-page/collection.component";
import {firestore,convertToObj} from '../../../firebase/firebaseConfig'
import { connect } from "react-redux";
import { updateCollections } from "../../../redux/shop/shop.action";



class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot =collectionRef.onSnapshot(async snapShot=>{
        const collectionsObject = convertToObj(snapShot)
      updateCollections(collectionsObject)
    })
  }


  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverview}
        ></Route>
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
updateCollections: convertToObj=>dispatch(updateCollections(convertToObj)),
})
export default connect(null,mapDispatchToProps)(ShopPage) ;
