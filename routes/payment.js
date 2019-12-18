// Map dependencies
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');

// Get required instances
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_TEST);

// Import models for DB stuff
const customerModel = require('../models/customer');
const receiptModel = require('../models/receipt');

// Define the post request from the web app
router.post('/', async (req, res) => {
    let error;
    let status;
    try {
        // Deconstruct request
        const { amount, token, description, credits } = req.body;

        if (credits !== 0) {
            // Create a Stripe customer because we need a customer id for charge
            const customer = await stripe.customers.create({
                email: token.email,
                source: token.id
            });

            //do database stuff
            const newCustomer = new customerModel({
                cEmail: token.email,
                credits: credits,
                lastMessaged: new Date()
            });

            const newReceipt = new receiptModel({
                rEmail: token.email,
                credits: credits,
                customer_ID: customer.id
            });

            newCustomer
                .save()
                .then(console.log('saved customer'))
                .catch(err => console.log(err));

            newReceipt
                .save()
                .then(console.log('saved reciept'))
                .catch(err => console.log(err));

            // Unique key to make sure customers are not charged twice
            const idempotency_key = uuid();
            const charge = await stripe.charges // Charge the credit card
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
                );

            status = 'success'; // If everything went well send back success
        } else {
            if (credits === 0) {
                error = 'Number of days must not be 0';
            } else {
                error = 'Something went wrong';
            }
        }
        // The user provided some form of invalid information
    } catch (error) {
        console.error('Error:', error);
        status = 'failure';
    }
    res.json({ error, status });
});

module.exports = router;
