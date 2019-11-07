const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  
  credits: {
      type: Number
  },
}, {
  timestamps: true,
});

const Customer = mongoose.model('User', customerSchema);

module.exports = Customer;