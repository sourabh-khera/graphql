const Mongoose = require('mongoose');

const authorSchema = new Mongoose.Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
}, { versionKey: false, timestamps: false});

module.exports = Mongoose.model('Author', authorSchema);