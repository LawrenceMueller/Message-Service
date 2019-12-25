import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const onToken = (description, amount, credits, notifier) => token => {

  const body = {
    amount: amount,
    token: token,
    description: description,
    credits: credits
  };

  axios
    .post('http://www.lgbtthroughhistory.com/payment', body)
    .then(response => {
      console.log(response.data);
      
      switch(response.data.error){
        case "Number of days must not be 0":
            notifier(2);
          break;
        case "Something went wrong":
            notifier(3);
          break;
        case "failure":
            notifier(4);
          break;
        default:
            notifier(6);
      }
    })
    .catch(error => {
      console.log("Payment Error: ", error);
      notifier(1);
    });
};

const Checkout = (props) => (
  <StripeCheckout
    name={props.name}
    description={props.description}
    amount={props.amount}
    token={onToken(props.description, props.amount, props.credits, props.notifier)}
    stripeKey={'pk_live_B3HslsZTHckbrdBjsYsQ6CrV00cSNBjROa'}
  />
);

export default Checkout;