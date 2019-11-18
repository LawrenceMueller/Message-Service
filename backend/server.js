// Declare all dependencies
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cron = require('node-cron');
const twilio = require('twilio');

// Configure dotenv for security purposes
dotenv.config();

// Create the constants needed for the application
const URI = process.env.DB_CONNECTION_STRING;
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = require('twilio')(accountSid, authToken);
const customerModel = require('./models/customer');
const textLocationModel = require('./models/textLocation');
const textModel = require('./models/text');
const app = express();

// Connect to the database
mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(
    () => {
        console.log('Database connection established!');
    },
    err => {
        console.log('Error connecting Database instance due to: ', err);
    }
);

// These lines just fix some mongoose deprecation warnings
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Define middleware
app.use(express.json());
app.use(cors());

const paymentRouter = require('./routes/payment');
app.use('/payment', paymentRouter);

// Start the Web Server
app.listen(8080, () =>
    console.log('Listening on port 8080, web server establishd.')
);



//Send SMS to everyone in the database
cron.schedule('* 14 * * * ', function() {
    let currentTextLocation = 0;
    let currentTextBody = '';

    // Query for the id of the text that we will send
    textLocationModel.findById(process.env.TEXTLOCATION_ID, function(err, doc) {
        if (err) {
            console.log('error: ' + err);
        }
        currentTextLocation = doc.currentTextNumber; // Store ID of the text that we need to find
        doc.currentTextNumber = currentTextLocation + 1; // Increment doc so next time we will get the next text
        doc.save();

        // Query for the text we will send out to the users using the ID we found
        textModel.find({ text_ID: currentTextLocation }, function(err, doc) {
            if (err) {
                console.log('error: ' + err);
            }
            currentTextBody = doc[0]['body']; // No Idea why I have to access the text this way but it works

            // Query for all customers
            customerModel.find().then(customers => {
                // Iterate on every customer to send out each text
                customers.forEach(customer => {
                    // Find each customer again using findByID. It is redundant but this is the only way it works
                    customerModel.findById(customer._id, function(err, doc) {
                        if (err) {
                            console.log('error: ' + err);
                        }
                        // Delete customer if their credits have expired
                        if (doc.credits === 0) {
                            customerModel.findByIdAndRemove(doc._id).exec();
                        } else {
                            // Send the customer a message
                            console.log();
                            var message = client.messages
                                .create({
                                    body: currentTextBody,
                                    from: process.env.TWILIO_NUM,
                                    to: customer.phoneNumber
                                })
                                .then(message => console.log(message.status))
                                .done();

                            doc.credits = doc.credits - 1; // Update customer credits to reflect newest sent message
                            doc.save(); // Update customer
                        }
                    });
                });
            });
        });
    });
});
