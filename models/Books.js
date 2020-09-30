const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  publisher: {
    type: String,
  },
  year: {
    type: Date.year,
  },
  month: {
    type: Date.month,
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
