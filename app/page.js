import Subscribers from "./components/Subscribers";
import SubscriptionForm from "./components/SubscriptionForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 mx-auto mt-10 ">
      <SubscriptionForm />
      <Subscribers />
    </div>
  );
}
