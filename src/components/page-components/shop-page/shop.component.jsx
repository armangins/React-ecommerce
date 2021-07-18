import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../../redux/shop/shop-selector';
import CollectionPreview from '../../collection-preview/collection-preview.component';

const ShopPage =({collections})=> {

        return (
            <div>
                {collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        );
}

const mapStateToProps = createStructuredSelector({
    collections:selectCollections,
})


export default  connect(mapStateToProps)(ShopPage) 
