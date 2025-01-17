import React from "react";
import PostForm from "@/components/forms/PostForm";

import PostsList from "@/components/lists/PostsList";

export default async function page() {

  const response = await fetch("http://localhost:3000/api/posts");
  const data = await response.json();

  return (
    <div className="relative w-[60%] flex flex-col items-center justify-between">
      <PostForm />
      <div className="w-full mt-10 flex flex-col gap-5 bg-pink-800 p-1">
        <PostsList data={data} />
      </div>
    </div>
  );
}
