"use client";
// app/test/page.jsx
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { createInvoice } from "./_components/form";


export default function Testpage() {
  const [rawFormData, setRawFormData] = useState([]); // Hold form data

  async function handleSubmit(formData) {
    const result = await createInvoice(formData); // Call server action
    setRawFormData([...rawFormData, result]); // Update form data state
  }

  return (
    <>
      <form action={handleSubmit} className="m-4">
        <input type="hidden" name="customerId" value="001" />
        <input
          type="number"
          className="mx-2 border border-black rounded"
          name="amount"
          placeholder="Enter amount"
          required
        />

        <Button type="submit">Create Invoice</Button>
      </form>

      {/* Display the form data */}
      <div className="mt-4">
        {rawFormData.length > 0 ? (
          rawFormData.map((data, index) => (
            <div key={index} className="p-2 my-2 border">
              <p>Customer ID: {data.customerId}</p>
              <p>Amount: {data.amount}</p>
            </div>
          ))
        ) : (
          <p>No data available yet</p>
        )}
      </div>
    </>
  );
}
