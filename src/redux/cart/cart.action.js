import { CartActionTypes } from "./cart.type";

export const toggleCartHidden = (user) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
