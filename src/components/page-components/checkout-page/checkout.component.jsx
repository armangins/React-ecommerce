
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux/cart/cart.selector";
import "./checkout.styles.scss";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import StripeButton from "../../stripe-button/stripe-button.component";


const CheckOut = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
    ))}

    <div className="total">
      <span>${cartTotal}</span>
    </div>

    <StripeButton></StripeButton>
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal,
  });

export default connect(mapStateToProps)(CheckOut);
