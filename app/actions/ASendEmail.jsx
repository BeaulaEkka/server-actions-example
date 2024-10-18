import { Subscriber } from "@/models/sub-models";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function ASendEmail({ name, email }) {
  try {
    if (!email) return { success: false, message: "Email is required" };

    const existingSubscriber = await Subscriber.findOne({
      $or: [{ email: email }, { name: name }],
    }).lean();

    if (!existingSubscriber) {
      const subscriber = new Subscriber({
        name: name,
        email: email,
      });
    }
  } catch (e) {}
  return <div></div>;
}
