import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    // If already connected, return the existing connection
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (e) {
    console.error("MongoDB connection error:", e);
    throw new Error("Failed to connect to MongoDB");
  }
}
