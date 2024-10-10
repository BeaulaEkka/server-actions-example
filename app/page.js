import Subscribers from "./components/Subscribers";
import SubscriptionForm from "./components/SubscriptionForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen mx-auto mt-10 ">
      <SubscriptionForm />
      <Subscribers />
    </div>
  );
}
