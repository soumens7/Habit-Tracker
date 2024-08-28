import mongoose from "mongoose";

// Connection string to MongoDB
const mongoURI = "mongodb://localhost:27017/habit_tracker";

// Connecting to MongoDB with recommended options
mongoose.connect(mongoURI, {
  useNewUrlParser: true,       // Parses MongoDB connection strings
  useUnifiedTopology: true,    // Opts into the MongoDB driver's new connection management engine
  useCreateIndex: true,        // Ensures indexes are created properly
  useFindAndModify: false,     // Uses native `findOneAndUpdate()` rather than Mongoose's deprecated `findAndModify()`
});

// Mongoose database connection
const db = mongoose.connection;

// Handling connection errors
db.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Handling successful connection
db.once("open", () => {
  console.log("Connected to Database :: MongoDB");
});
