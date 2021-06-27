import { createSelector } from 'reselect';

const selectCart = state=> state.cart;

export const cartHidden = createSelector(
    [selectCart],
    cart => cart.hidden,
)

export const selectCartItems = createSelector(
    [selectCart],
     cart => cart.cartItems
);

export const selectItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatorQuan, cartItem) => {
        return accumulatorQuan + cartItem.quantity
    }, 0)
)