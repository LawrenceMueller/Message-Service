const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
    cEmail: {
        type: String,
        required: true,
        lowercase: true,
      },
    credits: {type: Number, required: true},
    lastMessaged: {type: Date},
});


// Export the model
module.exports = mongoose.model('customers', CustomerSchema);