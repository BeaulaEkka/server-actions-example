"use server";

import { Subscriber } from "@/models/sub-models";

// import { Subscriber } from "@/models/sub-models";

// export default async function SendEmail({ fullName, email }) {
//   console.log("Received data in SendEmail:", { fullName, email });
//   try {
//     const email = formData["email"];
//     const fullName = formData["fullName"];
//     console.log("formdata:destructred:", email, fullName);

//     if (!email) return null;

//     const foundSubscriber = await Subscriber.findOne({ email: email }).lean();

//     console.log("foundSubscriber", foundSubscriber);

//     if (!foundSubscriber) {
//       const subscriberPayload = {
//         name: fullName,
//         email: email,
//       };
//       await Subscriber.create(subscriberPayload);
//     }
//   } catch (e) {
//     throw new Error(e);
//   }
// }

export default async function SendEmail({ fullName, email }) {
  console.log("Received data in SendEmail:", { fullName, email });

  // Basic validation before proceeding
  if (!fullName || !email) {
    throw new Error("Full name and email are required.");
  }

  const newSubscriber = new Subscriber({ fullName, email });

  try {
    await newSubscriber.save();
    return { success: true };
  } catch (error) {
    console.error("Error saving the subscriber:", error);
    throw new Error("Error saving the subscriber.");
  }
}
