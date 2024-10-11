import { replaceMongoIdInArray } from "@/lib/transform";
import { Subscriber } from "@/models/sub-models";
export async function getSubscribers() {
  try {
    const subscribers = await Subscriber.find({}).lean();
    return replaceMongoIdInArray(subscribers);
  } catch (e) {
    throw new Error(e.message);
  }
}
