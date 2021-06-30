import React, { Component } from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart-action";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{price}</span>
      <span className="price">{quantity}</span>
      <span onClick={() => clearItem(cartItem)} className="remove-item">
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItem: (item) => dispatch(clearItemFromCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
