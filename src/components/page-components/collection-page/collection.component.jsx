import { connect } from 'react-redux';
import { selectCollection } from '../../../redux/shop/shop-selector';


const CollectionPage = ({ match,collection}) => {
    console.log('collection:', collection)
    return (
        <div className="collection-page">
            <h1>
                category page
            </h1>
        </div>
    )
}

const mapStateToProps =(state,ownProps)=>({
    
    collection: selectCollection(ownProps.match.params.collectionId,)(state)

})
    


export default connect(mapStateToProps)(CollectionPage) ;