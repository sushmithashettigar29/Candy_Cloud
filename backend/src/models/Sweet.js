const mongoose = require("mongoose");

const sweetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    image: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sweet", sweetSchema);