const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  
  numOfMonths: {
      type: Number,
      required: true,
  },
}, {
  timestamps: true,
});

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;