const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReceiptSchema = new Schema({
    rEmail: {
        type: String,
        required: true,
        lowercase: true,
      },
    credits: {type: Number, required: true},
}, {timestamps: true});


// Export the model
module.exports = mongoose.model('receipts', ReceiptSchema);