import React from "react";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const CartDropDown = ({ cartItems,history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))
      ) : (
        <span className="empty-cart">Cart is empty</span>
      )}
    </div>

    <CustomButton onClick={()=>{history.push('/checkout')}}>Check out</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
