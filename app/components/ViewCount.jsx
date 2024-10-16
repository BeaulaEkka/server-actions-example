import React, { useEffect, useState } from "react";
import IncrementViews from "../actions/IncrementViews";

export default function ViewCount() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await IncrementViews();
      setViews(updatedViews);
    };
    updateViews();
  }, []);
  return (
    <div>
      <p>Views: {views}</p>
      <IncrementViews />
    </div>
  );
}
