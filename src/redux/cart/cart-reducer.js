import CartType from "./cart.type";
import { addItemToCart, removeItem } from "../../redux/cart/cart.utils";

const INIT_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CartType.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartType.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    case CartType.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;

    case CartType.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
  }
};

export default cartReducer;
