const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const textsSchema = new Schema({

    textTitle:{
        type: String,
        required: true,
    },

    textBody: {
    type: String,
    required: true,
  },
});

const Texts = mongoose.model('Texts', textsSchema);

module.exports = Texts;