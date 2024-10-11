import mongoose from "mongoose";
export async function dbConnect() {
  try {
    const conn = await mongoose.connect(String(process.env.MONGODB_URI));
  } catch (e) {
    console.error(e);
  }
}
