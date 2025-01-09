// page.jsx
import Card from "@/components/UsersCard";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
export default async function Page() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return (
    <div className="w-full">
      <Navbar />
      <h1 className="text-center font-extrabold text-pink-800 my-5 text-3xl">
        Users Page
      </h1>
      <Suspense>
        <div className="grid grid-cols-4 gap-10 m-10">
          {data.users.map((item) => (
            <Card key={item.id} cardData={item} /> // Added key attribute
          ))}
        </div>{" "}
      </Suspense>
    </div>
  );
}
