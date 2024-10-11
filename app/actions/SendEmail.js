"use server";

import { Subscriber } from "@/models/sub-models";

export default async function SendEmail(formData) {
  console.log("sendemail formdata:", formData);
  try {
    const email = formData["email"];
    const fullName = formData["fullName"];
    console.log("formdata:destructred:", email, fullName);

    if (!email) return null;

    const foundSubscriber = await Subscriber.findOne({ email: email }).lean();

    console.log("foundSubscriber", foundSubscriber);

    if (!foundSubscriber) {
      const subscriberPayload = {
        name: fullName,
        email: email,
      };
      await Subscriber.create(subscriberPayload);
    }
  } catch (e) {
    throw new Error(e);
  }
}
