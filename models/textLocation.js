const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TextLocationSchema = new Schema({
    currentTextNumber: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('textLocations', TextLocationSchema, 'textLocations');