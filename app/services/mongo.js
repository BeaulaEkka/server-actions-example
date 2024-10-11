import mongoose from "mongoose";

export async function dbConnect() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error(
      "Error: MongoDB connection string (MONGODB_URI) is not defined in environment variables."
    );
    return;
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
