import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_PUBLISHABLE from "../../constants/stripe";
import PAYMENT_SERVER_URL from "../../constants/server";

const successPayment = data => {
  alert("Payment Successful");
};

const errorPayment = data => {
  alert("Payment Error");
};

const onToken = (description, amount, phone, credits) => token => {
  const body = {
    amount: amount,
    token: token,
    phone: phone,
    description: description,
    credits: credits
  };

  console.log("amount: " + amount);
  console.log("phone: " + phone);
  console.log("description: " + description);
  console.log("credits: " + credits);

  axios
    .post('http://localhost:8080/payment', body)
    .then(response => {
      console.log(response);
      alert("Payment Success");
    })
    .catch(error => {
      console.log("Payment Error: ", error);
      alert("Payment Error");
    });
};

const Checkout = (props, { name, description }) => (
  <StripeCheckout
    name={props.name}
    description={props.description}
    amount={props.amount}
    token={onToken(props.description, props.amount, props.phone, props.credits)}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
