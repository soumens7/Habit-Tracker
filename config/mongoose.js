import mongoose from 'mongoose';

const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/habit_tracker";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // Increase connection timeout to 30 seconds
  socketTimeoutMS: 45000,  // Increase socket timeout to 45 seconds
  bufferCommands: false,  // Disable buffering
}).catch(error => {
  console.error("Error connecting to MongoDB:", error);
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to Database :: MongoDB');
});

export default db;
