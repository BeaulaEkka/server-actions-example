// "use client";
// import { Button } from "@/components/ui/button";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import SendEmail from "../actions/SendEmail";
// import { toast } from "sonner";

// const formSchema = z.object({
//   fullName: z
//     .string()
//     .min(3, { message: "Full Name must be more than 3 characters" })
//     .max(50, { message: "Full name must not be more that 50 characters" }),
//   email: z.string().email({
//     message: "Invalid email",
//   }),
// });

// export default function SubscriptionForm() {
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       fullName: "",
//       email: "",
//     },
//   });

//   async function onSubmit(values) {
//     console.log("onsubmitValues", values);
//     try {
//       await SendEmail(values);
//       toast.success(`${values.fullName} subscribed successfully!`);
//     } catch (e) {
//       console.error("onsubmit:function", e);
//       toast.error(e.message);
//     }
//   }

//   const { isSubmitting, isValid } = form.formState;

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="flex flex-col gap-4 p-14 rounded-md shadow-md w-[400px]"
//       >
//         {/** Full Name */}
//         <FormField
//           control={form.control}
//           name="fullName"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Full Name</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="John Doe"
//                   {...field}
//                   disabled={isSubmitting}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         {/** Email */}
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input
//                   placeholder="john.doe@example.com"
//                   {...field}
//                   disabled={isSubmitting}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div>
//           <Button className="mt-4" disabled={!isValid || isSubmitting}>
//             Submit
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SendEmail from "../actions/SendEmail";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full Name must be more than 3 characters" })
    .max(50, { message: "Full name must not be more that 50 characters" }),
  email: z.string().email({
    message: "Invalid email",
  }),
});

export default function SubscriptionForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  async function onSubmit(values) {
    
    try {
      const response = await SendEmail(values);

      // Handle the server response
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (e) {
      console.error("onsubmit:function", e);
      toast.error("An error occurred. Please try again.");
    }
  }

  const { isSubmitting, isValid } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-14 rounded-md shadow-md w-[400px]"
      >
        {/** Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/** Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john.doe@example.com"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button className="mt-4" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
