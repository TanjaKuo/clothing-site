import { CartActionTypes } from "./cart.type";

export const toggleCartHidden = (user) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
