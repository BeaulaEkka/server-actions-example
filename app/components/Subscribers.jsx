import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Subscribers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Added</CardTitle>
        <CardDescription>Please check your email</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Woow! Beaula Ekka subscribed</p>
      </CardContent>
      <CardFooter>
        <p>Last subscription at:{new Date().toLocaleTimeString()}</p>
      </CardFooter>
    </Card>
  );
}
