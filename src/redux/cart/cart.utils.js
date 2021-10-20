/**
 * [someFunction description]
 * @param  {[array]} arg1 the cart item
 * @param  {[object]} arg2 item to add
 * @return {[array]}      cart items
 */
export const addItemToCart = (cartItems, itemToAdd) => {
  const exsitingItem = cartItems.find((item) => {
    return item.id === itemToAdd.id;
  });

  if (exsitingItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === itemToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

/**
 * [someFunction description]
 * @param  {[array]} arg1 the cart item
 * @param  {[object]} arg2 item to remove
 * @return {[array]}      cart items
 */

export const removeItem = (cartItems, itemToRemove) => {
  const exsitingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (exsitingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
