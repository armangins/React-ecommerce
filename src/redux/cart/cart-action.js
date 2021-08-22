import CartType from "./cart.type";



/**
 * toggles the button for displaying cart 
 * @return {[object]}  the actions payload
 */
export const toggleHidden = () => {
  return {
    type: CartType.TOGGLE_HIDDEN,
  };
};



/**
 * action to incr/dec item count
 * @param  {[object]} arg1 the items that needs to be added/removed to the cart
 * @return {[object]}  action payload
 */
export const addItem = (item) => {
  return {
    type: CartType.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
   type: CartType.REMOVE_ITEM,
    payload: item,
  };
};


/**
 * action to clear item 
 * @param  {[object]} arg1 the items that needs to be cleared from the cart
 * @return {[object]}  action payload
 */
export const clearItemFromCart = (item) => {
  return {
    type: CartType.CLEAR_CART_ITEM,
    payload: item,
  };
};


