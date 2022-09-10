const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
  imgUrl: {
    type: String,
    trim: true,
  },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
