import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
// high component, let moditify our components has access to thing related to redux
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart/cart-dropdown";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

/*  above or this way
const mapStateToProps = (state) => {
  console.log("from header");
  return {
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state),
  };
}; */

export default connect(mapStateToProps)(Header);

// higher component are just functions that take components as arguments,
// and then for you turns suopped up components
// second func is opeional and give us back another components that we pass it our header
