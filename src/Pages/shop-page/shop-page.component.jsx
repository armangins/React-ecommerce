import React from 'react';
import SHOP_DATA from './SHOP_DATA';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div>
                <h1>Shop Page</h1>
                {collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}



export default ShopPage
