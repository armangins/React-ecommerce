import React, { Component } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/cart.svg';
import { connect } from 'react-redux';
import {toggleHidden} from '../../../redux/cart/cart-action';

const CartIcon = ({toggleHidden}) => {

    return (
        <div onClick={toggleHidden} className="cart-icon">
            <ShoppingCartIcon  className="shopping-icon" />
            <span className="item-count">
                0
            </span>
        </div>
    )
}

const mapDispatchToProps = dispatch=> {

    return {
        toggleHidden: () => {
            dispatch(toggleHidden())
        }
    }
}

export default connect(null,mapDispatchToProps)(CartIcon);