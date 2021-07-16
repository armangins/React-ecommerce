import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, clearItemFromCart, removeItem, removeItemFromCart } from "../../redux/cart/cart-action";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem ,removeItem, addItem}) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={()=>removeItem(cartItem)} className="arrow">&#10094;</div>
        {quantity}
        <div onClick={()=>addItem(cartItem)} className="arrow">&#10095;</div>
      </span>
      <span className="price">{price}</span>

      <span onClick={() =>clearItem(cartItem)} className="remove-item">
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item)=> dispatch(addItem(item)),
    removeItem: (item)=> dispatch(removeItemFromCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
