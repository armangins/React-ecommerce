import './cart-icon.styles.scss';
import React, { Component } from 'react';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/cart.svg';
import { connect } from 'react-redux';
import { toggleHidden } from '../../../redux/cart/cart-action';
import { selectCartItems,selectItemsCount } from '../../../redux/cart/cart.selector'

const CartIcon = ({ toggleHidden, itemCount }) => {

    return (
        <div onClick={toggleHidden} className="cart-icon">
            <ShoppingCartIcon className="shopping-icon" />
            <span className="item-count">
                {itemCount}
            </span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itemCount: selectItemsCount(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleHidden: () => {
            dispatch(toggleHidden())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);