import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.scss";

const StripeCheckoutButton = ({ price }) => {
  const publishKey =
    "pk_test_51JWGHxFJmGfcODU2GfGvPHBhC2uxCzjtwQGxUhKDRWcqZRA5VTd9ZpRWWKTeaV6cZbkvRJ9Xq5byweYXH6MNhn5n00zUf3zsGa";
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("payment success!");
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishKey}
      name="CRWN CLOTHING Ltd." // the pop-in header title
      description={`Your total is ${price}`} // the pop-in header subtitle
      image="https://svgshare.com/i/CUz.svg" // the pop-in header image (default none)
      ComponentClass="div"
      panelLabel="Pay Now" // prepended to the amount in the bottom pay button
      amount={priceForStripe}
      currency="AUD"
      locale="auto"
      email="info@crwn.clothing.co"
      shippingAddress
      billingAddress={false}
      className="stripe-button-el span"
    />
  );
};

export default StripeCheckoutButton;
