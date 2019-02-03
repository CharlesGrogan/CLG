// page used to created schema for placing orders
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const order = new Schema({
  mealName: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", bookSchema);

module.exports = Order;
