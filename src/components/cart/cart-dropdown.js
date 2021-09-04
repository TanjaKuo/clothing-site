import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { withRouter } from "react-router";

import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      {" "}
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => {
  console.log("from cart-drop");
  return {
    cartItems: selectCartItems(state),
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));

// withRouter is final wrapper, then we can use history and apply it on customButton

// connect pass disptach into our components as a prop,
// if we do not supply second args to connect which is mapDispatchToprops
// the reason is if only one dispatch, and it will verbose
// if we console.log, we can see the dispatch in otherProps
/* 
const CartDropdown = ({ cartItems, history, ...otherProps }) => {
  console.log(otherProps);
*/
