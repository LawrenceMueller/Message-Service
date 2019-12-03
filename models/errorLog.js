const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ErrorLogSchema = new Schema({
    log: {type: String, required: true},
},{timestamps: true});


// Export the model
module.exports = mongoose.model('errorLogs', ErrorLogSchema);