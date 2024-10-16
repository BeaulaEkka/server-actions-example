import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSubscribers } from "@/queries";

export default async function Subscribers() {
  const subscribers = await getSubscribers();
  console.log(subscribers);
  return (
    <div>
      {subscribers.map((sub) => (
        <Card key={sub.id}>
          <CardHeader>
            <CardTitle className="capitalize">
              Congratulations! {sub.fullName}
            </CardTitle>
            <CardDescription>Your subscription has been added.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{sub.email}</p>
          </CardContent>
          <CardFooter>
            <p>
              Last subscription at:{" "}
              {new Date(sub.createdAt).toLocaleDateString()}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
