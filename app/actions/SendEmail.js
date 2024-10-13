// "use server";

// import { Subscriber } from "@/models/sub-models";

// export default async function SendEmail({ fullName, email }) {
//   try {
//     if (!email) return { success: false, message: "Email is required" };

//     const existingSubscriber = await Subscriber.findOne({
//       $or: [{ email: email }, { fullName: fullName }],
//     }).lean();

//     if (!existingSubscriber) {
//       const subscriberPayload = {
//         fullName,
//         email,
//       };
//       await Subscriber.create(subscriberPayload);
//     } else {
//       return { success: false, message: "Subscriber already exists" };
//     }
//   } catch (e) {
//     throw new Error(e);
//   }
// }

"use server";

import { Subscriber } from "@/models/sub-models";

export default async function SendEmail({ fullName, email }) {
  try {
    if (!email) return { success: false, message: "Email is required" };

    const existingSubscriber = await Subscriber.findOne({
      $or: [{ email: email }, { fullName: fullName }],
    }).lean();

    if (existingSubscriber) {
      // If the subscriber already exists, return a failure message
      return { success: false, message: "Subscriber already exists" };
    }

    // If not, create a new subscriber
    const subscriberPayload = {
      fullName,
      email,
    };
    await Subscriber.create(subscriberPayload);

    // Return a success response
    return { success: true, message: "Subscription successful!" };
  } catch (error) {
    return {
      success: false,
      message: `Error subscribing the user: ${
        error.message || "Unknown error"
      }`,
    };
  }
}
