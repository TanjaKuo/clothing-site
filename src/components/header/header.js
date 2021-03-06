import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { auth } from "../../firebase/firebase.utils";
// high component, let moditify our components has access to thing related to redux
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart/cart-dropdown";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.action";

import {
  HeaderContainer,
  LogoContainer,
  OptionalContainer,
  OptionLink,
} from "./header.style";
//import "./header.scss"; replace by header.style.scss
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionalContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SING IN</OptionLink>
      )}
      <CartIcon />
    </OptionalContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// higher component are just functions that take components as arguments,
// and then for you turns suopped up components
// second func is opeional and give us back another components that we pass it our header
