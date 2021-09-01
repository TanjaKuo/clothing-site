import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// high component, let moditify our components has access to thing related to redux

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart/cart-dropdown";

import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SING IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStatToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStatToProps)(Header);

// higher component are just functions that take components as arguments,
// and then for you turns suopped up components
// second func is opeional and give us back another components that we pass it our header
