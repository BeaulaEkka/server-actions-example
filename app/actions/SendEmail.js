"use server";

import { Subscriber } from "@/models/sub-models";
import { Resend } from "resend";
import EmailTemplate from "../components/EmailTemplate";
import { revalidatePath } from "next/cache";

const resend = new Resend(process.env.RESEND_API_KEY);
export default async function SendEmail({ fullName, email }) {
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
      const message = `Dear ${fullName} thank you for your subscription. The doors of wisdom is opened to you! Enjoy`;

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Welcome to Door of Wisdom",
        react: EmailTemplate({ message }),
      });
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
