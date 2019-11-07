const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var scheduler = require('node-schedule');

require('dotenv').config();

var app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

var dailyText = scheduler.scheduleJob('0 14 * * *', function() {
    console.log('I run everyday at 2pm');
});
