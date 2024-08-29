import mongoose from 'mongoose';

// Define the connection URI (use environment variables if available)
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/habit_tracker";

// Function to connect to the database
async function connectToDatabase() {
  try {
    // Await the connection to ensure it's established before any queries are executed
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false, // Disable buffering to handle commands immediately
    });

    console.log('Connected to Database :: MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Handle connection errors, possibly by exiting or retrying
    process.exit(1); // Exit the process if the connection fails (optional)
  }
}

// Connect to the database
connectToDatabase();

// Export the connection object if needed
export default mongoose.connection;
