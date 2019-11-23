import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_PUBLISHABLE from "../../constants/stripe";
import PAYMENT_SERVER_URL from "../../constants/server";

const onToken = (description, amount, phone, credits, notifier) => token => {

  const body = {
    amount: amount,
    token: token,
    phoneNumber: phone,
    description: description,
    credits: credits
  };

  axios
    .post(PAYMENT_SERVER_URL, body)
    .then(response => {
      console.log(response.data);
      
      switch(response.data.error){
        case "phone is invalid":
            notifier(1);
          break;
        case "Number of days must not be 0":
            notifier(2);
          break;
        case "Something went wrong":
            notifier(3);
          break;
        case "failure":
            notifier(4);
          break;
        case "Forgot Country Code":
            notifier(5);
            break;
        default:
            notifier(6);
      }
    })
    .catch(error => {
      console.log("Payment Error: ", error);
      alert("Payment Error");
    });
};

const Checkout = (props) => (
  <StripeCheckout
    name={props.name}
    description={props.description}
    amount={props.amount}
    token={onToken(props.description, props.amount, props.phone, props.credits, props.notifier)}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;