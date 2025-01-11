// page.jsx
import Card from "@/components/PostsCard";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";

export const metadata = {
  title: "this is the posts title",
  description: "this is the posts description",
};


export default async function Page() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  console.log(data);
  return (
    <div className="w-full">
      <Navbar />
      <h1 className="text-center font-extrabold text-pink-800 my-5 text-3xl">
        Posts Page
      </h1>
      <Suspense>
        <div className="grid grid-cols-4 gap-10 m-10">
          {data.posts.map((item) => (
            <Card key={item.id} cardData={item} /> // Added key attribute
          ))}
        </div>
      </Suspense>
    </div>
  );
}
