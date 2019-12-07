const Mongoose = require('mongoose');

const bookSchema = new Mongoose.Schema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
  genre: {
    type: String
  },
  authorId: {
    type: String
  }
}, { versionKey: false, timestamps: false});

module.exports = Mongoose.model('Book', bookSchema);