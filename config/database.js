const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  try {
    // Check if already connected
    if (isConnected) {
      console.log('MongoDB already connected');
      return;
    }

    const rawUri = process.env.MONGODB_URI;
    const dbPassword = process.env.DB_PASSWORD;

    if (!rawUri) {
      throw new Error('MONGODB_URI is not defined');
    }

    if (rawUri.includes('<password>') && !dbPassword) {
      throw new Error('DB_PASSWORD is not defined');
    }

    const mongoUri = rawUri.includes('<password>')
      ? rawUri.replace('<password>', encodeURIComponent(dbPassword || ''))
      : rawUri;

    const conn = await mongoose.connect(mongoUri, {
      // Serverless optimizations
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    throw error; // Let the caller handle the error instead of exiting
  }
};

module.exports = connectDB;
