export const addItemToCart = (cartItems, itemToAdd) => {
  const exsitingItem = cartItems.find((item) => {
 return   item.id == itemToAdd.id;
  });

  if (exsitingItem) {
     
    return cartItems.map((cartItem) => {
      
      if (cartItem.id == itemToAdd.id) {
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
