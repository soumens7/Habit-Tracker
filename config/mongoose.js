import mongoose from 'mongoose';

// Connection URI
const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/habit_tracker';

// Function to connect to MongoDB
async function connectToDatabase() {
  try {
    // Await the connection to ensure it's established before queries are executed
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, // 30 seconds for initial connection timeout
      socketTimeoutMS: 45000,  // 45 seconds for ongoing operations
    });

    console.log('Connected to Database :: MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Optionally exit the process if the connection fails
  }
}

// Call the connect function
connectToDatabase();

export default mongoose.connection;
