import React from 'react';
import './collection-item.styles.scss';
import {addItem} from '../../../redux/cart/cart-action'
import CustomButton from '../../custom-button/custom-button.component'
import { connect } from 'react-redux';

const CollectionItem = ({ item,addItem }) =>{

    const { id,name,price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name.toUpperCase()}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={()=>{addItem(item)}} inverted >
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps =(dispatch)=>{
    return{
        addItem:(item)=>{
                dispatch(addItem(item))
        }
    }
}

export default connect(null,mapDispatchToProps)(CollectionItem);