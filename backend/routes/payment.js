// Map dependencies
const express = require('express');
const router = express.Router();
const uuid = require('uuid/v4');
const Phone = require('phone');
const PhoneNumber = require('awesome-phonenumber');

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

        if (phoneNumber.charAt(0) == '+' && credits !== 0) {
            phoneNumber = PhoneNumber(phoneNumber); // Create PhoneNumber Object using thrid party, for validation purposes

            if (phoneNumber.isValid()) {
                // Convert validated phone into string
                phoneNumber = Phone(phoneNumber.getNumber());
                phoneNumber = phoneNumber[0];

                // Create a Stripe customer because we need a customer id for charge
                const customer = await stripe.customers.create({
                    email: token.email,
                    source: token.id
                });

                //do database stuff
                const newCustomer = new customerModel({
                    cEmail: token.email,
                    phoneNumber: phoneNumber,
                    credits: credits,
                    lastMessaged: new Date(),
                });

                const newReceipt = new receiptModel({
                    rEmail: token.email,
                    phoneNumber: phoneNumber,
                    credits: credits,
                    customer_ID: customer.id,
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
                error = 'phone is invalid';
            }
        } else {
            if (credits === 0) {
                error = 'Number of days must not be 0';
            } else if (phoneNumber.charAt(0) != '+') {
                error = 'Forgot Country Code';
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
