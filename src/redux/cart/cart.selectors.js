import { createSelector } from "reselect";

// input selector
const selectCart = (state) => state.cart;

// output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems // cart from state.cart
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0) // cartItem from cart.cartItem
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  )
);

// createSelector takes two args,
// 1. collection of array
// 2. the func and return the value we want from the selector
