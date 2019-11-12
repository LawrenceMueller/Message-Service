import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_PUBLISHABLE from "../../constants/stripe";
import PAYMENT_SERVER_URL from "../../constants/server";

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
    .post(PAYMENT_SERVER_URL, body)
    .then(response => {
      console.log(response);
      alert("Payment Success");
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
    token={onToken(props.description, props.amount, props.phone, props.credits)}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;


// phoneClean() {
//   let phoneCombo;
//   if (this.state.country[0] !== '+') {
//       phoneCombo = '+' + this.state.country + this.state.phoneNumber;
//       const finalPhone = parsePhoneNumberFromString(phoneCombo);
//       console.log('here');
//       return finalPhone.isValid ? finalPhone.number : 'invalid-phone';
//   } else {
//       phoneCombo = this.state.country + this.state.phoneNumber;
//       const finalPhone = parsePhoneNumberFromString(phoneCombo);
//       console.log('here');
//       return finalPhone.isValid ? finalPhone.number : 'invalid-phone';
//   }
// }