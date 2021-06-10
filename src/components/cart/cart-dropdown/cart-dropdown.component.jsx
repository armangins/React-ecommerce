import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { selectCartItems,selectItemsCount } from '../../../redux/cart/cart.selector'

const CartDropDown = ({ cartItems }) => {


    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => {
                        return (
                            <CartItem item={cartItem} key={cartItem.id}>
                                {console.log(cartItem)}
                            </CartItem>
                        )
                    })
                }
            </div>
            <CustomButton>
                Check out
            </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {

  return{
   cartItems: selectCartItems(state)
  }
}


export default connect(mapStateToProps)(CartDropDown);