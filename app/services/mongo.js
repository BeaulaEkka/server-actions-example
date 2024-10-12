export async function dbConnect() {
  try {
    await mongoose.connect(String(process.env.MONGODB_URI));
  } catch (e) {
    console.error(e);
  }
}
