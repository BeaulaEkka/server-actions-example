// app/actions/createInvoice.js
"use server";

export async function createInvoice(formData) {
  const rawFormData = {
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
  };

  console.log("rawFormData:", rawFormData);

  // Here, you can mutate your database collection and send emails
  // Example: await mutateCollection(rawFormData);
  // Example: await sendEmail(rawFormData);

  return rawFormData; // Return the form data
}
