import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingCartIcon } from "../../../assets/cart.svg";
import { connect } from "react-redux";
import { toggleHidden } from "../../../redux/cart/cart-action";
import { selectItemsCount } from "../../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleHidden, itemCount }) => (
  <div onClick={toggleHidden} className="cart-icon">
    <ShoppingCartIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => {
    dispatch(toggleHidden());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
