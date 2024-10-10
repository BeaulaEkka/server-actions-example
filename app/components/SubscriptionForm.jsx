import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  userName: z.string().min(3).max(50),
  email: z.string().email(),
});
export default function SubscriptionForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  return (
    <div>
      This is subscribtion form
      <div>
        <Button>Submit</Button>
      </div>
    </div>
  );
}
