const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  category: String,
  description: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Book", bookSchema);
