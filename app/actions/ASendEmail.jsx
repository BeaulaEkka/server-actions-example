import { Subscriber } from "@/models/sub-models";
import { revalidatePath } from "next/cache";
import React from "react";

export default async function ASendEmail({ name, email }) {
  try {
    if (!email) return { success: false, message: "Email is required" };

    const existingSubscriber = await Subscriber.findOne({
      $or: [{ email: email }, { name: name }],
    }).lean();

    if (!existingSubscriber) {
      const subscriberPayload = {
        name,
        email,
      };
      await Subscriber.create(subscriberPayload);
      revalidatePath("/");
    }
  } catch (e) {}
  return <div></div>;
}
