import CartType from "./cart.type";

export const toggleHidden = () => {
  return {
    type: CartType.TOGGLE_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: CartType.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CartType.CLEAR_CART_ITEM,
    payload: item,
  };
};
