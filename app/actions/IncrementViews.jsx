import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function IncrementViews() {
  const [views, setViews] = useState(0);
  const handleClick = () => {
    setViews(views + 1);
  };
  return (
    <>
      <p>{views}</p>
      <Button onClick={handleClick}>Increment</Button>;
    </>
  );
}
