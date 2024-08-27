import mongoose from "mongoose";

// Connecting to MongoDB
mongoose.connect("mongodb://localhost/habit_tracker");

// Mongoose database connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

// Export the db object
export default db;
