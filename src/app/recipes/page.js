// page.jsx
import Card from "@/components/RecipesCard";
import Navbar from "@/components/Navbar";
import React, { Suspense } from "react";
export default async function Page() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  console.log(data);
  return (
    <div className="w-full">
      <Navbar />
      <h1 className="text-center font-extrabold text-pink-800 my-5 text-3xl">
        Recipes Page
      </h1>
      <Suspense fallback={<p>loading recipe cards...</p>}>
        <div className="grid grid-cols-4 gap-10 m-10">
          {data.recipes.map((item) => (
            <Card key={item.id} cardData={item} /> // Added key attribute
          ))}
        </div>
      </Suspense>
    </div>
  );
}
