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

//Perform a basic SMS message send
//cron.schedule("* * * * * *", function(){
// var message = client.messages.create({
//   body: 'Who do you think is a better DM? Tyler or Javi?',
//   from: '+12028311646',
//   to: '+16268249559'
// })
// .then(message =>  console.log(message.status))
// .done();
//});

//Send SMS to everyone in the database
//cron.schedule('* * * * *', function() {
customerModel.find().then(customers => {
    // Query for all customers
    customers.forEach(customer => {
        // Iterate on every customer
        // Find the customer again using findByID. It is redundant but this is the only way it works
        customerModel.findById(customer._id, function(err, doc) {
            if (err) {
                console.log('error: ' + err);
            }
            if (doc.credits === 0) {
                // Delete customer if their credits have expired
                customerModel.findByIdAndRemove(doc._id).exec();
            } else {
                // Send the customer a message
                var message = client.messages
                    .create({
                        body: 'Who do you think is a better DM? Tyler or Javi?',
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
//});