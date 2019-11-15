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
const accountSid = process.env.AC54c76e0450a1ff833e7d94dda6b42800;
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

// This line just fixes a mongoose deprecation warning
mongoose.set('useCreateIndex', true);

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

//cron.schedule("* * * * * *", function(){
  // customerModel.find().then((customers) => {
  //   customers.forEach((customer) => {
  //     let tempNumber = customer.phoneNumber;
  //     var message = client.messages.create({
  //         body: 'Who do you think is a better DM? Tyler or Javi?',
  //         from: '+12028311646',
  //         to: tempNumber
  //       })
  //       .then(message =>  console.log(message.status))
  //       .done();
  //   });
  // });
//});