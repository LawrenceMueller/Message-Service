import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../../constants/stripe';
import PAYMENT_SERVER_URL from '../../constants/server';

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (description, amount, phone, credits) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
        description,
        source: token.id,
        amount: amount,
        phone: phone,
        credits: credits
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = (props, {name, description}) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={props.amount}
    token={onToken(description, props.amount, props.phone, props.credits)}
    stripeKey={STRIPE_PUBLISHABLE}
  />
  
export default Checkout;