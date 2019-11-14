// Map dependencies
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const Phone = require('phone');
const validator = require('email-validator');

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
        const { amount, token, description, credits } = req.body;
        let phoneNumber = req.body.phoneNumber;

        phoneNumber = parsePhoneNumberFromString(phoneNumber);

        if (
            validator.validate(token.email) &&
            phoneNumber !== null &&
            phoneNumber !== undefined &&
            credits !== 0
        ) {
            phoneNumber = Phone(phoneNumber);

            console.log('amount: ' + amount);
            console.log('phone: ' + phoneNumber[0]);
            console.log('description: ' + description);
            console.log('credits: ' + credits);
            console.log('Email: ' + token.email);
            console.log('Token ID: ' + token.id);
            console.log('Credit Ending :' + token.source);

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
          error = "The phone number or email is invalid";
        }
    } catch (error) {
        console.error('Error:', error);
        status = 'failure';
    }
    res.json({ error, status });
});

module.exports = router;
