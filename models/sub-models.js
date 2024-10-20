import mongoose, { Schema } from "mongoose";

const SubscribersSchema = new Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now,
  },
  unsubscribed: {
    required: true,
    type: Boolean,
    default: false,
  },
});

export const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscribersSchema);
