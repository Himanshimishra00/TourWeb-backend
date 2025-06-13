const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

module.exports = connectDB;
