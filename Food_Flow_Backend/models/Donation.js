const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  foodType: { type: String, required: true },
  minServings: { type: Number, required: true },
  foodCategory: { type: String, required: true },
  numKGs: { type: Number, required: true },
  numDishes: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", donationSchema);
module.exports = Donation;
