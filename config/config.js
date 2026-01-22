const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rawhyUser:gw6ACItUmWT9k33y@mongo.9t8yorj.mongodb.net/?appName=mongo",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB connection error: ", err.message);
    process.exit(1); // Stops server if connection fails
  }
};

module.exports = connectDB;
