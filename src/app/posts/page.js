// page.jsx
import Card from "@/components/cards/PostsCard";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";

export const metadata = {
  title: "this is the posts title",
  description: "this is the posts description",
};


export default async function Page() {
  const response = await fetch("http://localhost:3000/api/posts");
  const data = await response.json();
  console.log(data);
  return (
    <div className="w-full">
      <Navbar />
      <h1 className="text-center font-extrabold text-pink-800 mt-40 mb-5 text-3xl">
        Posts Page
      </h1>
      <Suspense>
        <div className="grid grid-cols-4 gap-10 m-10 mt-20">
          {data.map((item) => (
            <Card key={item._id} cardData={item} /> // Added key attribute
          ))}
        </div>
      </Suspense>
    </div>
  );
}
