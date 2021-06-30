import React, { Component } from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem: {name,price,quantity,imageUrl}}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{price}</span>
    <span className="price">{quantity}</span>
    <span className="remove-item">&#10005;</span>

  </div>
);

export default CheckoutItem;
