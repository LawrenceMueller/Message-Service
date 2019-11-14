// Map dependencies
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const Phone = require('phone');
const PhoneNumber = require( 'awesome-phonenumber' );

// Get required instances
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Import models for DB stuff
const customerModel = require('../models/customer');
const receiptModel = require('../models/receipt');
const textModel = require('../models/text');

// Define the post request from the web app
router.post('/', async (req, res) => {
    let error;
    let status;
    try {
        // Deconstruct request
        const { amount, token, description, credits } = req.body;
        let phoneNumber = req.body.phoneNumber;

        //Add +1 in front of phone number if no country code exists
        if(phoneNumber[0] != "+"){
          phoneNumber = "+1" + phoneNumber;
        }

        phoneNumber = PhoneNumber(phoneNumber); // Create PhoneNumber Object using thrid party for validation purposes

        if (
            phoneNumber !== null &&
            phoneNumber !== undefined &&
            phoneNumber.isValid() &&
            credits !== 0
        ) {
             // Convert validated phone into string
            phoneNumber = Phone(phoneNumber.getNumber());
            phoneNumber = phoneNumber[0];

            console.log('amount: ' + amount);
            console.log('phone: ' + phoneNumber);
            console.log('description: ' + description);
            console.log('credits: ' + credits);
            console.log('Email: ' + token.email);
            console.log('Token ID: ' + token.id);
            console.log('Credit Ending :' + token.source);

            // Create a Stripe customer because we need a customer id for charge
            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            });

            const idempotency_key = uuid();
            const charge = await stripe.charges
                .create(
                    {
                        amount: amount,
                        currency: 'usd',
                        customer: customer.id,
                        receipt_email: token.email,
                        description: description,
                        receipt_email: token.email
                    },
                    {
                        idempotency_key
                    }
                )
                .then(() => {
                    console.log('customer id: ' + customer.id);
                    console.log('Payment was charged and now I can do shit'); //do db stuff
                });

            status = 'success';
        }
        else{
          if(phoneNumber === null || phoneNumber === undefined || !phoneNumber.isValid()){
            error = "phone is invalid";
          }else if(credits === 0){
            error = "Number of days must not be 0";
          }else{
            error = "Something went wrong"
          }
        }
    } catch (error) {
        console.error('Error:', error);
        status = 'failure';
    }
    res.json({ error, status });
});

module.exports = router;
