const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  images: {
    type: Array,
  },
  brend: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  details: {
    type: Array,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const DB = model("products", productSchema);
module.exports = { DB };
