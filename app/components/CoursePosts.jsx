"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddPosts from "../actions/AddPosts";

export default function CoursePosts({ postId }) {
  const [post, setPosts] = useState("post1");
  return (
    <>
      <Button
        onClick={async () => {
          const addPost = await AddPosts(post, postId);
        }}
      >
        Add Posts
      </Button>
    </>
  );
}
