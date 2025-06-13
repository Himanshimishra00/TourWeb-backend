// backend/models/Package.js
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Package', packageSchema);
