const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    cEmail: {
        type: String,
        required: true,
        lowercase: true,
      },
    phoneNumber: {type: String, required: true, max: 20},
    credits: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('customers', CustomerSchema);