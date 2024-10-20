"use server";
import { Subscriber } from "@/models/sub-models";
import { revalidatePath } from "next/cache";
import React from "react";

export default async function ASendEmail({ fullName, email }) {
  try {
    if (!email) return { success: false, message: "Email is required" };

    const existingSubscriber = await Subscriber.findOne({
      $or: [{ email: email }, { fullName: fullName }],
    }).lean();

    if (!existingSubscriber) {
      const subscriberPayload = {
        fullName,
        email,
      };
      await Subscriber.create(subscriberPayload);

      revalidatePath("/");

      return { success: true, message: "Subscriber created successfully" };
    } else {
      return { success: false, message: "Subscriber already exists" };
    }
  } catch (e) {
    return {
      success: false,
      message: `Error subscribing the user: ${e.message || "Unknown error"}`,
    };
  }
}
