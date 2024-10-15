"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddComments from "../actions/AddComments";

export default function CourseComments({ postId }) {
  const [comment, setComment] = useState("some comment");
  return (
    <Button
      onClick={async () => {
        const added = await AddComments(comment, postId);
      }}
    >
      Add Comment
    </Button>
  );
}
